import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Toilet = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Toilet Repair Fresno, CA | Fix Running Toilets, Leaks & Flush Problems</title>
        <meta name="description" content="Toilet repair in Fresno: running toilets, leaks, flush issues, clogs. Fast repairs for all brands. Licensed plumbers, 79 years experience serving Central Valley. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/repair/toilet" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Toilet Repair</h1>
            <p className="text-sm text-muted-foreground">Fix running & leaking toilets</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Toilet Repair Services</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Running toilet wasting water? Won't flush properly? We repair all toilet issues - from simple flapper replacements to complete rebuilds. All brands serviced.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Toilet Problems We Fix</h3>
          <div className="space-y-3">
            {[
              "Running Toilet (Won't Stop)",
              "Weak or Incomplete Flush",
              "Toilet Won't Flush",
              "Leaking at Base",
              "Water Running Into Bowl",
              "Handle Broken or Loose",
              "Fill Valve Issues",
              "Flapper Problems",
              "Phantom Flushing",
              "Rocking or Wobbly Toilet"
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
              <p className="text-2xl font-bold text-navy">$120 - $250</p>
              <p className="text-xs text-muted-foreground">Flapper, fill valve, handle replacement</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Repairs</p>
              <p className="text-2xl font-bold text-navy">$250 - $450</p>
              <p className="text-xs text-muted-foreground">Wax ring, flush valve, base seal repair</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Major Repairs</p>
              <p className="text-2xl font-bold text-navy">$450 - $800+</p>
              <p className="text-xs text-muted-foreground">Tank rebuild, flange repair, major leak fixes</p>
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
                <p className="font-semibold text-sm">Complete Diagnosis</p>
                <p className="text-xs text-muted-foreground">Identify all toilet issues</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Quality Parts</p>
                <p className="text-xs text-muted-foreground">Durable replacement components</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Proper Testing</p>
                <p className="text-xs text-muted-foreground">Ensure everything works perfectly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Stop Wasting Water Today</h3>
          <p className="text-sm opacity-90">
            Same-day toilet repairs. Licensed plumbers, upfront pricing, 79 years serving Fresno!
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

export default Toilet;