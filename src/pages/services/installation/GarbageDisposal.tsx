import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GarbageDisposal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Garbage Disposal Installation Fresno, CA | Expert Hookup & Replacement</title>
        <meta name="description" content="Garbage disposal installation in Fresno: all brands, proper electrical hookup, InSinkErator certified. Licensed plumbers, 79 years experience. Free estimates. Call (559) 292-4065!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/installation')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Garbage Disposal Installation</h1>
            <p className="text-sm text-muted-foreground">Expert disposal installation & replacement</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Garbage Disposal Installation in Fresno</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Make kitchen cleanup easier with a new garbage disposal. Our licensed plumbers install all major brands with proper electrical hookup and drainage connections. We ensure quiet operation and years of reliable performance.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Disposal Types</h3>
          <div className="space-y-4">
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">1/3 HP - Basic</p>
              <p className="text-sm text-muted-foreground">Best for light use, 1-2 person households</p>
            </div>
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">1/2 HP - Standard</p>
              <p className="text-sm text-muted-foreground">Most popular, ideal for average families</p>
            </div>
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">3/4 HP - Heavy Duty</p>
              <p className="text-sm text-muted-foreground">Powerful motor for large families or frequent use</p>
            </div>
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">1 HP - Premium</p>
              <p className="text-sm text-muted-foreground">Commercial-grade, quietest operation</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Installation Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Installation</p>
              <p className="text-2xl font-bold text-navy">$250 - $400</p>
              <p className="text-xs text-muted-foreground">1/3 to 1/2 HP models, includes electrical hookup</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Heavy-Duty Installation</p>
              <p className="text-2xl font-bold text-navy">$350 - $550</p>
              <p className="text-xs text-muted-foreground">3/4 to 1 HP models with premium features</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Electrical Circuit Addition</p>
              <p className="text-2xl font-bold text-navy">$150 - $300</p>
              <p className="text-xs text-muted-foreground">If dedicated circuit is needed (additional)</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Unit cost not included. Removal of old disposal included.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Features to Consider</h3>
          <div className="space-y-3">
            {[
              "Sound Insulation (for quieter operation)",
              "Stainless Steel Grinding Components",
              "Auto-Reverse to Prevent Jams",
              "Dishwasher Connection",
              "Continuous Feed vs. Batch Feed",
              "Multi-Grind Technology",
              "Extended Warranty Options",
              "Septic-Safe Models"
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
                <p className="text-xs text-muted-foreground">Remove old disposal, install new unit with mounting</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Electrical Connection</p>
                <p className="text-xs text-muted-foreground">Proper hardwire or plug connection to code</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Plumbing Connections</p>
                <p className="text-xs text-muted-foreground">Drain and dishwasher hookup (if applicable)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Disposal Maintenance Tips</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Run cold water before, during, and after use</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Avoid hard items (bones, pits, shells)</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>No grease, oil, or fibrous vegetables</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Clean monthly with ice cubes and citrus peels</span>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Ready for a New Disposal?</h3>
          <p className="text-sm opacity-90">
            Professional installation with warranty. We'll help you choose the right model for your needs.
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

export default GarbageDisposal;
