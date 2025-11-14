import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OutdoorFaucet = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Outdoor Faucet Repair Fresno, CA | Hose Bib & Spigot Fixes | Freeze Damage</title>
        <meta name="description" content="Outdoor faucet repair in Fresno: hose bibs, spigots, freeze damage, leaks. Fast repairs for yard & garden faucets. Licensed plumbers, 79 years experience. Call (559) 292-4065!" />
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

export default OutdoorFaucet;
