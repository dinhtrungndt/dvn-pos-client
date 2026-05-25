import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { Product } from '../data';

export function ProductTable({
  products,
  page,
  pageSize,
  total,
  totalPages,
  onPageChange,
  onPageSizeChange,
}: {
  products: Product[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  onPageChange: (p: number) => void;
  onPageSizeChange: (s: number) => void;
}) {
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  const go = (p: number) => onPageChange(Math.min(Math.max(1, p), totalPages));

  // pages list kiểu: 1 2 3 ... n
  const pages = buildPages(page, totalPages);

  return (
    <div className="bg-white flex-1 flex flex-col h-full w-full">
      <div className="overflow-x-auto overflow-y-auto flex-1 relative custom-scrollbar">
        <table className="w-full min-w-[1200px] text-left border-collapse">
          <thead className="sticky top-0 z-10 bg-[#f4f7fa] border-b border-slate-200 text-[13px] text-slate-700 font-semibold">
            <tr>
              <th className="px-3 py-3 w-10 text-center">
                <input type="checkbox" className="rounded border-slate-300 w-4 h-4 cursor-pointer accent-blue-600" />
              </th>
              <th className="px-2 py-3 w-10 text-center">
                <Star className="w-4 h-4 text-slate-400 mx-auto" />
              </th>
              <th className="px-4 py-3 w-[72px]">Hình ảnh</th>
              <th className="px-4 py-3 w-[160px]">Mã hàng</th>
              <th className="px-4 py-3 min-w-[260px]">Tên hàng</th>
              <th className="px-4 py-3 text-right w-[140px]">Giá bán</th>
              <th className="px-4 py-3 text-right w-[140px]">Giá vốn</th>
              <th className="px-4 py-3 text-right w-[120px]">Tồn kho</th>
              <th className="px-4 py-3 text-right w-[120px]">Khách đặt</th>
              <th className="px-4 py-3 w-[170px]">Thời gian tạo</th>
              <th className="px-4 py-3 w-[170px]">Dự kiến hết hàng</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {products.length === 0 ? (
              <tr>
                <td colSpan={11} className="px-4 py-10 text-center text-slate-500">
                  Không tìm thấy hàng hóa nào phù hợp với điều kiện lọc.
                </td>
              </tr>
            ) : (
              products.map((product, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors text-[13.5px] text-slate-700 group cursor-pointer"
                >
                  <td className="px-3 py-3 text-center">
                    <input
                      type="checkbox"
                      className="rounded border-slate-300 w-4 h-4 cursor-pointer accent-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </td>

                  <td className="px-2 py-3 text-center">
                    <button
                      type="button"
                      className={`transition-colors ${product.isFav ? 'text-yellow-400' : 'text-slate-300 hover:text-yellow-400'}`}
                    >
                      <Star className="w-4 h-4 mx-auto" fill={product.isFav ? 'currentColor' : 'none'} />
                    </button>
                  </td>

                  <td className="px-4 py-3">
                    <div className="w-[42px] h-[42px] border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-sm">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <span className="font-semibold text-blue-600 group-hover:underline">{product.id}</span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-900 line-clamp-1">{product.name}</div>
                    <div className="mt-0.5 text-[12px] text-slate-500">{product.status}</div>
                  </td>

                  <td className="px-4 py-3 text-right font-semibold text-slate-900 tabular-nums">{product.price}</td>
                  <td className="px-4 py-3 text-right text-slate-600 tabular-nums">{product.cost}</td>

                  <td className="px-4 py-3 text-right">
                    <span
                      className={[
                        'inline-flex items-center justify-center min-w-[38px] px-2 py-0.5 rounded-full text-xs font-semibold tabular-nums border',
                        product.stock > 0 ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100',
                      ].join(' ')}
                    >
                      {product.stock}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-right text-slate-600 tabular-nums">{product.reserved}</td>
                  <td className="px-4 py-3 text-slate-500">{product.created}</td>
                  <td className="px-4 py-3 text-slate-400">---</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="border-t border-slate-200 px-4 py-3 flex items-center justify-between bg-slate-50 text-[13px] text-slate-600">
        <div className="text-slate-700">
          Hiển thị <span className="font-semibold text-slate-900 tabular-nums">{start} - {end}</span> trên tổng số{' '}
          <span className="font-semibold text-slate-900 tabular-nums">{total}</span> hàng hóa
        </div>

        <div className="flex items-center gap-2">
          {/* page size */}
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="h-8 rounded-md border border-slate-300 bg-white px-2 text-[13px] text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
          >
            {[10, 20, 50].map((n) => (
              <option key={n} value={n}>
                {n}/trang
              </option>
            ))}
          </select>

          <button
            onClick={() => go(page - 1)}
            disabled={page <= 1}
            className="h-8 px-2 rounded-md border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white transition-colors shadow-sm"
            title="Trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {pages.map((p, i) =>
              p === '...' ? (
                <span key={`dots-${i}`} className="px-1 text-slate-400">
                  ...
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => go(p)}
                  className={
                    p === page
                      ? 'w-8 h-8 flex items-center justify-center border border-blue-600 bg-blue-600 text-white rounded-md font-medium shadow-sm shadow-blue-600/20'
                      : 'w-8 h-8 flex items-center justify-center border border-slate-300 bg-white rounded-md hover:bg-slate-50 text-slate-700 font-medium transition-colors shadow-sm'
                  }
                >
                  {p}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => go(page + 1)}
            disabled={page >= totalPages}
            className="h-8 px-2 rounded-md border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white transition-colors shadow-sm"
            title="Sau"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function buildPages(current: number, total: number): Array<number | '...'> {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const out: Array<number | '...'> = [];
  const push = (v: number | '...') => out[out.length - 1] !== v && out.push(v);

  push(1);

  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);

  if (left > 2) push('...');

  for (let i = left; i <= right; i++) push(i);

  if (right < total - 1) push('...');

  push(total);

  return out;
}
