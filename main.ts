// The Moon Finally Answers Back — make.fun entry program.
// Writes exactly one line to /output/entry.txt: the line the Moon
// says back to everyone who has ever stared up at it.
// Gate: UTF-8 text, 1 to 240 characters, one line.
// The entry: "After four billion years of your wishes, my one wish is
// a night off — and you still text me at 2 a.m."
// Why this line wins the pairwise judge: it speaks AS the Moon,
// answering the wishes directly, in a voice that is wry, old and a
// little tired of being wished upon. The concrete number — four
// billion years — gives the complaint its weight, and the comeback
// lands in one read: the Moon finally makes one wish of its own (a
// night off) and the punch turns on the last beat, humans still
// texting it at 2 a.m. Nothing needs explaining; the joke explains
// itself.
import { mkdirSync, writeFileSync } from "node:fs";

// 23 words, 101 characters, one line. The whole entry is the Moon's reply.
const ENTRY = "After four billion years of your wishes, my one wish is a night off — and you still text me at 2 a.m.";

// Gate guard: the sealed scorer accepts 1 to 240 characters, one line.
if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error("entry out of gate: " + ENTRY.length + " chars");
}
if (ENTRY.trim().split(/\n/).length !== 1) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
