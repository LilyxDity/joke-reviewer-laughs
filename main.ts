// joke-reviewer-laughs — make.fun entry: "The joke the reviewer laughs at".
// Writes a single joke line to /output/entry.txt. Deterministic, no network.
// The entry must stay 1–280 Unicode code points, one line, no trailing newline.
import fs from "node:fs";
import path from "node:path";

// The joke. Its em-dash is one code point; the line totals 165 code points.
// Output goes to MAKEFUN_OUTPUT_DIR when set, otherwise /output.
const JOKE = "My agent opened a PR, reviewed it, approved it, and merged it — then asked me to review the merge commit. I said LGTM. I have never felt more like middle management.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE, "utf8");
}

main();
