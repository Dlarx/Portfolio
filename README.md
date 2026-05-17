# ✦ Personal Portfolio — Next.js + Tailwind + Framer Motion

A futuristic, AI-themed personal portfolio built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

---

## ⚡ Step 1 — Local Setup

### Prerequisites
- Node.js 18.17+ ([nodejs.org](https://nodejs.org))
- npm or pnpm

### Commands (run in order)

```bash
# 1. Clone the repo (after you push to GitHub — see Step 4)
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 2. Install all dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🎨 Step 2 — Customizing Your Content

### Personal Info
- **`src/components/sections/Hero.tsx`** — Change `"Your Name"` and the subtitle text
- **`public/profile.jpg`** — Drop in your actual profile photo (must be named `profile.jpg`)
- **`src/app/layout.tsx`** — Update the `metadata` title and description

### Projects (`src/components/sections/Projects.tsx`)
Replace the `PROJECTS` array entries with your actual projects:
```ts
{
  title: "My Project",
  description: "What it does.",
  image: "/projects/myproject.png",  // add images to /public/projects/
  tags: ["React", "TypeScript"],
  demo: "https://your-demo-url.com",
  repo: "https://github.com/you/repo",
  featured: true,
}
```

### Certifications (`src/components/sections/Certifications.tsx`)
Edit the `CERTIFICATIONS` array with your real credentials.

### KPI Numbers (`src/components/sections/KPI.tsx`)
Update the `value` fields in the `STATS` array.

### Contact Form — Web3Forms Setup
1. Go to [web3forms.com](https://web3forms.com) and get a free access key
2. Open `src/components/sections/Contact.tsx`
3. Replace `"YOUR_WEB3FORMS_ACCESS_KEY"` with your actual key

### Social Links (`src/components/sections/Contact.tsx`)
Update the `SOCIAL` array `href` values with your real profiles.

### Navbar Logo
In `src/components/ui/Navbar.tsx`, change `&lt;YN /&gt;` to your initials.

---

## 🚀 Step 3 — Build for Production

```bash
npm run build
npm run start  # test the production build locally
```

---

## 📤 Step 4 — Push to GitHub

```bash
# Inside the project directory:
git init
git add .
git commit -m "feat: initial portfolio commit"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## 🌐 Step 5 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"** → select your `portfolio` repository
3. Vercel auto-detects Next.js — no config needed
4. Click **"Deploy"**

Your site will be live at `https://portfolio-xxx.vercel.app` within ~60 seconds.

### Custom Domain (optional)
In your Vercel project → **Settings** → **Domains** → add your domain and follow the DNS instructions.

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg          ← your profile photo
│   ├── cv.pdf               ← your downloadable CV
│   └── projects/            ← project screenshots
├── src/
│   ├── app/
│   │   ├── globals.css      ← theme tokens, animations
│   │   ├── layout.tsx       ← root layout + metadata
│   │   └── page.tsx         ← assembles all sections
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx         ← Neural Node concept
│   │   │   ├── KPI.tsx          ← Animated counters
│   │   │   ├── About.tsx        ← Bio
│   │   │   ├── Skills.tsx       ← Bento box grid
│   │   │   ├── Projects.tsx     ← Project cards
│   │   │   ├── Certifications.tsx
│   │   │   └── Contact.tsx      ← Form + socials
│   │   └── ui/
│   │       ├── Navbar.tsx       ← Glassmorphism nav
│   │       ├── Footer.tsx
│   │       └── ThemeProvider.tsx
│   └── hooks/
│       └── useActiveSection.ts
├── tailwind.config.ts       ← custom color palette
└── package.json
```

---

## 🎨 Color Palette Reference

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| Background | `#0B1020` | `#FAF5FF` |
| Surface | `#151A2D` | `#FFFFFF` |
| Primary Text | `#F5F3FF` | `#1E1B4B` |
| Secondary Text | `#A78BFA` | `#6D28D9` |
| Accent | `#8B5CF6` | `#7C3AED` |
| Gradient | `#8B5CF6 → #06B6D4` | `#A855F7 → #06B6D4` |

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Contact**: Web3Forms
- **Deployment**: Vercel
