import RegisterView from '@/features/auth/views/RegisterView';
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
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppRouter;
