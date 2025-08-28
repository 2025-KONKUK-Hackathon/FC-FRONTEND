import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { ROUTES } from '@router/constant/Routes';
import Layout from '@router/Layout';
import MainLayout from '@pages/mainLayout/MainLayout';
import ProtectedRoute from '@router/ProtectedRoute';
import Info from '@pages/info/Info';

const Login = lazy(() => import('@pages/auth/login/Login'));
const SignUp = lazy(() => import('@pages/auth/signup/Signup'));

const GatheringCreate = lazy(() => import('@pages/gathering/create/CreateGathering'));
const GatheringDetail = lazy(() => import('@pages/gathering/detail/GatheringDetail'));
const GatheringList = lazy(() => import('@pages/gathering/list/GatheringList'));
const GatheringMembers = lazy(() => import('@pages/gathering/members/ApplicantList'));

const PostCreate = lazy(() => import('@pages/posts/create/CreatePost'));
const PostDetail = lazy(() => import('@pages/posts/detail/PostDetail'));
const PostList = lazy(() => import('@pages/posts/list/PostList'));

const User = lazy(() => import('@pages/user/User'));
const NotFound = lazy(() => import('@shared/components/notFound/NotFound'));

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
        path: ROUTES.HOME,
        element: (
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <PostList />,
          },
          {
            path: ROUTES.GATHERING.LIST,
            element: <GatheringList />,
          },
          // 유저 페이지
          {
            path: ROUTES.USER.DETAIL,
            element: <User />,
          },
          {
            path: ROUTES.INFO,
            element: <Info />,
          },
        ],
      },

      // 상세, 생성 페이지
      {
        path: ROUTES.GATHERING.CREATE,
        element: (
          <ProtectedRoute>
            <GatheringCreate />
          </ProtectedRoute>
        ),
      },
      {
        path: "/gather/detail/:id",
        element: (
          <ProtectedRoute>
            <GatheringDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.GATHERING.MEMBERS,
        element: (
          <ProtectedRoute>
            <GatheringMembers />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.POSTS.CREATE,
        element: (
          <ProtectedRoute>
            <PostCreate />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.POSTS.DETAIL,
        element: (
          <ProtectedRoute>
            <PostDetail />
          </ProtectedRoute>
        ),
      },

      // 404 페이지
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
