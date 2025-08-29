import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

interface SearchFiltersProps {
  onSearch: (filters: SearchFilters) => void;
}

interface SearchFilters {
  location: string;
  propertyType: string;
  priceRange: string;
  bedrooms: string;
  status: string;
}

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    propertyType: "",
    priceRange: "",
    bedrooms: "",
    status: "",
  });
  
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Main Search Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <Input
                placeholder="Enter location, city, or area..."
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="w-full"
              />
            </div>
            
            <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Buy/Rent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sale">Buy</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.propertyType} onValueChange={(value) => handleFilterChange("propertyType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="plot">Plot</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={handleSearch} className="bg-primary hover:bg-primary-dark text-primary-foreground">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="flex justify-center">
            <Button 
              variant="ghost" 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-muted-foreground hover:text-foreground"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {showAdvanced ? "Hide" : "Show"} Advanced Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showAdvanced && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
              <Select value={filters.bedrooms} onValueChange={(value) => handleFilterChange("bedrooms", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 BHK</SelectItem>
                  <SelectItem value="2">2 BHK</SelectItem>
                  <SelectItem value="3">3 BHK</SelectItem>
                  <SelectItem value="4">4 BHK</SelectItem>
                  <SelectItem value="5+">5+ BHK</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.priceRange} onValueChange={(value) => handleFilterChange("priceRange", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50">₹0 - ₹50L</SelectItem>
                  <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                  <SelectItem value="100-200">₹1Cr - ₹2Cr</SelectItem>
                  <SelectItem value="200-500">₹2Cr - ₹5Cr</SelectItem>
                  <SelectItem value="500+">₹5Cr+</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={() => setFilters({
                location: "",
                propertyType: "",
                priceRange: "",
                bedrooms: "",
                status: "",
              })}>
                Clear All
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;