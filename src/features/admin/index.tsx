import { Activity, DollarSign, Package, RotateCcw, TrendingUp, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function AdminPage() {
  const [revenueTab, setRevenueTab] = useState('date');
  const [revenueFilter, setRevenueFilter] = useState('7days');

  // Sinh dữ liệu biểu đồ và tính tổng doanh thu tự động
  const { chartData, totalRevenue } = useMemo(() => {
    const length = revenueFilter === '7days' ? 7 : revenueFilter === 'month' ? 30 : revenueTab === 'hour' ? 24 : 10;

    let total = 0;
    const data = Array.from({ length }).map((_, i) => {
      const height = Math.floor(Math.random() * 80) + 10;
      // Quy đổi height ra doanh thu (ví dụ: height 50 = 50 triệu)
      const value = height * 1.2;
      total += value;

      let label = '';
      if (revenueTab === 'date') label = `${i + 1}/05`;
      else if (revenueTab === 'hour') label = `${i}:00`;
      else if (revenueTab === 'day') label = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'][i % 7];

      return { height, value, label };
    });

    return { chartData: data, totalRevenue: total };
  }, [revenueTab, revenueFilter]);
  const recentActivities = [
    { type: 'sale', user: 'Hoàng - Kinh Doanh', action: 'bán đơn hàng', value: '2,660,000', code: 'HD000045', time: '10 phút trước' },
    { type: 'import', user: 'Hương - Kế Toán', action: 'nhập hàng', value: '15,000,000', code: 'PN000044', time: '1 giờ trước' },
    { type: 'sale', user: 'Nguyễn Đình Trung', action: 'bán đơn hàng', value: '5,305,000', code: 'HD000046', time: '2 giờ trước' },
    { type: 'return', user: 'Hoàng - Kinh Doanh', action: 'nhận trả hàng', value: '500,000', code: 'TH000012', time: '3 giờ trước' },
    { type: 'sale', user: 'Nguyễn Đình Trung', action: 'bán đơn hàng', value: '1,200,000', code: 'HD000047', time: 'Hôm qua' },
    { type: 'import', user: 'Nguyễn Đình Trung', action: 'nhập hàng', value: '20,000,000', code: 'PN000045', time: 'Hôm qua' },
    { type: 'sale', user: 'Hương - Kế Toán', action: 'bán đơn hàng', value: '7,345,000', code: 'HD000048', time: '2 ngày trước' },
    { type: 'sale', user: 'Hoàng - Kinh Doanh', action: 'bán đơn hàng', value: '3,100,000', code: 'HD000049', time: '2 ngày trước' },
    { type: 'import', user: 'Hương - Kế Toán', action: 'nhập hàng', value: '5,000,000', code: 'PN000046', time: '3 ngày trước' },
    { type: 'sale', user: 'Nguyễn Đình Trung', action: 'bán đơn hàng', value: '9,500,000', code: 'HD000050', time: '3 ngày trước' },
  ];

  const topProducts = [
    { name: 'Sàn gỗ Kahn siêu chịu nước', value: '42.5 tr', percentage: 100 },
    { name: 'Sàn gỗ Inovar Merbau', value: '41.4 tr', percentage: 95 },
    { name: 'Sàn gỗ công nghiệp', value: '35.2 tr', percentage: 80 },
    { name: 'Gạch ốp lát Granite', value: '28.5 tr', percentage: 65 },
    { name: 'Sơn nước nội thất Dulux', value: '22.1 tr', percentage: 50 },
    { name: 'Thiết bị vệ sinh Inax', value: '18.4 tr', percentage: 40 },
    { name: 'Cửa cuốn Austdoor', value: '15.0 tr', percentage: 35 },
    { name: 'Đèn Led âm trần Philips', value: '12.8 tr', percentage: 30 },
    { name: 'Cáp điện Trần Phú', value: '9.5 tr', percentage: 22 },
    { name: 'Ống nhựa Tiền Phong', value: '7.2 tr', percentage: 15 },
  ];

  const topCustomers = [
    { name: 'Anh Hoàng - Sài Gòn', value: '25.8 tr', percentage: 100 },
    { name: 'Tuấn - Hà Nội', value: '25.5 tr', percentage: 98 },
    { name: 'Phạm Thu Hương', value: '17.3 tr', percentage: 65 },
    { name: 'Anh Giang - Kim Mã', value: '9.9 tr', percentage: 38 },
    { name: 'Nguyễn Văn Hải', value: '5.3 tr', percentage: 20 },
  ];

  return (
    <>
      <Helmet>
        <title>Tổng quan - DVN POS</title>
        <meta name="description" content="Theo dõi báo cáo doanh thu, đánh giá kết quả bán hàng và quản lý hoạt động kinh doanh toàn diện." />
      </Helmet>
      <div className="flex flex-col gap-6 pb-10">

      {/* Overview Cards */}
      <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
        <h2 className="text-[16px] font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-600" />
          Kết quả bán hàng hôm nay
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">

          {/* Revenue */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 pl-0 md:pl-4 first:pl-0">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-gray-500 mb-1 uppercase tracking-wide">Doanh thu</p>
              <p className="text-2xl font-bold text-gray-900">45,320,000</p>
            </div>
          </div>

          {/* Returns */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 pl-0 md:pl-4">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-1">
              <RotateCcw className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-gray-500 mb-1 uppercase tracking-wide">Trả hàng</p>
              <p className="text-2xl font-bold text-gray-900">500,000</p>
            </div>
          </div>

          {/* Net Revenue */}
          <div className="flex items-start gap-4 pt-4 md:pt-0 pl-0 md:pl-4">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-1">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-gray-500 mb-1 uppercase tracking-wide">Doanh thu thuần</p>
              <div className="flex items-end gap-2">
                <p className="text-2xl font-bold text-gray-900">44,820,000</p>
                <p className="text-[13px] font-medium text-green-600 mb-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> +5.2%
                </p>
              </div>
              <p className="text-[12px] text-gray-400 mt-1">So với hôm qua</p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column (Charts) */}
        <div className="lg:col-span-2 space-y-6">

          {/* Revenue Chart */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 min-h-[400px]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[16px] font-semibold text-gray-800">
                Doanh thu thuần <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded ml-2 font-bold">{totalRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })},000</span>
              </h2>
              <select
                className="text-[13px] border border-gray-200 rounded px-3 py-1.5 outline-none text-gray-600 bg-white hover:border-blue-400 focus:border-blue-500 transition-colors cursor-pointer"
                value={revenueFilter}
                onChange={(e) => setRevenueFilter(e.target.value)}
              >
                <option value="today">Hôm nay</option>
                <option value="yesterday">Hôm qua</option>
                <option value="7days">7 ngày qua</option>
                <option value="month">Tháng này</option>
                <option value="lastmonth">Tháng trước</option>
              </select>
            </div>

            <div className="flex gap-6 border-b border-gray-100 mb-8">
              <button
                onClick={() => setRevenueTab('date')}
                className={`text-[14px] pb-2 transition-colors font-medium border-b-2 ${revenueTab === 'date' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
              >
                Theo ngày
              </button>
              <button
                onClick={() => setRevenueTab('hour')}
                className={`text-[14px] pb-2 transition-colors font-medium border-b-2 ${revenueTab === 'hour' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
              >
                Theo giờ
              </button>
              <button
                onClick={() => setRevenueTab('day')}
                className={`text-[14px] pb-2 transition-colors font-medium border-b-2 ${revenueTab === 'day' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
              >
                Theo thứ
              </button>
            </div>

            {/* Dummy Bar Chart */}
            <div className="flex items-end gap-2 h-[250px] px-2 overflow-x-auto no-scrollbar">
              {chartData.map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group min-w-[30px]">
                  <div className="w-full relative flex items-end justify-center h-full">
                    <div
                      className="w-[60%] bg-[#B3D4FC] group-hover:bg-[#0070F4] rounded-t transition-colors duration-300"
                      style={{ height: `${item.height}%` }}
                    ></div>
                    {/* Tooltip */}
                    <div className="absolute -top-8 bg-gray-800 text-white text-[11px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                      {item.value.toFixed(1)} tr
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Top 10 Products */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[16px] font-semibold text-gray-800 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-600" />
                Top 10 hàng bán chạy
              </h2>
              <div className="flex gap-2">
                <select className="text-[13px] border border-gray-200 rounded px-3 py-1.5 outline-none text-gray-600 bg-white hover:border-blue-400 cursor-pointer">
                  <option selected>Theo doanh thu thuần</option>
                  <option>Theo số lượng</option>
                </select>
                <select className="text-[13px] border border-gray-200 rounded px-3 py-1.5 outline-none text-gray-600 bg-white hover:border-blue-400 cursor-pointer">
                  <option selected>Tháng này</option>
                  <option>Tháng trước</option>
                </select>
              </div>
            </div>

            <div className="space-y-4 pr-4">
              {topProducts.map((product, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="text-[13px] text-gray-500 w-4">{idx + 1}</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-[13px] mb-1">
                      <span className="font-medium text-gray-700">{product.name}</span>
                      <span className="text-gray-900 font-semibold">{product.value}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="bg-[#0070F4] h-1.5 rounded-full" style={{ width: `${product.percentage}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Customers */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[16px] font-semibold text-gray-800 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Top 10 khách mua nhiều nhất
              </h2>
              <select className="text-[13px] border border-gray-200 rounded px-3 py-1.5 outline-none text-gray-600 bg-white hover:border-blue-400 cursor-pointer">
                <option selected>Tháng này</option>
                <option>Tháng trước</option>
              </select>
            </div>

            <div className="space-y-4 pr-4">
              {topCustomers.map((customer, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="text-[13px] text-gray-500 w-4">{idx + 1}</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-[13px] mb-1">
                      <span className="font-medium text-gray-700">{customer.name}</span>
                      <span className="text-gray-900 font-semibold">{customer.value}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${customer.percentage}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column (Activities) */}
        <div className="lg:col-span-1 space-y-6">
          <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sticky top-[68px]">
            <h2 className="text-[16px] font-semibold text-gray-800 mb-6 flex items-center justify-between">
              <span>Hoạt động gần đây</span>
              <span className="text-[12px] font-normal text-blue-600 cursor-pointer hover:underline">Xem tất cả</span>
            </h2>

            <div className="space-y-5">
              {recentActivities.map((act, idx) => (
                <div key={idx} className="flex gap-3 relative group">
                  {/* Timeline vertical line */}
                  {idx !== recentActivities.length - 1 && (
                    <div className="absolute left-4 top-8 bottom-[-20px] w-[1px] bg-gray-100 group-hover:bg-gray-200 transition-colors"></div>
                  )}

                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 z-10
                    ${act.type === 'sale' ? 'bg-blue-50 border-blue-100 text-blue-500' :
                      act.type === 'import' ? 'bg-green-50 border-green-100 text-green-500' :
                        'bg-orange-50 border-orange-100 text-orange-500'}`}
                  >
                    {act.type === 'sale' && <DollarSign className="w-4 h-4" />}
                    {act.type === 'import' && <Package className="w-4 h-4" />}
                    {act.type === 'return' && <RotateCcw className="w-4 h-4" />}
                  </div>

                  <div className="pt-1">
                    <p className="text-[13px] text-gray-800 leading-relaxed">
                      <span className="font-semibold text-blue-600 cursor-pointer hover:underline">{act.user}</span> vừa{' '}
                      <span className="font-medium text-gray-600">{act.action}</span>{' '}
                      <span className="font-semibold text-blue-600 cursor-pointer hover:underline">{act.code}</span>{' '}
                      với giá trị <span className="font-bold text-gray-900">{act.value}</span>
                    </p>
                    <p className="text-[12px] text-gray-400 mt-0.5">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

    </div>
    </>
  );
}
