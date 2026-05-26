import { MapPin, Plus, Search, User } from 'lucide-react';

export function PosDeliveryForm() {
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 relative overflow-hidden">
      {/* Top: Customer & Address Search */}
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
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-3 flex flex-col gap-4">
        
        {/* Customer Search */}
        <div className="bg-white rounded-lg border border-slate-200 p-3 shadow-sm">
          <div className="relative mb-4">
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
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center border-b border-slate-100 pb-2">
              <span className="text-blue-600 font-semibold text-[13.5px] w-[140px] truncate">+84889541507</span>
              <ChevronDownIcon className="w-4 h-4 text-slate-400 ml-auto" />
            </div>
            <div className="text-red-500 text-[12px] italic">Vui lòng thêm địa chỉ lấy hàng mới</div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Tên người nhận" className="border-b border-slate-200 py-1 text-[13px] outline-none focus:border-blue-500" />
              <input type="text" placeholder="Số điện thoại" className="border-b border-slate-200 py-1 text-[13px] outline-none focus:border-blue-500" />
            </div>
            <input type="text" placeholder="Địa chỉ chi tiết (Số nhà, ngõ, đường)" className="border-b border-slate-200 py-1 text-[13px] outline-none focus:border-blue-500 mt-2" />
            <input type="text" placeholder="Khu vực" className="border-b border-slate-200 py-1 text-[13px] outline-none focus:border-blue-500 mt-2" />
            <input type="text" placeholder="Phường/Xã" className="border-b border-slate-200 py-1 text-[13px] outline-none focus:border-blue-500 mt-2" />
          </div>
          
          {/* Package Info */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                <BoxIcon className="w-4 h-4" /> 1 kiện
              </div>
              <Edit2Icon className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-blue-600" />
            </div>
            <div className="flex items-center gap-2">
              <input type="text" defaultValue="500" className="w-[60px] border-b border-slate-200 py-1 text-[13px] text-center outline-none focus:border-blue-500" />
              <span className="text-[13px] text-slate-500">gram</span>
              <div className="flex-1 flex items-center justify-center gap-2 ml-4">
                <input type="text" defaultValue="10" className="w-[40px] border-b border-slate-200 py-1 text-[13px] text-center outline-none focus:border-blue-500" />
                <span className="text-slate-400 text-[12px]">x</span>
                <input type="text" defaultValue="10" className="w-[40px] border-b border-slate-200 py-1 text-[13px] text-center outline-none focus:border-blue-500" />
                <span className="text-slate-400 text-[12px]">x</span>
                <input type="text" defaultValue="10" className="w-[40px] border-b border-slate-200 py-1 text-[13px] text-center outline-none focus:border-blue-500" />
                <span className="text-[13px] text-slate-500">cm</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-2">
            <Edit2Icon className="w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Ghi chú cho bưu tá" className="flex-1 border-b border-slate-200 py-1 text-[13px] outline-none focus:border-blue-500" />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-[13px] font-semibold text-slate-700">Thu hộ tiền (COD)</div>
            <div className="text-[14px] font-bold text-slate-900">0</div>
          </div>
        </div>

        {/* Shipping partner hint */}
        <div className="bg-blue-50 text-blue-800 rounded-lg p-3 text-[13px] flex gap-3 items-start border border-blue-100">
          <MapPin className="w-5 h-5 shrink-0 text-blue-600 mt-0.5" />
          <p>Nhập đầy đủ địa chỉ lấy và giao (cùng loại cũ/mới) để tra cước và tạo đơn.</p>
        </div>
        
      </div>

      {/* Payment Summary */}
      <div className="border-t border-slate-200 bg-white p-4 shrink-0 flex flex-col gap-2 text-[13.5px]">
        <div className="flex justify-between items-center text-slate-700">
          <span>Tổng tiền hàng</span>
          <span className="font-semibold text-slate-900 tabular-nums">0</span>
        </div>
        <div className="flex justify-between items-center text-slate-700">
          <span>Giảm giá</span>
          <span className="font-semibold text-slate-900 tabular-nums">0</span>
        </div>
        <div className="flex justify-between items-center font-bold text-slate-900 mt-1 mb-3">
          <span>Khách cần trả</span>
          <span className="text-blue-600 text-[18px] tabular-nums">0</span>
        </div>
        
        <button className="w-full h-[48px] bg-[#0070f4] hover:bg-[#005bb5] text-white font-bold text-[15px] rounded-lg shadow-sm transition-colors uppercase">
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

function BoxIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
  );
}

function Edit2Icon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
  );
}
