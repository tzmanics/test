This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Netlify

## Project Structure

The project has 4 main folders

- `articles`: This is where the articles that are rendered under the `/blog/[slug]` are created. These articles are created using [Markdown](https://www.markdownguide.org/). The slug is given by the name of the file. Each article will also be rendered as a card under the `/blog` page.
- `pages`: This is where all the pages that NextJS will rendered are created. Refer to [NextJS Pages](https://nextjs.org/docs/basic-features/pages) for more information.
- `public`: This is where all the static files (e.g. images) that will be publicly served are stored. Refer to [NextJS Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving) for more information
- `src`: Under the `src` folder there are 2 main folders. The `components` folder in which components are created, and the `theme` folder in which all theme related aspects of the site are created.
