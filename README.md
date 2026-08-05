# Maryland Neuro-Rehab Reference Website — Prototype 2.0

This is a self-contained static reference prototype for planning the proposed Maryland Neuro-Rehab website. It is more developed than a wireframe but intentionally retains clearly labeled placeholders where the practice must supply information or approve clinical, brand, legal, or operational decisions.

## Start here

- Open `index.html` to review the proposed website.
- Open `review/index.html` to use the decision guide and page-status map.
- Open `sitemap.html` to review the proposed public information architecture.
- Read `DEPLOY-TO-GITHUB-PAGES.md` before publishing.

## Prototype 2.0 additions

- Richer homepage and visitor pathways
- Dedicated review and decision guide
- Clear distinction among confirmed structure, working copy, and placeholders
- Stronger messaging and mission framework
- Practice-information placeholders on program and discipline pages
- Page-status inventory
- Browser-local review checklist
- No-index meta tags and `robots.txt`
- GitHub Pages support through `.nojekyll`
- Custom 404 page

## Run locally

From this folder:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Safety and publication status

The site is not a live clinical website. Demo forms do not transmit or store information. Before production use, the practice must verify all services, clinicians, credentials, insurance information, contact information, locations, forms, medical language, privacy handling, legal language, scheduling systems, and technical integrations.

The included no-index controls request that search engines not index the prototype, but they do not make a publicly hosted site private.
