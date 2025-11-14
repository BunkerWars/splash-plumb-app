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
        <title>Garbage Disposal Maintenance Fresno, CA | Keep Running Smoothly</title>
        <meta name="description" content="Garbage disposal maintenance in Fresno: cleaning, inspection, prevent jams. Licensed plumbers, 79 years experience. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/maintenance/garbage-disposal" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/maintenance')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Garbage Disposal Maintenance</h1>
            <p className="text-sm text-muted-foreground">Keep it running smoothly</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Disposal Maintenance</h2>
          <p className="text-sm text-muted-foreground mb-4">
            A well-maintained garbage disposal lasts 10-15 years! Our service includes professional cleaning, blade sharpening, seal inspection, and motor testing to keep your disposal grinding efficiently and odor-free.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Schedule Service</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Maintenance Service Includes</h3>
          <div className="space-y-3">
            {[
              "Deep Cleaning & Deodorizing",
              "Blade Inspection & Sharpening",
              "Seal & Gasket Check",
              "Leak Detection",
              "Motor Function Test",
              "Drain Connection Inspection",
              "Reset Button & Electrical Check",
              "Grinding Chamber Cleaning",
              "Splash Guard Replacement (if needed)",
              "Performance Testing"
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
              <p className="font-semibold text-navy">Standard Maintenance</p>
              <p className="text-2xl font-bold text-navy">$80 - $120</p>
              <p className="text-xs text-muted-foreground">Cleaning, inspection, and testing</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Deep Clean with Unjam</p>
              <p className="text-2xl font-bold text-navy">$100 - $150</p>
              <p className="text-xs text-muted-foreground">Thorough cleaning plus unjamming service</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Complete Service</p>
              <p className="text-2xl font-bold text-navy">$120 - $180</p>
              <p className="text-xs text-muted-foreground">Full service with parts replacement if needed</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Annual service recommended. Major repairs or replacement quoted separately.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What's Included</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Professional Cleaning</p>
                <p className="text-xs text-muted-foreground">Remove buildup, grease, and odor-causing bacteria</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Component Check</p>
                <p className="text-xs text-muted-foreground">Inspect all parts for wear and damage</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Performance Testing</p>
                <p className="text-xs text-muted-foreground">Verify proper grinding and drainage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Signs Your Disposal Needs Service</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Foul odors even after cleaning</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Slow draining water</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Unusual grinding noises</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Frequent jams or resets needed</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Leaking from bottom or sides</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">DIY Tips Between Services</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Run cold water before, during, and after use</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Clean weekly with ice cubes and citrus peels</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Avoid fibrous foods (celery, corn husks)</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Never put grease or coffee grounds down disposal</span>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Schedule Disposal Maintenance</h3>
          <p className="text-sm opacity-90">
            Keep your garbage disposal grinding strong! Annual maintenance prevents problems and odors.
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

export default GarbageDisposal;
