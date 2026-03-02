// https://prettier.io/docs/en/configuration

/** @type {import('prettier').Config} */
export default {
  // proseWrap controls how Prettier handles line wrapping in prose-oriented
  // files like .md and .mdx. It does NOT affect code files (.ts, .js, etc.) —
  // those are always wrapped at printWidth using AST-aware line breaking.
  //
  // By default, Prettier sets proseWrap to "preserve", leaving long lines
  // as-is. This is because reflowing prose can produce noisy diffs, and some
  // tools treat line breaks in Markdown specially.
  //
  // We set it to "always" because:
  // - Docusaurus (and standard Markdown) treats single newlines within a
  //   paragraph as spaces, so hard wrapping doesn't change rendered output.
  // - It keeps .md source files readable without horizontal scrolling.
  // - After the initial reformat, diffs stay clean and focused on actual
  //   content changes.
  proseWrap: "always",
};
