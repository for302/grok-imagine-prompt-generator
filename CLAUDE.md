# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with dark mode
- **State Management**: Zustand with localStorage persistence
- **Language**: TypeScript

## Project Structure

```
app/                    # Next.js App Router
components/
  layout/               # Header, InfoModal
  panels/               # Panel1-4 components
  ui/                   # Reusable UI components
data/
  categories/           # 6 prompt categories with 500+ options
  presets/              # 30 video + 10 image preset combinations
store/                  # Zustand store (promptStore.ts)
lib/                    # promptBuilder logic
hooks/                  # useClipboard, etc.
types/                  # TypeScript definitions
```

## Architecture

### 4-Panel Layout
- **Panel 1**: Preset gallery (image/video toggle, favorites)
- **Panel 2**: Element selection (accordion categories)
- **Panel 3**: English prompt output
- **Panel 4**: Korean prompt output

### Prompt Categories
1. Scene Type (장면 유형) - 7 subcategories
2. Camera (카메라) - Angles, lens, movements (movements are video-only)
3. Subject & Expression (주체 & 표정) - Age, gender, species, expressions
4. Lighting & Atmosphere (조명 & 분위기) - Lighting styles, effects
5. Voice & Dialogue (음성 & 대사) - Video-only category
6. Technical/Restrictions (기술적/제한) - Quality specs

### Key Behaviors
- Mode toggle filters presets and hides video-only options in image mode
- Selecting preset loads all associated options
- Modified selections trigger confirmation before switching presets
- Favorites persist in localStorage
- Accordion: expand one = collapse others
- Prompt length indicator (400-700 chars optimal)

## Language

- UI: Korean
- Data format: `{ english: "...", korean: "...", description: "..." }`
