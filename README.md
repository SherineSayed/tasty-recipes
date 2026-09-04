# Tasty Recipes

A beginner React practice project — a recipe website built with plain JSX,
components, props, `map()`, and conditional rendering (no `useState`, no forms,
no APIs, no React Router).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local address Vite prints in your terminal (usually
`http://localhost:5173`).

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── RecipeList.jsx
│   ├── RecipeCard.jsx
│   └── Footer.jsx
├── data.js
├── App.jsx
├── main.jsx
└── App.css
```

## What it covers

- JSX, arrow-function components, `className`
- Props passed from `RecipeList` → `RecipeCard`
- An array of recipe objects rendered with `.map()`, each with a unique `key`
- Conditional rendering for the "🔥 Popular" badge
- An `onClick` event handler that shows an alert with the recipe name
- Responsive CSS (no framework) with a hover effect on the cards

## Notes

- Recipe photos are pulled from a placeholder image service
  (`picsum.photos`) so the site looks complete right away — swap the
  `image` values in `src/data.js` for your own photos whenever you like.
- No state is used anywhere, on purpose, to match the project brief.
