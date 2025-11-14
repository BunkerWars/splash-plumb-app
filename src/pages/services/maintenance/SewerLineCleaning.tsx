import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SewerLineCleaning = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/maintenance')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Sewer Line Cleaning</h1>
            <p className="text-sm text-muted-foreground">Prevent backups & keep flowing</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Sewer Line Cleaning</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Don't wait for a sewage backup! Regular sewer line cleaning prevents clogs from tree roots, grease buildup, and debris. We use professional hydro-jetting and rooter equipment to thoroughly clean your main sewer line.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Schedule Cleaning</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Our Cleaning Methods</h3>
          <div className="space-y-3">
            {[
              "Hydro-Jetting (High-Pressure Water)",
              "Mechanical Rooter Service",
              "Video Camera Inspection",
              "Root Cutting & Removal",
              "Grease & Buildup Removal",
              "Complete Line Flushing",
              "Before & After Documentation",
              "Preventive Maintenance Plans"
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
              <p className="font-semibold text-navy">Basic Cleaning</p>
              <p className="text-2xl font-bold text-navy">$200 - $400</p>
              <p className="text-xs text-muted-foreground">Standard rooter service, minor buildup</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Hydro-Jetting</p>
              <p className="text-2xl font-bold text-navy">$400 - $800</p>
              <p className="text-xs text-muted-foreground">High-pressure cleaning, removes all buildup</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Heavy Root Removal</p>
              <p className="text-2xl font-bold text-navy">$800 - $1,500+</p>
              <p className="text-xs text-muted-foreground">Severe root intrusion, multiple cleanings</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Video inspection available. Pricing varies by line length and severity.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Signs You Need Sewer Line Cleaning</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Multiple drains backing up at once</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Gurgling sounds from drains or toilet</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Sewage odors inside or outside home</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Slow drains throughout the house</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Water backing up in basement floor drain</span>
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
                <p className="font-semibold text-sm">Video Inspection</p>
                <p className="text-xs text-muted-foreground">Camera inspection to assess condition</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Professional Cleaning</p>
                <p className="text-xs text-muted-foreground">Hydro-jetting or mechanical rooter service</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Flow Testing</p>
                <p className="text-xs text-muted-foreground">Verify proper drainage after cleaning</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Recommended Cleaning Schedule</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-navy/5 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Every 1-2 Years:</p>
              <p className="text-muted-foreground">Homes with trees near sewer lines</p>
            </div>
            <div className="bg-gold/10 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Every 2-3 Years:</p>
              <p className="text-muted-foreground">Standard preventive maintenance for most homes</p>
            </div>
            <div className="bg-navy/5 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Immediately if:</p>
              <p className="text-muted-foreground">Experiencing slow drains, backups, or sewage odors</p>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Schedule Sewer Line Cleaning</h3>
          <p className="text-sm opacity-90">
            Prevent costly backups with professional sewer line cleaning. Call for a free estimate!
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

export default SewerLineCleaning;
