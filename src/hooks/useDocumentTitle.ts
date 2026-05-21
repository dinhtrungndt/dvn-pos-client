import { useEffect } from 'react';

export function useDocumentTitle(title: string) {
  useEffect(() => {
    // Lưu lại title cũ trước khi đổi
    const previousTitle = document.title;

    // Đổi title mới
    document.title = `${title} | DVN POS Cloud`;

    // Khi người dùng rời khỏi trang này (unmount component), trả lại title cũ (tùy chọn)
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
