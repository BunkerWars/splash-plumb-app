import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WaterHeater = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Water Heater Repair Fresno, CA | No Hot Water? Fast Fixes | Licensed Plumbers</title>
        <meta name="description" content="Water heater repair in Fresno: no hot water, strange noises, leaks, pilot light issues. Fast repairs for tank & tankless units. 79 years experience. Call (559) 292-4065!" />
...
            <a href="tel:+15592924065" className="flex-1">
...
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

export default WaterHeater;
