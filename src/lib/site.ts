export const siteConfig = {
  siteUrl: "https://danielx.me",
  author: {
    name: "Daniel Xu",
    email: "hi@danielx.me",
  },
  defaultTitle: "Daniel Xu | Full Stack Software Engineer",
  defaultDescription:
    "Full stack software engineer studying mathematics and computer science at UC San Diego. Building products with TypeScript, React, Convex, Astro, and modern web tooling.",
  defaultOgImagePath: "/og-image.svg",
  locale: "en_US",
  twitterHandle: "@x0ba07",
  sameAs: [
    "https://github.com/x0ba",
    "https://x.com/x0ba07",
    "https://linkedin.com/in/daniel-xu-sd",
  ],
};

export const absoluteUrl = (pathOrUrl: string, base = siteConfig.siteUrl) =>
  new URL(pathOrUrl, base).toString();
