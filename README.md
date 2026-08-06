# Neuro-Rehab Reference Site 4.0

This is a clean rebuild generated from one structured source. It is a planning prototype, not an approved clinical website.

## Open locally

Double-click `index.html`, or run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Publish to GitHub Pages

1. Keep the existing GitHub repository.
2. Delete the currently published prototype files from the repository's `main` branch.
3. Extract this ZIP.
4. Upload **the contents inside this folder**, not the folder itself and not only the ZIP.
5. Confirm that `index.html`, `.nojekyll`, `programs`, `services`, `conditions`, `patients`, `about`, `review`, and `legal` are all at the repository root.
6. Commit the replacement.
7. Keep GitHub Pages configured to deploy from `main` and `/ (root)`.
8. After deployment completes, open the site in a private/incognito window or press Ctrl+F5.

## Important

- Every HTML page contains its own complete CSS and JavaScript.
- No page depends on files from Version 2.0 or Version 3.0.
- All links are generated relative to the page location, so the site works under a GitHub Pages repository subpath.
- Forms are demonstrations only and transmit nothing.
- Do not place patient or confidential information in this public prototype.
