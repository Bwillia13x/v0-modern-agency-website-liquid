# 🎯 MASTERPLAN: Calgary Consulting Agency Transformation

## Executive Summary

Transform the existing 3D visualization studio website into a **Calgary-based consulting agency** website serving **social media influencers** and **Calgary businesses**. The transformation must preserve 100% of the design system (liquid glass aesthetics, animations, layouts) while replacing all content to reflect the new business vision.

**Target Completion**: Phased approach with 5 major implementation phases  
**Implementation Agent**: Claude Sonnet 4.5 (Thinking)  
**Repository**: v0-modern-agency-website-liquid  
**Critical Constraint**: ZERO design system modifications

---

## 🚨 CRITICAL RULES (Read Before Every Edit)

### Design Preservation Mandate

**NEVER MODIFY**:

- Color values, gradients, theme variables
- Spacing values (padding, margin, gap)
- Component layouts and grid structures
- Animation timings, effects, or implementations
- Typography sizes, weights, or hierarchies
- Border radii, shadows, or blur effects
- Responsive breakpoints or media queries
- UI component architectures
- WebGL effects (Lightning, Plasma, OGL)
- CSS classes or Tailwind utilities (except text content)

**ONLY MODIFY**:

- Text strings (headlines, descriptions, CTAs)
- Service names and descriptions
- Pricing values and package details
- Form field labels and placeholders
- Navigation menu text
- Route names (URLs and folder names)
- Image sources (maintain aspect ratios)
- SEO metadata strings
- Structured data content

---

## 📋 Phase 1: Navigation & Header Transformation

### Current State Analysis

**File**: `/components/site-header.tsx`

**Current Services Menu**:

1. ArchViz Render (Building2 icon)
2. 3D Product Rendering (Package icon)
3. 3D Product Animation (Package icon)

**Current Navigation Links**:

- Pricing
- FAQ
- Blog
- About

### Target State

**New Services Menu**:

1. **Social Media Growth** (TrendingUp icon)
   - Description: "Influencer strategy & audience building"
   - Route: `/social-media-growth`

2. **Brand Partnerships** (Handshake icon)
   - Description: "Connect with brands that align with your values"
   - Route: `/brand-partnerships`

3. **Business Consulting** (Briefcase icon)
   - Description: "Calgary business digital transformation"
   - Route: `/business-consulting`

**Navigation Links** (keep same):

- Pricing
- FAQ
- Blog (future content)
- About

### Implementation Steps

#### Step 1.1: Update Site Header Services

**File**: `/components/site-header.tsx`

**Actions**:

1. Import new icons: `TrendingUp`, `Handshake`, `Briefcase` from `lucide-react`
2. Replace `services` array content:
   - Update all 3 service objects with new href, label, icon, and description
3. Keep all styling, structure, and component logic unchanged

**Success Criteria**:

- Navigation menu renders with new service names
- Icons display correctly
- Descriptions are accurate
- No visual/layout changes
- Mobile menu reflects changes

#### Step 1.2: Update Logo/Branding Text

**File**: `/components/site-header.tsx`

**Actions**:

1. Replace "skitbit" text references with agency name
2. Update logo image src if needed (maintain same dimensions)
3. Keep all positioning and styling

**Success Criteria**:

- New agency name displays in header
- Logo loads correctly
- Styling matches existing design

---

## 📋 Phase 2: Homepage Hero Section Transformation

### Current State Analysis

**File**: `/components/hero.tsx`

**Current Content**:

- Logo: Skitbit
- Headline: "HIGH-IMPACT / 3D ANIMATION / FOR BRANDS"
- CTA: "Chat With Us" (WhatsApp link)
- Phone card grid (5 cards with 3D animation videos)

### Target State

**New Content**:

- Logo: Agency logo/name
- Headline: "AMPLIFY YOUR / DIGITAL PRESENCE / IN CALGARY"
- Subheadline: "Expert consulting for influencers & local businesses"
- CTA: "Book Free Consultation" (link to booking/contact form)
- Card grid: Success metrics, case studies, or service previews

### Implementation Steps

#### Step 2.1: Update Hero Text Content

**File**: `/components/hero.tsx`

**Actions**:

1. Update logo src and alt text (line ~19)
2. Replace uppercase brand name text
3. Replace headline spans:
   - Line 1: "AMPLIFY YOUR"
   - Line 2: "DIGITAL PRESENCE" (keep lime-300 glow effect)
   - Line 3: "IN CALGARY"
4. Add subheadline after h1 (optional, styled consistently)
5. Update Button text to "Book Free Consultation"
6. Update Button href to contact form or booking link

**Success Criteria**:

- New headline displays with same visual impact
- Lime glow effect preserved on middle line
- Button maintains same styling
- Spacing and layout unchanged

#### Step 2.2: Transform Phone Card Grid

**File**: `/components/hero.tsx`

**Current Implementation**: 5 video cards (phoneData array)

**Option A - Replace with Service Preview Cards**:
Keep same grid structure but replace video content with:

1. **Social Media Strategy** card
2. **Content Planning** card
3. **Brand Growth** card
4. **Analytics & Insights** card
5. **Business Transformation** card

**Option B - Replace with Metrics Cards**:

1. "50+ Clients" with testimonial snippet
2. "3x Growth Avg" with chart visual
3. "Calgary Local" with map pin
4. "10 Years Experience" with timeline
5. "5-Star Rated" with stars

**Actions**:

1. Replace `phoneData` array with new card data
2. Update card titles, subtitles, and content
3. Replace video sources with relevant images/graphics
4. Maintain same gradient and tone properties
5. Keep exact same grid responsive logic

**Success Criteria**:

- 5 cards render in same grid pattern
- Responsive breakpoints work identically
- Visual style matches (gradients, borders)
- Content reflects consulting services

---

## 📋 Phase 3: Features Section Transformation

### Current State Analysis

**File**: `/components/features.tsx`

**Current Content**:

- Title: "What makes us the best studio for you."
- Subtitle: "Discover our unique approach to 3D animation"
- Two main cards:
  1. **Adaptability Card**: Images of product renders
  2. **Client Love Card**: 4.9 rating with testimonial

### Target State

**New Content**:

- Title: "What makes us Calgary's premier consulting partner."
- Subtitle: "Discover our proven approach to digital growth"
- Two main cards:
  1. **Local Expertise Card**: Calgary business landscape images/icons
  2. **Client Success Card**: Keep 4.9 rating, update testimonial

### Implementation Steps

#### Step 3.1: Update Section Headers

**File**: `/components/features.tsx`

**Actions**:

1. Update `defaultContent` object:
   - title: "What makes us Calgary's premier consulting partner."
   - subtitle: "Discover our proven approach to digital growth"
2. Keep all state management and localStorage logic

**Success Criteria**:

- New title renders with same styling
- Subtitle updates correctly
- Section maintains visual hierarchy

#### Step 3.2: Transform Adaptability Card

**File**: `/components/features.tsx`

**Actions**:

1. Update card header text:
   - Category: "LOCAL EXPERTISE"
   - Title: "Deep roots in Calgary's business community"
2. Replace images with Calgary/consulting-relevant visuals:
   - Option: Calgary skyline, business meeting photos, or service icons
   - Maintain exact same aspect ratios [3/4]
   - Keep both image slots and grid structure
3. Keep all styling, borders, and responsive logic

**Success Criteria**:

- Card structure unchanged
- New images load with same dimensions
- Text updates reflect consulting focus
- Visual style matches perfectly

#### Step 3.3: Update Client Love Card

**File**: `/components/features.tsx`

**Actions**:

1. Update card header:
   - Category: "CLIENT SUCCESS"
   - Title: "Our clients don't just grow—they dominate their markets and build lasting influence."
2. Keep 4.9 rating and star display
3. Replace product sketch images with:
   - Social media analytics screenshots
   - Growth charts
   - Client success photos
   - Maintain same grid layout (2 images)

**Success Criteria**:

- Rating display unchanged
- New testimonial fits the space
- Images maintain aspect ratios
- All styling preserved

---

## 📋 Phase 4: Pricing Section Transformation

### Current State Analysis

**File**: `/components/pricing.tsx`

**Current Plans**:

1. **Startup Plan**: $299 / ₹25,000 - 15s animation, 2 revisions
2. **Pro Plan**: $699 / ₹55,000 - 25s animation, 4 revisions
3. **Premium Plan**: $2,049 / ₹1,70,500 - 60s animation, unlimited revisions

**Features**: Duration, revisions, delivery time, commercial rights, YouTube examples

### Target State

**New Plans**:

1. **Starter Plan**: $999 CAD/month
   - Social media strategy
   - 2 content consultations/month
   - Monthly analytics report
   - Email support

2. **Growth Plan**: $2,499 CAD/month (Most Popular)
   - Everything in Starter
   - 4 consultations/month
   - Brand partnership guidance
   - Priority support
   - Quarterly strategy review

3. **Enterprise Plan**: $4,999 CAD/month
   - Everything in Growth
   - Unlimited consultations
   - Dedicated account manager
   - Custom service packages
   - 24/7 priority support

### Implementation Steps

#### Step 4.1: Update Currency and Pricing Logic

**File**: `/components/pricing.tsx`

**Actions**:

1. Add "CAD" to Currency type: `type Currency = "INR" | "USD" | "CAD"`
2. Update PRICES object to include CAD:

   \`\`\`typescript
   CAD: {
     starter: "$999",
     growth: "$2,499",
     enterprise: "$4,999",
     save: "Save $100",
   }
   \`\`\`

3. Update geo API logic to default to CAD for Calgary/Canada IPs
4. Keep all currency switching functionality

**Success Criteria**:

- CAD pricing displays correctly
- Currency switcher includes CAD option
- Geo detection works for Canadian users

#### Step 4.2: Transform Pricing Cards Content

**File**: `/components/pricing.tsx`

**Actions**:

1. **Starter Card**:
   - Update plan name
   - Update price display
   - Replace feature list with consulting features
   - Update badge text if present
   - Keep all styling and card structure

2. **Growth Card** (formerly Pro):
   - Update plan name
   - Update price display
   - Add "MOST POPULAR" badge styling
   - Update feature list
   - Keep card highlighting/accent

3. **Enterprise Card** (formerly Premium):
   - Update plan name
   - Update price display
   - Update feature list
   - Keep card structure

4. Replace YouTube examples section:
   - Option A: Remove video examples, add client testimonial cards
   - Option B: Replace with case study previews
   - Option C: Keep dialog structure, show client results

**Success Criteria**:

- All 3 cards render with same layout
- Pricing displays correctly
- Features list appropriately
- Popular badge works on Growth plan
- CTAs link to checkout/contact

#### Step 4.3: Update Pricing Page Metadata

**File**: `/app/page.tsx`

**Actions**:

1. Update structured data JSON-LD:
   - Change service name to consulting services
   - Update offer names and prices
   - Update descriptions
2. Keep all schema.org structure

**Success Criteria**:

- Valid structured data
- SEO metadata accurate
- No schema errors

---

## 📋 Phase 5: Service Pages Creation/Transformation

### Overview

Transform existing 3D service pages into consulting service pages while maintaining exact design patterns.

### Phase 5.1: Social Media Growth Page

#### Create New Route

**Action**: Rename/repurpose `/app/3D-architecture-visualization-studio/` → `/app/social-media-growth/`

**Files to Update**:

1. `/app/social-media-growth/page.tsx`
2. `/app/social-media-growth/_components/hero-social.tsx`
3. `/app/social-media-growth/_components/features-social.tsx`
4. `/app/social-media-growth/_components/pricing-social.tsx`
5. `/app/social-media-growth/_components/footer-social.tsx`

**Content Strategy**:

- **Hero**: "Grow Your Influence / Build Authentic Engagement"
- **Features**: Platform strategies, content planning, analytics
- **Pricing**: Tiered packages for influencer growth
- **Case Studies**: Before/after growth metrics

**Implementation**:

1. Copy entire directory structure
2. Replace all text content
3. Update component imports and names
4. Replace images with social media/influencer visuals
5. Keep ALL styling and layout code

### Phase 5.2: Brand Partnerships Page

#### Create New Route

**Action**: Repurpose `/app/3d-product-rendering/` → `/app/brand-partnerships/`

**Files to Update**:

1. `/app/brand-partnerships/page.tsx`
2. `/app/brand-partnerships/_components/partnerships-showcase.tsx`

**Content Strategy**:

- **Hero**: "Connect With Brands / That Align With Your Values"
- **Features**: Partnership vetting, negotiation support, contract guidance
- **Before/After Component**: Repurpose for "Before Partnership" vs "After Partnership" success stories

**Implementation**:

1. Rename directory and files
2. Update all text strings
3. Maintain before/after comparison component structure
4. Replace product images with brand collaboration visuals

### Phase 5.3: Business Consulting Page

#### Create New Route

**Action**: Create new `/app/business-consulting/` directory

**Files to Create** (copy from archviz as template):

1. `/app/business-consulting/page.tsx`
2. `/app/business-consulting/_components/hero-business.tsx`
3. `/app/business-consulting/_components/features-business.tsx`
4. `/app/business-consulting/_components/pricing-business.tsx`

**Content Strategy**:

- **Hero**: "Transform Your Calgary Business / For The Digital Age"
- **Features**: Local market expertise, digital transformation, growth strategies
- **Pricing**: Custom consulting packages for businesses
- **Calgary Focus**: Emphasize local market knowledge

**Implementation**:

1. Duplicate archviz directory structure
2. Rename all components with -business suffix
3. Update all content to business consulting theme
4. Add Calgary-specific references
5. Keep design system intact

---

## 📋 Phase 6: Supporting Pages Updates

### Phase 6.1: About Page

**File**: `/app/About/page.tsx`

**Content Updates**:

- Replace studio founder story with consultant background
- Update mission statement for consulting focus
- Add Calgary community involvement
- Update team photos/bios (if applicable)
- Keep page layout and styling

**Key Points to Include**:

- Years of consulting experience
- Calgary business community connections
- Influencer success stories
- Local market expertise

### Phase 6.2: FAQ Page

**File**: `/app/faq/page.tsx`

**Content Updates**:
Create new FAQ entries:

1. "What services do you offer influencers?"
2. "How do you help Calgary businesses?"
3. "What are your pricing options?"
4. "Do you offer custom packages?"
5. "How long are consulting engagements?"
6. "Do you work with businesses outside Calgary?"
7. "What's included in brand partnership consulting?"
8. "How do you measure success?"

**Implementation**:

- Replace all question/answer pairs
- Keep accordion component structure
- Maintain styling and interactions

### Phase 6.3: Terms & Conditions

**File**: `/app/t&c/page.tsx`

**Content Updates**:

- Update service descriptions
- Update company name
- Update contact information
- Review legal language for consulting services
- Keep page layout

### Phase 6.4: Checkout/Order Form

**Files**:

- `/app/checkout/page.tsx`
- `/components/order-form.tsx`

**Content Updates**:

1. Update form field labels:
   - "Service Type" dropdown → consulting services
   - "Project Details" → "Consultation Focus"
   - Update placeholder text
2. Update validation rules if needed
3. Keep all form logic and styling
4. Update submission handling for consulting inquiries

---

## 📋 Phase 7: Footer & Global Components

### Phase 7.1: Footer Updates

**File**: `/components/appverse-footer.tsx` and `/components/footer.tsx`

**Content Updates**:

- Update company name and tagline
- Update service links to new routes
- Update social media links
- Update contact information (Calgary address/phone)
- Update copyright text
- Keep all layout and styling

### Phase 7.2: Global Metadata & SEO

**File**: `/app/layout.tsx`

**Content Updates**:

1. Update site title and description
2. Update Open Graph metadata
3. Update Twitter card metadata
4. Update favicon/app icons if needed
5. Update keywords for SEO
6. Keep all Next.js configuration

**Target SEO Keywords**:

- Calgary consulting
- Social media consulting Calgary
- Influencer marketing consultant
- Calgary business consultant
- Digital marketing Calgary

---

## 📋 Phase 8: Assets & Media Replacement

### Phase 8.1: Image Audit & Replacement

**Current Image Locations**:

- `/public/images/archviz/` - Architecture renders
- `/public/images/` - Product images, phone content
- `/public/icons/` - Logo and icons

**Replacement Strategy**:

1. **Hero Section Images** (5 phone cards):
   - Replace 3D animation videos with:
     - Social media dashboard screenshots
     - Analytics graphs
     - Consultation session photos
     - Success metric visualizations
     - Client testimonial quotes
   - Maintain exact same aspect ratios
   - Keep same file formats (webp/mp4)

2. **Features Section Images**:
   - Replace product renders with:
     - Calgary skyline/landmarks
     - Professional consulting photos
     - Team/client collaboration images
     - Growth charts and metrics
   - Keep same dimensions and aspect ratios

3. **Service Page Images**:
   - Social media platform logos/screenshots
   - Brand collaboration visuals
   - Business transformation photos
   - Calgary business district images

**Implementation Steps**:

1. Audit all current images and their dimensions
2. Source/create replacement images
3. Optimize for web (same file sizes)
4. Replace image sources in components
5. Test all images load correctly
6. Verify responsive behavior unchanged

### Phase 8.2: Logo & Branding

**Files**: `/public/icons/`

**Actions**:

1. Replace skitbit logo with agency logo
2. Create versions: white, color, favicon
3. Maintain same dimensions as current logos
4. Update all logo references in components
5. Update favicon in layout.tsx

---

## 📋 Phase 9: API Routes & Dynamic Content

### Phase 9.1: Geo API

**File**: `/app/api/geo/route.ts`

**Review & Update**:

- Ensure CAD currency detection works for Canada
- Update any service-specific logic
- Keep all existing functionality
- Test with Canadian IPs

### Phase 9.2: Form Submission Handling

**Actions**:

1. Review form submission endpoints
2. Update email templates for consulting inquiries
3. Update confirmation messages
4. Test form functionality
5. Verify validation works

---

## 📋 Phase 10: Testing & Quality Assurance

### Phase 10.1: Visual Regression Testing

**Checklist**:

- [ ] Homepage hero renders identically
- [ ] All animations function (Lightning, Plasma)
- [ ] Gradients and colors unchanged
- [ ] Spacing matches original
- [ ] Typography hierarchy preserved
- [ ] Dark mode works correctly
- [ ] Responsive breakpoints identical
- [ ] Mobile menu functions properly

### Phase 10.2: Content Accuracy Testing

**Checklist**:

- [ ] All service descriptions accurate
- [ ] Pricing information correct
- [ ] Contact information updated
- [ ] Calgary references appropriate
- [ ] No remaining 3D/animation references
- [ ] CTAs link to correct destinations
- [ ] Forms capture correct data

### Phase 10.3: Functionality Testing

**Checklist**:

- [ ] All navigation links work
- [ ] Service dropdowns function
- [ ] Forms submit successfully
- [ ] Currency switching works
- [ ] Geo detection accurate
- [ ] Examples/dialogs open correctly
- [ ] External links open properly
- [ ] Mobile menu operates smoothly

### Phase 10.4: SEO & Performance Testing

**Checklist**:

- [ ] Meta tags updated
- [ ] Structured data valid
- [ ] Images optimized
- [ ] Page load times acceptable
- [ ] Core Web Vitals maintained
- [ ] Sitemap updated
- [ ] robots.txt appropriate
- [ ] Analytics tracking works

---

## 📋 Phase 11: Deployment & Launch

### Phase 11.1: Pre-Deployment Checklist

- [ ] All phases completed
- [ ] QA testing passed
- [ ] Content reviewed and approved
- [ ] Legal pages updated
- [ ] Contact forms tested
- [ ] Analytics configured
- [ ] Backup of original site
- [ ] Deployment plan documented

### Phase 11.2: Deployment Steps

1. **Create deployment branch**: `git checkout -b consulting-transformation`
2. **Commit all changes**: Use semantic commits
3. **Push to GitHub**: `git push origin consulting-transformation`
4. **Create PR**: Review changes in GitHub
5. **Vercel preview**: Test preview deployment
6. **Merge to main**: Deploy to production
7. **Monitor**: Watch for errors in Vercel dashboard

### Phase 11.3: Post-Launch Tasks

- [ ] Test production site thoroughly
- [ ] Verify all forms send correctly
- [ ] Check analytics reporting
- [ ] Monitor error logs
- [ ] Update DNS if needed
- [ ] Notify stakeholders
- [ ] Create documentation

---

## 🎯 Success Metrics

### Design Preservation Validation

**Visual Diff Check**:

- Take screenshots of original pages
- Compare with transformed pages
- Verify zero layout differences
- Confirm identical spacing/colors

**Code Validation**:

- CSS classes unchanged (except content)
- No new Tailwind utilities added
- Animation code identical
- Component structure preserved

### Content Transformation Validation

**Completeness Check**:

- All 3D references removed
- All consulting content added
- Calgary references present
- Service descriptions accurate
- Pricing information correct

**Consistency Check**:

- Tone of voice consistent
- Branding unified across pages
- CTAs clear and compelling
- Value propositions strong

---

## 🔧 Implementation Tools & Commands

### Essential Commands

\`\`\`bash
# Start development server
pnpm dev

# Build for production (check for errors)
pnpm build

# Type checking
pnpm tsc --noEmit

# Search for content to replace
grep -r "3D Animation" app/ components/
grep -r "ArchViz" app/ components/
grep -r "Skitbit" app/ components/

# Find image references
grep -r "\.png\|\.jpg\|\.webp" app/ components/

# Check for hardcoded prices
grep -r "\$299\|₹25,000" app/ components/
\`\`\`

### File Operations

\`\`\`bash
# Rename service page directories
mv app/3D-architecture-visualization-studio app/social-media-growth
mv app/3d-product-rendering app/brand-partnerships

# Copy template for new page
cp -r app/social-media-growth app/business-consulting

# Update file contents recursively
find app/social-media-growth -type f -exec sed -i '' 's/ArchViz/Social/g' {} +
\`\`\`

---

## 📝 Content Writing Guidelines

### Tone & Voice

**Brand Personality**:

- Professional yet approachable
- Local and community-focused
- Results-driven and data-backed
- Authentic and transparent

**Writing Style**:

- Clear and concise
- Avoid jargon
- Use Calgary-specific references sparingly
- Focus on benefits, not features
- Include social proof

### Key Messaging

**For Influencers**:

- "Grow your influence authentically"
- "Build partnerships that align with your values"
- "Data-driven strategies for sustainable growth"
- "From content creator to industry leader"

**For Calgary Businesses**:

- "Local expertise, global standards"
- "Digital transformation that drives results"
- "Calgary's trusted business growth partner"
- "Turn digital presence into revenue"

### Call-to-Action Examples

**Primary CTAs**:

- "Book Your Free Consultation"
- "Start Growing Today"
- "Let's Talk Strategy"
- "Get Your Custom Plan"

**Secondary CTAs**:

- "Learn More"
- "See Our Work"
- "View Case Studies"
- "Read Success Stories"

---

## 🚀 Execution Timeline

### Suggested Implementation Order

**Week 1: Foundation**

- Phase 1: Navigation (2 hours)
- Phase 2: Homepage Hero (3 hours)
- Phase 3: Features Section (2 hours)
- Phase 4: Pricing Section (3 hours)

**Week 2: Service Pages**

- Phase 5.1: Social Media Growth (4 hours)
- Phase 5.2: Brand Partnerships (3 hours)
- Phase 5.3: Business Consulting (4 hours)

**Week 3: Supporting Content**

- Phase 6: All supporting pages (6 hours)
- Phase 7: Footer & global components (2 hours)

**Week 4: Assets & Polish**

- Phase 8: Asset replacement (6 hours)
- Phase 9: API routes (2 hours)
- Phase 10: Testing & QA (6 hours)

**Week 5: Launch**

- Phase 11: Deployment & monitoring (4 hours)
- Post-launch fixes and optimization

**Total Estimated Time**: ~45-50 hours

---

## 📚 Reference Materials

### Current Content Inventory

**Homepage**:

- Hero: HIGH-IMPACT 3D ANIMATION FOR BRANDS
- Features: Best studio, adaptability, client love
- Pricing: 3 tiers ($299, $699, $2,049)

**Service Pages**:

1. ArchViz: Architecture visualization, CGI walkthroughs
2. Product Rendering: Studio-quality product visuals
3. Product Animation: Motion-led storytelling

**Navigation**: 3 services + 4 info pages

### Target Content Outline

**Homepage**:

- Hero: AMPLIFY YOUR DIGITAL PRESENCE IN CALGARY
- Features: Calgary expertise, client success, proven results
- Pricing: 3 tiers ($999, $2,499, $4,999 CAD)

**Service Pages**:

1. Social Media Growth: Influencer strategies
2. Brand Partnerships: Collaboration consulting
3. Business Consulting: Calgary business transformation

**Navigation**: 3 services + 4 info pages (same structure)

---

## 🎓 Learning Resources for Implementation

### Next.js 14 App Router

- File-based routing in `/app` directory
- Server/Client component patterns
- Metadata API for SEO
- Route handlers for APIs

### Component Patterns

- All components use TypeScript
- Functional components with hooks
- Radix UI for accessible primitives
- Tailwind for styling

### State Management

- localStorage for content persistence
- React hooks for local state
- Server actions for form handling

---

## ⚠️ Common Pitfalls to Avoid

### Design System Violations

**DON'T**:

- Change color hex values
- Modify spacing variables
- Alter animation durations
- Adjust border radius values
- Change font sizes or weights
- Modify gradient angles
- Alter component heights/widths
- Change responsive breakpoints

**DO**:

- Only change text strings
- Only update image sources
- Only modify route names
- Only update metadata
- Only change form field labels

### Content Mistakes

**DON'T**:

- Leave any 3D/animation references
- Use generic consulting language
- Ignore Calgary local focus
- Copy competitor content
- Use overly technical jargon

**DO**:

- Be specific about services
- Include Calgary references naturally
- Use clear, benefit-focused copy
- Maintain professional tone
- Include social proof

### Technical Errors

**DON'T**:

- Break TypeScript types
- Remove accessibility attributes
- Skip responsive testing
- Ignore build errors
- Forget to update imports after renaming

**DO**:

- Run `pnpm build` frequently
- Test on multiple screen sizes
- Validate all forms work
- Check all links function
- Verify images load

---

## 📞 Support & Questions

### When Stuck

1. **Read agents.md**: Primary reference document
2. **Check this masterplan**: Detailed implementation steps
3. **Review original code**: Understand current patterns
4. **Test incrementally**: Small changes, frequent testing
5. **Use version control**: Commit working states

### Validation Commands

\`\`\`bash
# Validate no design changes
git diff --stat

# Check for remaining old content
grep -r "3D\|animation\|render" app/ components/ | grep -v node_modules

# Verify build succeeds
pnpm build

# Check TypeScript
pnpm tsc --noEmit
\`\`\`

---

## ✅ Final Checklist Before Completion

### Design Preservation

- [ ] Colors match exactly (use color picker)
- [ ] Spacing identical (measure in DevTools)
- [ ] Animations function identically
- [ ] Typography unchanged
- [ ] Layout structure preserved
- [ ] Responsive behavior identical

### Content Transformation

- [ ] Zero 3D/animation references remain
- [ ] All consulting content present
- [ ] Calgary focus appropriate
- [ ] Services clearly described
- [ ] Pricing accurate
- [ ] CTAs compelling and clear

### Technical Quality

- [ ] Build succeeds without errors
- [ ] All pages render correctly
- [ ] Forms submit successfully
- [ ] Navigation works completely
- [ ] Images load properly
- [ ] SEO metadata complete

### Business Requirements

- [ ] Reflects consulting agency vision
- [ ] Appeals to influencers
- [ ] Appeals to Calgary businesses
- [ ] Professional and credible
- [ ] Clear value propositions
- [ ] Easy to contact/book

---

## 🎉 Project Completion

Once all phases are complete and all checklists pass:

1. **Create final PR** with comprehensive description
2. **Deploy to production** via Vercel
3. **Monitor for 24 hours** for any issues
4. **Document learnings** for future reference
5. **Celebrate success** 🎊

---

**Document Version**: 1.0  
**Last Updated**: November 2, 2025  
**Status**: Ready for Implementation  
**Assigned Agent**: Claude Sonnet 4.5 (Thinking)

---

## 💡 Agent-Specific Implementation Notes

### For Claude Sonnet 4.5 Thinking

**Strengths to Leverage**:

- Deep reasoning for content decisions
- Careful preservation of design patterns
- Systematic approach to large transformations
- Attention to detail in code changes

**Recommended Workflow**:

1. Read entire masterplan before starting
2. Execute one phase completely before moving to next
3. Run validation checks after each phase
4. Use `think` tool for complex decisions
5. Document any deviations or discoveries
6. Test frequently throughout implementation

**When Making Decisions**:

- Prioritize design preservation over convenience
- Choose clarity over cleverness in content
- Maintain consistency across all pages
- Think about user experience impact
- Consider SEO implications

**Quality Standards**:

- Zero design system modifications
- Complete content transformation
- No broken functionality
- Professional content quality
- Comprehensive testing

---

*End of Masterplan*
