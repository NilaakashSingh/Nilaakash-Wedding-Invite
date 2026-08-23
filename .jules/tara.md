## 2024-05-15 - [Radiogroup Accessibility for Custom Toggles]
**Learning:** Custom UI toggles acting as a mutually exclusive choice (like the Bride/Groom invite toggle) need proper ARIA roles (`radiogroup` and `radio`) and states (`aria-checked`) to be understood by screen readers, as well as visible focus styles.
**Action:** Always apply `role="radiogroup"` to the container and `role="radio"` + `aria-checked` to custom mutually-exclusive buttons, along with `focus-visible` styles for keyboard navigation.
