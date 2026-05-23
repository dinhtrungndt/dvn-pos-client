/**
 * Hàm hỗ trợ chuyển hướng người dùng sang trang Login của đúng Gian hàng.
 * Tự động nhận diện đang chạy ở localhost hay trên mạng thật.
 */
export const redirectToTenantLogin = (subdomain: string) => {
  const rootDomain = import.meta.env.VITE_ROOT_DOMAIN || 'dinhtrung.id.vn';

  // Dùng import.meta.env.DEV của Vite để tự động nhận diện đang chạy dev server (npm run dev)
  // Dù bạn có truy cập bằng localhost hay qua domain Cloudflare tunnel thì nó vẫn hiểu là đang dev.
  const isDev = import.meta.env.DEV || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  if (isDev) {
    // Vì localhost không có subdomain, ta lưu tạm subdomain vào localStorage
    // và chuyển sang đường dẫn /login trên chính localhost
    localStorage.setItem('dvn_tenant', subdomain);
    window.location.href = '/login';
  } else {
    // NẾU ĐANG CHẠY TRÊN INTERNET THẬT (Hoặc qua Cloudflare Tunnel):
    // Cấu trúc URL: https://[subdomain].[domain-gốc]/login
    window.location.href = `https://${subdomain}.${rootDomain}/login`;
  }
};
