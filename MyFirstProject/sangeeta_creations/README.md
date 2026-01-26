# What is this?

The github.dev web-based editor is a lightweight editing experience that runs entirely in your browser. You can navigate files and source code repositories from GitHub, and make and commit code changes.
Hello 
There are two ways to go directly to a VS Code environment in your browser and start coding:

* Press the . key on any repository or pull request.
* Swap `.com` with `.dev` in the URL. For example, this repo https://github.com/github/dev becomes http://github.dev/github/dev

Preview the gif below to get a quick demo of github.dev in action.

![github dev](https://user-images.githubusercontent.com/856858/130119109-4769f2d7-9027-4bc4-a38c-10f297499e8f.gif)

# Why?
It’s a quick way to edit and navigate code. It's especially useful if you want to edit multiple files at a time or take advantage of all the powerful code editing features of Visual Studio Code when making a quick change. For more information, see our [documentation](https://github.co/codespaces-editor-help).
crochet-showcase/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx                 // Home: hero + featured categories
│  ├─ gallery/
│  │  ├─ page.tsx              // All items (images + videos)
│  │  └─ [slug]/page.tsx       // Category page (e.g., toys, bags)
│  ├─ item/
│  │  └─ [id]/page.tsx         // Item detail (optional)
│  ├─ api/
│  │  └─ revalidate/route.ts   // On-demand ISR hook (future CMS)
├─ components/
│  ├─ GalleryGrid.tsx
│  ├─ MediaCard.tsx
│  ├─ Lightbox.tsx
│  ├─ VideoPlayer.tsx
│  ├─ CategoryTabs.tsx
│  └─ Navbar.tsx
├─ lib/
│  ├─ content.ts               // Loads JSON content
│  └─ types.ts                 // TypeScript models
├─ content/
│  ├─ categories.json          // Category metadata
│  └─ items/
│     ├─ toys.json
│     ├─ clothes.json
│     ├─ decorative.json
│     ├─ bags.json
│     ├─ mobile-covers.json
│     └─ customized.json
├─ public/
│  └─ media/
│     ├─ images/…              // .jpg/.png/.webp
│     └─ videos/…              // .mp4/.webm
├─ styles/
│  └─ globals.css
├─ next.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md
