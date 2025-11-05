import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, CheckCircle2, ArrowRight, Wrench, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TechnicalSupport = () => {
  const features = [
    "Hardware & Software Support",
    "Network Troubleshooting",
    "Remote Desktop Assistance",
    "Installation & Configuration",
    "System Maintenance",
    "Bug Reporting & Tracking",
    "Level 1, 2 & 3 Support",
    "Ticket Management",
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Tech Support",
      description: "Round-the-clock technical assistance for your customers across all time zones.",
    },
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Certified IT professionals with deep technical knowledge and troubleshooting skills.",
    },
    {
      icon: Zap,
      title: "Fast Resolution",
      description: "Quick issue identification and resolution to minimize downtime.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Data security protocols and compliance with industry standards.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Technical Support Services | 24/7 IT Help Desk - Zap Technology</title>
        <meta
          name="description"
          content="Professional technical support services with 24/7 availability. Expert IT help desk, remote support, troubleshooting, and maintenance for your customers."
        />
        <meta name="keywords" content="technical support services, IT help desk, remote tech support india, technical assistance BPO, 24/7 tech support" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-20">
        <section className="py-24 bg-gradient-to-br from-indigo-500/10 via-indigo-600/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full text-indigo-600 text-sm font-medium mb-6">
                  <Headphones className="h-4 w-4" />
                  Technical Support
                </div>
                <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                  Technical Support{" "}
                  <span className="gradient-text">Services</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Fast, reliable technical support for your customers, available 24/7. Our expert technicians resolve issues quickly to keep your operations running smoothly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 rounded-3xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    alt="Technical support"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Comprehensive Technical Support
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover-lift border-2 hover:border-indigo-500 transition-all"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-indigo-500 mb-3" />
                    <p className="font-medium">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Why Choose Our Technical Support?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="hover-lift group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-heading font-bold mb-6">
                  Need Reliable Tech Support?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Partner with our technical support experts to deliver exceptional service to your customers.
                </p>
              </div>

              <div className="animate-slide-in-right">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <LeadCaptureForm source="technical-service" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TechnicalSupport;
