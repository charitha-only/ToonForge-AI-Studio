import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const required = [
  "SKILL.md",
  "agents/openai.yaml",
  "references/character-consistency.md",
  "references/scene-continuity.md",
  "references/prompting.md",
  "references/tool-adaptation.md",
  "references/episode-series.md",
  "references/quality-control.md",
  "references/production-layout.md",
  "references/production-templates.md",
  "references/story-development.md",
  "references/audio-post.md",
  "references/cinematic-editing.md",
  "references/real-media-production.md",
  "templates/character-packet.md",
  "templates/story-beat-sheet.md",
  "templates/storyboard-sheet.md",
  "templates/audio-cue-sheet.md",
  "templates/scene-shot-ledger.md",
  "CHANGELOG.md",
  "docs/DEVELOPMENT_ROADMAP.md",
  "docs/HANDOFF.md",
  "docs/PROVIDER_RESEARCH_V1.4.md",
];

const exampleRoot = "examples/the-little-lightkeeper";
const exampleRequired = [
  "README.md",
  "production-manifest.md",
  "story/synopsis.md",
  "story/screenplay.md",
  "characters/character-bible.md",
  "characters/reference-specifications.md",
  "storyboard/storyboard.md",
  "storyboard/shot-ledger.md",
  "prompts/image-prompts.md",
  "prompts/video-prompts.md",
  "audio/voice-and-dialogue.md",
  "audio/sound-design.md",
  "editing/edit-decision-list.md",
  "quality/quality-control-report.md",
  "quality/real-media-qc.md",
  "project.json",
  "assets/asset-manifest.json",
  "media-management/muse-manifest.json",
];

const errors = [];
for (const path of required) {
  if (!existsSync(join(root, path))) errors.push(`Missing required file: ${path}`);
}
for (const path of exampleRequired) {
  const fullPath = join(root, exampleRoot, path);
  if (!existsSync(fullPath)) errors.push(`Missing Little Lightkeeper example file: ${path}`);
}

const skillPath = join(root, "SKILL.md");
if (existsSync(skillPath)) {
  const skill = readFileSync(skillPath, "utf8");
  if (!/^---\r?\nname: toonforge-ai-studio\r?\ndescription: .+\r?\n[\s\S]*?\r?\n---/m.test(skill)) {
    errors.push("SKILL.md must begin with ToonForge Agent Skills frontmatter.");
  }

}

const yamlPath = join(root, "agents/openai.yaml");
if (existsSync(yamlPath)) {
  const yaml = readFileSync(yamlPath, "utf8");
  if (!/default_prompt:\s+"[^"\n]*\$toonforge-ai-studio[^"\n]*"/.test(yaml)) {
    errors.push("agents/openai.yaml default_prompt must mention $toonforge-ai-studio.");
  }
}

function filesUnder(directory) {
  return readdirSync(directory).flatMap((entry) => {
    if (entry === ".git") return [];
    const fullPath = join(directory, entry);
    return statSync(fullPath).isDirectory() ? filesUnder(fullPath) : [fullPath];
  });
}

const files = filesUnder(root);
for (const markdownPath of files.filter((path) => extname(path) === ".md")) {
  const markdown = readFileSync(markdownPath, "utf8");
  const links = [...markdown.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]);
  for (const link of links) {
    if (/^(?:https?:|mailto:|#)/.test(link)) continue;
    const cleanLink = link.split("#", 1)[0];
    const target = resolve(dirname(markdownPath), cleanLink);
    if (!target.startsWith(root) || !existsSync(target)) {
      errors.push(`Broken local link in ${markdownPath.replace(root + "/", "")}: ${link}`);
    }
  }
}

const ledgerPath = join(root, exampleRoot, "storyboard/shot-ledger.md");
if (existsSync(ledgerPath)) {
  const ledger = readFileSync(ledgerPath, "utf8");
  const durations = [...ledger.matchAll(/^\| `SH-\d{3}-\d{3}` \| (\d+\.\d) \|/gm)]
    .map((match) => Number(match[1]));
  const total = durations.reduce((sum, duration) => sum + duration, 0);
  if (durations.length !== 7 || total !== 45) {
    errors.push(`Little Lightkeeper shot durations must be seven entries totaling 45.0 seconds; found ${durations.length} totaling ${total}.`);
  }
}

const exampleText = exampleRequired
  .map((path) => join(root, exampleRoot, path))
  .filter(existsSync)
  .map((path) => readFileSync(path, "utf8"))
  .join("\n");
for (const id of ["CHR-ELIO-01", "CHR-GLIM-01", "LOC-MOONMOSS-01", "PROP-LANTERN-01"]) {
  if (!exampleText.includes(id)) errors.push(`Little Lightkeeper is missing required production ID: ${id}`);
}
for (const id of ["SH-010-010", "SH-010-020", "SH-010-030", "SH-020-010", "SH-020-020", "SH-030-010", "SH-030-020"]) {
  if (!exampleText.includes(id)) errors.push(`Little Lightkeeper is missing required shot ID: ${id}`);
}

const assetManifestPath = join(root, exampleRoot, "assets/asset-manifest.json");
if (existsSync(assetManifestPath)) {
  try {
    const manifest = JSON.parse(readFileSync(assetManifestPath, "utf8"));
    for (const asset of manifest.assets ?? []) {
      if (!asset.assetId || !asset.status) errors.push("Each asset-manifest record requires assetId and status.");
      if (asset.status === "PASS") {
        if (!asset.file || !existsSync(join(root, exampleRoot, asset.file))) errors.push(`${asset.assetId} is PASS but its file is missing.`);
      }
      if (asset.status === "NOT GENERATED" && asset.file) errors.push(`${asset.assetId} is NOT GENERATED but names a file.`);
    }
  } catch {
    errors.push("Little Lightkeeper asset manifest is not valid JSON.");
  }
}

if (errors.length) {
  console.error("Skill validation failed:\n" + errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`ToonForge skill validation passed (${files.length} files checked).`);
