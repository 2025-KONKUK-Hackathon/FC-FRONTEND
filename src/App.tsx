import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import router from '@/router/Router';
import '@styles/global.css.ts';
import 'react-toastify/dist/ReactToastify.css';
import { queryClient } from '@api/queryClient';
import { toastConfig } from '@/shared/types/toast';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer {...toastConfig} />
    </QueryClientProvider>
  );
}

export default App;
