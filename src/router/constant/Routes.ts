export const ROUTES = {
  HOME: '/',
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
  },
  GATHERING: {
    CREATE: '/gather/create',
    DETAIL: '/gather/detail',
    LIST: '/gather/list',
    MEMBERS: '/gather/members',
  },
  POSTS: {
    CREATE: '/posts/create',
    DETAIL: '/posts/detail/:id',
  },
  USER: {
    DETAIL: '/user/:id',
  },
  INFO: '/info',
} as const;
