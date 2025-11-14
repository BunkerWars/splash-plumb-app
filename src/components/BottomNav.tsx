import { Home, Wrench, Phone, User } from "lucide-react";
import { NavLink } from "./NavLink";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Wrench, label: "Services", path: "/services" },
  { icon: Phone, label: "Emergency", path: "/emergency" },
  { icon: User, label: "About", path: "/about" },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t">
      <div className="max-w-lg mx-auto flex items-center justify-around h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center gap-1 py-2 px-4 text-muted-foreground transition-all tap-scale"
              activeClassName="text-navy"
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
