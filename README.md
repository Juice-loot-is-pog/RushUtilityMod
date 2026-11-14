# Rush website

A plain static site: HTML, CSS and JavaScript, no build step. Open `index.html` in a browser, or serve the folder with any web server (for example `py -m http.server 8642` from this folder, then http://localhost:8642).

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Banner, Alpha vs Beta, **Get Rush** (download + how to get Beta), overview cards, FAQ |
| Mods | `mods/index.html` | Every mod, with search and All / Alpha / Beta only filters |

Each page is its own folder with an `index.html`, so its address is short (`/mods/`). To add a page, make a new folder such as `guides/` with an `index.html` copied from `mods/index.html`, then add a link to it in the top bar (`<nav>`) of **every** page.

## Folders

```
index.html            Home page
mods/index.html       Mods page
css/styles.css        All styling, shared by every page
js/modules.js         The list of mods (Alpha and Beta). Update this when Rush gets a new mod.
js/site.js            Shared by every page: mod counts and the slide-in animations
js/mods.js            Mods page only: draws the list and the search/filters
assets/images/        Logo, banners and space backgrounds
assets/fonts/         Comfortaa (fallback copy; pages load it from Google Fonts)
```

## Common changes

- **New Rush version:** change the version numbers in the banner of `index.html` (`Alpha v… · Beta v… · Minecraft …`) and the Minecraft version in Get Rush and the FAQ.
- **New mod:** add its ID to `ALPHA_MODS` or `BETA_MODS` in `js/modules.js` (the same IDs as `Rush/Rush/editions/*.modules`). Counts on every page update by themselves. If its name doesn't read well when split automatically ("AutoGap" → "Auto Gap"), add it to `MOD_NAMES`.
- **Colors and font:** the variables at the top of `css/styles.css` (`--red`, `--deep`, `--red-light`, `--font`, …). The vaporwave look of buttons and badges comes from the `--vapor-*` variables next to the button styles.
- **Images:** put new ones in `assets/images/` and refer to them from CSS as `../assets/images/<name>` (CSS paths start from the `css/` folder).
- **After changing CSS or JS:** bump the `?v=10` (to `?v=11`, and so on) at the end of the `<link>` and `<script>` addresses in every page, so visitors' browsers fetch the new file instead of an old saved copy.

## Links used

- Download: `https://github.com/Juice-loot-is-pog/Rush-Injector/releases/latest/download/Rush-Injector.exe` (always the newest release)
- Patreon: `https://www.patreon.com/cw/RushUtilityMod`
- Get my Beta key: `https://rush-download-service.juiceloot-github.workers.dev/patreon/login` (Rush Injector `download-service`)

Links between pages are relative (`mods/`, `../`), so the site works from any address, including a GitHub Pages project URL.
