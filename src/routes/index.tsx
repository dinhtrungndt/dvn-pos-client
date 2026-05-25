import RegisterView from '@/features/auth/views/RegisterView';
import LoginView from '@/features/auth/views/LoginView';
import HomePage from '@/features/home';
import AdminPage from '@/features/admin';
import PosPage from '@/features/pos';
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
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/pos" element={<PosPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppRouter;
