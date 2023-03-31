interface SiteConfig {
  name: string;
  description: string;
  links: {
    twitter: string;
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Qual Vai Ser",
  description: "Site para votaçōes rápidas",
  links: {
    twitter: "https://twitter.com/ocoiel",
    github: "https://github.com/ocoiel",
  },
};
