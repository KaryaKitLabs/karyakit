# KaryaKit V1.0

A lightweight, browser-based utility app prototype.

## Included tools
1. Age calculator
2. Percentage calculator
3. EMI calculator
4. GST calculator
5. QR code generator
6. QR code scanner (camera or image)
7. Image compressor
8. Image resizer
9. Word counter
10. PDF merger

## Run locally
For a quick preview, open `index.html` in a modern browser. Most tools work this way, but PWA installation, service workers, and camera scanning require HTTPS or localhost.

Recommended local server:
- Install Python 3 if it is not already installed.
- Open a terminal in this folder and run: `python -m http.server 8000`
- Visit `http://localhost:8000`

## Publish free using Cloudflare Pages
1. Create a GitHub account and a new public repository.
2. Upload all files in this folder to the repository root.
3. In Cloudflare, open Workers & Pages → Create → Pages → Connect to Git.
4. Select the repository.
5. Use no build command; set the output directory to `/` (or leave the static site root setting as instructed by the current Cloudflare interface).
6. Deploy. Open the HTTPS URL on your phone.
7. In Chrome, use the browser menu → Install app / Add to Home screen.

## Offline behaviour
- Calculators, word counter, image processing, and locally stored app shell work offline.
- QR generation/scanning and PDF merging use small open-source libraries loaded from cdnjs. The service worker attempts to cache them on first successful online load. Open the app online once before testing those features offline.
- Camera scanning requires HTTPS (or localhost), browser camera permission, and a compatible device.
- If a library was not cached successfully, that particular tool will show an error until the app is online again.

## Important limitations
- This is a first prototype, not a WhatsApp-scale or production-hardened commercial app.
- No accounts, cloud sync, payments, analytics, or advertisements are included yet.
- The app does not upload the selected image/PDF files to a server.
- Validate calculator results before relying on them for financial decisions.
- Before monetising, add a privacy policy, terms, consent controls where required, accessibility checks, device testing, and appropriate ad/payment integrations.
- Play Store publication requires a Google Play developer account and its registration fee. A PWA can be hosted and installed without Play Store publication.

## Branding
"KaryaKit" is a working name only. Check trademark, domain, and app-store availability before public launch.
