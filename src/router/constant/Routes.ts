export const ROUTES = {
  AUTH: {
    LOGIN: "/login",
    SIGNUP: "/signup",
  },
  GATHERING: {
    CREATE: "/gather/create",
    DETAIL: "/gather/detail/:id",
    LIST: "/gather/list",
    MEMBERS: "/gather/members",
  },
  POSTS: {
    CREATE: "/posts/create",
    DETAIL: "/posts/detail/:id",
    LIST: "/posts/list"
  },
} as const;
