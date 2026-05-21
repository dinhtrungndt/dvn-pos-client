import Header from '@/components/header';
import SEO from '@/components/SEO';

const HomePage = () => {
  return (
    <div>
      <SEO
        title="Trang chủ"
        description="Chào mừng bạn đến với DVN POS."
      />
      {/* header */}
      <Header />
    </div>
  );
};

export default HomePage;
