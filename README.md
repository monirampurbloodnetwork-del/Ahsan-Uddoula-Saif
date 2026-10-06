# Ahsan Uddoula Saif — Premium Static Portfolio

A premium black/green personal portfolio built with plain HTML, CSS and JavaScript.

## Features

- Fully responsive premium design
- Profile photo included
- About, education, skills, interests and contact sections
- Instagram and Facebook links
- Hidden admin area at `/admin/`
- No database
- Admin changes are stored in browser `localStorage`
- Profile photo can be changed from the admin panel
- Skills, facts, education, interests and text can be edited
- No visible Admin button on the public website
- Footer credit: `Developed by © Zarif`

## Important limitation

Because this is a **database-free static website**, edits made in the admin panel are saved only in the browser/device where they are made. They do not automatically update the site for other visitors.

For a real multi-device CMS, a backend/database would be required.

Also, the admin PIN is a client-side gate, not server-level security. Do not treat it as a secure authentication system on a public repository.

## GitHub Pages

1. Create a GitHub repository.
2. Upload all files from this folder.
3. If you want the clean URL `https://yourdomain.com/admin/`, deploy at the domain root.
4. In GitHub: **Settings → Pages → Deploy from branch → main → /(root)**.
5. Open the public site.
6. The admin area is manually reachable at `/admin/` and is not linked from the public navigation.

If the repository is a project site (for example `username.github.io/portfolio/`), the admin path will be under the repository path: `/portfolio/admin/`.

## Admin PIN

Default PIN: `2468`

Change it from **Admin → Security** after first login.

## Files

- `index.html` — public portfolio
- `style.css` — public styling
- `script.js` — public data/rendering
- `admin/index.html` — admin interface
- `admin/admin.css` — admin styling
- `admin/admin.js` — admin editor
- `assets/profile.jpg` — supplied profile image
