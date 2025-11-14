import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GasLine = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Gas Line Installation Fresno, CA | Safe, Certified Service | Licensed Plumbers</title>
        <meta name="description" content="Gas line installation in Fresno: stoves, dryers, water heaters, BBQs. Licensed, certified technicians ensuring safety. 79 years experience serving Central Valley. Call (559) 292-4065!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/installation')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Gas Line Installation</h1>
            <p className="text-sm text-muted-foreground">Safe, certified gas line services</p>
          </div>
        </div>

        <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-6 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-navy text-sm">Safety First</p>
            <p className="text-xs text-muted-foreground">All gas line work requires licensed, certified technicians. Never attempt DIY gas work.</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Gas Line Installation</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Safe, code-compliant gas line installation for all your natural gas appliances. Our certified technicians ensure proper sizing, routing, and testing for complete safety and optimal performance.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Gas Line Services</h3>
          <div className="space-y-3">
            {[
              "New Gas Line Installation",
              "Gas Line Extension",
              "Gas Line Repair & Replacement",
              "Gas Appliance Hookup",
              "Gas Line Pressure Testing",
              "Gas Leak Detection & Repair",
              "CSST (Corrugated Stainless Steel) Installation",
              "Gas Meter Relocation"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Gas Appliances</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Gas Ranges/Stoves",
              "Gas Dryers",
              "Water Heaters",
              "Furnaces",
              "Fireplaces",
              "Pool Heaters",
              "Outdoor Grills",
              "Generators"
            ].map((appliance, index) => (
              <div key={index} className="bg-navy/5 p-3 rounded-xl">
                <p className="text-sm font-medium">{appliance}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Installation Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Appliance Gas Line</p>
              <p className="text-2xl font-bold text-navy">$300 - $800</p>
              <p className="text-xs text-muted-foreground">Short run (under 20 ft) to single appliance</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Extended Gas Line</p>
              <p className="text-2xl font-bold text-navy">$800 - $1,500</p>
              <p className="text-xs text-muted-foreground">Longer runs or multiple appliances</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Full House Gas Piping</p>
              <p className="text-2xl font-bold text-navy">$2,000 - $5,000+</p>
              <p className="text-xs text-muted-foreground">Complete gas system for new construction</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Price varies by distance, materials, and complexity. Permits may be required.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What's Included</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Code-Compliant Installation</p>
                <p className="text-xs text-muted-foreground">All work meets California plumbing & gas codes</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Pressure Testing</p>
                <p className="text-xs text-muted-foreground">Complete leak testing before activation</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Permit & Inspection</p>
                <p className="text-xs text-muted-foreground">We handle all required permits and inspections</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Gas Line Safety</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Licensed C-36 plumber certification required</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Proper pipe sizing for BTU requirements</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Underground lines require special protection</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Annual inspections recommended</span>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Need Gas Line Service?</h3>
          <p className="text-sm opacity-90">
            Certified gas line installation and repair. Safety guaranteed. Call us today for a free estimate.
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

export default GasLine;
