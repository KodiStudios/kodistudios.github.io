# Claude Code Instructions

## Package Manager

Use `yarn` for all commands in this repo (not npm or npx).

- Install dependencies: `yarn install`
- Build: `yarn build`
- Dev server: `yarn start`
- Serve built site: `yarn serve`

## Known Constraints

- **Do NOT add `"type": "module"` to package.json.** Docusaurus 3.x uses webpack
  internally which relies on CommonJS `require` semantics. Adding
  `"type": "module"` causes `require.resolveWeak is not a function` errors
  during build. Use `.mjs` extensions for config files that need ESM syntax
  instead (e.g., `eslint.config.mjs`). Revisit when upgrading to a Docusaurus
  version with full ESM support.
