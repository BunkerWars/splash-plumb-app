import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WaterFiltration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Water Filtration System Installation Fresno, CA | Clean Water Solutions</title>
        <meta name="description" content="Water filtration system installation in Fresno: whole-home filters, under-sink systems, reverse osmosis. Clean, safe water for Central Valley homes. Call (559) 275-2535!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/installation')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Water Filtration System</h1>
            <p className="text-sm text-muted-foreground">Clean water solutions</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Water Filtration System Installation</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Enjoy cleaner, healthier water throughout your home. We install comprehensive water filtration systems that remove contaminants, improve taste, and protect your plumbing fixtures from sediment and mineral buildup.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Filtration System Types</h3>
          <div className="space-y-3">
            {[
              "Whole House Filtration Systems",
              "Under-Sink Filtration Systems",
              "Reverse Osmosis (RO) Systems",
              "Carbon Filter Systems",
              "UV Water Purification",
              "Sediment Filtration",
              "Multi-Stage Filtration",
              "Point-of-Use Filters"
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
              <p className="font-semibold text-navy">Under-Sink Filter System</p>
              <p className="text-2xl font-bold text-navy">$300 - $600</p>
              <p className="text-xs text-muted-foreground">Single or dual-stage filtration with dedicated faucet</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Reverse Osmosis System</p>
              <p className="text-2xl font-bold text-navy">$500 - $1,200</p>
              <p className="text-xs text-muted-foreground">Multi-stage RO with storage tank and drain connection</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Whole House System</p>
              <p className="text-2xl font-bold text-navy">$1,500 - $4,000</p>
              <p className="text-xs text-muted-foreground">Main line filtration for entire home</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*System cost not included. Filter replacement recommended annually.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What Gets Filtered?</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Chlorine",
              "Sediment",
              "Lead",
              "Mercury",
              "Bacteria",
              "Pesticides",
              "Rust",
              "Bad Taste/Odor"
            ].map((item, index) => (
              <div key={index} className="bg-navy/5 p-3 rounded-xl">
                <p className="text-sm font-medium">{item}</p>
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
                <p className="font-semibold text-sm">Complete System Installation</p>
                <p className="text-xs text-muted-foreground">All plumbing connections and mounting</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Water Quality Testing</p>
                <p className="text-xs text-muted-foreground">Pre and post-installation testing available</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Filter Maintenance Guide</p>
                <p className="text-xs text-muted-foreground">Instructions for filter replacement and care</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Health Benefits</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Remove harmful contaminants and chemicals</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Improve taste and odor of drinking water</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Reduce plastic bottle waste</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Protect appliances from mineral buildup</span>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Ready for Clean Water?</h3>
          <p className="text-sm opacity-90">
            Professional water filtration installation. We'll help you choose the right system for your needs.
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

export default WaterFiltration;
