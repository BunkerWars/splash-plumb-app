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
        <meta name="description" content="Emergency pipe repair in Fresno: leaking pipes, burst pipes, frozen pipes. Fast response, licensed plumbers, 24/7 service. 79 years serving Central Valley. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/repair/pipe" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Pipe Repair</h1>
            <p className="text-sm text-muted-foreground">Emergency pipe leak fixes</p>
          </div>
        </div>

        <div className="bg-emergency/10 border border-emergency/30 rounded-xl p-4 mb-6 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-emergency flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-navy text-sm">BURST PIPE EMERGENCY!</p>
            <p className="text-xs text-muted-foreground">Shut off main water valve immediately and call us for 24/7 emergency repair!</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Fast Pipe Repair Services</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Leaking or burst pipe causing damage? We provide fast emergency pipe repairs for all types of plumbing pipes. Available 24/7 for urgent situations.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-emergency text-white hover:bg-emergency/90 tap-scale font-semibold">Emergency Call</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Schedule Service</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Pipe Problems We Fix</h3>
          <div className="space-y-3">
            {[
              "Burst Pipes",
              "Leaking Pipes",
              "Frozen Pipes",
              "Cracked Pipes",
              "Corroded Pipes",
              "Pin Hole Leaks",
              "Joint Leaks",
              "Hidden Wall Leaks",
              "Under-Slab Leaks",
              "Pipe Offset or Separation"
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
              <p className="text-2xl font-bold text-navy">$200 - $500</p>
              <p className="text-xs text-muted-foreground">Accessible pipe repair, joint fixes, small leaks</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Repairs</p>
              <p className="text-2xl font-bold text-navy">$500 - $1,500</p>
              <p className="text-xs text-muted-foreground">Wall/ceiling access, multiple repairs, pipe replacement</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Major Repairs</p>
              <p className="text-2xl font-bold text-navy">$1,500 - $4,000+</p>
              <p className="text-xs text-muted-foreground">Under-slab repair, extensive damage, repiping sections</p>
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
                <p className="font-semibold text-sm">Leak Detection</p>
                <p className="text-xs text-muted-foreground">Find all leaks, even hidden ones</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Professional Repair</p>
                <p className="text-xs text-muted-foreground">Fix or replace damaged sections</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Pressure Testing</p>
                <p className="text-xs text-muted-foreground">Verify repair holds pressure</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emergency p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Pipe Emergency?</h3>
          <p className="text-sm opacity-90">
            24/7 emergency pipe repair. Fast response, licensed plumbers, 79 years serving Fresno!
          </p>
          <a href="tel:+15592924065">
            <Button className="w-full bg-white text-emergency hover:bg-white/90 tap-scale font-semibold">
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

export default Pipe;