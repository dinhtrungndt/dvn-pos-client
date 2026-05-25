import { Calendar, ChevronDown, Search } from 'lucide-react';

export function ProductSidebar({
  activeDirectSale, setActiveDirectSale,
  activeChannel, setActiveChannel,
  activeStatus, setActiveStatus,
  activeStock, setActiveStock
}: any) {

  return (
    <aside className="w-full flex-shrink-0 flex flex-col h-full bg-white">
      {/* Không dùng viền bao ngoài, thiết kế phẳng hoàn toàn */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pb-10">

        {/* Nhóm hàng */}
        <div className="p-4 border-b border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[13.5px] text-slate-800 tracking-tight">Nhóm hàng</h3>
            <button className="text-[12.5px] text-blue-600 hover:text-blue-700 font-medium">Tạo mới</button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Chọn nhóm hàng"
              className="w-full text-[13px] border border-slate-200 bg-slate-50 rounded-lg pl-9 pr-3 py-1.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Tồn kho */}
        <div className="p-4 border-b border-slate-100">
          <h3 className="font-semibold text-[13.5px] text-slate-800 tracking-tight mb-3">Tồn kho</h3>
          <div className="relative group">
            <select
              value={activeStock}
              onChange={(e) => setActiveStock(e.target.value)}
              className="w-full text-[13px] border border-slate-200 bg-slate-50 hover:bg-slate-100 rounded-lg px-3 py-2 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer text-slate-700"
            >
              <option value="Tất cả">Tất cả</option>
              <option value="Dưới định mức tồn">Dưới định mức tồn</option>
              <option value="Vượt định mức tồn">Vượt định mức tồn</option>
              <option value="Còn hàng trong kho">Còn hàng trong kho</option>
              <option value="Hết hàng trong kho">Hết hàng trong kho</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-slate-600 transition-colors" />
          </div>
        </div>

        {/* Dự kiến hết hàng */}
        <div className="p-4 border-b border-slate-100">
          <h3 className="font-semibold text-[13.5px] text-slate-800 tracking-tight mb-3">Dự kiến hết hàng</h3>
          <div className="flex flex-col gap-2.5">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="radio" name="stockout" className="peer sr-only" defaultChecked />
                <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-300 peer-checked:border-blue-600 peer-checked:border-[5px] transition-all bg-white"></div>
              </div>
              <div className="flex-1 text-[13px] text-slate-700 font-medium group-hover:text-blue-600 transition-colors">Toàn thời gian</div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="radio" name="stockout" className="peer sr-only" />
                <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-300 peer-checked:border-blue-600 peer-checked:border-[5px] transition-all bg-white group-hover:border-blue-400"></div>
              </div>
              <div className="flex-1 border border-slate-200 bg-slate-50 rounded-lg px-3 py-1.5 text-[13px] flex items-center justify-between cursor-pointer group-hover:border-blue-400 group-hover:bg-white transition-all">
                <span className="text-slate-500 group-hover:text-slate-700">Tùy chỉnh</span>
                <Calendar className="w-4 h-4 text-slate-400" />
              </div>
            </label>
          </div>
        </div>

        {/* Thời gian tạo */}
        <div className="p-4 border-b border-slate-100">
          <h3 className="font-semibold text-[13.5px] text-slate-800 tracking-tight mb-3">Thời gian tạo</h3>
          <div className="flex flex-col gap-2.5">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="radio" name="createdDate" className="peer sr-only" defaultChecked />
                <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-300 peer-checked:border-blue-600 peer-checked:border-[5px] transition-all bg-white"></div>
              </div>
              <div className="flex-1 text-[13px] text-slate-700 font-medium group-hover:text-blue-600 transition-colors">Toàn thời gian</div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="radio" name="createdDate" className="peer sr-only" />
                <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-300 peer-checked:border-blue-600 peer-checked:border-[5px] transition-all bg-white group-hover:border-blue-400"></div>
              </div>
              <div className="flex-1 border border-slate-200 bg-slate-50 rounded-lg px-3 py-1.5 text-[13px] flex items-center justify-between cursor-pointer group-hover:border-blue-400 group-hover:bg-white transition-all">
                <span className="text-slate-500 group-hover:text-slate-700">Tùy chỉnh</span>
                <Calendar className="w-4 h-4 text-slate-400" />
              </div>
            </label>
          </div>
        </div>

        {/* Cụm input search (Nhà cung cấp, Vị trí, Loại hàng) */}
        <div className="p-4 border-b border-slate-100 space-y-4">
          <div>
            <h3 className="font-semibold text-[13.5px] text-slate-800 tracking-tight mb-2">Nhà cung cấp</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input type="text" placeholder="Chọn nhà cung cấp" className="w-full text-[13px] border border-slate-200 bg-slate-50 rounded-lg pl-9 pr-3 py-1.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[13.5px] text-slate-800 tracking-tight mb-2">Vị trí</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input type="text" placeholder="Chọn vị trí" className="w-full text-[13px] border border-slate-200 bg-slate-50 rounded-lg pl-9 pr-3 py-1.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[13.5px] text-slate-800 tracking-tight mb-2">Loại hàng</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input type="text" placeholder="Chọn loại hàng" className="w-full text-[13px] border border-slate-200 bg-slate-50 rounded-lg pl-9 pr-3 py-1.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" />
            </div>
          </div>
        </div>

        {/* Bán trực tiếp */}
        <div className="p-4 border-b border-slate-100">
          <h3 className="font-semibold text-[13.5px] text-slate-800 tracking-tight mb-3">Bán trực tiếp</h3>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            {['Tất cả', 'Có', 'Không'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveDirectSale(item)}
                className={`flex-1 py-1.5 text-[12.5px] rounded-md transition-all ${activeDirectSale === item ? 'bg-white text-blue-600 font-semibold shadow-sm' : 'text-slate-600 hover:text-slate-900 font-medium'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Liên kết kênh bán */}
        <div className="p-4 border-b border-slate-100">
          <h3 className="font-semibold text-[13.5px] text-slate-800 tracking-tight mb-3">Liên kết kênh bán</h3>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            {['Tất cả', 'Có', 'Không'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveChannel(item)}
                className={`flex-1 py-1.5 text-[12.5px] rounded-md transition-all ${activeChannel === item ? 'bg-white text-blue-600 font-semibold shadow-sm' : 'text-slate-600 hover:text-slate-900 font-medium'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Trạng thái hàng hóa */}
        <div className="p-4 bg-slate-50/50">
          <h3 className="font-semibold text-[13.5px] text-slate-800 tracking-tight mb-3">Trạng thái hàng hóa</h3>
          <div className="relative group">
            <select
              value={activeStatus}
              onChange={(e) => setActiveStatus(e.target.value)}
              className="w-full text-[13px] border border-slate-200 bg-white rounded-lg px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer text-slate-700 font-medium shadow-sm"
            >
              <option value="Tất cả">Tất cả</option>
              <option value="Hàng đang kinh doanh">Hàng đang kinh doanh</option>
              <option value="Hàng ngừng kinh doanh">Hàng ngừng kinh doanh</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-slate-600 transition-colors" />
          </div>
        </div>
      </div>
    </aside>
  );
}
