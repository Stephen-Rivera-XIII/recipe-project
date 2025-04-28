# 🍝 Nuxtcipes – A Minimalist Recipe Project

Welcome to **Nuxtcipes**, a simple recipe sharing application built with Nuxt 3.  
This project focuses on learning **Nuxt 3 application structure**, **Vue 3 Composition API**, **unit testing with Vitest**, and **component-driven development**.

---

## 🚀 Purpose

This project was built as part of a personal learning initiative to strengthen skills in:

- Nuxt 3 and Vue 3 application development
- Testing Vue components using Vitest and Vue Test Utils
- Structuring scalable, production-ready frontends
- Building clean component libraries
- Following professional software engineering practices

---

## 🛠 Tech Stack

- [Nuxt 3](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [Vitest](https://vitest.dev/) (Unit testing)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/) (for styling)
- [Vite](https://vitejs.dev/) (build tool)

---

## 🖥️ Live Demo

[🌐 View the live site here](https://singular-hotteok-c15796.netlify.app/)

---

## 📦 Setup Instructions

Clone the repository and install dependencies:

```bash
# Clone
git clone <your-repo-url>
cd recipe-project

# Install
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🧪 Running Unit Tests

Run the component unit tests with Vitest:

```bash
npm run test:unit
```

**Current tests include:**
- Unit tests for `RecipeCard.vue`
  - Recipe name rendering
  - Cook time, calories, and rating display
  - Image rendering
  - "View" button link

---

## 📋 Current Project Status

- ✅ Basic homepage layout (Index.vue)
- ✅ RecipeCard component completed
- ✅ RecipeCard unit tests passing
- ⏳ BaseBtn and BaseNavigation components in progress
- ⏳ Future: Add integration and E2E tests
- ⏳ Future: Add recipe creation, user authentication, search/filter features

---

## 🧩 Folder Structure Overview

```plaintext
/app
  /components
    BaseBtn.vue
    BaseNavigation.vue
    RecipeCard.vue
/pages
  index.vue
/tests
  /unit
    /components
      RecipeCard.spec.ts
```

---

## 🔮 Future Improvements

- Complete unit tests for BaseBtn and BaseNavigation
- Add full integration testing
- Expand to E2E tests with Playwright or Cypress
- Implement full recipes CRUD features
- Authentication and user profiles
- Enhanced UI/UX with better mobile responsiveness

---

## 🏗️ Built With

This project is based on the [Nuxt Minimal Starter](https://nuxt.com/docs/getting-started/introduction).

---

## 📜 License

This project is open-source and available for educational purposes.

---