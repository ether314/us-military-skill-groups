# Military skill groups by headcount

An interactive page that ranks US military skill groups by headcount, lists the job codes for every branch under each group, and breaks the force down by paygrade.

- Live on GitHub Pages: https://ether314.github.io/us-military-skill-groups/
- Live on Firebase: https://us-military-skill-groups.web.app

## What it shows

- Skill groups ranked by people, with enlisted and officer personnel combined where the skill is the same. Filter by branch (Army, Navy, Marine Corps, Air Force, Space Force) and component (active duty, National Guard, Reserve), and color by enlisted/officer, component, or branch.
- 1,832 job codes under their groups: Army MOS, Navy ratings and officer designators, Marine Corps MOS, and Air Force AFSCs. Search by code or job title.
- Reported Air Force headcount by specialty, active duty, Sept. 30, 2024.
- Every active-duty paygrade, E-1 to E-9 and O-1 to O-10, plus warrant officers as one total.

## Data and method

- Headcounts are the DoD occupational groups from the FY2023 Population Representation report, as of Sept. 30, 2023. Active duty and the Selected Reserve (Guard and Reserve) are included. Paygrade counts are active duty only.
- Job code lists come from Wikipedia's pages for each branch. Each code is assigned to a DoD group by best fit, not by the official DoD 1312.1-I crosswalk, so some placements may differ from DoD's.
- The Army, Navy, and Marine Corps do not publish headcount by MOS or rating, so no per-code numbers are shown for them. Only the Air Force publishes counts by specialty.
- Left out: warrant officers in the group counts, Marine Corps billet designators and deleted MOS, Air Force shred-outs (the letters after a code), and Space Force codes, which these sources do not list separately.
- Air Force codes use `X` for the skill level, and Navy officer designators use `X` for the commission-status digit.

## Sources

- [Population Representation in the Military Services, FY2023](https://opamil-production1.app.cloud.gov/research-analysis/jamrs-recruiting-awareness/population-representation/2023-population-representation-in-the-military-services/), DoD Office of People Analytics: [Appendix B](https://opamil-production1.app.cloud.gov/research-analysis/jamrs-recruiting-awareness/population-representation/2023-population-representation-in-the-military-services/population-representation-in-the-military-services-fy23-appendix-b-active-component-accessions-and-force/) (Tables B-20, B-28, B-34, B-36, B-38) and [Appendix C](https://opamil-production1.app.cloud.gov/research-analysis/jamrs-recruiting-awareness/population-representation/2023-population-representation-in-the-military-services/population-representation-in-the-military-services-fy23-appendix-c-selected-reserve-gains-and-force/) (Tables C-14, C-23)
- [2025 USAF and USSF Almanac, Air & Space Forces Magazine](https://www.airandspaceforces.com/article/2025-usaf-ussf-almanac-daf-personnel/): Air Force headcount by specialty code
- Wikipedia: [Army careers](https://en.wikipedia.org/wiki/List_of_United_States_Army_careers), [Navy ratings](https://en.wikipedia.org/wiki/List_of_United_States_Navy_ratings), [Navy officer designators](https://en.wikipedia.org/wiki/List_of_United_States_Naval_officer_designators), [Marine Corps MOS](https://en.wikipedia.org/wiki/List_of_United_States_Marine_Corps_MOS), [Air Force Specialty Code](https://en.wikipedia.org/wiki/Air_Force_Specialty_Code)
- [DoD 1312.1-I, Occupational Conversion Index](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodm/131201i.pdf): the official grouping, for reference

## Build and test

The page is a single static file, `index.html`, assembled from `src/`:

| File | Purpose |
|---|---|
| `src/index.tpl.html` | Page markup |
| `src/style.css`, `src/dark.css` | Styles; `dark.css` holds the night-mode tokens |
| `src/app.js` | Headcount tables, paygrade data, and all page behavior |
| `src/data.js` | Job codes by branch and group |
| `src/topo.py` | Generates the topographic art in `src/topo.html` |
| `src/build.py` | Assembles `index.html` |
| `src/test.js` | Renders the page logic in Node across filter states |

```bash
python src/build.py
node src/test.js
```

Open `index.html` in a browser, or serve the folder with any static server.

## Notes

This is independent analysis of public data. It is not affiliated with or endorsed by the Department of Defense or any military service. No license has been added to this repository yet.
