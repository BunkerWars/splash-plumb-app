import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SewerLine = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Sewer Line Repair</h1>
            <p className="text-sm text-muted-foreground">Expert sewer line repairs</p>
          </div>
        </div>

        <div className="bg-emergency/10 border border-emergency/30 rounded-xl p-4 mb-6 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-emergency flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-navy text-sm">Sewer Emergency?</p>
            <p className="text-xs text-muted-foreground">Sewage backup requires immediate attention! 24/7 emergency service available.</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Sewer Line Repair</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Multiple drains backing up? Sewage odors or wet spots in yard? We provide expert sewer line repair using video inspection to pinpoint problems. From tree root removal to broken pipe repair, we fix it right.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Sewer Line Problems We Fix</h3>
          <div className="space-y-3">
            {[
              "Tree Root Intrusion",
              "Broken or Collapsed Pipes",
              "Severe Blockages",
              "Offset or Misaligned Joints",
              "Cracked or Fractured Lines",
              "Corroded Cast Iron Pipes",
              "Bellied or Sagging Sections",
              "Root-Damaged Connections",
              "Old Clay Pipe Failure",
              "Channeling or Erosion Damage"
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
              <p className="font-semibold text-navy">Minor Repairs</p>
              <p className="text-2xl font-bold text-navy">$1,500 - $3,000</p>
              <p className="text-xs text-muted-foreground">Small section repair, accessible area</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Repairs</p>
              <p className="text-2xl font-bold text-navy">$3,000 - $7,000</p>
              <p className="text-xs text-muted-foreground">Multiple sections, moderate excavation</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Major Repairs/Replacement</p>
              <p className="text-2xl font-bold text-navy">$7,000 - $25,000+</p>
              <p className="text-xs text-muted-foreground">Full line replacement, extensive damage, under structures</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Trenchless repair methods available. Price varies by length, depth, and access.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Warning Signs</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Multiple Clogs",
              "Sewage Backup",
              "Gurgling Drains",
              "Slow Drains",
              "Sewage Odor",
              "Wet Spots in Yard",
              "Foundation Cracks",
              "Extra Green Grass Patches"
            ].map((sign, index) => (
              <div key={index} className="bg-navy/5 p-3 rounded-xl">
                <p className="text-sm font-medium">{sign}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Our Repair Process</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Video Inspection</p>
                <p className="text-xs text-muted-foreground">Camera inspection pinpoints exact problem location</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Repair Options</p>
                <p className="text-xs text-muted-foreground">Traditional or trenchless repair methods</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Testing & Warranty</p>
                <p className="text-xs text-muted-foreground">Full system test and repair warranty</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Traditional vs Trenchless Repair</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-navy/5 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Traditional (Excavation):</p>
              <p className="text-muted-foreground">Complete pipe access, best for extensive damage, landscaping disruption</p>
            </div>
            <div className="bg-gold/10 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Trenchless (Pipe Lining/Bursting):</p>
              <p className="text-muted-foreground">Minimal digging, faster completion, preserves landscaping, higher cost</p>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Sewer Line Problems?</h3>
          <p className="text-sm opacity-90">
            Don't wait for a sewage backup! Expert sewer line repair with camera inspection. Call now!
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

export default SewerLine;
