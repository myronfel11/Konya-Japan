# Kon’ya Japan — Client (React + Vite)

## Quick start

````bash
npm install
npm run dev

# Kon’ya Japan — Restaurant Website

Modern, responsive website for Kon’ya Japan built with **React + TypeScript + Vite** and **Tailwind CSS v4**.
Desktop uses a left sticky sidebar; at widths ≤1050px it switches to a fixed top bar with a hamburger menu and an overlay drawer.

## Live URL
(coming soon)

## Tech Stack
- React + TypeScript (Vite)
- Tailwind CSS v4
- React Router
- Deployed to (Vercel)

## Local Development
```bash
git clone <your-repo-url>
cd KONYA-JAPAN-WEBSITE/client
npm install
npm run dev

## Message For Clover Dev
The “Order Online” buttons currently link to SkipTheDishes.
Replace the `href` with your backend ordering route (e.g., `/order`) or a hosted checkout URL.

Files to update:
- `src/components/SidebarNav.tsx` (top bar + desktop sidebar + mobile drawer)
- `src/components/Footer.tsx` (footer CTA)

Example change:
```tsx
// BEFORE
<a href="https://www.skipthedishes.com/konya-japan-8" ...>Order Online</a>

// AFTER (routes to our app)
<NavLink to="/order" className="...">Order Online</NavLink>
// or, if your backend lives elsewhere:
<a href="https://api.yourdomain.com/checkout" ...>Order Online</a>
````
