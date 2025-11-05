import { CheckCircle2 } from "lucide-react";

const milestones = [
  { year: "2018", label: "Founded" },
  { year: "50+", label: "Global Clients" },
  { year: "5+", label: "Key Industries" },
  { year: "24/7", label: "Support Coverage" }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              About Zap Technology
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              Trusted Customer Support{" "}
              <span className="gradient-text">Outsourcing Partner</span>
            </h2>
          </div>

          {/* Story Content */}
          <div className="space-y-8 mb-16 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2018 with a vision to revolutionize customer support outsourcing, Zap Technology has grown into a trusted partner for businesses worldwide. Our mission is to <strong>empower global businesses through exceptional customer interactions</strong>, combining human expertise with cutting-edge AI technology.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Mumbai, India, we specialize in delivering scalable, tech-enabled customer support solutions that adapt to your business needs. From startups to enterprises, we've helped organizations across diverse industries transform their customer experience while optimizing operational costs.
            </p>

            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-heading font-semibold mb-4">Our Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Customer-first mindset in every interaction",
                  "Technology-driven efficiency and innovation",
                  "Flexibility and scalability as you grow",
                  "Trust through transparency and reliability"
                ].map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-accent/20 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-card border-2 border-primary rounded-2xl p-6 hover-lift hover:border-accent transition-all">
                    <div className="text-4xl font-bold gradient-text mb-2">
                      {milestone.year}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {milestone.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
