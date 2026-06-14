# Implementation Plan - Add Journey Timeline Path

This plan outlines the steps to remove the "Skills" section and replace it with a visually stunning, responsive "Journey" timeline path showing internships and jobs.

## Proposed Changes

We will introduce a new page component showing the user's professional journey (internships and jobs) in the form of a timeline path. We will also update navigation links and references to replace "Skills" with "Journey".

### Navigation & Page Layout

#### [MODIFY] [Navigation.tsx](file:///d:/Desktop/Portolio%20Website/portfolio/src/components/feature/Navigation.tsx)
- Change "Skills" to "Journey" in both desktop and mobile navigation menus.
- Update the target ID from `#skills` to `#journey`.

#### [MODIFY] [page.tsx](file:///d:/Desktop/Portolio%20Website/portfolio/src/pages/home/page.tsx)
- Import `JourneySection` from `./components/JourneySection`.
- Remove `SkillsSection` and replace it with `JourneySection`.

### New Journey Component

#### [NEW] [JourneySection.tsx](file:///d:/Desktop/Portolio%20Website/portfolio/src/pages/home/components/JourneySection.tsx)
Create a new section component that displays the user's journey in a premium timeline layout:
- **Timeline Path Styling**: A glowing vertical line (animated dashed or glowing gradient) that runs down the center on desktop and on the left on mobile.
- **Milestones (Timeline Nodes)**:
  1. **July 2023 - Present**: VIT Bhopal University (Start of academic/technical journey in CSE Gaming Technology)
  2. **May 2025 - July 2025**: IIT Delhi (XR Research Intern)
  3. **January 2026 - March 2026**: Wabric (Immersive Experience Designer)
- **Glassmorphic Cards**: Each milestone will be rendered in a premium glassmorphic card (`bg-white/5` with backdrop blur and border) that shifts layout on hover, glows with neon borders, and displays:
  - Role Title (e.g. "XR Research Intern", "Immersive Experience Designer")
  - Organization name with logo/icon
  - Starting and ending dates
  - Detailed list of key achievements, tech stack used, and visual highlights.

#### [DELETE] [SkillsSection.tsx](file:///d:/Desktop/Portolio%20Website/portfolio/src/pages/home/components/SkillsSection.tsx)
- Remove the unused `SkillsSection.tsx` file.

---

## Verification Plan

### Automated Build check
- Run `npm run build` or `npm run dev` to verify TypeScript compile and bundler compatibility.

### Manual Verification
- Verify that the navigation buttons correctly scroll to the new Journey section.
- Ensure the layout is responsive (adapts smoothly between desktop layout and single-column mobile layout).
- Verify the interactive animations (hover effects, neon glows, scaling) work smoothly.
