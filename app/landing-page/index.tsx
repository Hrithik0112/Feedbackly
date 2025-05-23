import PricingSection from './pricing-section';
import FeaturesSection from './features-section';
import Hero from './hero-new';
import Features from './feature-new';
import HowItWorks from './howitworks-new';
import Pricing from './pricing-new';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features/>
      <HowItWorks />
      <Pricing />
      {/* <FeaturesSection />
      <PricingSection /> */}
    </div>
  );
}

export default LandingPage;