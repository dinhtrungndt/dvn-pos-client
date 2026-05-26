import { ChevronLeft, ChevronRight, Plus, Search, User } from 'lucide-react';
import { mockProducts } from '../../products/data';

export function PosProductGrid() {
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 relative overflow-hidden">
      {/* Top: Customer Search */}
      <div className="bg-white px-3 py-2 border-b border-slate-200 shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-[13px] font-semibold text-slate-700 flex items-center gap-1 cursor-pointer hover:bg-slate-100 px-2 py-1 rounded">
            Nguyễn Đình Trưng
            <ChevronDownIcon className="w-3.5 h-3.5 text-slate-500" />
          </div>
          <div className="text-[13px] text-slate-500 flex items-center gap-1 cursor-pointer hover:bg-slate-100 px-2 py-1 rounded">
            <User className="w-3.5 h-3.5" />
            25/05/2026 17:41
          </div>
        </div>
      </div>
      
      <div className="bg-white p-3 border-b border-slate-200 shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm khách hàng (F4)"
            className="w-full h-9 pl-9 pr-8 bg-slate-100 border border-transparent rounded-md text-[13px] outline-none focus:bg-white focus:border-blue-500 transition-colors"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center hover:bg-slate-200 rounded text-slate-500">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
        <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
          {mockProducts.slice(0, 15).map((p) => (
            <div key={p.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden cursor-pointer hover:border-blue-500 hover:shadow-md transition-all flex flex-col group">
              <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-2 flex flex-col gap-1">
                <div className="font-medium text-slate-800 text-[12px] leading-snug line-clamp-2" title={p.name}>{p.name}</div>
                <div className="font-bold text-blue-600 text-[13.5px] tabular-nums mt-auto">{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination & Pay Button */}
      <div className="border-t border-slate-200 bg-white p-3 shrink-0 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-slate-600 disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[13px] font-medium text-slate-700">1/2</span>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-slate-600">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <button className="flex-1 h-[48px] bg-[#0070f4] hover:bg-[#005bb5] text-white font-bold text-[15px] rounded-lg shadow-sm transition-colors uppercase">
          Thanh Toán
        </button>
      </div>
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
  );
}
