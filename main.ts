import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "When I was broke and ashamed, my father told me to tell the truth early because lies charge interest, and I have paid less ever since.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
