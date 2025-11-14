import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WaterLine = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Water Line Repair Fresno, CA | Main & Supply Line Fixes | Emergency Service</title>
        <meta name="description" content="Water line repair in Fresno: main line breaks, supply line leaks, low pressure fixes. Fast emergency repairs, licensed plumbers, 79 years experience. Call (559) 292-4065!" />
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

export default WaterLine;
