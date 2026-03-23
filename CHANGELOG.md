# Changelog

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## 2026-03-14

### Changed
- Flattened monorepo to single Next.js app at project root, removing Turborepo and pnpm workspaces
- Switched Effect tracer from `Effect.provide(tracerLayer)` to `Effect.withTracer()` for correct span persistence in ManagedRuntime
- Surfaced tracer errors by replacing fire-and-forget `runFork` with `runPromise` + `.catch` for `persistSpan`
- Added legacy X OAuth env var detection with actionable rename guidance in error messages
- Added legacy token migration to promote old-format Redis tokens to the new schema

### Removed
- `X_OWNER_SECRET` auth guard from `/api/x/auth` route

## 2026-03-10

### Added
- Owner-validated X bookmarks status endpoint at `/api/x/bookmarks/status`
- High-level and low-level design docs for the X bookmarks sync architecture under `docs/x-bookmarks/`
- Contract and service tests covering bookmark payload validation, owner verification, and stale snapshot fallback

### Changed
- Refactored X bookmarks into a class-based sync system with Zod contract validation
- Made `X_OWNER_USERNAME` the canonical bookmark owner configuration (required, no default)
- Reworked bookmark caching to keep owner-scoped snapshots and serve stale data when live sync fails
- Hardened OAuth callback/token handling to verify the authenticated X account before persisting tokens

## 2026-02-12

### Added
- `twitter-image` metadata routes for homepage and blog post pages
- Automated social metadata regression check script (`apps/www/scripts/check-social-metadata.mjs`) wired into `pnpm --filter www check`

### Changed
- Standardized canonical metadata origin to `https://www.claycurry.studio` for `metadataBase`, robots sitemap URL, and sitemap entries
- Expanded homepage and blog metadata with explicit canonical, Open Graph, and Twitter card fields for stable social previews

## 2026-02-11

### Added
- Plugin-based merge-criteria CI workflow with markdown template and Python rendering engine
- Commit message format check (commitlint) as a merge-criteria plugin
- Commitlint with `@commitlint/config-conventional` and husky hooks
- `CLAUDE.md` project instructions for Claude Code
- GitHub repository icon button next to the Ask AI button in the portfolio nav (opens in new tab)

### Changed
- Grid background from solid lines to dotted pattern using `radial-gradient`
- Grid color now uses theme-aware `--grid-color` variable instead of hardcoded values
- Hero contact button uses semantic `bg-background`/`text-foreground` tokens instead of `text-white`
- Ask AI buttons use `text-primary-foreground` instead of `text-white`
- Destructive button variant uses `text-destructive-foreground` instead of `text-white`
- Resume subheading to "Designer | Design Engineer"
- Moved San Francisco location to top of profile sidebar with Google Maps link
- Rewrote About section bio to describe engineering values and AI/ML interest
- Applied biome formatting and lint fixes across codebase
- Replaced deprecated `lucide-react` `Github`/`Linkedin` imports with `GithubIcon`/`LinkedinIcon`

### Removed
- `.light .grid-background` CSS override (no longer needed with `var(--grid-color)`)
- Old `require-changelog` workflow (replaced by merge-criteria system)

## 2026-02-10

### Added
- Dynamic OG images generated at build time for homepage and blog posts
- Blog post generateMetadata() for proper title/description
- Gray color scheme in theme cycle
- Shared loadGoogleFont utility for OG image rendering
- AWS certification details with Credly verification link

### Changed
- Resume subheading to "Design | DevEx | Engineer"
- Resume accordion allows multiple items open simultaneously
- Updated email in LICENSE.md
- Set metadataBase for correct OG URL resolution

### Removed
- Self-scraping OG API route (app/api/og/route.tsx)
- Static opengraph-image.png and twitter-image.png
- open-graph-scraper-lite dependency
- "So Good They Can't Ignore You" blog post
- Old LICENSE file

## 2026-02-09

### Added
- Theme cycling: all surface colors derive from primary hue with blue accent
- Farewell Seattle blog post
- PhotoCarousel and PhotoRow content components
- Carousel subtext support

### Changed
- Updated location to San Francisco
- Restructured contact page with Google Maps embed
- Added map pin to resume social links
- Light mode color cleanup

## 2026-02-08

### Added
- Badge-style skill tags on homepage
- Hero component extracted from homepage
- SectionHeader component for consistent section headings

### Changed
- Namespaced Redis keys by environment (prod:, preview:, dev:) to isolate data
- Updated X account handle to @claybuilds
- Replaced moon icon with lightbulb in dark mode toggles
- Restyled resume page: email button, skill chips, accordion animation

### Removed
- Contrast toggle button and related CSS
- Weather effects feature (added and removed in same cycle)
- Old apps/www directory (replaced by apps/www)
- Old packages/www directory
- Redundant GitHub link from footer
- Stale npm lockfile

## 2026-02-07

### Added
- Material Design 3 inspired color derivation chain
- TRON Legacy theme presets (cyan, orange, red, green)
- Cookie-based page view deduplication
- Click counter system with Redis persistence and toggle overlay
- Light/dark mode toggle
- Contrast toggle with low/medium/high presets

### Changed
- Tuned red theme to match #C60504
- Consolidated view counter components
- Moved theme toggle to footer, cleaned up nav
- Fixed grid background rendering

### Fixed
- Light mode colors and instant mode switching

### Removed
- Gold theme preset

## 2026-02-06

### Changed
- Refactored lib/components and lib/custom into domain-based structure (site/, chat/, content/)
- Extracted chat session hook, unified dual chat implementations

## 2026-02-05

### Changed
- Unified accent color as single source of truth for all cyan tokens
- Styled active nav pill with accent color scheme
- Centralized social links and site config into portfolio-data.ts
- Made background grid white, neutralized border color
- Used primary color for sidebar contact icons

## 2026-02-04

### Added
- Shared PostCard component (deduplicated WritingsSection and blog page)

### Changed
- Rewrote mathematics-in-mdx as pipeline-first architecture article
- Polished blog post layout and feedback widget
- Render code block filenames from fence metadata
- Matched InitialsAvatar to favicon.svg design

## 2026-02-03

### Changed
- Moved about page to root route
- Derived nav routes from filesystem instead of hardcoding
- Updated nav to use explicit hrefs

### Fixed
- /about 404 on blog pages

## 2026-02-02

### Changed
- Simplified to dark-mode only (removed theme provider)

### Fixed
- High/critical security vulnerabilities in dependencies

## 2026-02-01

### Fixed
- Background grid not visible in dev mode

## 2026-01-31

### Removed
- Unused image assets

## 2026-01-30

### Changed
- Fixed Tourney font loading

## 2026-01-29

### Changed
- Updated About section content

## 2026-01-28

### Added
- Sliding animation for nav active indicator
- Accent-2 color role for secondary highlights
- Dynamic InitialsAvatar component
- On This Page sidebar on desktop (xl breakpoint)

### Fixed
- TypeScript errors in AI components

## 2026-01-27

### Added
- README.md with tech stack badges (Turborepo, Webpack, Unified)
- Contributing guidelines with PR guidance
- LICENSE file

## 2026-01-26

### Added
- Streamdown markdown rendering for chat messages
- Blog-contextual AI chat (article content as context)

### Changed
- Improved chat UI sizing and layout

## 2026-01-25

### Added
- AI chat powered by Vercel AI SDK with Anthropic provider
- Custom chat UI components
- Mathematics in MDX blog post published

### Changed
- Replaced dynamic OG image with static image
- Updated bio text

### Removed
- Light cycle animation from portfolio nav

## 2026-01-24

### Added
- Log drain endpoint for referrer tracking
- Short URL redirects (/m for self-referral)
- First-touch referrer storage with cookie timestamps
- Return visit tracking separate from first-touch

## 2026-01-23

### Added
- Contact form with Resend email API integration

### Fixed
- Profile sidebar height stretching to full page
- Contact API build error (deferred Resend initialization)

## 2026-01-22

### Added
- Code block styling with language labels
- Page view counter component
- Blog sidebar with sticky navbar and absolute positioning

## 2026-01-21

### Added
- New UI components: accordion, carousel, dialog, tabs, toast
- Blog layout with sidebar navigation

### Fixed
- Next.js 16 build errors
- CVE-2025-66478 security vulnerability (Next.js update to 16.1.4)

## 2026-01-20

### Added
- MDX blog support with gray-matter frontmatter
- Syntax highlighting via rehype-pretty-code and shiki
- Table of contents generation via rehype-mdx-toc

## 2026-01-19

### Added
- Resume page components imported from old portfolio
- Tourney display font for headings

## 2026-01-18

### Added
- www app with TRON Legacy inspired design system
- Vercel React best practices agent skills
- Web design guidelines skill

### Removed
- next-tex package (consolidated into main app)

## 2026-01-17

### Changed
- Reorganized monorepo: moved link-checker to packages/

## 2026-01-15

### Added
- Stitch decorative component

## 2026-01-14

### Changed
- Cleaned up page index and excluded experimental pages

## 2026-01-13

### Added
- Combobox-style navigation component
- Color palette system

### Changed
- Extracted theme toggle into standalone component
- Improved OG image and spacing

## 2026-01-12

### Added
- Table of contents sidebar for blog posts

### Changed
- Refactored navigation and file structure

### Removed
- Unused blog posts

## 2026-01-11

### Added
- Link checker package for validating documentation links
- Linkinator submodule integration

## 2026-01-10

### Added
- Turborepo monorepo configuration with pnpm workspaces
- turbo.json with build, check, and test task pipelines

### Changed
- Migrated app files into apps/ directory structure

## 2026-01-09

### Added
- Blog summary section on homepage
- GitHub and blog links below hero section

## 2026-01-08

### Added
- LICENSE.md with WTFPL license
- Unit tests for MDX frontmatter parsing
- Copyright 2026 notice

## 2026-01-07

### Added
- Sitemap generation
- Page view tracking
- Syntax highlighting for code blocks
- Dynamic OG image generation

### Changed
- Revised mathematical typography in blog posts

## 2026-01-06

### Added
- Playwright test infrastructure
- MDX publish flag for draft posts

### Changed
- Moved blog content to src directory
- Refactored blog architecture

## 2026-01-05

### Fixed
- Mobile layout responsiveness

### Removed
- TODO.md and stale .env files

## 2026-01-04

### Added
- MathJax/KaTeX rendering support for blog posts

## 2026-01-03

### Changed
- Moved blog post metadata from page.tsx to MDX frontmatter

## 2026-01-02

### Changed
- Redesigned hero section with new copy

## 2026-01-01

### Added
- Clickable MDX section headings

## 2025-12-31

### Added
- Expanded resume page with detailed experience

## 2025-12-29

### Fixed
- Blog post rendering and import issues

## 2025-12-28

### Changed
- Fixed hardcoded sidebar data in blog post pages

## 2025-12-27

### Removed
- Dead code and unused exports

## 2025-12-26

### Changed
- Reindexed UI components

## 2025-12-25

### Added
- Email contact functionality
- Resume section with education and experience

### Changed
- Homepage styling and layout improvements

## 2025-12-24

### Added
- Server deployment configuration for AWS Fargate and Lambda

## 2025-12-23

### Added
- Homepage with hero section and portfolio content

## 2025-12-22

### Fixed
- Theme styling issues

## 2025-12-21

### Added
- Biome for linting and formatting (replacing ESLint)

## 2025-12-20

### Added
- Next.js app with dark theme and shadcn/ui component library
