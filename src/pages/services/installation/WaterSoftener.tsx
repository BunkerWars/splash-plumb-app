import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WaterSoftener = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/installation')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Water Softener Installation</h1>
            <p className="text-sm text-muted-foreground">Protect your home from hard water</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Water Softener Installation</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Protect your plumbing, appliances, and fixtures from hard water damage. Our licensed plumbers install high-quality water softener systems that eliminate scale buildup, extend appliance life, and provide softer water throughout your home.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Water Softener Types</h3>
          <div className="space-y-4">
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">Salt-Based Ion Exchange</p>
              <p className="text-sm text-muted-foreground">Most effective, removes calcium and magnesium completely</p>
            </div>
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">Salt-Free Conditioners</p>
              <p className="text-sm text-muted-foreground">Eco-friendly, prevents scale without removing minerals</p>
            </div>
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">Dual-Tank Systems</p>
              <p className="text-sm text-muted-foreground">Continuous soft water, no regeneration downtime</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Installation Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Water Softener</p>
              <p className="text-2xl font-bold text-navy">$1,500 - $2,500</p>
              <p className="text-xs text-muted-foreground">Salt-based system for average household (3-4 people)</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">High-Capacity System</p>
              <p className="text-2xl font-bold text-navy">$2,500 - $4,000</p>
              <p className="text-xs text-muted-foreground">Large home or commercial installation</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Salt-Free Conditioner</p>
              <p className="text-2xl font-bold text-navy">$1,200 - $3,000</p>
              <p className="text-xs text-muted-foreground">No salt, low maintenance option</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*System cost included. Monthly salt costs approximately $5-10.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Benefits of Soft Water</h3>
          <div className="space-y-3">
            {[
              "Eliminate scale buildup in pipes and fixtures",
              "Extend water heater lifespan up to 50%",
              "Softer skin and hair",
              "Brighter, cleaner laundry",
              "Reduce soap and detergent usage by 50%",
              "Spot-free dishes and glassware",
              "Lower energy bills (efficient appliances)",
              "Protect expensive appliances"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What's Included</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Complete Installation</p>
                <p className="text-xs text-muted-foreground">System installation with all plumbing connections</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Water Hardness Testing</p>
                <p className="text-xs text-muted-foreground">Test before and after to verify effectiveness</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">System Programming</p>
                <p className="text-xs text-muted-foreground">Configure regeneration cycles for your usage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Signs You Need a Water Softener</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "White Scale Buildup",
              "Soap Scum",
              "Dry Skin/Hair",
              "Dull Laundry",
              "Spotty Dishes",
              "High Water Bills",
              "Clogged Pipes",
              "Appliance Failure"
            ].map((sign, index) => (
              <div key={index} className="bg-navy/5 p-3 rounded-xl">
                <p className="text-sm font-medium">{sign}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Ready for Soft Water?</h3>
          <p className="text-sm opacity-90">
            Professional water softener installation with free water hardness test. Call us today!
          </p>
          <a href="tel:+15592752535">
            <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">
              Call (559) 275-2535
            </Button>
          </a>
        </div>
      </div>

      <EmergencyButton />
      <BottomNav />
    </div>
  );
};

export default WaterSoftener;
