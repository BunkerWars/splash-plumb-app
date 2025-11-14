import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GarbageDisposal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Garbage Disposal Repair Fresno, CA | Fix Jams, Leaks & Motor Issues</title>
        <meta name="description" content="Garbage disposal repair in Fresno: jammed disposals, leaks, motor problems, stuck blades. All brands serviced. Licensed plumbers, 79 years experience. Call (559) 275-2535!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Garbage Disposal Repair</h1>
            <p className="text-sm text-muted-foreground">Fix jams, leaks & motor issues</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Garbage Disposal Repair Services</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Disposal humming but not grinding? Leaking underneath? Our expert plumbers quickly diagnose and repair garbage disposal issues. We fix jams, leaks, and electrical problems to get your disposal working again.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Disposal Problems We Fix</h3>
          <div className="space-y-3">
            {[
              "Jammed or Stuck Disposal",
              "Humming But Not Grinding",
              "Leaking from Bottom",
              "Leaking from Sink Connection",
              "Won't Turn On",
              "Tripped Reset Button",
              "Strange Noises or Grinding",
              "Slow Draining",
              "Dishwasher Connection Leak",
              "Foul Odors"
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
              <p className="text-2xl font-bold text-navy">$100 - $200</p>
              <p className="text-xs text-muted-foreground">Unjamming, reset, minor adjustments</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Leak Repairs</p>
              <p className="text-2xl font-bold text-navy">$150 - $300</p>
              <p className="text-xs text-muted-foreground">Seal replacement, connection repairs</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Motor/Major Repairs</p>
              <p className="text-2xl font-bold text-navy">$200 - $400</p>
              <p className="text-xs text-muted-foreground">If motor failed, replacement usually recommended</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*If repair cost exceeds $200, replacement may be more economical.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">DIY Quick Fixes (Try First)</h3>
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <p className="font-semibold text-sm">Reset Button</p>
                <p className="text-xs text-muted-foreground">Press red reset button on bottom of unit</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <p className="font-semibold text-sm">Manual Crank</p>
                <p className="text-xs text-muted-foreground">Use Allen wrench in bottom center hole to free jam</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <p className="font-semibold text-sm">Check Breaker</p>
                <p className="text-xs text-muted-foreground">Verify circuit breaker hasn't tripped</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Still not working? Call us for professional diagnosis!</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What's Included</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Full Diagnosis</p>
                <p className="text-xs text-muted-foreground">Determine if repair or replacement is best</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Professional Repair</p>
                <p className="text-xs text-muted-foreground">Safe, code-compliant electrical work</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Testing & Warranty</p>
                <p className="text-xs text-muted-foreground">Test operation and provide repair warranty</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Prevention Tips</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Run cold water before, during, and after use</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Never put bones, shells, or hard items down disposal</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Avoid grease, oil, and fibrous vegetables</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Clean monthly with ice and citrus peels</span>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Disposal Not Working?</h3>
          <p className="text-sm opacity-90">
            Fast garbage disposal repairs. We'll get it grinding again. Call now!
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

export default GarbageDisposal;
