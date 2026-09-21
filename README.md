# My portfolio website

Personal website where I show my projects and my skills. A blog is planned.

## Technologies used

- [Astro](https://astro.build/)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Resend](https://resend.com/) for the contact form (via `/api/contact`)

## How to run the project

1. Clone the repository
2. Run `pnpm install` (previous installation of pnpm is required)
3. Create a `.env` file with the contact form credentials:
    - `RESEND_API_KEY`
    - `CONTACT_TO_EMAIL`
    - `CONTACT_FROM_EMAIL`
4. Run `pnpm dev` to start the development server

## Scripts

- `pnpm dev` — start the development server
- `pnpm build` — type-check and build the site
- `pnpm check` — run Astro type-checking
- `pnpm lint` — run ESLint
- `pnpm format` — format the code with Prettier

## TODO

- [ ] Add blog
