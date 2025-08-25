export const ROUTES = {
  HOME: "/",
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
  },
  MY_PAGE: "/my",
} as const;
