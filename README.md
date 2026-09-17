# My portfolio website

Personal website where I show my projects and my skills. A blog is planned.

## Technologies used

- [Astro](https://astro.build/)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/) for the contact form

## How to run the project

1. Clone the repository
2. Run `pnpm install` (previous installation of pnpm is required)
3. Create a `.env` file with the EmailJS credentials:
    - `PUBLIC_EMAILJS_SERVICE_ID`
    - `PUBLIC_EMAILJS_TEMPLATE_ID`
    - `PUBLIC_EMAILJS_PUBLIC_KEY`
4. Run `pnpm dev` to start the development server

## Scripts

- `pnpm dev` — start the development server
- `pnpm build` — type-check and build the site to `dist/`
- `pnpm preview` — preview the production build locally
- `pnpm check` — run Astro type-checking
- `pnpm lint` — run ESLint
- `pnpm format` — format the code with Prettier

## TODO

- [ ] Add blog
