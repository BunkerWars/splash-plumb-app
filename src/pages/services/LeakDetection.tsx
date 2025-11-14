import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeakDetection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Leak Detection Services Fresno, CA | Find Hidden Leaks Fast | Advanced Technology</title>
        <meta name="description" content="Professional leak detection in Fresno using advanced technology. Find slab leaks, pipe leaks, sewer leaks & gas leaks before they cause damage. 79 years experience. Call (559) 292-4065!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Leak Detection</h1>
            <p className="text-sm text-muted-foreground">Advanced technology finds hidden leaks</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Leak Detection in Fresno</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Hidden leaks can cause thousands in damage. Our advanced leak detection technology finds problems before they become disasters, saving you money and preventing property damage.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Types of Leaks We Detect</h3>
          <div className="space-y-3">
            {[
              "Hidden Pipe Leaks Behind Walls",
              "Slab Leak Detection",
              "Underground Water Line Leaks",
              "Sewer Line Leaks",
              "Faucet & Fixture Leaks",
              "Toilet Leaks",
              "Water Heater Leaks",
              "Gas Line Leaks"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Leak Detection Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Leak Detection</p>
              <p className="text-2xl font-bold text-navy">$200 - $400</p>
              <p className="text-xs text-muted-foreground">Visual inspection and basic detection</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Advanced Electronic Detection</p>
              <p className="text-2xl font-bold text-navy">$400 - $700</p>
              <p className="text-xs text-muted-foreground">Acoustic sensors and thermal imaging</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Slab Leak Detection</p>
              <p className="text-2xl font-bold text-navy">$500 - $900</p>
              <p className="text-xs text-muted-foreground">Specialized equipment for under-slab leaks</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Detection fee often credited toward repair costs</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Signs You Have a Hidden Leak</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "High Water Bills",
              "Wet Spots on Walls",
              "Mold Growth",
              "Musty Odors",
              "Running Water Sounds",
              "Warm Floor Spots",
              "Foundation Cracks",
              "Low Water Pressure"
            ].map((sign, index) => (
              <div key={index} className="bg-navy/5 p-3 rounded-xl">
                <p className="text-sm font-medium">{sign}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Our Technology & Expertise</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Non-Invasive Detection</p>
                <p className="text-xs text-muted-foreground">Find leaks without tearing up walls or floors</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">State-of-the-Art Equipment</p>
                <p className="text-xs text-muted-foreground">Acoustic sensors, thermal cameras, moisture meters</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Fast, Accurate Results</p>
                <p className="text-xs text-muted-foreground">Pinpoint exact location within hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Suspect a Hidden Leak?</h3>
          <p className="text-sm opacity-90">
            Early detection saves thousands in damage. Call now for professional leak detection.
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

export default LeakDetection;
