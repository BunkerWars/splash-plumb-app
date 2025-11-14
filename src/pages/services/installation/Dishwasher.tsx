import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dishwasher = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Dishwasher Installation Fresno, CA | Complete Hookup & Replacement Service</title>
        <meta name="description" content="Dishwasher installation in Fresno: all brands, proper connections, water & electrical hookup. Licensed plumbers serving Central Valley for 79 years. Free estimates. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/installation/dishwasher" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/installation')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Dishwasher Installation</h1>
            <p className="text-sm text-muted-foreground">Complete hookup & installation</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Dishwasher Installation</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Professional dishwasher installation with proper water supply, drainage, and electrical connections. We ensure your dishwasher is level, secure, and leak-free for years of reliable operation.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Installation Services</h3>
          <div className="space-y-3">
            {[
              "New Dishwasher Installation",
              "Dishwasher Replacement",
              "Water Supply Line Connection",
              "Drain Hose Installation",
              "Electrical Hookup (hardwire or plug)",
              "Cabinet Modification (if needed)",
              "Garbage Disposal Connection",
              "Air Gap Installation"
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
              <p className="font-semibold text-navy">Standard Installation</p>
              <p className="text-2xl font-bold text-navy">$200 - $350</p>
              <p className="text-xs text-muted-foreground">Existing hookups in place, includes removal of old unit</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">New Installation</p>
              <p className="text-2xl font-bold text-navy">$350 - $600</p>
              <p className="text-xs text-muted-foreground">First-time installation with new water/drain lines</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Electrical Circuit Addition</p>
              <p className="text-2xl font-bold text-navy">$200 - $400</p>
              <p className="text-xs text-muted-foreground">If dedicated circuit needed (additional)</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Dishwasher cost not included. Price varies by installation complexity.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What's Included</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Complete Hookup</p>
                <p className="text-xs text-muted-foreground">Water supply, drain line, and electrical connection</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Leveling & Securing</p>
                <p className="text-xs text-muted-foreground">Properly level and secure to countertop</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Testing & Cleanup</p>
                <p className="text-xs text-muted-foreground">Full cycle test and leak check</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Installation Requirements</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Hot water supply line (3/8" or 1/2")</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Drain connection to sink or garbage disposal</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>120V electrical outlet or hardwire connection</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>24" wide cabinet opening (standard)</span>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Ready to Install?</h3>
          <p className="text-sm opacity-90">
            Professional dishwasher installation with warranty. We handle all connections and testing.
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

export default Dishwasher;
