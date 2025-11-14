import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Faucet = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/installation')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Faucet Installation</h1>
            <p className="text-sm text-muted-foreground">Kitchen & bathroom faucets</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Faucet Installation in Fresno</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Upgrade your kitchen or bathroom with a new faucet. Our expert plumbers handle all types of faucet installations, from single-handle to touchless models, ensuring proper connections and leak-free operation.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Faucet Types We Install</h3>
          <div className="space-y-3">
            {[
              "Kitchen Faucets (Single & Double Handle)",
              "Bathroom Sink Faucets",
              "Pull-Down Spray Faucets",
              "Touchless/Motion Sensor Faucets",
              "Commercial-Style Kitchen Faucets",
              "Vessel Sink Faucets",
              "Wall-Mount Faucets",
              "Bridge Faucets"
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
              <p className="font-semibold text-navy">Basic Faucet Installation</p>
              <p className="text-2xl font-bold text-navy">$150 - $250</p>
              <p className="text-xs text-muted-foreground">Standard single or double handle faucets</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Premium/Touchless Faucets</p>
              <p className="text-2xl font-bold text-navy">$250 - $400</p>
              <p className="text-xs text-muted-foreground">Motion sensor or pull-down spray models</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Wall-Mount Installation</p>
              <p className="text-2xl font-bold text-navy">$300 - $500</p>
              <p className="text-xs text-muted-foreground">Includes wall preparation and connections</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Faucet cost not included. Prices based on standard installations.</p>
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
                <p className="text-xs text-muted-foreground">Remove old faucet, install new one with all connections</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Supply Line Replacement</p>
                <p className="text-xs text-muted-foreground">New braided supply lines for leak prevention</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Testing & Cleanup</p>
                <p className="text-xs text-muted-foreground">Full leak test and job site cleanup</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Installation Process</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <p className="font-semibold text-sm">Shut Off Water Supply</p>
                <p className="text-xs text-muted-foreground">Turn off water and drain lines</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <p className="font-semibold text-sm">Remove Old Faucet</p>
                <p className="text-xs text-muted-foreground">Disconnect supply lines and mounting hardware</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <p className="font-semibold text-sm">Install New Faucet</p>
                <p className="text-xs text-muted-foreground">Mount faucet with proper sealing and secure connections</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <p className="font-semibold text-sm">Test & Inspect</p>
                <p className="text-xs text-muted-foreground">Check for leaks and proper water flow</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Ready for a New Faucet?</h3>
          <p className="text-sm opacity-90">
            Professional installation with warranty. Call us today for a free estimate.
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

export default Faucet;
