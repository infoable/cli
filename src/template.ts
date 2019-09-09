import { writeFileSync, existsSync, readFileSync, mkdirSync } from "fs";
import { join } from "path";

const templates = join(__dirname, "/templates");

export function writeTemplate(
  file: string,
  to: string,
  variables: { [key: string]: any }
) {
  const path = join(templates, file);
  if (!existsSync(path)) throw new Error("Template file does not exist.");
  const ctx = readFileSync(path)
    .toString()
    .replace(/\${(.+?)}/g, (matched, p1: string) => {
      if (variables[p1]) return variables[p1];
      return matched;
    });
  writeFileSync(to, ctx);
}

export function makeDirectory(to: string) {
  mkdirSync(to);
}
