import SearchFilters from "./SearchFilters";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onSearch: (filters: any) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary-dark/80"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              Dream Home
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover thousands of verified properties across India. Buy, rent, or invest with confidence.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">10K+</div>
              <div className="text-white/80">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-white/80">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">50K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-5xl mx-auto">
          <SearchFilters onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;