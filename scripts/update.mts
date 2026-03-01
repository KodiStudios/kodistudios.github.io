import { execSync } from "node:child_process";

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
  "prettier@latest",
  "typescript@latest",
  "eslint@latest",
  "@eslint/js@latest",
  "typescript-eslint@latest",
  "eslint-plugin-react-hooks@latest",
  "eslint-config-prettier@latest",
  "globals@latest",
]);

// Update browserslist database
execSync("yarn dlx update-browserslist-db@latest", { stdio: "inherit" });
