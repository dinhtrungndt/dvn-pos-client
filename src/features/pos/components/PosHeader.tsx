import { AlignJustify, Printer, RotateCcw, Search, Undo2, X } from 'lucide-react';

export function PosHeader({ saleMode, onSearch }: { saleMode: string; onSearch?: (v: string) => void; }) {
  return (
    <header className="h-[50px] bg-[#0070f4] flex items-center justify-between px-2 text-white shrink-0">
      {/* Left: Search */}
      <div className="flex items-center w-[350px]">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm hàng hóa (F3)"
            className="w-full h-9 pl-9 pr-3 rounded-md text-[13px] text-slate-800 outline-none"
          />
        </div>
        <button className="ml-2 w-9 h-9 flex items-center justify-center bg-[#005bb5] rounded-md hover:bg-[#004c99] transition-colors">
          <ScanLineIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Center: Tabs */}
      <div className="flex-1 flex items-end h-full px-4 overflow-hidden">
        <div className="bg-[#e5f1ff] text-[#0070f4] h-9 px-4 rounded-t-lg flex items-center gap-2 text-[13.5px] font-medium min-w-[120px] max-w-[200px] cursor-pointer relative">
          <RotateCcw className="w-4 h-4" />
          Hóa đơn 1
          <button className="ml-auto hover:bg-[#cce4ff] p-0.5 rounded-full transition-colors">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        <button className="w-9 h-9 flex items-center justify-center text-white hover:bg-[#005bb5] transition-colors rounded-t-lg">
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1">
        <button className="w-9 h-9 flex items-center justify-center hover:bg-[#005bb5] rounded transition-colors" title="Trả hàng">
          <Undo2 className="w-5 h-5" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center hover:bg-[#005bb5] rounded transition-colors" title="Đồng bộ dữ liệu">
          <RefreshCcwIcon className="w-5 h-5" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center hover:bg-[#005bb5] rounded transition-colors" title="Thiết lập in">
          <Printer className="w-5 h-5" />
        </button>
        <div className="px-3 text-[13.5px] font-medium border-l border-[#005bb5] ml-1 pl-4 flex items-center gap-2 cursor-pointer hover:bg-[#005bb5] h-9 rounded transition-colors">
          0889541507
          <AlignJustify className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
}

// Temporary icon components that might not be in lucide-react directly
function ScanLineIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><path d="M7 12h10" /></svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14" /><path d="M12 5v14" /></svg>
  );
}

function RefreshCcwIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21v-5h5" /></svg>
  );
}
