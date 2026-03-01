import { rm } from "node:fs/promises";
import { execSync } from "node:child_process";

// Clear .docusaurus/ and build/ directories
execSync("yarn clear", { stdio: "inherit" });

// Remove node_modules for a fresh install
await rm("node_modules", { recursive: true, force: true });
