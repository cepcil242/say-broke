// Say What Actually Broke — entry for make.fun competition
// u-po-pu-say-what-actually-broke-a2c153b5
//
// main.ts (Node 22, standard library only, no network) writes one line of
// software error copy — at most 200 Unicode characters — that tells the user
// the brutal truth about what went wrong and makes them laugh, to
// /output/entry.txt (or $ENTRY_OUTPUT_PATH when set).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "We lost your changes: the server ran out of memory halfway through saving, so it panicked and took your work down with it.";

// The gate: the sealed scorer checks that /output/entry.txt is UTF-8 text
// of 1 to 200 characters, not only white space, on a single line. Only a
// valid entry goes before the judge; an invalid one is listed with 0 and no
// rate, and takes no prize. So validate before writing anything: reject
// empty/whitespace-only text, multi-line text, and text outside 1–200
// characters by throwing, which exits 1 and writes nothing.
export function validateEntry(text: string): number {
  if (text.trim().length === 0) {
    throw new Error("entry text must not be empty or whitespace-only");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry text must be a single line");
  }
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry text must be 1-200 characters, got ${chars}`);
  }
  return chars;
}

function main(): void {
  const text = ENTRY;
  validateEntry(text);

  const out = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, text, "utf8");
}

main();
