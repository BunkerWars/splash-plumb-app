import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DrainCleaning = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Drain Cleaning Fresno, CA | Clogged Drains, Sewer Lines | Fast Service</title>
        <meta name="description" content="Professional drain cleaning in Fresno: kitchen sinks, toilets, showers, main sewer lines. Hydro-jetting, video inspection. Clogged drain? We clear it fast! Call (559) 275-2535!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/services')}
            className="tap-scale"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Drain Cleaning Services</h1>
            <p className="text-sm text-muted-foreground">Fast, effective solutions for all drain issues</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Drain Cleaning in Fresno</h2>
          <p className="text-sm text-muted-foreground mb-4">
            With 79+ years of experience, we solve slow drains, complete blockages, and persistent clogs using advanced technology and proven techniques.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">
                Call Now
              </Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">
              Get Quote
            </Button>
          </div>
        </div>

        {/* Services We Handle */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Drain Issues We Fix</h3>
          <div className="space-y-3">
            {[
              "Kitchen Sink Drains",
              "Bathroom Sink Drains",
              "Toilet Clogs",
              "Shower & Bathtub Drains",
              "Main Sewer Line Blockages",
              "Floor Drains",
              "Outdoor & Yard Drains",
              "Washing Machine Drains"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Problems */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Drain Problems We Solve</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Slow Draining",
              "Complete Blockages",
              "Foul Odors",
              "Gurgling Noises",
              "Overflowing Drains",
              "Root Intrusion",
              "Grease Buildup",
              "Hair Clogs"
            ].map((problem, index) => (
              <div key={index} className="bg-navy/5 p-3 rounded-xl">
                <p className="text-sm font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Transparent Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Drain Cleaning</p>
              <p className="text-2xl font-bold text-navy">$150 - $300</p>
              <p className="text-xs text-muted-foreground">Kitchen/bathroom sinks, basic clogs</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Main Sewer Line Cleaning</p>
              <p className="text-2xl font-bold text-navy">$300 - $600</p>
              <p className="text-xs text-muted-foreground">Video inspection included</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Hydro Jetting</p>
              <p className="text-2xl font-bold text-navy">$400 - $800</p>
              <p className="text-xs text-muted-foreground">High-pressure cleaning for tough clogs</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Final pricing depends on severity and accessibility. Free estimates provided.</p>
        </div>

        {/* Why Choose Us */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Why Choose Fresno Plumbing?</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">79+ Years Experience</p>
                <p className="text-xs text-muted-foreground">Family-owned since 1946, serving Central Valley</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Licensed & Certified</p>
                <p className="text-xs text-muted-foreground">Licensed plumbers with state certifications</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">24/7 Emergency Service</p>
                <p className="text-xs text-muted-foreground">Available day or night for urgent drain issues</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Our Drain Cleaning Process</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <p className="font-semibold text-sm">Inspection & Diagnosis</p>
                <p className="text-xs text-muted-foreground">Video camera inspection to identify the exact problem</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <p className="font-semibold text-sm">Clear Estimate</p>
                <p className="text-xs text-muted-foreground">Upfront pricing before we begin any work</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <p className="font-semibold text-sm">Professional Cleaning</p>
                <p className="text-xs text-muted-foreground">Using appropriate tools: snakes, hydro-jetting, or manual clearing</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-gold text-navy h-8 w-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <p className="font-semibold text-sm">Verification & Prevention Tips</p>
                <p className="text-xs text-muted-foreground">Ensure proper flow and provide maintenance advice</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Need Drain Cleaning Today?</h3>
          <p className="text-sm opacity-90">
            Don't let a clogged drain disrupt your day. Call us now for fast, professional service.
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

export default DrainCleaning;
