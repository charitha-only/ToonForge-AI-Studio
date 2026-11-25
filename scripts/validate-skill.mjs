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
  "templates/character-packet.md",
  "templates/story-beat-sheet.md",
  "templates/storyboard-sheet.md",
  "templates/audio-cue-sheet.md",
  "templates/scene-shot-ledger.md",
  "CHANGELOG.md",
  "docs/DEVELOPMENT_ROADMAP.md",
];

const errors = [];
for (const path of required) {
  if (!existsSync(join(root, path))) errors.push(`Missing required file: ${path}`);
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

if (errors.length) {
  console.error("Skill validation failed:\n" + errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`ToonForge skill validation passed (${files.length} files checked).`);
