import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShowerHead = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Shower Head Installation Fresno, CA | Modern, Water-Efficient Upgrades</title>
        <meta name="description" content="Shower head installation in Fresno: rain heads, handheld, water-efficient models. Professional installation, licensed plumbers, 79 years experience. Free estimates. Call (559) 292-4065!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/installation')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Shower Head Installation</h1>
            <p className="text-sm text-muted-foreground">Water-efficient upgrades</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Shower Head Installation</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Upgrade your shower experience with modern, water-efficient shower heads. From rainfall to handheld models, our plumbers ensure leak-free installation with proper sealing and water pressure optimization.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Shower Head Types</h3>
          <div className="space-y-3">
            {[
              "Rainfall Shower Heads",
              "Handheld Shower Heads",
              "Dual Shower Head Systems",
              "Low-Flow Water-Saving Models",
              "High-Pressure Shower Heads",
              "Filtered Shower Heads",
              "LED Light-Up Shower Heads",
              "Massage/Spa Shower Heads"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Installation Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Shower Head</p>
              <p className="text-2xl font-bold text-navy">$75 - $150</p>
              <p className="text-xs text-muted-foreground">Basic installation, includes teflon tape and sealing</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Dual/Handheld Systems</p>
              <p className="text-2xl font-bold text-navy">$150 - $250</p>
              <p className="text-xs text-muted-foreground">Multi-head systems with diverter valve</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Rainfall/Premium Models</p>
              <p className="text-2xl font-bold text-navy">$200 - $400</p>
              <p className="text-xs text-muted-foreground">Large overhead units, may require arm extension</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Shower head cost not included. Additional charges for shower arm replacement.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Water Savings</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Standard Shower Head:</span>
              <span className="font-semibold text-navy">2.5 GPM</span>
            </div>
            <div className="flex justify-between">
              <span>Low-Flow Model:</span>
              <span className="font-semibold text-gold">2.0 GPM</span>
            </div>
            <div className="flex justify-between">
              <span>High-Efficiency:</span>
              <span className="font-semibold text-gold">1.5 GPM</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Save up to $70/year on water and energy bills with a water-efficient shower head!
          </p>
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
                <p className="text-xs text-muted-foreground">Remove old shower head, install new one properly sealed</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Leak Prevention</p>
                <p className="text-xs text-muted-foreground">Proper thread seal tape application</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Water Pressure Check</p>
                <p className="text-xs text-muted-foreground">Ensure optimal performance and flow rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Ready to Upgrade?</h3>
          <p className="text-sm opacity-90">
            Professional shower head installation with warranty. Call us today!
          </p>
          <a href="tel:+15592924065">
            <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">
              Call (559) 292-4065
            </Button>
          </a>
        </div>
      </div>

      <EmergencyButton />
      <BottomNav />
    </div>
  );
};

export default ShowerHead;
