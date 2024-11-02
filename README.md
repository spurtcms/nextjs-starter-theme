# A statically generated blog example using Next.js and spurtcms

![Screenshot of spurtCMS using Presentation Tool to do Visual Editing](	https://dev.spurtcms.com/public/img/Blog2.jpg)

This starter is a statically generated blog that uses Next.js App Router for the frontend and [spurtcms][https://dev.spurtcms.com/] to handle its content. It comes with a native spurtcms that offers features like real-time collaboration and visual editing with live updates using [https://dev.spurtcms.com/documentation/].

The Studio connects to spurtcms, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more. You can use this starter to kick-start a blog or learn these technologies.

## Features

- Next.js v14
- Next.js App Router
- Styling with Tailwind CSS
- Dark & Light Mode
- Mobile Responsive
- skeleton loader 
- Optimized for SEO using Next.js's Metadata
- infinite scroll pagination
- New fetching and caching paradigms
- Server Actions for mutations



## Admin Panel Demo

### [https://nextjs-starter-theme.vercel.app/](https://nextjs-starter-theme.vercel.app/)




## Deploy your own

Use the Deploy Button below, you'll deploy the example using 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fspurtcms%2Fnextjs-starter-theme)

## Set up environment variables

Open .env and set  NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_BASEURL  to  be the URL to your GraphQL endpoint in spurtCMS. 

## Step 1. Steps to get API Key
 
 Before starting our Next JS starter theme blog template we need to go inside our spurtCMS Admin and get the default token that we will be using for displaying our content.

1.Inside your spurtCMS Admin Panel [spurtcms][https://dev.spurtcms.com/] navigate to API Keys.

![API Key 1 (1)](https://github.com/user-attachments/assets/b3806e8f-1dcd-4f75-88fe-8366b3036d47)



2.click on the Action key

![API Key 2 (1)](https://github.com/user-attachments/assets/7976ebe4-40f9-4c65-b99b-195e73ca2f9a)

3.Copy the api key

![API Key 3](https://github.com/user-attachments/assets/a3d34ac1-7243-4931-8a09-6c40c2d005b4)

Once you have your token add it to your env.


Your env should look like this:

```bash
NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_BASEURL=""
```
```bash
NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_TOKEN="your-api-token"
```
## Step 2. Run Next.js in development mode

```bash
npm install 
```
```bash
npm run dev
```
Your blog should be up and running on [http://localhost:3000!](http://localhost:3000!)


## Step 3. Run Next.js in production mode
```bash
npm run prod
```


## Feedback and Questions
If you have feedback or questions about this starter, please use the Github Issues on this repo, [(https://github.com/spurtcms/nextjs-starter-theme/issues)]

or Send Email to us [(support@spurtcms.com)]

