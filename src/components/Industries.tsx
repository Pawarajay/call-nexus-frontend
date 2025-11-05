import { ShoppingBag, Heart, DollarSign, Building2, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Handle orders, returns, and customer inquiries effortlessly.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Manage appointments, insurance queries, and patient communication.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: DollarSign,
    title: "Finance & Banking",
    description: "Ensure secure and efficient customer transactions.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Automate property inquiries and client follow-ups.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Deliver seamless booking and guest support experiences.",
    gradient: "from-purple-500 to-indigo-500"
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Industries We Serve
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Customer Support Solutions for{" "}
            <span className="gradient-text">Every Business</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized support services tailored to your industry's unique requirements
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden hover-lift border-2 hover:border-accent transition-all duration-300 hover:shadow-xl bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardContent className="p-8 relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-accent transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
