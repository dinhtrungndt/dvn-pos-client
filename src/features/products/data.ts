export interface Product {
  id: string;
  name: string;
  price: string;
  cost: string;
  stock: number;
  reserved: number;
  created: string;
  isFav: boolean;
  image: string;
  directSale: boolean;
  channel: boolean;
  status: 'Hàng đang kinh doanh' | 'Hàng ngừng kinh doanh';
}

export const mockProducts: Product[] = [
  { id: 'SP000025', name: 'Thép cây Việt Nhật D16', price: '251,000', cost: '238,450', stock: 184, reserved: 0, created: '18/05/2026 08:27', isFav: false, image: 'https://cdn-app.kiotviet.vn/sample/construction/25.jpg', directSale: true, channel: false, status: 'Hàng đang kinh doanh' },
  { id: 'SP000024', name: 'Đá hồng Gia Lai', price: '280,000', cost: '266,000', stock: 0, reserved: 0, created: '18/05/2026 08:27', isFav: true, image: 'https://cdn-app.kiotviet.vn/sample/construction/24.jpg', directSale: true, channel: true, status: 'Hàng đang kinh doanh' },
  { id: 'SP000023', name: 'Thép Việt Ý - Thép cây D16', price: '252,000', cost: '239,400', stock: 10, reserved: 2, created: '18/05/2026 08:27', isFav: false, image: 'https://cdn-app.kiotviet.vn/sample/construction/23.jpg', directSale: false, channel: true, status: 'Hàng ngừng kinh doanh' },
  { id: 'SP000022', name: 'Sắt cuộn phi 6', price: '12,000', cost: '11,400', stock: 500, reserved: 50, created: '18/05/2026 08:27', isFav: true, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: true, channel: false, status: 'Hàng đang kinh doanh' },
  { id: 'SP000021', name: 'Đá đen Huế', price: '440,000', cost: '418,000', stock: 15, reserved: 0, created: '18/05/2026 08:27', isFav: false, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: true, channel: false, status: 'Hàng đang kinh doanh' },
  { id: 'SP000020', name: 'Ống hơi Sang-A Φ10', price: '16,000', cost: '15,200', stock: 200, reserved: 10, created: '18/05/2026 08:27', isFav: false, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: true, channel: true, status: 'Hàng đang kinh doanh' },
  { id: 'SP000019', name: 'Ống Sang-A U0604', price: '7,000', cost: '6,650', stock: 0, reserved: 0, created: '18/05/2026 08:27', isFav: false, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: false, channel: false, status: 'Hàng ngừng kinh doanh' },
  { id: 'SP000018', name: 'Nhựa đường đóng thùng IRAN M60/70', price: '14,400', cost: '13,680', stock: 80, reserved: 5, created: '18/05/2026 08:27', isFav: false, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: true, channel: true, status: 'Hàng đang kinh doanh' },
  { id: 'SP000017', name: 'Ống nhựa xoắn HDPE VCOM', price: '13,915', cost: '13,219', stock: 300, reserved: 0, created: '18/05/2026 08:27', isFav: true, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: true, channel: false, status: 'Hàng đang kinh doanh' },
  { id: 'SP000016', name: 'Xe phun tưới nhựa', price: '600,000,000', cost: '570,000,000', stock: 2, reserved: 1, created: '18/05/2026 08:27', isFav: false, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: false, channel: true, status: 'Hàng đang kinh doanh' },
  { id: 'SP000015', name: 'Xi măng Hà Tiên', price: '85,000', cost: '78,000', stock: 1250, reserved: 300, created: '17/05/2026 14:15', isFav: false, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: true, channel: true, status: 'Hàng đang kinh doanh' },
  { id: 'SP000014', name: 'Gạch ống Tuynel', price: '1,200', cost: '950', stock: 15000, reserved: 2000, created: '17/05/2026 09:10', isFav: true, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: true, channel: false, status: 'Hàng đang kinh doanh' },
  { id: 'SP000013', name: 'Cát xây tô', price: '250,000', cost: '210,000', stock: 0, reserved: 0, created: '16/05/2026 16:45', isFav: false, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: false, channel: false, status: 'Hàng ngừng kinh doanh' },
  { id: 'SP000012', name: 'Sơn nước nội thất Dulux', price: '1,450,000', cost: '1,250,000', stock: 24, reserved: 0, created: '15/05/2026 10:20', isFav: false, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: true, channel: true, status: 'Hàng đang kinh doanh' },
  { id: 'SP000011', name: 'Ngói lợp Đồng Tâm', price: '14,500', cost: '12,000', stock: 800, reserved: 100, created: '14/05/2026 08:30', isFav: true, image: 'https://cdn-app.kiotviet.vn/retailler/Content/img/empty/thumbnail-empty.svg', directSale: true, channel: false, status: 'Hàng đang kinh doanh' },
];
