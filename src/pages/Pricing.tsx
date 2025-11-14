import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Plumbing Prices in Fresno, CA | Transparent Pricing | Free Estimates</title>
        <meta name="description" content="Upfront plumbing prices in Fresno, CA. No hidden fees. Get free estimates on drain cleaning, water heaters, repairs & more. Senior & military discounts. Call (559) 275-2535!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Service Pricing</h1>
            <p className="text-sm text-muted-foreground">Transparent, upfront pricing</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Our Pricing Promise</h2>
          <p className="text-sm text-muted-foreground mb-4">
            We believe in transparent pricing with no hidden fees. All prices include labor, materials, and cleanup. You'll know the cost before we start any work.
          </p>
          <div className="space-y-2">
            {[
              "Free estimates on all services",
              "No hidden fees or surprise charges",
              "Senior and military discounts available",
              "Financing options for large projects"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-bold text-navy">Common Service Pricing</h2>
          
          {/* Drain Services */}
          <div className="glass-card p-5">
            <h3 className="font-bold text-navy mb-3">Drain Cleaning</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Basic Drain Cleaning</p>
                  <p className="text-xs text-muted-foreground">Kitchen/bathroom sinks</p>
                </div>
                <p className="font-bold text-navy">$150-$300</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Main Sewer Line</p>
                  <p className="text-xs text-muted-foreground">Includes video inspection</p>
                </div>
                <p className="font-bold text-navy">$300-$600</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Hydro Jetting</p>
                  <p className="text-xs text-muted-foreground">High-pressure cleaning</p>
                </div>
                <p className="font-bold text-navy">$400-$800</p>
              </div>
            </div>
          </div>

          {/* Water Heaters */}
          <div className="glass-card p-5">
            <h3 className="font-bold text-navy mb-3">Water Heaters</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Tank Installation</p>
                  <p className="text-xs text-muted-foreground">40-50 gallon tanks</p>
                </div>
                <p className="font-bold text-navy">$1,200-$2,500</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Tankless Installation</p>
                  <p className="text-xs text-muted-foreground">Energy efficient</p>
                </div>
                <p className="font-bold text-navy">$2,500-$4,500</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Repairs</p>
                  <p className="text-xs text-muted-foreground">Thermostat, elements, valves</p>
                </div>
                <p className="font-bold text-navy">$200-$600</p>
              </div>
            </div>
          </div>

          {/* Leak Detection */}
          <div className="glass-card p-5">
            <h3 className="font-bold text-navy mb-3">Leak Detection & Repair</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Standard Detection</p>
                  <p className="text-xs text-muted-foreground">Visual & basic tools</p>
                </div>
                <p className="font-bold text-navy">$200-$400</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Advanced Detection</p>
                  <p className="text-xs text-muted-foreground">Electronic equipment</p>
                </div>
                <p className="font-bold text-navy">$400-$700</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Pipe Repairs</p>
                  <p className="text-xs text-muted-foreground">Per section</p>
                </div>
                <p className="font-bold text-navy">$300-$1,500</p>
              </div>
            </div>
          </div>

          {/* Faucets & Fixtures */}
          <div className="glass-card p-5">
            <h3 className="font-bold text-navy mb-3">Faucets & Fixtures</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Faucet Installation</p>
                  <p className="text-xs text-muted-foreground">Kitchen or bathroom</p>
                </div>
                <p className="font-bold text-navy">$150-$350</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Toilet Repair/Replace</p>
                  <p className="text-xs text-muted-foreground">Standard models</p>
                </div>
                <p className="font-bold text-navy">$200-$500</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Garbage Disposal</p>
                  <p className="text-xs text-muted-foreground">Installation or replacement</p>
                </div>
                <p className="font-bold text-navy">$250-$450</p>
              </div>
            </div>
          </div>

          {/* Emergency Services */}
          <div className="glass-card p-5">
            <h3 className="font-bold text-navy mb-3">Emergency Services</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Emergency Service Call</p>
                  <p className="text-xs text-muted-foreground">After hours & weekends</p>
                </div>
                <p className="font-bold text-navy">$150-$200</p>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Plus regular service pricing. Available 24/7 for urgent plumbing needs.</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-3">Special Offers</h3>
          <div className="space-y-3">
            <div className="bg-gold/10 p-4 rounded-xl border border-gold/20">
              <p className="font-semibold text-navy">Senior Discount</p>
              <p className="text-sm text-muted-foreground">10% off all services for seniors 65+</p>
            </div>
            <div className="bg-gold/10 p-4 rounded-xl border border-gold/20">
              <p className="font-semibold text-navy">Military Discount</p>
              <p className="text-sm text-muted-foreground">10% off for active & veteran military</p>
            </div>
            <div className="bg-gold/10 p-4 rounded-xl border border-gold/20">
              <p className="font-semibold text-navy">Maintenance Plans</p>
              <p className="text-sm text-muted-foreground">Save 15% with annual maintenance plans</p>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Ready for a Free Estimate?</h3>
          <p className="text-sm opacity-90">
            Call us today for an accurate, no-obligation quote on your plumbing project.
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

export default Pricing;
