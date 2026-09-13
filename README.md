# Dev Stack

Dev Stack is a small React app for exploring common development tools and putting together a personal technology stack. The idea is simple: look through the cards, compare the options, and keep the tools that make sense for the project in front of you.

## Built with

- React and TypeScript
- Vite
- Tailwind CSS and DaisyUI
- React Toastify
- JSON data for the technology catalogue

## Features

- Browse 13 technologies across frontend, backend, database, language, styling, DevOps, and tools categories.
- Add technologies to a personal “Your Stack” panel, remove individual items, or clear the whole list.
- See useful details on every card, including the category, difficulty, rating, badge, and a short description.
- Get a small notification whenever an item is added, removed, or already exists in the stack.
- Use the layout comfortably on mobile, tablet, and desktop screens.

## Run the project locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## React questions

### 1. What is JSX, and why is it used in React?

JSX lets me write HTML-like markup inside JavaScript or TypeScript. It makes the structure of a component easier to read, and React turns it into the JavaScript it needs to render the page.

### 2. What is the difference between props and state?

Props are values a parent passes to a child, so the child can use them but should not change them. State belongs to a component and can change while the user interacts with the page.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` gives a component a value and a way to update it. I used it for the technology list, the loading flag, the selected stack, and the mobile menu in the navbar.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after a component renders. I used it to fetch `technologies.json` once when the technologies section loads, then store the returned data in state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The key helps React tell one list item from another. With a stable key such as `tech.id`, React can update only the item that changed instead of guessing based on its position.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different markup based on a condition. The technologies section shows a loading spinner before the JSON arrives, and the Your Stack panel shows a different empty state when no item has been selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent passes data and callback functions as props. In this project, `Technologies` passes a technology and `onAdd` to `TechCard`; when the button is clicked, `TechCard` calls `onAdd`, and the parent updates the selected stack.
