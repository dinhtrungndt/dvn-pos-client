import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PosCart } from './components/PosCart';
import { PosDeliveryForm } from './components/PosDeliveryForm';
import { PosFooter } from './components/PosFooter';
import { PosHeader } from './components/PosHeader';
import { PosProductGrid } from './components/PosProductGrid';

export default function PosPage() {
  const [saleMode, setSaleMode] = useState<'fast' | 'normal' | 'delivery'>('delivery');

  return (
    <>
      <Helmet>
        <title>Bán hàng - DVN POS</title>
        <meta name="description" content="Giao diện thu ngân và bán hàng nhanh chóng, tiện lợi dành cho cửa hàng của bạn." />
      </Helmet>

      {/* Root Container */}
      <div className="flex flex-col h-screen w-full bg-slate-200 overflow-hidden text-slate-800">
        
        {/* Header */}
        <PosHeader saleMode={saleMode} />

        {/* Main Content Area */}
        <div className="flex flex-1 min-h-0 overflow-hidden relative">
          
          {/* Left Panel: Cart */}
          <div className={`flex-shrink-0 flex flex-col bg-white border-r border-slate-200 shadow-sm transition-all duration-300 ${saleMode === 'fast' ? 'w-full' : 'w-[45%] lg:w-[40%] xl:w-[35%] max-w-[500px]'}`}>
            <PosCart saleMode={saleMode} />
          </div>

          {/* Right Panel: Actions / Product Grid */}
          {saleMode !== 'fast' && (
            <div className="flex-1 flex flex-col min-w-0 bg-slate-50 transition-all duration-300">
              {saleMode === 'normal' && <PosProductGrid />}
              {saleMode === 'delivery' && <PosDeliveryForm />}
            </div>
          )}

        </div>

        {/* Footer */}
        <PosFooter saleMode={saleMode} setSaleMode={setSaleMode as any} />
      </div>
    </>
  );
}
