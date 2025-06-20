import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import CategoryBanners from "@/components/category-banners"
import ShopOffers from "@/components/shop-offers"
import BrandsYouLove from "@/components/brands-you-love"
import SaleTopPicks from "@/components/sale-top-picks"
import PromotionalCarousel from "@/components/promotional-carousel"
import ImageLinksGrid from "@/components/image-links-grid"
// import GiftCardsApp from "@/components/gift-cards-app" // Removed
// import JdStatus from "@/components/jd-status" // Removed
import Footer from "@/components/footer"
import PromoBar from "@/components/promo-bar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PromoBar />
      <HeroBanner />
      <CategoryBanners />
      <ShopOffers />
      <BrandsYouLove />
      <SaleTopPicks />
      <PromotionalCarousel />
      <ImageLinksGrid />
      {/* GiftCardsApp and JdStatus components removed */}
      <Footer />
    </main>
  )
}
