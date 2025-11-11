import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-customer-support.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-3 bg-primary/10 rounded-full text-primary text-sm font-medium">
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Your Bridge to{" "}
              <span className="gradient-text">Exceptional Customer Support</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Delivering 24/7 customer engagement, technical support, and virtual assistance powered by human expertise and AI intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl"
              >
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full transition-all"
              >
                <a href="tel:+917208531038">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Global Clients</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Support Coverage</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src={heroImage} 
                alt="Customer support team working with advanced technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="text-2xl font-bold gradient-text">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
