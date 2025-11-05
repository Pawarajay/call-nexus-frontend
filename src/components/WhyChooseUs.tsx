import { Clock, Sparkles, Network, Users, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const differentiators = [
  {
    icon: Clock,
    title: "24/7 Global Availability",
    description: "Round-the-clock support coverage ensuring your customers are never left waiting."
  },
  {
    icon: Sparkles,
    title: "Custom & Scalable Solutions",
    description: "Flexible services that grow with your business needs and adapt to market changes."
  },
  {
    icon: Network,
    title: "CRM + AI Integration",
    description: "Seamless integration with your existing systems enhanced by AI-powered insights."
  },
  {
    icon: Users,
    title: "Trained Multi-Industry Experts",
    description: "Skilled professionals with deep knowledge across diverse business sectors."
  }
];

const testimonials = [
  {
    quote: "Zap Technology transformed our customer support operations. Their 24/7 service and professional team helped us scale without compromising quality.",
    author: "Sarah Johnson",
    position: "Head of Operations, E-commerce Company"
  },
  {
    quote: "The integration was seamless and the results were immediate. Our customer satisfaction scores improved by 35% within the first quarter.",
    author: "Michael Chen",
    position: "CTO, Healthcare Tech Startup"
  },
  {
    quote: "Their technical support team is exceptional. They handle complex queries with ease and have significantly reduced our resolution times.",
    author: "Priya Sharma",
    position: "Customer Success Manager, SaaS Platform"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Why Businesses Choose{" "}
            <span className="gradient-text">Zap Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Smart, scalable, and technology-driven support that grows with you
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {differentiators.map((item, index) => (
            <Card 
              key={index}
              className="group hover-lift border-2 hover:border-primary transition-all duration-300 bg-card text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-lg font-heading font-semibold mb-3">
                  {item.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="hover-lift border-2 hover:border-accent transition-all duration-300 bg-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
