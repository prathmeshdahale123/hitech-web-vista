
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PrincipalMessage from "@/components/PrincipalMessage";
import FacilitiesSection from "@/components/FacilitiesSection";
import CoursesSection from "@/components/CoursesSection";
import PlacementPartners from "@/components/PlacementPartners";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PrincipalMessage />
      <CoursesSection />
      <FacilitiesSection />
      <PlacementPartners />
      <Footer />
    </div>
  );
};

export default Index;
