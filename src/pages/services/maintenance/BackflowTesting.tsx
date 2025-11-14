import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackflowTesting = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/maintenance')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Backflow Testing</h1>
            <p className="text-sm text-muted-foreground">Annual testing & certification</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Certified Backflow Testing & Repair</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Backflow prevention devices protect your drinking water from contamination. Annual testing is required by law and ensures your backflow preventer is working properly. We're certified to test, repair, and install all types of backflow devices.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Schedule Testing</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Our Backflow Services</h3>
          <div className="space-y-3">
            {[
              "Annual Testing & Certification",
              "Backflow Preventer Installation",
              "Repair & Component Replacement",
              "Inspection & Assessment",
              "City Report Filing",
              "Compliance Documentation",
              "Emergency Repairs",
              "Winterization Services"
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
              <p className="font-semibold text-navy">Annual Testing</p>
              <p className="text-2xl font-bold text-navy">$75 - $150</p>
              <p className="text-xs text-muted-foreground">Standard testing and certification report</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Testing with Minor Repairs</p>
              <p className="text-2xl font-bold text-navy">$150 - $300</p>
              <p className="text-xs text-muted-foreground">Testing plus valve or component replacement</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Installation</p>
              <p className="text-2xl font-bold text-navy">$400 - $1,200+</p>
              <p className="text-xs text-muted-foreground">New backflow preventer installation</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Annual testing legally required. We file all reports with the city/county.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What's Included in Testing</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Complete Testing</p>
                <p className="text-xs text-muted-foreground">Test all valves and check valves for proper operation</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Certification Report</p>
                <p className="text-xs text-muted-foreground">Official report filed with local authorities</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Minor Adjustments</p>
                <p className="text-xs text-muted-foreground">Small adjustments included in test price</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What is a Backflow Preventer?</h3>
          <p className="text-sm text-muted-foreground mb-3">
            A backflow preventer is a device that prevents contaminated water from flowing backward into your clean water supply. It's required on:
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Irrigation/sprinkler systems</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Fire suppression systems</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Commercial buildings</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Industrial facilities</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Multi-family properties</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Why Annual Testing is Required</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Protects public water supply from contamination</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Required by state and local regulations</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Devices can fail without visible signs</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Fines and water shutoff for non-compliance</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Testing Schedule</h3>
          <div className="bg-gold/10 p-4 rounded-xl">
            <p className="font-semibold text-navy mb-2">Annual Testing Required:</p>
            <p className="text-sm text-muted-foreground">All backflow prevention devices must be tested once per year by a certified tester. We'll remind you when it's time for your annual test.</p>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Schedule Backflow Testing</h3>
          <p className="text-sm opacity-90">
            Stay compliant and protect your water supply. Certified testing and same-day reports filed!
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

export default BackflowTesting;
