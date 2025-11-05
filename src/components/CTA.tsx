import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";
import bgPattern from "@/assets/tech-pattern-bg.jpg";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={bgPattern} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/95" />
      </div>

      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
            Ready to Transform Your Customer Support?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Let's build a reliable, tech-driven support system for your business. Join 50+ companies who trust us to deliver exceptional customer experiences, 24/7.
          </p>

          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Whether you need to scale your support team, reduce operational costs, or improve customer satisfaction—we have the expertise and technology to make it happen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-white/20 transition-all group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full transition-all backdrop-blur-sm"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="pt-12 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Instant Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                <span className="text-sm font-medium">No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
                <span className="text-sm font-medium">Flexible Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
