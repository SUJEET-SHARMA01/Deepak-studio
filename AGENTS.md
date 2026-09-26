<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to Lovable. Avoid rewriting published git history.

<!-- LOVABLE:END -->

- Use TanStack Router file routes and shared site chrome in `src/routes/__root.tsx` because this is the fixed application architecture.
- Keep editable studio content and contact details centralized in `src/data/site.ts` so client handoff remains simple.
- Keep visual styling semantic and centralized in `src/styles.css` because the Obsidian Glass design must remain consistent.
