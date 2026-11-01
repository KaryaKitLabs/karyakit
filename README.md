# KaryaKit V1.1 — Phase 2 update

A lightweight, browser-based utility website with ten tools and public information pages.

## Included
- 10 everyday tools: age, percentage, EMI and GST calculators; QR generator and scanner; image compressor and resizer; word counter; PDF merger.
- About, Privacy Policy and Contact pages.
- Search-engine metadata, canonical URLs, Open Graph metadata, `robots.txt` and `sitemap.xml`.
- Updated service-worker cache for the new pages.

## Deploying your update
1. Extract this ZIP.
2. Open your existing `KaryaKitLabs/karyakit` GitHub repository.
3. Replace the existing project files with the files in this folder and upload the new pages plus `robots.txt` and `sitemap.xml`.
4. Commit the changes.
5. Wait for the connected Cloudflare Worker deployment to finish, then open the website and refresh.

The project currently deploys as a Cloudflare Worker using the Git integration. It is not a Cloudflare Pages project.

## Privacy implementation notes
The app does not currently include accounts, analytics, ads or payments. Image/PDF processing is performed in the browser by the current app code. QR/PDF features load open-source libraries from cdnjs. Hosting and third-party CDN providers may process technical request data under their own policies. Review the Privacy Policy before public promotion and update it whenever the app's data practices change.

## Important limitations
This is an early-stage project, not a legal compliance certification or production security audit. The Privacy Policy is a plain-language description of the current implementation and should be reviewed if new services, trackers, accounts, ads or payment features are added.
