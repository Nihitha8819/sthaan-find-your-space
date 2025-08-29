import { Button } from "@/components/ui/button";
import { Building2, User, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-primary-light p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Sthaan</h1>
              <p className="text-xs text-muted-foreground">Find Your Space</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Buy
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Rent
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Commercial
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Plots
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Price Trends
            </Button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Post Property
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                Buy
              </Button>
              <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                Rent
              </Button>
              <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                Commercial
              </Button>
              <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                Plots
              </Button>
              <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                Price Trends
              </Button>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Post Property
                </Button>
                <Link to="/login">
                  <Button variant="ghost" className="justify-start w-full">
                    <User className="h-5 w-5 mr-2" />
                    Login
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;