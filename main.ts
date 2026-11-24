// Warning Label for Humans: One Line, Big Laugh
// Writes one single-line safety warning label (<=160 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "CAUTION: Contents are 70% water, 20% caffeine, and 10% pretending to have read the terms and conditions.";

// Gate self-check: the sealed scorer requires 1-160 UTF-8 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
if (LABEL.length < 1 || LABEL.length > 160 || LABEL.trim().length === 0) {
  throw new Error(`Label fails the 1-160 character gate (${LABEL.length} chars)`);
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");
console.log(`Wrote ${LABEL.length} characters to ${join(outDir, "entry.txt")}`);
