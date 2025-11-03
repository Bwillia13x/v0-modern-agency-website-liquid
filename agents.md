# AI Agents Guide - Modern Agency Website (Liquid Glass)

## Project Overview

This is a **Next.js 14** modern agency website built with v0.app, featuring liquid glass design aesthetics. The project is being transformed from a 3D visualization studio into a **Calgary-based consulting agency website** for a 1-man operation providing services to **social media influencers** and **Calgary businesses**.

**Repository**: v0-modern-agency-website-liquid  
**Owner**: Bwillia13x  
**Branch**: main  
**Deployment**: Vercel  
**Package Manager**: pnpm

---

## 🎯 PRIMARY DIRECTIVE: CONTENT TRANSFORMATION

### Current State → Target Vision

**FROM**: 3D Architecture Visualization & Product Rendering Studio  
**TO**: Calgary-Based Social Media & Business Consulting Agency

### Service Suite Focus

1. **Social Media Influencer Services**
   - Content strategy & planning
   - Brand partnership consulting
   - Growth optimization
   - Analytics & performance tracking

2. **Calgary Business Services**
   - Digital marketing consultation
   - Social media management
   - Brand development
   - Local business growth strategies

### ⚠️ CRITICAL RULE: DESIGN PRESERVATION

**DO NOT MODIFY**:

- ✅ Color schemes, gradients, or theme variables
- ✅ Layout structures and spacing systems
- ✅ Animation effects (Lightning, Plasma, liquid glass aesthetics)
- ✅ Component architectures and patterns
- ✅ Tailwind utility class patterns
- ✅ Typography hierarchy and font usage
- ✅ Dark mode implementations
- ✅ Responsive breakpoints and grid systems
- ✅ UI component styling (buttons, cards, dialogs, etc.)
- ✅ Visual effects and WebGL implementations

**ONLY MODIFY**:

- ❌ Text content (headlines, descriptions, CTAs)
- ❌ Service descriptions and features
- ❌ Pricing information and packages
- ❌ Form field labels and placeholder text
- ❌ Navigation menu items and route names
- ❌ Images and icons (swap for relevant content)
- ❌ SEO metadata (titles, descriptions)
- ❌ Testimonial content (if applicable)

### Content Update Strategy

When transforming content:

1. **Keep exact same component structure** - only swap text/images
2. **Maintain all animations and effects** - these are part of the premium aesthetic
3. **Preserve spacing and layouts** - don't adjust margins, padding, or positioning
4. **Update only semantic content** - headlines, body copy, service names
5. **Keep the same number of sections** - don't add/remove major layout blocks
6. **Maintain call-to-action patterns** - same button styles, just different text
7. **Replace images with consulting/business-related visuals** - same aspect ratios and sizes

---

## Tech Stack

### Core Framework

- **Next.js 14.2.25** - App Router (App Directory structure)
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Styling & UI

- **Tailwind CSS 4.1.9** - Utility-first CSS with PostCSS
- **Radix UI** - Accessible component primitives (dialogs, accordions, navigation, etc.)
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant management
- **tailwindcss-animate** - Animation utilities
- **next-themes** - Dark/light mode theming

### Forms & Validation

- **react-hook-form** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **zod 3.25.67** - Schema validation

### Additional Libraries

- **embla-carousel-react** - Carousel/slider functionality
- **recharts** - Data visualization
- **ogl** - WebGL library (likely for 3D effects)
- **date-fns 4.1.0** - Date utilities
- **sonner** - Toast notifications
- **vaul** - Drawer component
- **geist** - Font family

### Analytics & Monitoring

- **@vercel/analytics** - Vercel Analytics
- **@vercel/speed-insights** - Performance monitoring

---

## Project Structure

```
/app                          # Next.js App Router directory
  ├── page.tsx               # Homepage
  ├── layout.tsx             # Root layout
  ├── globals.css            # Global styles
  ├── /3D-architecture-visualization-studio/
  │   ├── page.tsx           # ArchViz service page
  │   └── /_components/      # Page-specific components
  ├── /3d-product-rendering/
  │   ├── page.tsx           # Product rendering page
  │   └── /_components/      # Before/after comparison components
  ├── /About/                # About page
  ├── /admin/                # Admin dashboard with auth
  │   ├── page.tsx
  │   ├── loading.tsx
  │   └── /login/
  ├── /checkout/             # Checkout flow
  ├── /faq/                  # FAQ page
  ├── /revisions/            # Revisions page
  ├── /t&c/                  # Terms & Conditions
  └── /api/                  # API routes
      └── /geo/              # Geolocation API

/components                   # Shared React components
  ├── /ui/                   # shadcn/ui component library
  │   ├── accordion.tsx
  │   ├── alert.tsx
  │   ├── badge.tsx
  │   ├── button.tsx
  │   ├── card.tsx
  │   ├── dialog.tsx
  │   ├── input.tsx
  │   ├── navigation-menu.tsx
  │   ├── sheet.tsx
  │   ├── tabs.tsx
  │   └── textarea.tsx
  ├── hero.tsx               # Homepage hero section
  ├── features.tsx           # Features section
  ├── pricing.tsx            # Pricing section
  ├── footer.tsx             # Site footer
  ├── site-header.tsx        # Site header/navigation
  ├── logo-marquee.tsx       # Animated logo carousel
  ├── order-form.tsx         # Order/contact form
  ├── lightning.tsx          # Lightning effect component
  ├── plasma.tsx             # Plasma effect component
  ├── lazy-video.tsx         # Lazy-loaded video component
  ├── phone-video.tsx        # Phone mockup video
  ├── youtube-grid.tsx       # YouTube video grid
  └── examples-dialog.tsx    # Examples modal

/lib                          # Utility functions
  └── utils.ts               # Helper functions (cn, etc.)

/public                       # Static assets
  ├── /icons/                # Icon files
  └── /images/               # Image assets
      └── /archviz/          # Architecture visualization images

/styles                       # Additional stylesheets
  └── globals.css

```

---

## Key Configuration Files

### `next.config.mjs`

- **ESLint**: Ignored during builds (`ignoreDuringBuilds: true`)
- **TypeScript**: Build errors ignored (`ignoreBuildErrors: true`)
- **Images**: Unoptimized (`unoptimized: true`)

### `middleware.ts`

- Contains middleware logic (likely for auth, redirects, or geo-routing)

### `components.json`

- shadcn/ui configuration file

### `tailwind.config.ts`

- Tailwind CSS configuration

### `tsconfig.json`

- TypeScript compiler options

---

## Development Guidelines

### 1. File Organization

- **Route Components**: Place in `/app/[route]/page.tsx`
- **Route-Specific Components**: Use `_components/` folder within the route directory (e.g., `/app/3D-architecture-visualization-studio/_components/`)
- **Shared Components**: Place in `/components/`
- **UI Primitives**: Place in `/components/ui/`
- **Utilities**: Place in `/lib/`

### 2. Component Conventions

- Use **TypeScript** for all components
- Prefer **functional components** with hooks
- Use **Radix UI primitives** for accessible components
- Style with **Tailwind CSS** utility classes
- Use `cn()` utility from `/lib/utils.ts` for conditional classes

### 3. Naming Conventions

- **Components**: PascalCase (e.g., `SiteHeader.tsx`)
- **Files**: kebab-case for multi-word files (e.g., `site-header.tsx`)
- **Route folders**: kebab-case (e.g., `/3d-product-rendering/`)
- **Private folders**: Prefix with `_` (e.g., `/_components/`)

### 4. Styling Guidelines

- Use **Tailwind utility classes** first
- Extract repeated patterns into components
- Use **CSS modules** (`.module.css`) for component-specific styles if needed
- Custom animations in separate CSS files (e.g., `Lightning.css`, `Plasma.css`)
- Leverage `tailwindcss-animate` for common animations
- **CRITICAL**: Do not modify existing color schemes, gradients, spacing, or layout structures
- **CRITICAL**: Preserve all animation effects and visual aesthetics

### 5. Form Handling

- Use **react-hook-form** for form state
- Use **zod** for validation schemas
- Use **@hookform/resolvers** to integrate zod with react-hook-form
- Update form field labels and placeholder text for consulting services context

### 6. API Routes

- Place in `/app/api/[route]/route.ts`
- Use Next.js 14 Route Handlers (not Pages API)
- Export named functions: `GET`, `POST`, `PUT`, `DELETE`, etc.

### 7. Image Optimization

- Images are currently unoptimized in config
- Use Next.js `<Image>` component with proper sizing
- Store static images in `/public/images/`
- **Replace 3D visualization images with consulting/business-related visuals**
- **Maintain same aspect ratios and sizes when replacing images**

### 8. Performance Considerations

- Use lazy loading for heavy components (see `lazy-video.tsx`)
- Implement loading states (see `/admin/loading.tsx`, `/checkout/loading.tsx`)
- Leverage React 19 concurrent features
- Monitor with Vercel Speed Insights

---

## Special Features

### 3D Effects & Animations

- **Lightning Effect**: `components/lightning.tsx` + `Lightning.css`
- **Plasma Effect**: `components/plasma.tsx` + `Plasma.css`
- **OGL Library**: Used for WebGL/3D rendering
- **Logo Marquee**: Infinite scrolling logo animation

### Service Pages

1. **3D Architecture Visualization Studio**
   - Hero, features, pricing, logo marquee
   - Dedicated component structure

2. **3D Product Rendering**
   - Before/after comparison component
   - Interactive demonstrations

### Admin Dashboard

- Protected admin routes in `/app/admin/`
- Login system at `/app/admin/login/`
- Loading states implemented

### Checkout Flow

- Dedicated checkout page with loading state
- Order form component for lead capture

---

## Common Tasks

### Adding a New Page

1. Create `/app/[route]/page.tsx`
2. Optionally create `/app/[route]/_components/` for page-specific components
3. Export default component with metadata

### Creating a UI Component

1. Add to `/components/ui/` if it's a primitive
2. Add to `/components/` if it's a composite/feature component
3. Use Radix UI + Tailwind CSS pattern
4. Export from component file

### Adding API Endpoint

1. Create `/app/api/[route]/route.ts`
2. Export HTTP method handlers (`GET`, `POST`, etc.)
3. Return `Response` or `NextResponse`

### Styling Component

```tsx
import { cn } from "@/lib/utils"

export function MyComponent({ className, ...props }) {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {/* content */}
    </div>
  )
}
```

---

## Build & Deployment

### Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint (currently ignored in builds)
```

### Deployment Pipeline

1. Changes pushed to main branch
2. Vercel auto-deploys from repository
3. Also syncs with v0.app deployments
4. Live at: <https://vercel.com/echoexes-projects/v0-modern-agency-website-liquid-3q>

---

## Important Notes for AI Agents

### ⚠️ Critical Considerations

1. **Build Configuration**: ESLint and TypeScript errors are currently ignored during builds. Be mindful of type safety when making changes.
2. **React 19**: This project uses React 19 - ensure compatibility with any new dependencies.
3. **v0.app Sync**: This repo syncs with v0.app. Coordinate changes appropriately.
4. **Tailwind 4**: Using the latest Tailwind v4 with PostCSS plugin - syntax may differ from v3.
5. **Image Optimization**: Disabled in config - consider enabling for production.

### 🎯 When Making Edits

- **Preserve TypeScript types** even though build errors are ignored
- **Test responsive design** - this is a showcase website
- **Maintain accessibility** - Radix UI components are accessible by default
- **Keep performance in mind** - use lazy loading and code splitting
- **Follow existing patterns** - especially for component structure and styling
- **Test dark mode** - next-themes is integrated

### 🚀 Before Submitting Changes

1. Run `pnpm build` to check for critical errors
2. Test responsive layouts (mobile, tablet, desktop)
3. Verify dark mode compatibility
4. Check loading states and transitions
5. Ensure forms validate correctly with zod schemas

---

## Dependencies Installation

Always use **pnpm** as the package manager:

```bash
pnpm install              # Install all dependencies
pnpm add [package]        # Add new dependency
pnpm add -D [package]     # Add dev dependency
```

---

## Contact & Resources

- **v0.app Chat**: <https://v0.app/chat/4rATwJDcbgh>
- **Vercel Deployment**: <https://vercel.com/echoexes-projects/v0-modern-agency-website-liquid-3q>
- **Repository**: Bwillia13x/v0-modern-agency-website-liquid

---

*Last Updated: November 2, 2025*
