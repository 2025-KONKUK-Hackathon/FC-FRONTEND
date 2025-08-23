import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { ROUTES } from '@router/constant/Routes';
import Layout from '@router/Layout';
import MainLayout from '@pages/mainLayout/MainLayout';

const Login = lazy(() => import('@pages/auth/login/Login'));
const SignUp = lazy(() => import('@pages/auth/signup/Signup'));

const GatheringCreate  = lazy(() => import('@pages/gathering/create/CreateGathering'));
const GatheringDetail  = lazy(() => import('@pages/gathering/detail/GatheringDetail'));
const GatheringList    = lazy(() => import('@pages/gathering/list/GatheringList'));
const GatheringMembers = lazy(() => import('@pages/gathering/members/ApplicantList'));

const PostCreate = lazy(() => import('@pages/posts/create/CreatePost'));
const PostDetail = lazy(() => import('@pages/posts/detail/PostDetail'));
const PostList   = lazy(() => import('@pages/posts/list/PostList'));

const NonFound = lazy(() => import('@shared/components/nonFound/NonFound'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // 인증 관련 페이지
      {
        path: ROUTES.AUTH.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.AUTH.SIGNUP,
        element: <SignUp />,
      },

      // 메인 화면
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <PostList />
          },
          {
            path: ROUTES.HOME, // "/posts" 또는 홈 경로
            element: <PostList />,
          },
          {
            path: ROUTES.GATHERING.LIST, // "/gatherings"
            element: <GatheringList />,
          },
        ]
      },

      // 상세, 생성 페이지
      {
        path: ROUTES.GATHERING.CREATE,
        element: <GatheringCreate />,
      },
      {
        path: ROUTES.GATHERING.DETAIL,
        element: <GatheringDetail />,
      },
      {
        path: ROUTES.GATHERING.MEMBERS,
        element: <GatheringMembers />,
      },
      {
        path: ROUTES.POSTS.CREATE,
        element: <PostCreate />,
      },
      {
        path: ROUTES.POSTS.DETAIL,
        element: <PostDetail />,
      },

      // 404 페이지
      {
        path: '*',
        element: <NonFound />,
      }
    ],
  },
]);

export default router;