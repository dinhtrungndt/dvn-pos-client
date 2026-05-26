import { Clock, MessageCircle, ShieldQuestion, Truck, Zap } from 'lucide-react';

export function PosFooter({
  saleMode,
  setSaleMode,
}: {
  saleMode: string;
  setSaleMode: (v: string) => void;
}) {
  return (
    <footer className="h-[40px] bg-slate-50 border-t border-slate-200 flex items-center justify-between px-4 shrink-0 overflow-x-auto custom-scrollbar">
      {/* Left: Mode Selection */}
      <div className="flex h-full min-w-max">
        <button
          onClick={() => setSaleMode('fast')}
          className={`flex items-center gap-2 h-full px-4 text-[13px] font-medium border-t-2 transition-colors ${saleMode === 'fast'
              ? 'border-blue-600 text-blue-600 bg-white'
              : 'border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
        >
          <Zap className="w-4 h-4" /> Bán nhanh
        </button>
        <button
          onClick={() => setSaleMode('normal')}
          className={`flex items-center gap-2 h-full px-4 text-[13px] font-medium border-t-2 transition-colors ${saleMode === 'normal'
              ? 'border-blue-600 text-blue-600 bg-white'
              : 'border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
        >
          <Clock className="w-4 h-4" /> Bán thường
        </button>
        <button
          onClick={() => setSaleMode('delivery')}
          className={`flex items-center gap-2 h-full px-4 text-[13px] font-medium border-t-2 transition-colors ${saleMode === 'delivery'
              ? 'border-blue-600 text-blue-600 bg-white'
              : 'border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
        >
          <Truck className="w-4 h-4" /> Bán giao hàng
        </button>
      </div>

      {/* Right: Support Info */}
      <div className="flex items-center gap-4 text-blue-600 text-[13px] font-semibold min-w-max ml-4">
        <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
          <MessageCircle className="w-4 h-4" />
          0319148297
        </div>
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 cursor-pointer hover:bg-blue-200 transition-colors">
          <ShieldQuestion className="w-3.5 h-3.5" />
        </div>
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-500 cursor-pointer hover:bg-orange-200 transition-colors relative">
          <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" /></svg>
        </div>
      </div>
    </footer>
  );
}
