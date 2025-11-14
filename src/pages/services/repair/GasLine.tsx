import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GasLine = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Gas Line Repair</h1>
            <p className="text-sm text-muted-foreground">Emergency gas leak repairs</p>
          </div>
        </div>

        <div className="bg-emergency/10 border border-emergency/30 rounded-xl p-4 mb-6 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-emergency flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-navy text-sm">GAS LEAK EMERGENCY!</p>
            <p className="text-xs text-muted-foreground">Smell gas? Leave immediately and call 911, then call us. Never turn lights on/off!</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Licensed Gas Line Repair</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Gas leaks are extremely dangerous and require immediate professional attention. Our licensed technicians provide 24/7 emergency gas line repair, leak detection, and line replacement. All work meets strict safety codes.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-emergency text-white hover:bg-emergency/90 tap-scale font-semibold">Emergency Call</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Schedule Service</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Gas Line Services</h3>
          <div className="space-y-3">
            {[
              "Emergency Gas Leak Repair",
              "Gas Line Leak Detection",
              "Damaged Line Replacement",
              "Corroded Pipe Repair",
              "Earthquake Damage Repair",
              "Gas Line Pressure Testing",
              "Connection Repairs",
              "Black Iron Pipe Repair",
              "CSST Line Repair",
              "Gas Valve Replacement"
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
              <p className="text-xs text-muted-foreground">Small leaks, valve replacement, connection repairs</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Repairs</p>
              <p className="text-2xl font-bold text-navy">$500 - $1,500</p>
              <p className="text-xs text-muted-foreground">Pipe section replacement, moderate damage</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Major Repairs/Replacement</p>
              <p className="text-2xl font-bold text-navy">$1,500 - $5,000+</p>
              <p className="text-xs text-muted-foreground">Extensive damage, main line work, multiple locations</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Emergency service fees apply. Permits and inspections required. Price varies by scope and access.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Gas Leak Warning Signs</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-emergency/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-emergency"></div>
              </div>
              <span><strong>Smell:</strong> Rotten egg or sulfur odor</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-emergency/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-emergency"></div>
              </div>
              <span><strong>Sound:</strong> Hissing or whistling near gas lines</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-emergency/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-emergency"></div>
              </div>
              <span><strong>Sight:</strong> Dead plants near gas line, dust clouds</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-emergency/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-emergency"></div>
              </div>
              <span><strong>Physical:</strong> Dizziness, nausea, headaches</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">If You Smell Gas</h3>
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="rounded-full bg-emergency text-white h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <p className="font-semibold text-sm">Leave Immediately</p>
                <p className="text-xs text-muted-foreground">Don't turn lights/appliances on or off - no sparks!</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-emergency text-white h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <p className="font-semibold text-sm">Call 911 from Outside</p>
                <p className="text-xs text-muted-foreground">Report gas leak to emergency services</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-emergency text-white h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <p className="font-semibold text-sm">Call Us for Repair</p>
                <p className="text-xs text-muted-foreground">We'll coordinate with gas company for safe repair</p>
              </div>
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
                <p className="font-semibold text-sm">Licensed Technicians</p>
                <p className="text-xs text-muted-foreground">Certified for gas line work and safety</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Code-Compliant Repair</p>
                <p className="text-xs text-muted-foreground">All work meets safety codes and regulations</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Pressure & Leak Testing</p>
                <p className="text-xs text-muted-foreground">Thorough testing to ensure safety</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emergency p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Gas Line Emergency?</h3>
          <p className="text-sm opacity-90">
            24/7 emergency gas line repair. Licensed, certified technicians. Your safety is our priority!
          </p>
          <a href="tel:+15592752535">
            <Button className="w-full bg-white text-emergency hover:bg-white/90 tap-scale font-semibold">
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

export default GasLine;
