# Personal Portfolio — React

A responsive personal portfolio built with **React**, **Tailwind CSS**, and **Vite**. Built as the final task of a front-end development internship, pulling together HTML5, CSS3, JavaScript, React components, and a deployed, git-tracked project.

**Live demo:** _add your deployed link here_
**Repo:** _add your GitHub link here_

## ✨ Features

- Fully responsive (mobile, tablet, desktop)
- Dark / light mode with saved preference (`localStorage`)
- Smooth-scrolling single-page navigation with active-section highlighting
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Animated skill bars, a filterable projects grid, and a validated contact form — all driven by React state
- Componentized structure with props-driven, reusable pieces
- No UI framework beyond Tailwind — every icon is a hand-written inline SVG, no icon library required

## 🧱 Tech stack

HTML5 · CSS3 · Tailwind CSS · JavaScript (ES6+) · React.js · Vite · Git & GitHub · Netlify / Vercel

## 📁 Project structure

```
src/
  components/       # Navbar, Hero, About, Skills, Projects, Timeline, Contact, Footer, etc.
  data/
    portfolioData.js  # ← ALL your content lives here (name, bio, skills, projects, timeline, contact)
  hooks/            # useTheme, useReveal, useActiveSection
  index.css         # Tailwind directives + design tokens
  App.jsx
  main.jsx
tailwind.config.js  # color palette, fonts, animations
```

## ✍️ Make it yours

Almost everything on the page is pulled from **`src/data/portfolioData.js`**. Open that file and edit:

- `profile` — your name, role list, intro, email, phone, social links, resume link
- `about` — bio paragraphs and quick facts
- `skills` — skill groups and proficiency percentages
- `projects` — your project cards (name, description, tech stack, GitHub/demo links)
- `timeline` — education, certifications, internships, achievements
- `contact` — the intro copy above the contact form

To add a profile photo: drop an image into `public/` (e.g. `public/avatar.jpg`) and set `profile.avatar = "/avatar.jpg"`.

The contact form currently **simulates** sending (no backend is wired up). To make it actually deliver messages, connect a form service such as [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) inside `handleSubmit` in `src/components/Contact.jsx`.

## 🚀 Run it locally

```bash
npm install
npm run dev       # starts a local dev server, usually at http://localhost:5173
```

Build for production:

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## 🌐 Deploy

### Deploy to Vercel
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), **New Project**, and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.

### Deploy to Netlify
1. Push this project to a GitHub repository.
2. Go to [netlify.com](https://netlify.com), **Add new site → Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy site**.

## 📦 Push to GitHub (if you haven't already)

```bash
git init
git add .
git commit -m "feat: initial portfolio build"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 📄 License

Free to use and adapt for your own portfolio.
