import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OutdoorFaucet = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Outdoor Faucet Repair Fresno, CA | Hose Bib & Spigot Fixes | Freeze Damage</title>
        <meta name="description" content="Outdoor faucet repair in Fresno: hose bibs, spigots, freeze damage, leaks. Fast repairs for yard & garden faucets. Licensed plumbers, 79 years experience. Call (559) 292-4065!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Outdoor Faucet Repair</h1>
            <p className="text-sm text-muted-foreground">Fix hose bibs & spigots</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Outdoor Faucet Repair</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Outdoor faucet leaking or frozen? We repair and replace hose bibs, spigots, and yard hydrants. Fast service to get your outdoor water working again.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Outdoor Faucet Problems</h3>
          <div className="space-y-3">
            {[
              "Leaking Outdoor Faucet",
              "Frozen Hose Bib",
              "Broken Handle or Stem",
              "Dripping Spigot",
              "Won't Shut Off Completely",
              "Freeze Damage Repair",
              "Cracked Faucet Body",
              "Loose or Wobbly Faucet",
              "Low Water Pressure",
              "Vacuum Breaker Issues"
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
              <p className="text-xs text-muted-foreground">Washer replacement, handle fix, tighten connections</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Repairs</p>
              <p className="text-2xl font-bold text-navy">$200 - $400</p>
              <p className="text-xs text-muted-foreground">Frost-free faucet repair, valve replacement</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Complete Replacement</p>
              <p className="text-2xl font-bold text-navy">$300 - $600+</p>
              <p className="text-xs text-muted-foreground">New faucet installation, freeze damage, pipe work</p>
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
                <p className="font-semibold text-sm">Full Inspection</p>
                <p className="text-xs text-muted-foreground">Check faucet and supply line</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Quality Repair</p>
                <p className="text-xs text-muted-foreground">Fix or replace with durable parts</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Winterization Tips</p>
                <p className="text-xs text-muted-foreground">Prevent future freeze damage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Fix Your Outdoor Faucet</h3>
          <p className="text-sm opacity-90">
            Same-day outdoor faucet repairs. Licensed plumbers, quality parts, 79 years serving Fresno!
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

export default OutdoorFaucet;