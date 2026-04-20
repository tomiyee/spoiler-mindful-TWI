# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # start dev server
yarn build        # type-check + Vite build (output: dist/)
yarn lint         # ESLint
yarn preview      # preview production build locally
yarn deploy       # build and publish to GitHub Pages via gh-pages
```

No test suite is configured.

## Architecture

This is a Vite + React + TypeScript single-page app. UI components use MUI v9 (`@mui/material`) with Emotion for styling.

**Data flow:** `src/data/chapters.ts` exports `CHAPTER_DATA`, a static array of `ChapterData` objects (see `src/types.ts`) scraped from The Wandering Inn table of contents. Components consume this directly — there is no server or state management layer.

**Layout:** `src/App.tsx` renders a full-width MUI `AppBar` navbar (uses viewport-escape `sx` trick to break out of the `#root` max-width container) with `ChapterSelector` in the top-right. The `#root` element in `src/index.css` is centered at `1126px` max-width with border — any new full-bleed elements need the same escape treatment (`left: 50%, ml: -50vw, width: 100vw`).

**Chapter data updates:** Re-run the JS snippet at the top of `src/data/chapters.ts` against the TWI table of contents page and replace the array.
