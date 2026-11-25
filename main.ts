// Worst Monday One-Liners — u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28
// Writes exactly one funny line (<=140 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday: my deploy failed, my inbox hit 400 unread, and stand-up asked what I shipped over the weekend. I shipped a scream.";

// The gate only accepts 1–140 characters of non-blank UTF-8 text;
// fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
