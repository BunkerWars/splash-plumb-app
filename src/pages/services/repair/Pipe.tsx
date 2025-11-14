import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pipe = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Pipe Repair Fresno, CA | Fix Leaking & Burst Pipes | 24/7 Emergency Service</title>
        <meta name="description" content="Emergency pipe repair in Fresno: leaking pipes, burst pipes, frozen pipes. Fast response, licensed plumbers, 24/7 service. 79 years serving Central Valley. Call (559) 275-2535!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Pipe Repair (Leak, Burst)</h1>
            <p className="text-sm text-muted-foreground">Emergency pipe repairs</p>
          </div>
        </div>

        <div className="bg-emergency/10 border border-emergency/30 rounded-xl p-4 mb-6 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-emergency flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-navy text-sm">Pipe Emergency?</p>
            <p className="text-xs text-muted-foreground">Call us immediately for burst pipes! We provide 24/7 emergency service.</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Emergency Pipe Repair Services</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Pipe leak or burst? We respond fast to minimize water damage. Our expert plumbers provide permanent repairs for all types of pipe failures - from pinhole leaks to complete pipe bursts. Available 24/7 for emergencies.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Pipe Problems We Repair</h3>
          <div className="space-y-3">
            {[
              "Burst Pipes (Freeze or Pressure)",
              "Pinhole Leaks",
              "Corroded Pipes",
              "Cracked or Split Pipes",
              "Leaking Joints & Fittings",
              "Hidden Wall Leaks",
              "Slab Leak Repairs",
              "Supply Line Breaks",
              "Drain Pipe Damage",
              "Root-Damaged Pipes"
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
              <p className="font-semibold text-navy">Exposed Pipe Repair</p>
              <p className="text-2xl font-bold text-navy">$200 - $500</p>
              <p className="text-xs text-muted-foreground">Accessible pipes, minor leaks or small sections</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Wall or Ceiling Pipe Repair</p>
              <p className="text-2xl font-bold text-navy">$500 - $1,500</p>
              <p className="text-xs text-muted-foreground">Includes wall opening and drywall repair</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Slab or Major Repairs</p>
              <p className="text-2xl font-bold text-navy">$1,500 - $4,000+</p>
              <p className="text-xs text-muted-foreground">Under-slab, extensive damage, or multiple locations</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Emergency service fees apply after hours. Extensive damage may require repiping.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Signs of Pipe Problems</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Water Stains",
              "Wet Spots",
              "High Water Bills",
              "Low Pressure",
              "Running Water Sounds",
              "Mold Growth",
              "Foundation Cracks",
              "Musty Odors"
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
                <p className="font-semibold text-sm">Fast Response</p>
                <p className="text-xs text-muted-foreground">Emergency service within hours</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Leak Detection</p>
                <p className="text-xs text-muted-foreground">Find exact location with specialized equipment</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Complete Repair</p>
                <p className="text-xs text-muted-foreground">Pipe repair plus wall/ceiling restoration</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Immediate Steps for Burst Pipes</h3>
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="rounded-full bg-emergency text-white h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <p className="font-semibold text-sm">Shut Off Water</p>
                <p className="text-xs text-muted-foreground">Turn off main water valve immediately</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-emergency text-white h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <p className="font-semibold text-sm">Call Us</p>
                <p className="text-xs text-muted-foreground">Emergency plumber dispatched right away</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-emergency text-white h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <p className="font-semibold text-sm">Move Valuables</p>
                <p className="text-xs text-muted-foreground">Remove items from water-affected areas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Pipe Emergency?</h3>
          <p className="text-sm opacity-90">
            24/7 emergency pipe repair service. Fast response to minimize damage. Call now!
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

export default Pipe;
