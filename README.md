# A statically generated blog example using Next.js and spurtcms

![Screenshot of spurtCMS using Presentation Tool to do Visual Editing](https://github.com/sanity-io/next.js/assets/81981/59ecd9d6-7a78-41c6-95f7-275f66fe3c9d)

This starter is a statically generated blog that uses Next.js App Router for the frontend and [spurtcms][https://demo.spurtcms.com/dashboard/] to handle its content. It comes with a native spurtcms that offers features like real-time collaboration and visual editing with live updates using [https://spurtcms.com/documentation].

The Studio connects to spurtcms, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more. You can use this starter to kick-start a blog or learn these technologies.

## Features

- Smooth admin login and intuitive dashboard.
- Quick navigatgion to channels, members, spaces from dashboard.
- Easy Admin Profile Update.
- Manage roles and assigning of permisions.
- Effortless team creation.
- Multilingual support.
- Customization of email templates
- Create and manage content
- Member management and member access
- Simple space creation


- Out of the box support for [Vercel Visual Editing](https://www.sanity.io/blog/visual-editing-sanity-vercel?utm_source=github.com&utm_medium=referral&utm_campaign=may-vercel-launch).

## Demo

### [https://demo.spurtcms.com/](https://demo.spurtcms.com/)

## Deploy your own

Use the Deploy Button below, you'll deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) as well as connect it to your Sanity dataset using [the Sanity Vercel Integration][integration].

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example cms-sanity next-sanity-blog
```

```bash
yarn create next-app --example cms-sanity next-sanity-blog
```

```bash
pnpm create next-app --example cms-sanity next-sanity-blog
```

# Configuration

- [Step 1. Set up the environment](#step-1-set-up-the-environment)
  - [Reuse remote envionment variables](#reuse-remote-envionment-variables)
  - [Using the spurtcms CLI](#using-the-sanity-cli)
    - [Creating a read token](#creating-a-read-token)
- [Step 2. Run Next.js locally in development mode](#step-2-run-nextjs-locally-in-development-mode)
- [Step 3. Populate content](#step-3-populate-content)
- [Step 4. Deploy to production](#step-4-deploy-to-production)
- [Next steps](#next-steps)

## Step 1. Set up the environment

### Reuse remote envionment variables

If you started with [deploying your own](#deploy-your-own) then you can run this to reuse the environment variables from the Vercel project and skip to the next step:

```bash
npx vercel link
npx vercel pull
```

### Using the spurtcms CLI

1.Clone the Git repository that contains spurtCMS Admin project files, PostgreSQL dump file and .env file from the path https://github.com/spurtcms-admin.git using the “git clone” command.

```bash
https://github.com/spurtcms/spurtcms-admin.git
```

2.Utilize the "Restore" feature in PgAdmin to populate the database with the necessary content from the database dump spurtCMS-admin.sql cloned in the above step.
Locate the .env file inside the project folder “spurtcms-admin-app” and configure it with the details of newly created database such as database name, user name, password etc

PostgreSQL Database Configuration

```bash
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_SSL_MODE=disable

```
3.Open the terminal within the project / cloned folder “spurtcms-admin-app”, note down the binary file name and execute the following command:



```bash
./{binary-file-name}
```
Now you can explore the features and functionalities of spurtCMS Admin for efficient content management.

4.This command initiates the spurtCMS Admin application, allowing you to begin your journey with this powerful content management system.
live demo of our intuitive Admin Panel .

```bash
Username : Admin
Password : Admin@123
```	


It's important that when you're asked `Would you like to add configuration files for a Sanity project in this Next.js folder?` that you answer `No` as this example is alredy setup with the required configuration files.

#### Creating a GraphqlAPI Endpoint

To enhance the functionality of GraphQL Playground, spurtCMS team has developed and integrated their custom packages like pkgcore and pkgcontent.

1. Ensure the pre-requisites of Go Environment is available ready in your system. Check our pre-requisites guideline for more details.
spurtCMS Admin application serves as the content source for spurtCMS GraphQL APIs and hence setup the admin application and execute it. Refer the spurtCMS admin setup detailed in this link. https://dev.spurtcms.com/documentation/cms-admin
```bash
https://dev.spurtcms.com/documentation/cms-admin
```
2. To initiate the setup process, the first step involves cloning the spurtCMS Template project structure from the GIT repository. https://github.com/spurtcms/spurtcms-graphql
```bash
$git clone https://github.com/spurtcms/spurtcms-graphql.git
```
3. Now it's time to setup the PostgreSQL database, the one which is a replica of spurtCMS Admin application as mentioned in pre-requisites (Step 1) above.
Locate the .env file of the GraphQL project folder and configure it with the details of newly imported admin database such as database name, user name, password etc
PostgreSQL Database Configuration
```bash
DB_HOST=localhost 
DB_PORT=5432 
DB_NAME=your_database_name 
DB_USER=your_database_user 
DB_PASSWORD=your_database_password 
DB_SSL_MODE=disable
```
4. Also, configure the admin application's base url i .env which is needed for GraphQL API to output the path of Media files.

```bash
#DOMAIN_URL ='https://demo.spurtcms.com/' 
##Example PORT='8081'
```
5. Your spurtCMS GraphQL API is ready to use now !! You can use the playground interface to check the sample request and response structure of each GraphQL endpoint. https://{your-domain-name}/play
```bash
$ go run server.go
```

> [!CAUTION]  
> Make sure to add `.env.local` to your `.gitignore` file so you don't accidentally commit it to your repository.

## Step 2. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

```bash
yarn install && yarn dev
```

```bash
pnpm install && pnpm dev
```

Your blog should be up and running on [https://nextjs-starter-theme.vercel.app/](https://nextjs-starter-theme.vercel.app/)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

## Step 3. Populate content

Open your spurtCMS that should be running on [https://demo.spurtcms.com/dashboard/](https://demo.spurtcms.com/dashboard/).

By default you're taken to the [https://demo.spurtcms.com/dashboard/].Click on the Channels tab on the left.You can view the list of entries.

<details>
<summary>View screenshot ✨</summary>

![screenshot](https://github.com/vercel/next.js/assets/81981/07cbc580-4a03-4837-9aa4-90b632c95630)

</details>

We're all set to do some content creation!

- Click on the **"New Entry"** button top left 
- Type some dummy data for the **Title**
- 
  </details>

- Fill in **Type your content here** with some dummy text
  <details>
 

- Upload an image by selecting a **Upload Image** 
  
  
  <details>
  <summary>Click the "Crop" button to adjust hotspots and cropping ✨</summary>

  ![screenshot](https://github.com/vercel/next.js/assets/81981/e905fc6e-5bab-46a7-baec-7cb08747772c)
  - Select Channel on the left side **Select Channel** 
  
  
  <details>
  </details>
 


  <details>
  <summary>You can preview the results live ✨</summary>

  ![screenshot](https://github.com/vercel/next.js/assets/81981/6c59eef0-d2d9-4d77-928a-98e99df4b1df)

  </details>



> [!IMPORTANT]  
> For each post record, you need to click **Publish** after saving for it to be visible outside Draft Mode. In production new content is using [Time-based Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#time-based-revalidation), which means it may take up to 1 minute before changes show up. Since a stale-while-revalidate pattern is used you may need to refresh a couple of times to see the changes.

## Step 4. Deploy to production

> [!NOTE]  
> If you already [deployed with Vercel earlier](#deploy-your-own) you can skip this step.

To deploy your local project to Vercel, push it to [GitHub](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github)/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

> [!IMPORTANT]  
> When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

After it's deployed link your local code to the Vercel project:

```bash
npx vercel link
```


## Next steps

- [Join the spurtcms community for support](https://picco.support/#/auth/login-client)

## Related examples

- [AgilityCMS](/examples/cms-agilitycms)
- [Builder.io](/examples/cms-builder-io)
- [ButterCMS](/examples/cms-buttercms)
- [Contentful](/examples/cms-contentful)
- [Cosmic](/examples/cms-cosmic)
- [DatoCMS](/examples/cms-datocms)
- [DotCMS](/examples/cms-dotcms)
- [Drupal](/examples/cms-drupal)
- [Enterspeed](/examples/cms-enterspeed)
- [Ghost](/examples/cms-ghost)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent-ai)
- [Prepr](/examples/cms-prepr)
- [Prismic](/examples/cms-prismic)
- [Sanity](/examples/cms-sanity)
- [Sitefinity](/examples/cms-sitefinity)
- [Storyblok](/examples/cms-storyblok)
- [TakeShape](/examples/cms-takeshape)
- [Umbraco heartcore](/examples/cms-umbraco-heartcore)
- [Webiny](/examples/cms-webiny)
- [Blog Starter](/examples/blog-starter)
- [WordPress](/examples/cms-wordpress)

[vercel-deploy]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fcms-sanity&repository-name=cms-sanity&project-name=cms-sanity&demo-title=Blog%20using%20Next.js%20%26%20Sanity&demo-description=Real-time%20updates%2C%20seamless%20editing%2C%20no%20rebuild%20delays.&demo-url=https%3A%2F%2Fnext-blog.sanity.build%2F&demo-image=https%3A%2F%2Fgithub.com%2Fsanity-io%2Fnext-sanity%2Fassets%2F81981%2Fb81296a9-1f53-4eec-8948-3cb51aca1259&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx
[integration]: https://www.sanity.io/docs/vercel-integration
[`.env.local.example`]: .env.local.example
[unsplash]: https://unsplash.com
[sanity-homepage]: https://www.sanity.io?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[presentation]: https://www.sanity.io/docs/presentation
[enable-ai-assist]: https://www.sanity.io/plugins/ai-assist#enabling-the-ai-assist-api
