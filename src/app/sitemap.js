export default function sitemap() {
    return [
      {
        url: 'https://nextjs-starter-theme.vercel.app/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://nextjs-starter-theme.vercel.app/view-all-posts',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://nextjs-starter-theme.vercel.app/posts/themes',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }