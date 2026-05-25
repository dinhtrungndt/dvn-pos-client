import { Outlet } from 'react-router-dom';
import { AdminHeader } from './AdminHeader';
import { AdminNav } from './AdminNav';

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#F0F2F5] flex flex-col font-sans">
      <AdminHeader />
      <AdminNav />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 py-4 md:px-6 md:py-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
