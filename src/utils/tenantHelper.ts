/**
 * Hàm hỗ trợ chuyển hướng người dùng sang trang Login của đúng Gian hàng.
 * Tự động nhận diện đang chạy ở localhost hay trên mạng thật.
 */
export const redirectToTenantLogin = (subdomain: string) => {
  const rootDomain = import.meta.env.VITE_ROOT_DOMAIN || 'dinhtrung.id.vn';

  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  if (isLocalhost) {
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
