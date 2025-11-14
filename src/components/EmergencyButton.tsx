import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export const EmergencyButton = () => {
  return (
    <a href="tel:+15592752535" className="fixed bottom-20 right-4 z-50 md:bottom-8 md:right-8">
      <Button
        size="lg"
        className="rounded-full h-16 w-16 shadow-2xl gradient-accent hover:scale-110 transition-all duration-300 tap-scale"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </a>
  );
};
