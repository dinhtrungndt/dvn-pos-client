import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ProductHeader } from './components/ProductHeader';
import { ProductSidebar } from './components/ProductSidebar';
import { ProductTable } from './components/ProductTable';
import { mockProducts } from './data';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDirectSale, setActiveDirectSale] = useState<'Tất cả' | 'Có' | 'Không'>('Tất cả');
  const [activeChannel, setActiveChannel] = useState<'Tất cả' | 'Có' | 'Không'>('Tất cả');
  const [activeStatus, setActiveStatus] = useState<'Tất cả' | 'Hàng đang kinh doanh' | 'Hàng ngừng kinh doanh'>('Tất cả');
  const [activeStock, setActiveStock] = useState<
    'Tất cả' | 'Còn hàng trong kho' | 'Hết hàng trong kho' | 'Dưới định mức tồn' | 'Vượt định mức tồn'
  >('Tất cả');

  // pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return mockProducts.filter((p) => {
      if (term) {
        const ok = p.name.toLowerCase().includes(term) || p.id.toLowerCase().includes(term);
        if (!ok) return false;
      }

      if (activeDirectSale === 'Có' && !p.directSale) return false;
      if (activeDirectSale === 'Không' && p.directSale) return false;

      if (activeChannel === 'Có' && !p.channel) return false;
      if (activeChannel === 'Không' && p.channel) return false;

      if (activeStatus !== 'Tất cả' && p.status !== activeStatus) return false;

      if (activeStock === 'Còn hàng trong kho' && p.stock <= 0) return false;
      if (activeStock === 'Hết hàng trong kho' && p.stock > 0) return false;

      // NOTE: mock data chưa có "định mức tồn", nên 2 filter này không thể chính xác.
      // Tạm thời: coi "Dưới định mức tồn" = stock <= 10, "Vượt" = stock >= 500 (bạn đổi tuỳ ý)
      if (activeStock === 'Dưới định mức tồn' && p.stock > 10) return false;
      if (activeStock === 'Vượt định mức tồn' && p.stock < 500) return false;

      return true;
    });
  }, [searchTerm, activeDirectSale, activeChannel, activeStatus, activeStock]);

  // reset về trang 1 mỗi khi filter thay đổi
  React.useEffect(() => {
    setPage(1);
  }, [searchTerm, activeDirectSale, activeChannel, activeStatus, activeStock, pageSize]);

  const total = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);

  const pageProducts = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, safePage, pageSize]);

  return (
    <>
      <Helmet>
        <title>Hàng hóa - DVN POS</title>
        <meta name="description" content="Quản lý danh sách hàng hóa, kiểm soát tồn kho và theo dõi giá bán trực quan." />
      </Helmet>

      <div className="h-[calc(100vh-114px)] -mx-4 -my-4 md:-mx-6 md:-my-6 p-3 md:p-4 bg-slate-100 overflow-hidden">
        <div className="h-full w-full rounded-2xl border border-slate-200 bg-white shadow-soft overflow-hidden flex flex-col">
          {/* Header */}
          <div className="px-4 py-3 border-b border-slate-200 bg-white">
            <ProductHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          {/* Body */}
          <div className="flex flex-1 min-h-0 overflow-hidden bg-slate-50">
            {/* Sidebar */}
            <div className="w-[260px] flex-shrink-0 border-r border-slate-200 bg-white min-h-0 overflow-y-auto custom-scrollbar">
              <ProductSidebar
                activeDirectSale={activeDirectSale}
                setActiveDirectSale={setActiveDirectSale}
                activeChannel={activeChannel}
                setActiveChannel={setActiveChannel}
                activeStatus={activeStatus}
                setActiveStatus={setActiveStatus}
                activeStock={activeStock}
                setActiveStock={setActiveStock}
              />
            </div>

            {/* Table */}
            <div className="flex-1 min-w-0 min-h-0 overflow-hidden bg-slate-50">
              <ProductTable
                products={pageProducts}
                page={safePage}
                pageSize={pageSize}
                total={total}
                totalPages={totalPages}
                onPageChange={setPage}
                onPageSizeChange={setPageSize}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
