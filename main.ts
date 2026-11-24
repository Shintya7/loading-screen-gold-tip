// Loading Screen Gold: A Tip in 200 Characters — u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
// Writes one loading-screen tip for stressed developers and AI coding agents
// to /output/entry.txt (or $OUTPUT_PATH when set). No trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Tip: before deleting the function, ask your agent what it does \u2014 if neither of you knows, that's your answer.";

// Gate: 1-200 chars, single line, no control chars, non-whitespace,
// contains at least one letter. Throws on any violation.
function checkLength(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${line.length}`);
  }
}

function checkSingleLine(line: string): void {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

function checkNoControlChars(line: string): void {
  if (/[\u0000-\u001f\u007f]/.test(line)) {
    throw new Error("line must not contain control characters");
  }
}

function checkNonWhitespace(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
}

function checkHasLetters(line: string): void {
  if (!/[A-Za-z]/.test(line)) {
    throw new Error("line must contain letters");
  }
}

function validateLine(line: string): void {
  checkLength(line);
  checkSingleLine(line);
  checkNoControlChars(line);
  checkNonWhitespace(line);
  checkHasLetters(line);
}

function main(): void {
  validateLine(LINE);
  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
}

main();
