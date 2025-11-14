import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WaterHeaters = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Water Heater Installation & Repair Fresno, CA | Tank & Tankless | Expert Service</title>
        <meta name="description" content="Water heater services in Fresno: tank & tankless installation, repairs, maintenance. No hot water? We fix it fast! Licensed plumbers, 79 years serving Central Valley. Call (559) 292-4065!" />
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
            <h1 className="text-3xl font-bold text-navy">Water Heater Services</h1>
            <p className="text-sm text-muted-foreground">Installation, repair & maintenance</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Water Heater Solutions</h2>
          <p className="text-sm text-muted-foreground mb-4">
            From traditional tank water heaters to modern tankless systems, our certified technicians provide professional installation, repair, and maintenance services throughout Central Valley.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">
                Call Now
              </Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">
              Get Quote
            </Button>
          </div>
        </div>

        {/* Services */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Water Heater Services</h3>
          <div className="space-y-3">
            {[
              "Tank Water Heater Installation",
              "Tankless Water Heater Installation",
              "Water Heater Repair",
              "Annual Maintenance & Flushing",
              "Thermostat Replacement",
              "Heating Element Replacement",
              "Anode Rod Replacement",
              "Emergency Leak Repairs"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Water Heater Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Tank Water Heater Installation</p>
              <p className="text-2xl font-bold text-navy">$1,200 - $2,500</p>
              <p className="text-xs text-muted-foreground">40-50 gallon tanks, including removal of old unit</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Tankless Water Heater Installation</p>
              <p className="text-2xl font-bold text-navy">$2,500 - $4,500</p>
              <p className="text-xs text-muted-foreground">Energy-efficient, endless hot water</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Water Heater Repair</p>
              <p className="text-2xl font-bold text-navy">$200 - $600</p>
              <p className="text-xs text-muted-foreground">Thermostat, heating element, valve repairs</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Annual Maintenance</p>
              <p className="text-2xl font-bold text-navy">$150 - $250</p>
              <p className="text-xs text-muted-foreground">Flushing, inspection, anode rod check</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Pricing varies by unit size, type, and installation complexity. Free in-home estimates available.</p>
        </div>

        {/* Tank vs Tankless */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Tank vs. Tankless: Which is Right for You?</h3>
          <div className="space-y-4">
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">Traditional Tank Water Heaters</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Lower upfront cost</li>
                <li>• Simple installation</li>
                <li>• Reliable performance</li>
                <li>• 8-12 year lifespan</li>
              </ul>
            </div>
            <div className="bg-navy/5 p-4 rounded-xl">
              <p className="font-semibold text-navy mb-2">Tankless Water Heaters</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Endless hot water supply</li>
                <li>• 30% more energy efficient</li>
                <li>• Space-saving design</li>
                <li>• 20+ year lifespan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Signs You Need Service */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Signs Your Water Heater Needs Service</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "No Hot Water",
              "Rusty Water",
              "Strange Noises",
              "Water Leaks",
              "Inconsistent Temperature",
              "Age Over 10 Years",
              "High Energy Bills",
              "Foul Odor"
            ].map((sign, index) => (
              <div key={index} className="bg-navy/5 p-3 rounded-xl">
                <p className="text-sm font-medium">{sign}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Our Water Heater Expertise</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Factory-Trained Technicians</p>
                <p className="text-xs text-muted-foreground">Certified on all major brands: Rheem, Bradford White, AO Smith</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Warranty Protection</p>
                <p className="text-xs text-muted-foreground">Parts and labor warranties on all installations</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Same-Day Service Available</p>
                <p className="text-xs text-muted-foreground">Emergency repairs when you need them most</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Need Water Heater Service?</h3>
          <p className="text-sm opacity-90">
            Whether you need a new installation or emergency repair, our expert team is ready to help.
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

export default WaterHeaters;
