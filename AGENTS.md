<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the gym website as one index route with reusable section styling in the global design system; this preserves a lightweight single-page experience.
- Store uploaded photography as Lovable Assets JSON pointers and derive branding only from the original sign; this keeps original media recognizable without committing large binaries.
- Keep business facts in a browser-safe data module with concrete tests; this prevents contact details and opening hours drifting between sections.
- Use Google Maps Embed with the managed browser key and a separate directions link; map rendering needs no public server proxy.

- Reveal mobile bottom actions only after the hero leaves view and hide them during menus or dialogs; reserve page-bottom space so controls never cover content.
- Keep retouched hero photography separate from original gallery assets; photographic cleanup must not introduce unverified equipment or facilities.
