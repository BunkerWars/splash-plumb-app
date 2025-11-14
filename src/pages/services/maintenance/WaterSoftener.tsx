import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WaterSoftener = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Water Softener Maintenance Fresno, CA | Salt & Filter Service</title>
        <meta name="description" content="Water softener maintenance in Fresno: salt refills, filter changes, system checks. Licensed plumbers, 79 years experience. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/maintenance/water-softener" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/maintenance')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Water Softener Maintenance</h1>
            <p className="text-sm text-muted-foreground">Keep water flowing soft</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Water Softener Service</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Regular maintenance keeps your water softener working efficiently and extends its lifespan. We clean the brine tank, check resin beds, calibrate settings, and ensure you're getting the soft water you deserve. Salt delivery available!
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Schedule Service</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Maintenance Services</h3>
          <div className="space-y-3">
            {[
              "Brine Tank Cleaning",
              "Salt Level Check & Refill",
              "Resin Bed Inspection",
              "Control Valve Testing",
              "Regeneration Cycle Check",
              "Bypass Valve Inspection",
              "Water Hardness Testing",
              "System Settings Calibration",
              "Salt Bridge Removal",
              "Performance Optimization"
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
              <p className="font-semibold text-navy">Basic Service</p>
              <p className="text-2xl font-bold text-navy">$80 - $150</p>
              <p className="text-xs text-muted-foreground">Inspection, cleaning, and testing</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Full Service with Cleaning</p>
              <p className="text-2xl font-bold text-navy">$150 - $250</p>
              <p className="text-xs text-muted-foreground">Complete service including brine tank cleaning</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Resin Replacement</p>
              <p className="text-2xl font-bold text-navy">$300 - $600</p>
              <p className="text-xs text-muted-foreground">Resin bed replacement (typically every 10-15 years)</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Annual service recommended. Salt delivery available separately.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What's Included</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">System Inspection</p>
                <p className="text-xs text-muted-foreground">Check all components and connections</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Tank Cleaning</p>
                <p className="text-xs text-muted-foreground">Remove buildup and check for salt bridges</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Water Testing</p>
                <p className="text-xs text-muted-foreground">Verify proper softening levels</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Signs Your Softener Needs Service</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Hard water stains returning on fixtures</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Soap doesn't lather well</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Salt not going down in tank</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>System uses more salt than usual</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Strange noises during regeneration</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Benefits of Regular Maintenance</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Extends system lifespan to 15-20 years</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Maximizes efficiency and reduces salt usage</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Prevents costly repairs from neglect</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-navy/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-navy"></div>
              </div>
              <span>Maintains warranty requirements</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Service Schedule</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gold/10 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Annual Professional Service:</p>
              <p className="text-muted-foreground">Complete inspection and cleaning once per year</p>
            </div>
            <div className="bg-navy/5 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Monthly Check (DIY):</p>
              <p className="text-muted-foreground">Check salt level and add salt as needed</p>
            </div>
            <div className="bg-gold/10 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Every 5 Years:</p>
              <p className="text-muted-foreground">Deep cleaning and resin bed inspection</p>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Schedule Water Softener Service</h3>
          <p className="text-sm opacity-90">
            Keep your water soft and your system efficient. Annual maintenance saves money on salt and repairs!
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

export default WaterSoftener;
