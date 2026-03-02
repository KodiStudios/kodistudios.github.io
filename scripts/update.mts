import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

// Update Yarn itself first, so subsequent yarn commands use the latest version.
// This is safe: corepack downloads the new Yarn binary, but the currently running
// node process (not Yarn) executes this script. The new Yarn takes effect on the
// next invocation (i.e., the yarn up calls below).
execSync("corepack use yarn@latest", { stdio: "inherit" });
const pkg = JSON.parse(readFileSync("package.json", "utf-8"));
pkg.packageManager = pkg.packageManager.split("+")[0];
writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");

function execYarnUp(packages: string[]) {
  execSync(`yarn up ${packages.join(" ")}`, { stdio: "inherit" });
}

// Packages with @latest update both package.json and yarn.lock.
// Packages pinned to a major version (e.g. @^18) only update yarn.lock,
// since the range in package.json (e.g. "^18") already covers the latest minor/patch.

// Update Docusaurus and core deps
execYarnUp([
  "@docusaurus/*@latest",
  "@mdx-js/react@latest",
  "clsx@latest",
  "prism-react-renderer@latest",
  "react@^18",
  "react-dom@^18",
]);

// Update type definitions
execYarnUp(["@types/node@^24", "@types/react@^18", "@types/react-dom@^18"]);

// Update dev tooling
execYarnUp([
  "@eslint/js@latest",
  "eslint@latest",
  "eslint-config-prettier@latest",
  "eslint-plugin-react-hooks@latest",
  "globals@latest",
  "prettier@latest",
  "typescript@latest",
  "typescript-eslint@latest",
]);

// The "browserslist" field in package.json uses queries like ">0.5%" to define
// which browsers we support. These queries run against a local database of browser
// usage statistics (the "caniuse-lite" package inside node_modules/). This command
// refreshes that database so the queries reflect current market share data.
execSync("yarn dlx update-browserslist-db@latest", { stdio: "inherit" });
