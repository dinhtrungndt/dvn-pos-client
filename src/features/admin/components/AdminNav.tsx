import { ShoppingCart, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface NavSubItem {
  label: string;
  path: string;
  isNew?: boolean;
  isDivider?: boolean;
}

interface NavMegaGroup {
  title: string;
  items: NavSubItem[];
}

interface NavItemDef {
  id: string;
  label: string;
  path: string;
  isNew?: boolean;
  dropdown?: NavSubItem[];
  megaMenu?: NavMegaGroup[];
}

const NAV_ITEMS: NavItemDef[] = [
  { id: 'dashboard', label: 'Tổng quan', path: '/dashboard' },
  { 
    id: 'products', label: 'Hàng hóa', path: '/products',
    megaMenu: [
      {
        title: 'Hàng hóa',
        items: [
          { label: 'Danh sách hàng hóa', path: '/products' },
          { label: 'Thiết lập giá', path: '/price-book' }
        ]
      },
      {
        title: 'Kho hàng',
        items: [
          { label: 'Kiểm kho', path: '/stock-takes' },
          { label: 'Xuất dùng nội bộ', path: '/internal-use', isNew: true },
          { label: 'Xuất hủy', path: '/damage-items' }
        ]
      }
    ]
  },
  {
    id: 'purchase', label: 'Mua hàng', path: '/purchase',
    megaMenu: [
      {
        title: 'Nhà cung cấp',
        items: [
          { label: 'Nhà cung cấp', path: '/suppliers' },
          { label: 'Hóa đơn đầu vào', path: '/purchase-einvoice', isNew: true }
        ]
      },
      {
        title: 'Mua hàng',
        items: [
          { label: 'Nhập hàng', path: '/purchase-order' },
          { label: 'Trả hàng nhập', path: '/purchase-returns' }
        ]
      }
    ]
  },
  {
    id: 'orders', label: 'Đơn hàng', path: '/orders',
    dropdown: [
      { label: 'Đặt hàng', path: '/orders' },
      { label: 'Hóa đơn', path: '/invoices' },
      { label: 'Trả hàng', path: '/returns' },
      { label: 'Đối tác giao hàng', path: '/partner-delivery', isDivider: true },
      { label: 'Vận đơn', path: '/order-delivery' }
    ]
  },
  {
    id: 'customers', label: 'Khách hàng', path: '/customers',
    megaMenu: [
      {
        title: 'Khách hàng',
        items: [
          { label: 'Khách hàng', path: '/customers' }
        ]
      }
    ]
  },
  {
    id: 'employees', label: 'Nhân viên', path: '/employee',
    dropdown: [
      { label: 'Danh sách nhân viên', path: '/employee' },
      { label: 'Lịch làm việc', path: '/timesheet-update' },
      { label: 'Bảng chấm công', path: '/timesheet' },
      { label: 'Bảng lương', path: '/paysheet' },
      { label: 'Bảng hoa hồng', path: '/commission' },
      { label: 'Thiết lập nhân viên', path: '/employer-setting' },
    ]
  },
  { id: 'cashflow', label: 'Sổ quỹ', path: '/cashflow' },
  {
    id: 'reports', label: 'Báo cáo', path: '/reports',
    megaMenu: [
      {
        title: 'Phân tích',
        items: [
          { label: 'Kinh doanh', path: '/chart-sale' },
          { label: 'Hàng hóa', path: '/chart-product' },
          { label: 'Khách hàng', path: '/chart-customer' },
          { label: 'Hiệu quả', path: '/chart-finance' }
        ]
      },
      {
        title: 'Báo cáo',
        items: [
          { label: 'Cuối ngày', path: '/report-end-of-day' },
          { label: 'Bán hàng', path: '/report-sale' },
          { label: 'Đặt hàng', path: '/report-order' },
          { label: 'Hàng hóa', path: '/report-product' },
          { label: 'Khách hàng', path: '/report-customer' },
          { label: 'Nhà cung cấp', path: '/report-supplier' },
          { label: 'Nhân viên', path: '/report-user' },
          { label: 'Kênh bán hàng', path: '/report-channel' },
          { label: 'Tài chính', path: '/report-financial' }
        ]
      }
    ]
  },
  {
    id: 'online', label: 'Bán online', path: '/online',
    dropdown: [
      { label: 'Bán online', path: '/kiotviet-online' },
      { label: 'Website bán hàng', path: '/kiotviet-web' }
    ]
  },
  {
    id: 'tax', label: 'Thuế & Kế toán', path: '/tax', isNew: true,
    dropdown: [
      { label: 'Thuế & Kế toán', path: '/tax-declaration' },
      { label: 'Hóa đơn điện tử', path: '/e-invoice' }
    ]
  }
];

export function AdminNav() {
  return (
    <nav className="h-[44px] bg-[#0070F4] text-white flex items-center justify-between px-4 sticky top-0 z-40">
      {/* Menu items */}
      <div className="flex h-full no-scrollbar relative">
        {NAV_ITEMS.map((item) => (
          <div key={item.id} className="group relative flex h-full">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center h-full px-4 text-[14px] font-medium whitespace-nowrap transition-colors relative
                ${isActive ? 'bg-[#005BCA]' : 'hover:bg-[#005BCA]/80'}`
              }
            >
              {item.label}
              
              {(item.dropdown || item.megaMenu) && (
                <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70" />
              )}

              {item.isNew && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10 transform scale-75 origin-bottom-left">
                  Mới
                </span>
              )}
            </NavLink>

            {/* Dropdown (Single Column) */}
            {item.dropdown && (
              <div className="absolute top-full left-0 hidden group-hover:block w-[220px] bg-white shadow-xl border border-gray-200 py-2 rounded-b z-50">
                {item.dropdown.map((sub, idx) => (
                  <div key={idx}>
                    {sub.isDivider && <div className="h-[1px] bg-gray-100 my-1"></div>}
                    <NavLink
                      to={sub.path}
                      className="flex items-center px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors relative"
                    >
                      {sub.label}
                      {sub.isNew && (
                        <span className="ml-2 bg-red-50 text-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                          Mới
                        </span>
                      )}
                    </NavLink>
                  </div>
                ))}
              </div>
            )}

            {/* Mega Menu (Multi Column) */}
            {item.megaMenu && (
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl border border-gray-200 p-4 rounded-b z-50 min-w-max">
                <div className="flex gap-8">
                  {item.megaMenu.map((group, idx) => (
                    <div key={idx} className="flex flex-col min-w-[180px]">
                      <div className="text-[13px] font-bold text-gray-800 uppercase mb-2 border-b border-gray-100 pb-1">
                        {group.title}
                      </div>
                      <div className="flex flex-col">
                        {group.items.map((sub, sIdx) => (
                          <NavLink
                            key={sIdx}
                            to={sub.path}
                            className="flex items-center py-1.5 text-[14px] text-gray-700 hover:text-blue-600 transition-colors"
                          >
                            {sub.label}
                            {sub.isNew && (
                              <span className="ml-2 bg-red-50 text-red-500 border border-red-100 text-[10px] font-bold px-1.5 py-0.5 rounded-sm whitespace-nowrap">
                                Mới
                              </span>
                            )}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sale Button */}
      <div className="flex-shrink-0 ml-4">
        <a 
          href="/sale"
          target="_blank"
          className="h-8 bg-white text-[#0070F4] hover:bg-blue-50 font-semibold px-4 rounded flex items-center gap-2 transition-colors text-[14px] shadow-sm"
        >
          <ShoppingCart className="w-4 h-4" />
          Bán hàng
        </a>
      </div>
    </nav>
  );
}
