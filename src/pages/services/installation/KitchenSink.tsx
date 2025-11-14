import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const KitchenSink = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/installation')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Kitchen Sink Installation</h1>
            <p className="text-sm text-muted-foreground">Professional sink installation</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Kitchen Sink Installation</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Upgrade your kitchen with a new sink installation. From undermount to farmhouse styles, our licensed plumbers ensure proper mounting, sealing, and plumbing connections for leak-free operation.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Sink Types We Install</h3>
          <div className="space-y-3">
            {[
              "Undermount Sinks",
              "Top-Mount/Drop-In Sinks",
              "Farmhouse/Apron Front Sinks",
              "Double Bowl Sinks",
              "Single Bowl Sinks",
              "Stainless Steel Sinks",
              "Granite Composite Sinks",
              "Cast Iron Sinks"
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
              <p className="font-semibold text-navy">Drop-In Sink Installation</p>
              <p className="text-2xl font-bold text-navy">$250 - $400</p>
              <p className="text-xs text-muted-foreground">Standard top-mount installation with plumbing hookup</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Undermount Sink Installation</p>
              <p className="text-2xl font-bold text-navy">$400 - $650</p>
              <p className="text-xs text-muted-foreground">Includes proper mounting brackets and sealing</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Farmhouse Sink Installation</p>
              <p className="text-2xl font-bold text-navy">$500 - $900</p>
              <p className="text-xs text-muted-foreground">May require cabinet modification and custom support</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Sink and faucet cost not included. Countertop cutting may require additional charges.</p>
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
                <p className="text-xs text-muted-foreground">Sink mounting, faucet installation, and drain assembly</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Plumbing Connections</p>
                <p className="text-xs text-muted-foreground">Hot/cold supply lines and P-trap installation</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Sealing & Testing</p>
                <p className="text-xs text-muted-foreground">Waterproof sealing and full leak test</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Choosing Your Sink</h3>
          <div className="space-y-4">
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">Undermount</p>
              <p className="text-sm text-muted-foreground">Clean look, easy countertop cleanup, requires solid surface</p>
            </div>
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">Top-Mount</p>
              <p className="text-sm text-muted-foreground">Easiest installation, works with any countertop material</p>
            </div>
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">Farmhouse</p>
              <p className="text-sm text-muted-foreground">Statement piece, exposed front, requires cabinet modification</p>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Ready for a New Sink?</h3>
          <p className="text-sm opacity-90">
            Professional installation with warranty. We'll help you choose the perfect sink for your kitchen.
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

export default KitchenSink;
