# Spoiler-Mindful TWI Wiki

A spoiler-safe companion for [The Wandering Inn](https://wanderinginn.com/) — one of the longest web novels ever written. Select the chapter you're currently reading and get information scoped to what you've already seen, with no spoilers beyond your progress.

Live at: https://tommysengheng.github.io/spoiler-mindful-TWI/

## Stack

- **Vite + React + TypeScript**
- **MUI v9** (`@mui/material`) with Emotion for styling
- **Zustand** for persisted client state (selected chapter)
- **GitHub Pages** for hosting (`yarn deploy`)

## Development

```bash
yarn dev          # start dev server
yarn build        # type-check + Vite build (output: dist/)
yarn lint         # ESLint
yarn preview      # preview production build locally
yarn deploy       # build and publish to GitHub Pages
```

## Data

Chapter data lives in `src/data/chapters.ts` as a static `CHAPTER_DATA` array scraped from the TWI table of contents. To update it, re-run the JS snippet at the top of that file against the table of contents page and replace the array.
