import { Phone, PhoneOutgoing, Headphones, UserCheck, ShoppingCart, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Phone,
    title: "Inbound Call Center Services",
    description: "Enhance customer satisfaction with round-the-clock query handling and support.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Call Center Services",
    description: "Boost sales and retention through proactive communication and engagement.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Headphones,
    title: "Technical Support Services",
    description: "Fast, reliable tech support for your customers, available 24/7.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: UserCheck,
    title: "Virtual Assistant Services",
    description: "Hire remote professionals for admin, operations, and CRM tasks.",
    color: "from-violet-500 to-violet-600"
  },
  {
    icon: ShoppingCart,
    title: "Order & Sales Support",
    description: "Streamline your order management and post-sales process efficiently.",
    color: "from-blue-600 to-purple-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Call Center, Virtual Assistant &{" "}
            <span className="gradient-text">Technical Support Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive outsourced customer support solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover-lift border-2 hover:border-primary transition-all duration-300 hover:shadow-xl bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <Button 
                  variant="ghost" 
                  className="mt-4 p-0 h-auto font-semibold text-primary hover:text-primary/80 group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full shadow-lg"
          >
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
