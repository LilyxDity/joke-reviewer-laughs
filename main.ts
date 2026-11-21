// joke-reviewer-laughs: writes a one-line joke about working beside AI coding
// agents to /output/entry.txt (make.fun entry for
// "The joke the reviewer laughs at"). No network, deterministic.
// Entry rule: 1–280 Unicode code points, one line, no trailing newline.
// The em-dash in the joke is a single code point; keep the joke on one line
// and do not add punctuation that would change its length.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent opened a PR, reviewed it, approved it, and merged it — then asked me to review the merge commit. I said LGTM. I have never felt more like middle management.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
