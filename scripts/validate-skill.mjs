import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

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

  const links = [...skill.matchAll(/\]\((references\/[^)]+)\)/g)].map((match) => match[1]);
  for (const link of links) {
    const target = resolve(dirname(skillPath), link);
    if (!target.startsWith(root) || !existsSync(target)) errors.push(`Broken reference link: ${link}`);
  }
}

const yamlPath = join(root, "agents/openai.yaml");
if (existsSync(yamlPath)) {
  const yaml = readFileSync(yamlPath, "utf8");
  if (!/default_prompt:\s+"[^"\n]*\$toonforge-ai-studio[^"\n]*"/.test(yaml)) {
    errors.push("agents/openai.yaml default_prompt must mention $toonforge-ai-studio.");
  }
}

function countFiles(directory) {
  return readdirSync(directory).reduce((total, entry) => {
    const fullPath = join(directory, entry);
    return total + (statSync(fullPath).isDirectory() ? countFiles(fullPath) : 1);
  }, 0);
}

if (errors.length) {
  console.error("Skill validation failed:\n" + errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`ToonForge skill validation passed (${countFiles(root)} files checked).`);
