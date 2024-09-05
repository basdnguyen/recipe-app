This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

1. Press Enter to perform search

2. The recommendation is calculated by first counting the most saved recipes by category, then try to find others of the same category that haven't been saved as favorite yet, limit to 3 recommended recipes.

3. The app use Redux Toolkit for state management.

4. I'm aware that there are still alot to improve, but my available time is limit, so I will focus on functionality instead of UI/UX