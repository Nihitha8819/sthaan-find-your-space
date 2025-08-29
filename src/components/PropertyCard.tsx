import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  status: "sale" | "rent";
}

const PropertyCard = ({ 
  id, 
  image, 
  title, 
  price, 
  location, 
  bedrooms, 
  bathrooms, 
  area, 
  type, 
  status 
}: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group overflow-hidden border-card-border hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={status === "sale" ? "default" : "secondary"} className="bg-primary text-primary-foreground">
            For {status === "sale" ? "Sale" : "Rent"}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-foreground"
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
        <div className="absolute bottom-3 left-3">
          <Badge variant="outline" className="bg-white/90 text-foreground border-card-border">
            {type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              {bedrooms}
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              {bathrooms}
            </div>
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4" />
              {area}
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="text-xl font-bold text-primary">
              {price}
            </div>
            <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;