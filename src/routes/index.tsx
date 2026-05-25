import RegisterView from '@/features/auth/views/RegisterView';
import LoginView from '@/features/auth/views/LoginView';
import HomePage from '@/features/home';
import AdminPage from '@/features/admin';
import ProductsPage from '@/features/products';
import PosPage from '@/features/pos';
import { AdminLayout } from '@/features/admin/components/AdminLayout';
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
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<AdminPage />} />
            <Route path="/products" element={<ProductsPage />} />
            {/* Thêm các route quản lý khác ở đây sau */}
          </Route>
          <Route path="/sale" element={<PosPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppRouter;
