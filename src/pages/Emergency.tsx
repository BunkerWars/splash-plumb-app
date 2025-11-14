import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Phone, Clock, MapPin, Shield, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Emergency = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>24/7 Emergency Plumber Fresno, CA | Fast Response | Call (559) 275-2535</title>
        <meta name="description" content="Emergency plumber in Fresno, CA available 24/7. Fast 45-min response for burst pipes, leaks, sewage backups & more. Licensed plumbers serving Central Valley. Call now: (559) 275-2535!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="tap-scale"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">24/7 Emergency</h1>
            <p className="text-sm text-muted-foreground">We're here to help</p>
          </div>
        </div>

        {/* Emergency Alert */}
        <div className="bg-emergency p-8 rounded-2xl text-white space-y-4 animate-scale-in mb-6">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Shield className="h-6 w-6" />
            <span>Emergency Service Available</span>
          </div>
          <p className="text-sm opacity-90">
            Plumbing emergencies don't wait for business hours. Our team is ready 24/7 to respond to your urgent needs.
          </p>
          <a href="tel:+15592752535">
            <Button size="lg" className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency Line
            </Button>
          </a>
        </div>

        {/* Info Cards */}
        <div className="space-y-4">
          <div className="glass-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-navy p-3">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Response Time</h3>
                <p className="text-sm text-muted-foreground">Average 45 minutes or less</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-navy p-3">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Service Area</h3>
                <p className="text-sm text-muted-foreground">All of Central Valley</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-navy p-3">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground">Fully certified technicians</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Emergencies */}
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-bold text-navy">Common Emergencies</h2>
          <div className="space-y-2">
            {[
              "Burst pipes & flooding",
              "Severe leaks & water damage",
              "Sewage backups",
              "No hot water",
              "Gas line leaks",
              "Frozen pipes"
            ].map((item, index) => (
              <div key={index} className="glass-card p-4 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emergency"></div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 glass-card p-6 space-y-3">
          <h3 className="font-bold text-navy">Not an emergency?</h3>
          <p className="text-sm text-muted-foreground">
            Schedule a regular service appointment for routine maintenance and repairs.
          </p>
          <Button variant="outline" className="w-full tap-scale border-navy/20 text-navy hover:bg-navy/5">
            Schedule Appointment
          </Button>
        </div>
      </div>

      <EmergencyButton />
      <BottomNav />
    </div>
  );
};

export default Emergency;
