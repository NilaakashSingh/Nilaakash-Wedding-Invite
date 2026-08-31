## 2024-05-15 - [Radiogroup Accessibility for Custom Toggles]
**Learning:** Custom UI toggles acting as a mutually exclusive choice (like the Bride/Groom invite toggle) need proper ARIA roles (`radiogroup` and `radio`) and states (`aria-checked`) to be understood by screen readers, as well as visible focus styles.
**Action:** Always apply `role="radiogroup"` to the container and `role="radio"` + `aria-checked` to custom mutually-exclusive buttons, along with `focus-visible` styles for keyboard navigation.

## 2024-05-16 - [Respect prefers-reduced-motion in IntersectionObserver triggers]
**Learning:** Lazy-loaded background videos that auto-play when scrolling into view via `IntersectionObserver` can still violate a user's `prefers-reduced-motion` setting. The motion check must be evaluated at the time of intersection before calling `.play()`.
**Action:** Always check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before triggering `.play()` inside an `IntersectionObserver` callback, relying on the `poster` fallback instead.

## 2024-05-17 - [Accessible Modals with Focus Traps]
**Learning:** Modals require more than just visual overlays to be accessible. They must trap keyboard focus within the modal content while open, return focus to the triggering element when closed, lock background scrolling, and use appropriate ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`).
**Action:** Always implement a complete focus trap (handling `Tab` and `Shift+Tab`), scroll locking, and ARIA attributes for custom modals to ensure a robust experience for keyboard and screen reader users.
