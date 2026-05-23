import RegisterView from '@/features/auth/views/RegisterView';
import LoginView from '@/features/auth/views/LoginView';
import HomePage from '@/features/home';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRouter() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppRouter;
