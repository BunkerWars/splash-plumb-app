import { Phone, Clock, Shield } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/fresno-logo.png";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-6 pb-12">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      
      <div className="relative max-w-lg mx-auto px-4 space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Fresno Plumbing & Heating, Inc." className="h-20 w-auto" />
        </div>

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 text-sm">
          <Shield className="h-4 w-4 text-gold" />
          <span className="font-medium">Trusted Since 1945</span>
        </div>

        {/* Main Headline */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-navy">
            Expert Plumbing Services
            <br />
            <span className="text-gold">Central Valley</span>
          </h1>
          <p className="text-muted-foreground">
            Professional service you can trust
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <a href="tel:+15592924065" className="block">
            <Button size="lg" className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale shadow-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </a>
          <Button size="lg" variant="outline" className="tap-scale glass-card border-navy/20 text-navy hover:bg-navy/5">
            <Clock className="mr-2 h-5 w-5" />
            Schedule
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-navy">79+</div>
            <div className="text-xs text-muted-foreground">Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-navy">24/7</div>
            <div className="text-xs text-muted-foreground">Emergency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-navy">100%</div>
            <div className="text-xs text-muted-foreground">Licensed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
