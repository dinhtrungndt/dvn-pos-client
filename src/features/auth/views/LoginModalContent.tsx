import { Link } from 'react-router-dom';

export default function LoginModalContent() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1">Địa chỉ cửa hàng</label>
        <div className="flex bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
          <input className="w-full px-3 py-2 bg-transparent outline-none" placeholder="tencuahang" />
          <span className="px-3 py-2 text-slate-400 text-sm bg-slate-100">.dinhtrung.id.vn</span>
        </div>
      </div>
      <p className="text-sm text-slate-500">
        Bạn chưa có gian hàng trên KiotViet?
        <Link className="text-emerald-600 hover:text-emerald-700 font-bold ml-1" to="/register">
          Dùng thử miễn phí
        </Link>
      </p>
      <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg">
        Vào cửa hàng
      </button>
    </form>
  );
}
