import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Award, Users } from "lucide-react";

// Import property images
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg"; 
import property3 from "@/assets/property-3.jpg";

const Index = () => {
  const [searchResults, setSearchResults] = useState([
    {
      id: "1",
      image: property1,
      title: "Luxury Villa with Garden",
      price: "₹2.5 Cr",
      location: "Gurgaon, Haryana",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,400 sq ft",
      type: "Villa",
      status: "sale" as const,
    },
    {
      id: "2", 
      image: property2,
      title: "Modern Apartment in City Center",
      price: "₹45,000/month",
      location: "Mumbai, Maharashtra",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
      type: "Apartment",
      status: "rent" as const,
    },
    {
      id: "3",
      image: property3,
      title: "Elegant Townhouse",
      price: "₹1.8 Cr",
      location: "Bangalore, Karnataka",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sq ft", 
      type: "Townhouse",
      status: "sale" as const,
    },
  ]);

  const handleSearch = (filters: any) => {
    console.log("Search filters:", filters);
    // Add search logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection onSearch={handleSearch} />

      {/* Featured Properties Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Featured Properties</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Handpicked Properties For You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully selected premium properties in prime locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {searchResults.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Sthaan?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make property search simple, transparent, and reliable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl mb-4 group-hover:shadow-lg transition-all">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Verified Listings</h3>
                <p className="text-muted-foreground">All properties are verified for authenticity and legal compliance</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 p-6 rounded-xl mb-4 group-hover:shadow-lg transition-all">
                <TrendingUp className="h-12 w-12 text-accent-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Price Insights</h3>
                <p className="text-muted-foreground">Get real-time market trends and price analytics</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent-teal/10 to-accent-teal/5 p-6 rounded-xl mb-4 group-hover:shadow-lg transition-all">
                <Award className="h-12 w-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Expert Support</h3>
                <p className="text-muted-foreground">Professional guidance throughout your property journey</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-xl mb-4 group-hover:shadow-lg transition-all">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Trusted Network</h3>
                <p className="text-muted-foreground">Connect with verified builders, agents, and owners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-primary to-primary-light p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sthaan</h3>
                  <p className="text-sm text-muted">Find Your Space</p>
                </div>
              </div>
              <p className="text-muted text-sm">
                Your trusted partner in finding the perfect property across India.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Property Types</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>Apartments</li>
                <li>Villas</li>
                <li>Commercial</li>
                <li>Plots</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>Property Search</li>
                <li>Price Trends</li>
                <li>Loan Calculator</li>
                <li>Legal Assistance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>support@sthaan.com</li>
                <li>+91 9876543210</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-muted/20 mt-8 pt-8 text-center text-sm text-muted">
            <p>&copy; 2024 Sthaan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
