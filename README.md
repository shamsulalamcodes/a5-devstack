<div align="center">

# 🧱 Dev Stack

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**[🌐 Live Demo](https://b14-a5-shamsulalamcodes.netlify.app/)**

</div>

---

## 📌 Description

**Dev Stack** is a React + TypeScript app for exploring modern web technologies and building a personal tech stack. It lists 15 technologies — spanning Frontend, Backend, Database, Language, Styling, DevOps, and Tools — loaded from a local JSON file. Each technology is shown as a card, and clicking **Add to Stack** moves it into a live "Your Stack" sidebar, where it can be removed one at a time or all at once, with toast notifications confirming every action.

---

## 🛠️ Technology Used

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4 + DaisyUI**
- **react-toastify**
- **JSON** (local data source)

---

## ✨ Features

1. **🃏 Data-driven technology grid** — 15 technologies load from `public/data.json` (never hardcoded) into a responsive card grid, each showing an icon, badge, category, difficulty, and star rating.
2. **🧰 Live "Your Stack" sidebar** — a sticky panel tracks everything added, shows a live count, and disables/marks a card's button once it's added so it can't be added twice. Items can be removed individually or all at once, each action confirmed with a toast.
3. **📱 Sticky, responsive navbar** — stays pinned while scrolling, and collapses into a mobile hamburger drawer built with a pure CSS checkbox toggle, no extra JavaScript state required.

---

## 🧠 React Questions

**1. What is JSX, and why is it used in React?**
JSX lets you write HTML-like markup right inside JavaScript or TypeScript. 

**2. What is the difference between props and state?**
Props - are values passed into a component from its parent, and the component can nit change them itself. 
State is data, a component owns and manages internally. Updating it, causes the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` gives a component a piece of memory it can read and update. I used it to store `selectedStacks` (the list of technologies added to the stack) and `clicked` (whether an individual card has already been added or not).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs a side effect after render, whenever something in its dependency array changes. In this project, I actually didn't use `useEffect` to load the JSON — instead I used React's newer `use()` hook together with `Suspense`, that unwraps the fetch promise directly and shows a fallback loading spinner while it resolves. I used `useEffect` elsewhere. On each technology card, to reset its "added" state back to false if that technology gets removed from the stack (like "Remove All").

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React to identify items in a list apart between renders, so it only updates the specific items that changed instead of re-rendering the whole component.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI depending on a certain condition. I used it in the stack sidebar: if there are no selected technologies, it shows an empty-state message ("Your Stack is empty"); otherwise, it renders the list of added items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data flows downwards through props — the parent passes values directly as attributes on the child component. To send something back up, the parent also passes down its state-setter function as a prop, and the child calls that setter function whenever it needs the parent's state to change.

---

<div align="center">

Made by [Shamsul Alam](https://github.com/shamsulalamcodes)

</div>