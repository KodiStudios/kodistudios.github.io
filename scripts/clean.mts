import { existsSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";

// Clear .docusaurus/ and build/ directories (requires node_modules)
if (existsSync("node_modules")) {
  execSync("yarn clear:docu", { stdio: "inherit" });
}

// Remove node_modules for a fresh install
rmSync("node_modules", { recursive: true, force: true });
