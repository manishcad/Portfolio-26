export default function sitemap() {
  // IMPORTANT: Change this to your actual domain
  const baseUrl = "https://githubrepochecker.vercel.app/";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
