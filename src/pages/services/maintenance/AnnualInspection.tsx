import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AnnualInspection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/maintenance')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Annual Plumbing Inspection</h1>
            <p className="text-sm text-muted-foreground">Complete home checkup</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Comprehensive Plumbing Inspection</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Catch problems early with an annual plumbing inspection! Our experienced technicians check every aspect of your home's plumbing system, identifying potential issues before they become expensive emergencies. Get peace of mind knowing your plumbing is in top shape.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Schedule Inspection</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Complete Inspection Includes</h3>
          <div className="space-y-3">
            {[
              "Water Heater Inspection",
              "All Faucets & Fixtures Check",
              "Toilet Operation Testing",
              "Drain Flow Assessment",
              "Visible Pipe Inspection",
              "Water Pressure Testing",
              "Leak Detection Scan",
              "Garbage Disposal Check",
              "Shut-off Valve Testing",
              "Sewer Line Camera Inspection (optional)",
              "Water Quality Assessment",
              "Outdoor Faucet & Sprinkler Check"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Inspection Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Inspection</p>
              <p className="text-2xl font-bold text-navy">$150 - $250</p>
              <p className="text-xs text-muted-foreground">Complete home plumbing checkup with report</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">With Video Camera</p>
              <p className="text-2xl font-bold text-navy">$250 - $400</p>
              <p className="text-xs text-muted-foreground">Includes sewer line camera inspection</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Pre-Purchase Inspection</p>
              <p className="text-2xl font-bold text-navy">$300 - $500</p>
              <p className="text-xs text-muted-foreground">Detailed inspection for home buyers with full report</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Inspection fee often waived if repairs are performed. Written report included.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What You'll Receive</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Detailed Written Report</p>
                <p className="text-xs text-muted-foreground">Complete findings with photos of issues</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Priority Recommendations</p>
                <p className="text-xs text-muted-foreground">What needs immediate attention vs future planning</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Cost Estimates</p>
                <p className="text-xs text-muted-foreground">Upfront pricing for any recommended repairs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Why Get an Annual Inspection?</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Catch small problems before they become emergencies</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Extend the life of plumbing fixtures and appliances</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Lower water bills by finding leaks</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Avoid water damage to your home</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Peace of mind your plumbing is safe</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Issues We Find</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Hidden Leaks",
              "Worn Fixtures",
              "Slow Drains",
              "Low Pressure",
              "Corroded Pipes",
              "Water Heater Issues",
              "Valve Problems",
              "Outdated Components"
            ].map((issue, index) => (
              <div key={index} className="bg-navy/5 p-3 rounded-xl">
                <p className="text-sm font-medium">{issue}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Who Needs an Inspection?</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gold/10 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Homeowners:</p>
              <p className="text-muted-foreground">Annual inspection as preventive maintenance, especially homes 10+ years old</p>
            </div>
            <div className="bg-navy/5 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Home Buyers:</p>
              <p className="text-muted-foreground">Pre-purchase inspection to avoid costly surprises</p>
            </div>
            <div className="bg-gold/10 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Home Sellers:</p>
              <p className="text-muted-foreground">Pre-listing inspection to fix issues before they derail sale</p>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Schedule Your Inspection</h3>
          <p className="text-sm opacity-90">
            Protect your home with an annual plumbing inspection. Find problems early and save thousands!
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

export default AnnualInspection;
