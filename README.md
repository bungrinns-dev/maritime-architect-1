# Maritime Systems Architect

Cinematic personal branding website for a Naval Architect turned maritime systems builder.

## Preview Options

### Option 1: Open HTML Preview (No Build Required)
Open `preview.html` directly in your browser to see the visual design without any build step.

### Option 2: StackBlitz (Full Next.js Project)
1. Push this project to GitHub
2. Open: `https://stackblitz.com/github/YOUR_USERNAME/YOUR_REPO_NAME`
3. StackBlitz will automatically install dependencies and start dev server

### Option 3: Local Development
```bash
npm install
npm run dev
```

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- Three.js / React Three Fiber
- MDX for blog content

## Project Structure
```
app/
├── components/       # Reusable components (ScrollReveal, TiltCard3D, Scene3D, etc.)
├── chapters/         # Main page sections (Hero, Identity, Philosophy, Footer)
├── blog/            # MDX blog with posts
├── products/         # Product showcase (LAYAR, MarineOS)
├── case-studies/    # Deployment stories
├── contact/         # Strategic inquiry form
└── globals.css      # Design tokens and utilities
```

## Design System
- **Colors**: Abyss black, deep navy, tactical graphite, electric cyan, radar green
- **Typography**: Inter (body), JetBrains Mono (labels), Space Grotesk (display)
- **Motion**: Slow, heavy, atmospheric — like ocean currents
- **3D**: Floating particles, holographic grid, tilt cards

## Deployment
```bash
npm run build
vercel --prod
```
