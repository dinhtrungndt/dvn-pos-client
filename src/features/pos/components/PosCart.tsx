import { ShoppingCart } from 'lucide-react';

export function PosCart({ saleMode }: { saleMode: string }) {
  return (
    <div className="flex-1 flex flex-col bg-white h-full relative">
      {/* Danh sách sản phẩm trong giỏ (Trống) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex items-center justify-center bg-slate-50/50">
        <div className="text-center text-slate-400">
          <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p className="text-[14px]">Chưa có hàng hóa nào trong hóa đơn</p>
        </div>
      </div>

      {/* Tổng kết thanh toán (Nếu Bán thường, đặt ở đây) */}
      {saleMode === 'normal' && (
        <div className="border-t border-slate-200 bg-white p-3 shrink-0 flex gap-4">
          <div className="flex-1">
            <textarea
              placeholder="Ghi chú đơn hàng"
              className="w-full h-[60px] text-[13px] border border-slate-200 rounded-md p-2 outline-none focus:border-blue-500 resize-none"
            />
          </div>
          <div className="w-[280px] flex flex-col gap-2 text-[13.5px]">
            <div className="flex justify-between items-center text-slate-700">
              <span>Tổng tiền hàng</span>
              <span className="font-semibold text-slate-900 tabular-nums">0</span>
            </div>
            <div className="flex justify-between items-center text-slate-700">
              <span>Giảm giá</span>
              <span className="font-semibold text-slate-900 tabular-nums">0</span>
            </div>
            <div className="flex justify-between items-center font-bold text-slate-900 mt-1">
              <span>Khách cần trả</span>
              <span className="text-blue-600 text-[16px] tabular-nums">0</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Ghi chú đơn hàng (Nếu Bán giao hàng, chỉ hiện ghi chú) */}
      {saleMode === 'delivery' && (
        <div className="border-t border-slate-200 bg-white p-3 shrink-0">
          <textarea
            placeholder="Ghi chú đơn hàng"
            className="w-full h-[36px] text-[13px] border border-slate-200 rounded-md px-3 py-1.5 outline-none focus:border-blue-500 resize-none"
          />
        </div>
      )}
    </div>
  );
}
