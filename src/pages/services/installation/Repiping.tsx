import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Repiping = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Repiping Services Fresno, CA | Complete Pipe Replacement | Copper & PEX</title>
        <meta name="description" content="Whole-home repiping in Fresno: copper, PEX pipes, corroded pipe replacement. Stop leaks permanently! Licensed plumbers, 79 years experience. Free estimates. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/installation/repiping" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/installation')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Repiping Services</h1>
            <p className="text-sm text-muted-foreground">Complete pipe replacement</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Whole House Repiping</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Replace old, corroded pipes with modern, durable materials. Our expert repiping services eliminate leaks, improve water pressure, and provide clean, reliable plumbing for decades to come.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Signs You Need Repiping</h3>
          <div className="space-y-3">
            {[
              "Frequent Pipe Leaks",
              "Discolored or Rusty Water",
              "Low Water Pressure Throughout Home",
              "Visible Pipe Corrosion",
              "Age of Pipes (50+ years)",
              "High Water Bills from Hidden Leaks",
              "Noisy Pipes (Banging or Rattling)",
              "Lead or Galvanized Steel Pipes"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Pipe Materials We Use</h3>
          <div className="space-y-4">
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">Copper Pipes</p>
              <p className="text-sm text-muted-foreground">Industry standard, 50+ year lifespan, antimicrobial properties</p>
            </div>
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">PEX (Cross-Linked Polyethylene)</p>
              <p className="text-sm text-muted-foreground">Flexible, cost-effective, freeze-resistant, faster installation</p>
            </div>
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">CPVC Pipes</p>
              <p className="text-sm text-muted-foreground">Chemical resistant, handles hot water, budget-friendly</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Repiping Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Partial Repipe</p>
              <p className="text-2xl font-bold text-navy">$1,500 - $4,000</p>
              <p className="text-xs text-muted-foreground">Single bathroom or problem area</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Whole House Repipe (PEX)</p>
              <p className="text-2xl font-bold text-navy">$4,000 - $8,000</p>
              <p className="text-xs text-muted-foreground">Average 1,500-2,000 sq ft home</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Whole House Repipe (Copper)</p>
              <p className="text-2xl font-bold text-navy">$8,000 - $15,000</p>
              <p className="text-xs text-muted-foreground">Premium copper throughout entire home</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Pricing varies by home size, pipe material, and accessibility. Includes drywall repair.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What's Included</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Complete Pipe Replacement</p>
                <p className="text-xs text-muted-foreground">All water supply lines throughout your home</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Wall & Ceiling Repair</p>
                <p className="text-xs text-muted-foreground">Drywall patching and texturing included</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Pressure Testing</p>
                <p className="text-xs text-muted-foreground">Complete system test for leaks and performance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Repiping Process</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <p className="font-semibold text-sm">Home Inspection</p>
                <p className="text-xs text-muted-foreground">Evaluate existing pipes and plan new layout</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <p className="font-semibold text-sm">Strategic Access Points</p>
                <p className="text-xs text-muted-foreground">Minimal wall openings for pipe installation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <p className="font-semibold text-sm">Install New Pipes</p>
                <p className="text-xs text-muted-foreground">Professional installation with proper routing</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <p className="font-semibold text-sm">Test & Restore</p>
                <p className="text-xs text-muted-foreground">Pressure test, repair walls, and cleanup</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Benefits of Repiping</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Better Water Pressure",
              "Clean, Clear Water",
              "No More Leaks",
              "Lower Water Bills",
              "Increased Home Value",
              "50+ Year Warranty",
              "Peace of Mind",
              "Safer Water"
            ].map((benefit, index) => (
              <div key={index} className="bg-navy/5 p-3 rounded-xl">
                <p className="text-sm font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Ready to Repipe Your Home?</h3>
          <p className="text-sm opacity-90">
            Professional repiping with warranty. Get a free in-home estimate today!
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

export default Repiping;
