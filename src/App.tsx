import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import router from '@/router/Router';
import '@styles/global.css.ts';
import 'react-toastify/dist/ReactToastify.css';
import { queryClient } from '@api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          backgroundColor: '#ffffff',
          color: '#000000',
          fontSize: '1.2rem',
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
