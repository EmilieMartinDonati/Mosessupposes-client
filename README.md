# MOSES SUPPOSES


> **Note**
> :mage: To write this markdown I toyed with [hackmd.io](https://hackmd.io/)

## :genie: What's the concept ?

> **Note**
> The name was inspired by [this lil' piece of art](https://www.youtube.com/watch?v=zFAlZttXfvE)

- [ ] Provide AI-generated writing prompts based on themes (historical periods, mythical characters or historical figures) 
- [ ] Allow users to create short stories from the prompts and to share them 
- [ ] Allow users to participate in a collaborative Exquisite Cadaver

## :writing_hand: Who is it for ?

- [ ] Educational professional who would like their apprentices to write fictions based on the material studied in class, meaning to engage in the - dreaded by some - "écritures d'invention"
- [ ] Adults with child souls eager to immerse themselves in other universes

## :construction: Stack

> **Note**
> :eyes: See the code for back-end [here](https://www.goodreads.com/)

##### :small_blue_diamond: Framework: Next.js
##### :small_blue_diamond: Components: Bits
##### :small_blue_diamond: Store: Zustand
##### :small_blue_diamond: Text Editor: Quill
##### :small_blue_diamond: Styles: ShadCN
##### :small_blue_diamond: Back: Bun + mongoDB and Mongoose
##### :small_blue_diamond: Deploy: Heroku
##### :small_blue_diamond: AI: MongoDB Vector Embeddings

## :calendar: Timeline

> **Warning**
> I don't have much time atm (too many projects :rabbit2:) so I'll go at a slow (but deliberate) pace

##### :small_orange_diamond: April 2024 

- [ ] Set up the repos and install libraries
- [ ] Figma to visual user flow and main navigation

##### :small_orange_diamond: May-June 2024

- [ ] Integrate MongoDB Vector Embeddings and define the training materials for this AI
- [ ] Routing with Next.js

---

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
