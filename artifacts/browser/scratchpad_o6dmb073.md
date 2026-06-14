# Task: Verify Journey Section Updates

## Checklist
- [x] Navigate to http://localhost:5173/Portfolio-Website (Already open, need to ensure it's loaded and active)
- [x] Scroll to 'Journey' section
- [x] Verify subtitle: "A chronological timeline of my professional experiences, research internships, and jobs."
- [x] Verify timeline items:
    - [x] 1st: IIT Delhi
    - [x] 2nd: LioMonk (Nov 2025)
    - [x] 3rd: Wabric (2026)
- [x] Hover over cards and capture screenshots:
    - [x] Hover IIT Delhi + screenshot (Saved as hover_iit_delhi)
    - [x] Hover LioMonk + screenshot (Saved as hover_liomonk)
    - [x] Hover Wabric + screenshot (Saved as hover_wabric)

## Plan for Hovering
We will use 1000-grid coordinates for hovering.
Since the timeline is alternating:
- Card 1 (IIT Delhi): Left side. Try X=300, Y=350. (Done)
- Card 2 (LioMonk): Right side. Try X=700, Y=580. (Done, adjusted to X=800, Y=580 to ensure right side hover)
- Card 3 (Wabric): Left side. Try X=300, Y=800. (Done, adjusted to X=200, Y=800 to ensure left side hover)
We will verify the hover effect (glow/expansion) in screenshots.
