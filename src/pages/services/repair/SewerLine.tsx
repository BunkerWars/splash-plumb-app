import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SewerLine = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Sewer Line Repair Fresno, CA | Fix Backups, Breaks & Root Intrusion</title>
        <meta name="description" content="Sewer line repair in Fresno: backups, breaks, root damage, collapsed lines. Video inspection, trenchless repair options. Licensed plumbers, 79 years experience. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/repair/sewer-line" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Sewer Line Repair</h1>
            <p className="text-sm text-muted-foreground">Fix backups & breaks fast</p>
          </div>
        </div>

        <div className="bg-emergency/10 border border-emergency/30 rounded-xl p-4 mb-6 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-emergency flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-navy text-sm">SEWER BACKUP EMERGENCY!</p>
            <p className="text-xs text-muted-foreground">Sewage backing up into your home? Call immediately for 24/7 emergency service!</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Sewer Line Repair</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Sewer line problems require fast, professional attention. We provide video inspection, trenchless repair, and traditional excavation services to fix any sewer line issue.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-emergency text-white hover:bg-emergency/90 tap-scale font-semibold">Emergency Call</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Schedule Service</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Sewer Line Services</h3>
          <div className="space-y-3">
            {[
              "Sewer Line Backups",
              "Tree Root Intrusion Removal",
              "Broken or Collapsed Lines",
              "Cracked Sewer Pipes",
              "Offset or Separated Joints",
              "Bellied or Sagging Lines",
              "Video Camera Inspection",
              "Trenchless Pipe Repair",
              "Traditional Excavation Repair",
              "Complete Line Replacement"
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
              <p className="font-semibold text-navy">Video Inspection</p>
              <p className="text-2xl font-bold text-navy">$300 - $600</p>
              <p className="text-xs text-muted-foreground">Camera inspection to locate and assess damage</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Spot Repairs</p>
              <p className="text-2xl font-bold text-navy">$2,000 - $5,000</p>
              <p className="text-xs text-muted-foreground">Repair small damaged sections, trenchless options</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Full Line Replacement</p>
              <p className="text-2xl font-bold text-navy">$5,000 - $20,000+</p>
              <p className="text-xs text-muted-foreground">Complete sewer line replacement, varies by length and depth</p>
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
                <p className="text-xs text-muted-foreground">Camera to identify exact problem</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Professional Repair</p>
                <p className="text-xs text-muted-foreground">Fix using best method for situation</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Flow Testing</p>
                <p className="text-xs text-muted-foreground">Verify proper drainage after repair</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emergency p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Sewer Line Emergency?</h3>
          <p className="text-sm opacity-90">
            24/7 emergency sewer repairs. Video inspection, fast response, 79 years serving Fresno!
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

export default SewerLine;