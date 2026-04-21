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

This is a Vite + React + TypeScript single-page app. UI components use MUI v9 (`@mui/material`) with Emotion for styling. Routing uses `react-router-dom`. State persistence uses Zustand with the `persist` middleware (stored in `localStorage` under key `"persisted-state"`).

**Routes:** `src/App.tsx` defines three routes via React Router — `/` (HomePage), `/skills` (SkillsPage), `/classes` (ClassesPage). `SkillsPage` and `ClassesPage` are lazy-loaded chunks.

**Data flow:** Static data lives in `src/data/`:
- `chapters.ts` — `CHAPTER_DATA`: `ChapterData[]` scraped from the TWI table of contents
- `volumes.ts` — `Volume` union type used as `volumeId`
- `skills.ts` — `SKILL_DATA`: `SkillData[]` with `introducedAtChapterIndex` for spoiler filtering
- `classes.ts` — `CLASS_DATA`: `ClassData[]` with `introducedAtChapterIndex`

**Spoiler filtering:** `useSelectedChapter` (wraps `usePersistedState`) stores the user's selected chapter. Pages filter their data by `introducedAtChapterIndex <= selectedChapter.chapterIndex`.

**Layout:** `src/components/NavBar.tsx` renders a full-width MUI `AppBar` (viewport-escape `sx` trick: `left: 50%, ml: -50vw, width: 100vw`) containing nav links and a lazy-loaded `ChapterSelector` autocomplete (300px wide). The `#root` element in `src/index.css` is centered at `1126px` max-width — any new full-bleed elements need the same escape treatment.

**Chapter data updates:** Re-run the JS snippet at the top of `src/data/chapters.ts` against the TWI table of contents page and replace the array.
