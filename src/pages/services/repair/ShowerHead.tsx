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
        <title>Shower Head Repair Fresno, CA | Fix Leaks, Low Pressure & Clogs</title>
        <meta name="description" content="Shower head repair in Fresno: fix leaks, low water pressure, clogged spray holes. Fast repairs, licensed plumbers, 79 years serving Central Valley. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/repair/shower-head" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Shower Head Repair</h1>
            <p className="text-sm text-muted-foreground">Fix leaks & low pressure</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Shower Head Repair</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Low water pressure or leaky shower head? We fix all shower head issues - from mineral buildup to faulty connections. Quick repairs, quality service.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Shower Head Problems</h3>
          <div className="space-y-3">
            {[
              "Low Water Pressure",
              "Leaking at Connection",
              "Clogged Spray Holes",
              "Dripping Shower Head",
              "Broken Swivel Ball",
              "Mineral Buildup",
              "Uneven Water Spray",
              "Cracked Shower Arm",
              "Loose or Wobbly Head",
              "Temperature Issues"
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
              <p className="text-2xl font-bold text-navy">$80 - $150</p>
              <p className="text-xs text-muted-foreground">Clean, tighten, washer replacement</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Repairs</p>
              <p className="text-2xl font-bold text-navy">$150 - $300</p>
              <p className="text-xs text-muted-foreground">Shower arm replacement, valve repair</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Complex Repairs</p>
              <p className="text-2xl font-bold text-navy">$300 - $500+</p>
              <p className="text-xs text-muted-foreground">Wall access, pipe work, valve replacement</p>
            </div>
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
                <p className="font-semibold text-sm">Full Inspection</p>
                <p className="text-xs text-muted-foreground">Check head, arm, and connections</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Professional Repair</p>
                <p className="text-xs text-muted-foreground">Fix leaks and restore pressure</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Quality Guarantee</p>
                <p className="text-xs text-muted-foreground">Warranty on parts and labor</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Fix Your Shower Today</h3>
          <p className="text-sm opacity-90">
            Same-day shower head repairs. Licensed plumbers, upfront pricing, 79 years serving Fresno!
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