import Navbar from '../components/common/Navbar';
import HeroSection from '../components/landing_page/HeroSection';
import FeaturesSection from '../components/landing_page/FeaturesSection';

function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
        </div>
    );
}

export default LandingPage;
