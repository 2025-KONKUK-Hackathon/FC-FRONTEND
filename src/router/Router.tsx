import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { ROUTES } from '@/router/constant/Routes';
import Layout from '@/router/Layout';

const Login = lazy(() => import('@pages/auth/login/Login'));
const SignUp = lazy(() => import('@pages/auth/signup/Signup'));

const GatheringCreate  = lazy(() => import('@pages/gathering/create/CreateGathering'));
const GatheringDetail  = lazy(() => import('@pages/gathering/detail/GatheringDetail'));
const GatheringList    = lazy(() => import('@pages/gathering/list/GatheringList'));
const GatheringMembers = lazy(() => import('@pages/gathering/members/ApplicantList'));

const PostsCreate = lazy(() => import('@pages/posts/create/CreatePost'));
const PostsDetail = lazy(() => import('@pages/posts/detail/PostDetail'));
const PostsList   = lazy(() => import('@pages/posts/list/PostList'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.SIGNUP,
        element: <SignUp />,
      },
      {
        path: ROUTES.GATHERING_LIST,
        element: <GatheringList />,
      },
      {
        path: ROUTES.GATHERING_CREATE,
        element: <GatheringCreate />,
      },
      {
        path: ROUTES.GATHERING_DETAIL,
        element: <GatheringDetail />,
      },
      {
        path: ROUTES.GATHERING_MEMBERS,
        element: <GatheringMembers />,
      },
      {
        path: ROUTES.POSTS_LIST,
        element: <PostsList />,
      },
      {
        path: ROUTES.POSTS_CREATE,
        element: <PostsCreate />,
      },
      {
        path: ROUTES.POSTS_DETAIL,
        element: <PostsDetail />,
      },
    ],
  },
]);

export default router;