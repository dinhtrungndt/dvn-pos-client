import { ChevronDown, Download, Plus, Search, SlidersHorizontal, Upload } from 'lucide-react';

export function ProductHeader({ searchTerm, setSearchTerm }: { searchTerm: string, setSearchTerm: (s: string) => void; }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
      {/* Title & Search */}
      <div className="flex items-center gap-6">
        <h1 className="text-[22px] font-bold text-slate-800 tracking-tight">Hàng hóa</h1>
        <div className="relative w-[320px] hidden md:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Theo mã, tên hàng"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-[14px] border border-slate-200 bg-white rounded-lg pl-10 pr-10 py-2 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
          />
          <button className="absolute right-3.5 top-1/2 -translate-y-1/2">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 hover:text-blue-600 transition-colors" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2.5">
        <div className="relative group">
          <button className="h-[36px] px-4 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-medium rounded-lg flex items-center gap-2 transition-all shadow-sm shadow-blue-600/20 active:scale-95">
            <Plus className="w-4 h-4" />
            Tạo mới
            <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
          </button>
          {/* Dropdown menu */}
          <div className="absolute top-full right-0 mt-1.5 hidden group-hover:block bg-white shadow-xl shadow-slate-200/50 border border-slate-100 rounded-lg py-1.5 min-w-[180px] z-20">
            <button className="w-full text-left px-4 py-2.5 text-[13.5px] text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">Hàng hóa</button>
            <button className="w-full text-left px-4 py-2.5 text-[13.5px] text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">Dịch vụ</button>
            <button className="w-full text-left px-4 py-2.5 text-[13.5px] text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">Combo - đóng gói</button>
          </div>
        </div>

        <button className="h-[36px] px-3.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[13px] font-medium rounded-lg flex items-center gap-2 transition-all shadow-sm active:scale-95">
          <Upload className="w-4 h-4 text-slate-500" />
          Import file
        </button>

        <button className="h-[36px] px-3.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[13px] font-medium rounded-lg flex items-center gap-2 transition-all shadow-sm active:scale-95">
          <Download className="w-4 h-4 text-slate-500" />
          Xuất file
        </button>
      </div>
    </div>
  );
}
