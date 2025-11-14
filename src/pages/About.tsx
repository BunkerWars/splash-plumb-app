import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Shield, Users, Award, Clock, ArrowLeft, Youtube, Facebook, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>About Fresno Plumbing - 79 Years Serving Central Valley, CA | Licensed & Certified</title>
        <meta
          name="description"
          content="Fresno Plumbing has served Central Valley since 1945. Licensed, certified plumbers offering residential, commercial & industrial services. Medical gas certified. Call (559) 292-4065!"
        />
        <link rel="canonical" href="https://fresno.plumbing/about" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">About Us</h1>
            <p className="text-sm text-muted-foreground">Since 1945</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-navy p-8 rounded-2xl text-white space-y-4 animate-scale-in mb-6">
          <h2 className="text-2xl font-bold">79 Years of Excellence</h2>
          <p className="text-sm opacity-90">
            Fresno Plumbing & Heating, Inc. has been serving the Central Valley since 1945, providing top-quality
            plumbing services to residential, commercial, and industrial clients.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-navy mb-1">79+</div>
            <div className="text-sm text-muted-foreground">Years in Business</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-navy mb-1">1000s</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-navy">Why Choose Us</h2>

          <div className="glass-card p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-navy p-3">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Licensed & Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Fully licensed, bonded, and insured. Medical gas certified for healthcare facilities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-navy p-3">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Expert Team</h3>
                <p className="text-sm text-muted-foreground">
                  Our experienced technicians receive ongoing training in the latest plumbing technologies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-navy p-3">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">24/7 Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock emergency service for when you need us most.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-navy p-3">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Quality Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We stand behind our work with comprehensive warranties and guarantees.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-navy">We Serve</h2>
          <div className="glass-card p-6 space-y-3">
            <h3 className="font-semibold">Residential</h3>
            <p className="text-sm text-muted-foreground">
              Complete plumbing solutions for homes including repairs, installations, and upgrades.
            </p>
          </div>
          <div className="glass-card p-6 space-y-3">
            <h3 className="font-semibold">Commercial</h3>
            <p className="text-sm text-muted-foreground">
              Schools, hospitals, offices, and retail spaces throughout Central Valley.
            </p>
          </div>
          <div className="glass-card p-6 space-y-3">
            <h3 className="font-semibold">Industrial</h3>
            <p className="text-sm text-muted-foreground">
              Large-scale plumbing systems for manufacturing and industrial facilities.
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-navy">Connect With Us</h2>
          <div className="glass-card p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Follow us on social media for tips, updates, and plumbing insights!
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/@Fresno.Plumbing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy text-white hover:bg-navy/90 tap-scale transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/OfficialFresnoPlumbing"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy text-white hover:bg-navy/90 tap-scale transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy text-white hover:bg-navy/90 tap-scale transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy text-white hover:bg-navy/90 tap-scale transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Get in Touch</h3>
          <p className="text-sm opacity-90">Experience the difference that 79 years of expertise makes.</p>
          <a href="tel:+15592924065">
            <Button size="lg" className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">
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

export default About;
