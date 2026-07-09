## Create Blog Page with Soro Embed

### Steps:

1. **Create `src/pages/Blog.tsx`**
   - Simple page with a hero header ("Blog" / "Insights & Resources")
   - Contains the Soro embed target `<div id="soro-blog"></div>`
   - Dynamically injects the Soro script tag on mount via `useEffect` (React strips `<script>` tags from JSX, so we need to append it programmatically)
   - Sets page title/meta description for SEO
   - Cleans up the script on unmount

2. **Register route in `src/App.tsx`**
   - Add `<Route path="/blog" element={<Blog />} />`

3. **Add "Blog" link to navigation in `src/components/Header.tsx`**
   - Insert Blog item in the `menuItems` array (between Life Insurance and Dental, or before Contact — user can confirm placement)

### Technical Notes:
- The Soro script uses `defer`, but since we're loading it after initial page render, we'll append it as a normal async script to the document body. The `#soro-blog` div will already exist when the script runs.
- No changes needed to backend, styles, or other pages.

### Question:
Where in the nav should the "Blog" link go? Options:
- Between "Life Insurance" and "Dental"
- Right before "Contact"
- Somewhere else

If you don't specify, I'll place it right before "Contact".