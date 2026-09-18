# Rassel A Sadat — Developer Portfolio

A modern, high-performance personal engineering portfolio built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion. Features a dark-mode cyber aesthetic, interactive 3D particle cloud, project case studies, and a direct inquiry pipeline.

## Tech Stack & Libraries
- **Core Framework:** Next.js 16.2.10 (App Router)
- **UI Runtime:** React 19.2.4
- **Styling:** Tailwind CSS v4 with custom dark mode theme & CSS variables
- **Animations:** Framer Motion (layout orchestration, spring physics, modal transitions)
- **Icons:** Lucide React & custom SVG brand primitives
- **Typography:** Geist & Geist Mono (`next/font/google`)

## Architecture & Data Flow

```
[User Browser]
      │
      ├─► app/layout.js ─── Global fonts, metadata, root body
      │
      └─► app/page.js (Client Component Entrypoint)
            │
            ├─► LoadingSkeleton (1000ms artificial hydration barrier)
            ├─► CustomCursor (Mouse tracker with Framer Motion spring physics)
            ├─► Spotlight (Radial cursor-follower gradient)
            ├─► Navbar (Fixed navigation, scroll-spy observer, mobile menu drawer)
            │
            ├─► Section 00: Hero (Typing effect, terminal widget, resume download)
            ├─► Section 01: About (Profile photo, academic stats, trait tags)
            ├─► Section 02: Skills (Categorized skill cards + 3D HTML5 Canvas Icon Cloud)
            ├─► Section 03: Projects (Card showcase + interactive detail modal)
            ├─► Section 04: Experience (Vertical timeline of education & hackathon history)
            │
            └─► Section 05: Contact (Controlled form with anti-spam honeypot)
                                   │
                                   └─► POST https://formsubmit.co/ajax/{email}
                                             │
                                             └─► Target Inbox
```

## Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation
```bash
git clone https://github.com/Rassel-07/Portfolio.git
cd Portfolio
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

## Project Structure
```
├── app/
│   ├── error.js           # Client-side Error Boundary
│   ├── globals.css        # Tailwind v4 theme, animations & root styles
│   ├── layout.js          # Root layout & SEO metadata
│   └── page.js            # Single-page portfolio composition
├── components/
│   ├── About.jsx          # Profile, bio & education summary
│   ├── Contact.jsx        # Contact form with validation & honeypot
│   ├── Experience.jsx     # Hackathon & academic timeline
│   ├── Hero.jsx           # Interactive greeting & terminal emulator
│   ├── Navbar.jsx         # Sticky header with active section tracking
│   ├── Projects.jsx       # Featured projects grid & modal deep-dives
│   ├── Skills.jsx         # Categorized skills grid
│   └── ui/
│       ├── BorderBeam.jsx      # Animated glowing border card effect
│       ├── CustomCursor.jsx    # Fluid cursor spring follower
│       ├── IconCloud.jsx       # 3D interactive spherical canvas
│       ├── Icons.jsx           # Shared SVG brand components (Github, Linkedin)
│       ├── LoadingSkeleton.jsx # Initial page skeleton animation
│       ├── ShineBorder.jsx     # Rotating gradient border wrapper
│       └── Spotlight.jsx       # Cursor radial gradient backdrop
└── public/
    ├── images/            # Static image assets (profile.png)
    └── resume.pdf         # Downloadable resume
```

## Key Configuration & Customization Files
- `app/layout.js`: Global SEO title, descriptions, and metadata keywords.
- `components/Projects.jsx`: `projectsData` array containing project descriptions, tags, and links.
- `components/ui/IconCloud.jsx`: 3D spherical canvas rotation speed, items, and hex color values.
- `components/Contact.jsx`: Contact form submission handler and FormSubmit integration.
- `public/resume.pdf`: Static downloadable resume asset.
