import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pipe = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Pipe Repair Fresno, CA | Fix Leaking & Burst Pipes | 24/7 Emergency Service</title>
        <meta name="description" content="Emergency pipe repair in Fresno: leaking pipes, burst pipes, frozen pipes. Fast response, licensed plumbers, 24/7 service. 79 years serving Central Valley. Call (559) 292-4065!" />
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

export default Pipe;
