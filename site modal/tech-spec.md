# Spaciaz Website - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts) |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        primary: '#D4E157',
        'primary-dark': '#C5D147',
        secondary: '#1A1A1A',
        background: '#FFFFFF',
        'background-alt': '#F5F5F0',
        'background-dark': '#0D0D0D',
        'text-primary': '#1A1A1A',
        'text-secondary': '#666666',
        'text-muted': '#999999',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button
- Card
- Input
- Select
- Navigation Menu
- Sheet (mobile menu)
- Separator

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Navbar` | - | Fixed navigation with logo, links, CTA |
| `HeroSection` | - | Full-height hero with background, text, feature cards |
| `AboutSection` | - | Two-column about with stats counter |
| `ServicesSection` | - | Service cards grid with hover effects |
| `ProjectsSection` | - | Split-screen project showcase |
| `DifferentSection` | - | Features with rotating badge |
| `TestimonialsSection` | - | Quote carousel |
| `PartnersSection` | - | Logo grid |
| `TeamSection` | - | Leadership cards |
| `ContactSection` | - | Form with background |
| `BlogSection` | - | Article cards grid |
| `FooterCTA` | - | Large text CTA section |
| `Footer` | - | Multi-column footer |
| `AnimatedCounter` | `{ target: number, suffix?: string }` | Count-up animation |
| `RotatingBadge` | `{ text: string, image?: string }` | Circular rotating text |
| `GlassCard` | `{ children, className }` | Glassmorphism card wrapper |
| `ServiceCard` | `{ title, image, index }` | Service card with lime hover |
| `ProjectItem` | `{ number, location, title, image, active }` | Project list item |
| `TeamCard` | `{ name, role, image }` | Team member card |
| `BlogCard` | `{ title, category, date, image }` | Blog article card |
| `TestimonialCard` | `{ quote, author, role }` | Testimonial quote |

## 4. Animation Implementation Plan

| Interaction | Tech | Implementation |
|-------------|------|----------------|
| Page Load | Framer Motion | `staggerChildren` container, `y: 30→0, opacity: 0→1` on items |
| Scroll Reveal | Framer Motion | `whileInView` with `viewport={{ once: true }}` |
| Navbar Fixed | CSS + React | `position: fixed`, add blur on scroll state |
| Counter Animation | Custom Hook | `useCountUp(target, duration)` with requestAnimationFrame |
| Card Hover - Lime | Framer Motion | `whileHover` scale blob from 0 to 1 |
| Card Hover - Lift | Tailwind | `hover:-translate-y-1 hover:shadow-lg transition-all` |
| Image Scale | CSS | `group-hover:scale-105 transition-transform duration-500` |
| Project Switch | Framer Motion | `AnimatePresence` with crossfade |
| Rotating Badge | CSS | `animate-spin-slow` class |
| Testimonial Carousel | Framer Motion | `AnimatePresence` with slide direction |
| Button Hover | Tailwind | `hover:scale-102 hover:shadow-md transition-all` |
| Link Underline | CSS | `after:` pseudo-element width animation |
| Parallax Background | Framer Motion | `useScroll` + `useTransform` for y position |
| Floating Card | CSS | `animate-float` keyframe animation |

## 5. Project File Structure

```
src/
├── components/
│   ├── ui/                    # shadcn components
│   ├── AnimatedCounter.tsx
│   ├── RotatingBadge.tsx
│   ├── GlassCard.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectItem.tsx
│   ├── TeamCard.tsx
│   ├── BlogCard.tsx
│   ├── TestimonialCard.tsx
│   └── SectionLabel.tsx
├── sections/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProjectsSection.tsx
│   ├── DifferentSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── PartnersSection.tsx
│   ├── TeamSection.tsx
│   ├── ContactSection.tsx
│   ├── BlogSection.tsx
│   ├── FooterCTA.tsx
│   └── Footer.tsx
├── hooks/
│   ├── useCountUp.ts
│   ├── useScrollPosition.ts
│   └── useInView.ts
├── lib/
│   └── utils.ts
├── types/
│   └── index.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
public/
├── images/
│   └── (all generated images)
└── fonts/
```

## 6. Package Installation

```bash
# Animation library
npm install framer-motion

# Icons
npm install lucide-react

# Utility
npm install clsx tailwind-merge
```

## 7. Key Implementation Notes

### Counter Animation Hook
```typescript
// hooks/useCountUp.ts
export function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);
  
  return { count, setIsInView };
}
```

### Scroll-Triggered Animations
- Use Framer Motion's `whileInView` for all scroll reveals
- Set `viewport={{ once: true, margin: "-100px" }}` for early trigger
- Use `staggerChildren: 0.1` for sequential reveals

### Performance Optimizations
- Add `will-change-transform` to animated elements
- Use `transform` and `opacity` only for animations
- Lazy load images below the fold
- Use `loading="lazy"` on images

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large: > 1280px
