import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SumpPump = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Sump Pump Maintenance Fresno, CA | Prevent Basement Flooding</title>
        <meta name="description" content="Sump pump maintenance in Fresno: testing, cleaning, battery backup. Licensed plumbers, 79 years experience. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/maintenance/sump-pump" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/maintenance')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Sump Pump Maintenance</h1>
            <p className="text-sm text-muted-foreground">Prevent basement flooding</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Sump Pump Service</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Don't discover your sump pump failed during a flood! Regular maintenance ensures your pump works when you need it most. We test, clean, and inspect all components to prevent basement flooding and water damage.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Schedule Service</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Maintenance Checklist</h3>
          <div className="space-y-3">
            {[
              "Pump Operation Testing",
              "Float Switch Inspection",
              "Check Valve Testing",
              "Discharge Line Inspection",
              "Pump Cleaning",
              "Pit Cleaning & Debris Removal",
              "Battery Backup Testing (if applicable)",
              "Alarm System Check",
              "Electrical Connections Inspection",
              "Performance & Flow Rate Test"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Service Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Annual Maintenance</p>
              <p className="text-2xl font-bold text-navy">$100 - $150</p>
              <p className="text-xs text-muted-foreground">Complete inspection, cleaning, and testing</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">With Repairs</p>
              <p className="text-2xl font-bold text-navy">$150 - $350</p>
              <p className="text-xs text-muted-foreground">Service plus part replacement or repairs</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Battery Backup Service</p>
              <p className="text-2xl font-bold text-navy">$200 - $400</p>
              <p className="text-xs text-muted-foreground">Battery replacement and system testing</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Annual maintenance recommended. Pump replacement quoted separately if needed.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What's Included</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Complete Testing</p>
                <p className="text-xs text-muted-foreground">Test pump, float, and all safety systems</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Thorough Cleaning</p>
                <p className="text-xs text-muted-foreground">Remove debris from pit and pump</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Expert Assessment</p>
                <p className="text-xs text-muted-foreground">Identify potential issues before they fail</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Signs of Sump Pump Problems</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Pump runs continuously or cycles frequently</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Strange noises (grinding, rattling)</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Visible rust or corrosion</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Water in basement despite pump running</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Pump is more than 7 years old</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Recommended Service Schedule</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gold/10 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Annual Service (Required):</p>
              <p className="text-muted-foreground">Every spring before rainy season or heavy snow melt</p>
            </div>
            <div className="bg-navy/5 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Monthly DIY Check:</p>
              <p className="text-muted-foreground">Pour water in pit to test pump activates properly</p>
            </div>
            <div className="bg-gold/10 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">After Heavy Storms:</p>
              <p className="text-muted-foreground">Verify pump worked correctly and pit is clear</p>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Schedule Sump Pump Service</h3>
          <p className="text-sm opacity-90">
            Protect your basement from flooding. Annual sump pump maintenance ensures it works when needed!
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

export default SumpPump;
