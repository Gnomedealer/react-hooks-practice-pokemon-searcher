# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Two servers must run concurrently in separate terminals:

```bash
npm run server   # json-server on http://localhost:3001 (mock REST API)
npm start        # React app on http://localhost:3000
```

There is no test suite configured in this project.

## Architecture

This is a Create React App project (React 17) using Semantic UI React for UI components and `json-server` as a local REST API backed by `db.json`.

**Component hierarchy and data flow:**

- `App` → `PokemonPage` (single child, no props passed)
- `PokemonPage` owns all shared state:
  - `pokemon[]` — full list fetched from `GET http://localhost:3001/pokemon` on mount
  - `search` — string used to filter the list client-side
  - Derived `pokemonDisplay` (filtered array) is passed down to `PokemonCollection`
- `PokemonForm` POSTs new pokemon to the API and calls the `onAddPokemon` callback with the response, which appends it to state in `PokemonPage`
- `Search` receives `setSearch` directly and calls it on every keystroke — no intermediate handler
- `PokemonCard` holds its own local `frontFlip` boolean state to toggle between `sprites.front` and `sprites.back` on click

**Pokemon data shape** (from `db.json`):
```json
{ "id": 2, "name": "ivysaur", "hp": 60, "sprites": { "front": "...", "back": "..." } }
```

## Known Issues

- `PokemonForm` has a field name mismatch: the `<Form.Input>` elements use `name="frontUrl"` / `name="backUrl"` but the state object uses keys `urlFront` / `urlBack`, so those inputs do not update state correctly.
- `PokemonCollection` passes a redundant `poke={pokemane.id}` prop to `PokemonCard`; `PokemonCard` only destructures `pokemon`.
- `PokemonForm.handleSubmit` is missing `event.preventDefault()`, which can cause a page reload on submit.
