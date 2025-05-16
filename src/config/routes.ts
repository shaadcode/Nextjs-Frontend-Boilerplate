export const pages = {
  // static route
  home: '/',
  blog: {
    base: '/blog',
    // dynamic
    post: (id: number) => `/blog/${id}`,
  },
};

export const routes = {
  auth: {
    base: '/auth',
    signin: '/singIn',
  },
};
