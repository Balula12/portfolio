export const routes = {
  home: "/",
  projects: {
    index: "/projetos",
    detail: (slug: string) => `/projetos/${slug}` as const,
  },
  about: "/sobre",
  contact: "/contato",
  playground: {
    pong: "/playground/pong",
  },
} as const;
