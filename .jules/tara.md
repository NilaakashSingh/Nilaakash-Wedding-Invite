## 2024-05-15 - [Radiogroup Accessibility for Custom Toggles]
**Learning:** Custom UI toggles acting as a mutually exclusive choice (like the Bride/Groom invite toggle) need proper ARIA roles (`radiogroup` and `radio`) and states (`aria-checked`) to be understood by screen readers, as well as visible focus styles.
**Action:** Always apply `role="radiogroup"` to the container and `role="radio"` + `aria-checked` to custom mutually-exclusive buttons, along with `focus-visible` styles for keyboard navigation.

## 2024-05-20 - [Lazy-Loaded Autoplay and prefers-reduced-motion]
**Learning:** When autoplaying video backgrounds programmatically (e.g., via `IntersectionObserver` when scrolled into view) rather than using standard HTML `autoplay` attributes, CSS-based `@media (prefers-reduced-motion: reduce)` rules aren't enough.
**Action:** Always check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` inside JS observers/callbacks before calling `.play()` on a video element to respect the user's motion preferences.
