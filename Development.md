# Development Notes

## Clean Script

Run `yarn clean` to reset the project to a fresh state. This removes:

- `.docusaurus/` and `build/` (Docusaurus cache and build output)
- `node_modules/` (all installed dependencies)

After cleaning, run `yarn install` to reinstall dependencies.

### Why not `git clean -xdf`?

The `git clean` command with `-xdf` flags is a common "nuclear option" for
resetting a repository, but it's dangerously aggressive:

| Flag | Effect                                     |
| ---- | ------------------------------------------ |
| `-f` | Force deletion (required by git)           |
| `-d` | Delete untracked **directories**           |
| `-x` | Delete files **ignored by .gitignore** too |

The `-x` flag is the dangerous one. `.gitignore` exists to protect local-only
files from being committed, but `-x` treats that protection as a target list. It
will delete:

- **`.env` files** containing API keys, secrets, or local configuration
- **IDE settings** not checked into git (e.g., `.idea/`)
- **Any local notes or scratch files** you've added to `.gitignore`

These files are not tracked by git, so there is **no way to recover them** after
deletion — they're gone permanently.

Our `yarn clean` script (`scripts/clean.mts`) only removes the specific
directories that actually need resetting, leaving your local files safe.

### Implementation notes

- **`yarn clean`** — the normal way to run the script. This works when
  `node_modules/` is present and calls `docusaurus clear` to clean its caches.
- **`node scripts/clean.mts`** — use this if `node_modules/` is already missing.
  Yarn cannot execute any scripts without its install state, so `yarn clean`
  will fail in that case. Running with `node` directly works because the script
  has no npm dependencies — only Node.js 24 built-in modules (`node:fs` and
  `node:child_process`).
