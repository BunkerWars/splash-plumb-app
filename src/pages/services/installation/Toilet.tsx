import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Toilet = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Toilet Installation Fresno, CA | New Toilet Replacement | Professional Plumbers</title>
        <meta name="description" content="Expert toilet installation in Fresno: all brands, efficient models, proper installation. Licensed plumbers serving Central Valley for 79 years. Free estimates. Call (559) 275-2535!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/installation')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Toilet Installation</h1>
            <p className="text-sm text-muted-foreground">Professional toilet replacement</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Toilet Installation in Fresno</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Whether you're upgrading to a water-efficient model or replacing an old toilet, our licensed plumbers ensure proper installation with no leaks. We handle all types from standard two-piece to modern one-piece and wall-mounted models.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Toilet Types We Install</h3>
          <div className="space-y-3">
            {[
              "Standard Two-Piece Toilets",
              "One-Piece Toilets",
              "Comfort Height (ADA) Toilets",
              "Dual-Flush Water-Saving Models",
              "Wall-Mounted Toilets",
              "Smart/Bidet Toilets",
              "Commercial Toilets",
              "Elongated & Round Bowl Styles"
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
              <p className="font-semibold text-navy">Standard Toilet Installation</p>
              <p className="text-2xl font-bold text-navy">$200 - $350</p>
              <p className="text-xs text-muted-foreground">Two-piece or one-piece, includes removal and disposal</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Comfort Height/ADA Installation</p>
              <p className="text-2xl font-bold text-navy">$250 - $400</p>
              <p className="text-xs text-muted-foreground">Higher models for easier access</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Wall-Mounted Toilet</p>
              <p className="text-2xl font-bold text-navy">$400 - $800</p>
              <p className="text-xs text-muted-foreground">Includes in-wall carrier system installation</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Toilet cost not included. Additional charges for flange repair or subfloor work.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Signs You Need Replacement</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Frequent Clogs",
              "Constant Running",
              "Cracks in Porcelain",
              "Leaks at Base",
              "Age Over 15 Years",
              "High Water Bills",
              "Wobbling Toilet",
              "Surface Scratches"
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
                <p className="font-semibold text-sm">Complete Removal & Installation</p>
                <p className="text-xs text-muted-foreground">Remove old toilet, install new one with wax ring</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Flange Inspection</p>
                <p className="text-xs text-muted-foreground">Check and repair toilet flange if needed</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Supply Line & Testing</p>
                <p className="text-xs text-muted-foreground">New supply line installation and leak testing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Water-Saving Benefits</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Modern toilets use significantly less water than older models:
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Old Toilets (pre-1994):</span>
              <span className="font-semibold text-navy">3.5-7 gallons/flush</span>
            </div>
            <div className="flex justify-between">
              <span>Standard Low-Flow:</span>
              <span className="font-semibold text-navy">1.6 gallons/flush</span>
            </div>
            <div className="flex justify-between">
              <span>High-Efficiency (HET):</span>
              <span className="font-semibold text-gold">1.28 gallons/flush</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Save up to $90/year on water bills with a modern toilet!
          </p>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Need a New Toilet?</h3>
          <p className="text-sm opacity-90">
            Professional installation with warranty. We handle everything from removal to cleanup.
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

export default Toilet;
