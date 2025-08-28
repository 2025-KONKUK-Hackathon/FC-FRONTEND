import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@router/constant/Routes';
import LoadingSvg from '@shared/components/loading/Loading';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      navigate(ROUTES.AUTH.LOGIN);
    }
  }, [navigate]);

  // accessToken이 없으면 로딩 화면을 보여주고, 있으면 children을 렌더링
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    return <LoadingSvg />;
  }

  return <>{children}</>;
}
