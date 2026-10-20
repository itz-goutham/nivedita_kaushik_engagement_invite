# Nivedita & Kaushik — Engagement Website

A static, mobile-friendly engagement invitation site. No framework, build step, database, or hosting fee is required.

## Publish to GitHub Pages

1. Create a new **public** repository on GitHub, e.g. `nivedita-kaushik-engagement`.
2. Upload all the files and the `assets` folder **from inside this folder** to the root of the repository. Keep `index.html` at the repository root.
3. Open **Settings → Pages** in GitHub.
4. Under **Build and deployment**, select **Deploy from a branch**, then choose **main** and **/(root)**. Click **Save**.
5. Once deployment completes, the site will be available at `https://YOUR-USERNAME.github.io/nivedita-kaushik-engagement/` (use your actual username/repository name).
6. Share the link via WhatsApp with the invitation JPG.

## Local preview

Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Edit details

- **Names, address, date, text:** edit `index.html`.
- **Styles, colors, fonts:** edit `styles.css`. Primary green: `#1e2b18`.
- **Scroll reveals and share behavior:** edit `script.js`.
- **Calendar event details:** edit `Nivedita's Engagement.ics` if date/time/venue changes.
- **Artwork:** replace items in `assets/` with the same filenames.

**Important:** The invite has the engagement on Wednesday, November 11, 2026. The site uses the event time and location as printed on that invitation. Check all spellings and details before sending.

Fonts are loaded from Google Fonts, requiring a connection for the custom typography. The fallback Georgia/serif fonts remain readable without a connection.

## WhatsApp preview image

The site already includes Open Graph meta tags pointing to `assets/engagement-invitation.jpg`, so after GitHub Pages is live, WhatsApp should use your invitation image as the link preview.

If the preview does not update immediately:
1. Make sure the repository is **public**.
2. Wait 1-5 minutes after deployment.
3. Re-share the exact GitHub Pages URL.
4. If WhatsApp keeps showing an old preview, open the URL once in a browser, or use the Facebook Sharing Debugger to refresh the cache.

If you change the repository name or use a custom domain later, keep `assets/engagement-invitation.jpg` available at the same path so the preview continues to work.
