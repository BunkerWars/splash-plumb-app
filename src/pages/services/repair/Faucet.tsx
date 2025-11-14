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
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Faucet Repair</h1>
            <p className="text-sm text-muted-foreground">Fix leaks, drips & handle issues</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Faucet Repair in Fresno</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Stop wasting water and money on dripping faucets. Our expert plumbers quickly diagnose and repair all faucet issues - from annoying drips to complete handle failures. We fix all brands and models.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Faucet Problems We Fix</h3>
          <div className="space-y-3">
            {[
              "Dripping or Leaking Faucets",
              "Loose or Broken Handles",
              "Low Water Pressure",
              "Worn Out Washers or O-Rings",
              "Corroded Valve Seats",
              "Leaking Base or Spout",
              "Temperature Control Issues",
              "Spray Hose Problems"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Repair Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Simple Repairs</p>
              <p className="text-2xl font-bold text-navy">$75 - $150</p>
              <p className="text-xs text-muted-foreground">Washer replacement, O-rings, minor adjustments</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Cartridge/Valve Replacement</p>
              <p className="text-2xl font-bold text-navy">$150 - $300</p>
              <p className="text-xs text-muted-foreground">Replace internal cartridge or valve assembly</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Major Repairs</p>
              <p className="text-2xl font-bold text-navy">$200 - $400</p>
              <p className="text-xs text-muted-foreground">Extensive damage, multiple components</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Parts included. If repair cost exceeds 50% of new faucet, we recommend replacement.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Signs You Need Faucet Repair</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Constant Dripping",
              "Water Pooling",
              "Squeaky Handle",
              "Hard to Turn",
              "Rusty Water",
              "Reduced Flow",
              "Handle Wobbles",
              "Visible Corrosion"
            ].map((sign, index) => (
              <div key={index} className="bg-navy/5 p-3 rounded-xl">
                <p className="text-sm font-medium">{sign}</p>
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
                <p className="font-semibold text-sm">Complete Diagnosis</p>
                <p className="text-xs text-muted-foreground">Identify exact problem and best solution</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Quality Parts</p>
                <p className="text-xs text-muted-foreground">OEM or equivalent replacement parts</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Warranty on Repairs</p>
                <p className="text-xs text-muted-foreground">Parts and labor warranty included</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Why Fix Instead of Replace?</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Faucet repair often costs a fraction of replacement. A dripping faucet wastes up to 3,000 gallons per year - that's $30+ down the drain!
          </p>
          <div className="bg-gold/10 p-4 rounded-xl">
            <p className="text-sm font-semibold text-navy mb-2">Did You Know?</p>
            <p className="text-sm text-muted-foreground">One drip per second = 5 gallons/day = 2,082 gallons/year wasted</p>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Stop the Drip Today!</h3>
          <p className="text-sm opacity-90">
            Fast, affordable faucet repairs. Call us now for same-day service.
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
