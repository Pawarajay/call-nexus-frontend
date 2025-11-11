import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, CheckCircle2, ArrowRight, Briefcase, Calendar, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const VirtualAssistant = () => {
  const features = [
    "Administrative Support",
    "Email & Calendar Management",
    "Data Entry & Processing",
    "CRM Management",
    "Social Media Management",
    "Document Preparation",
    "Travel Arrangements",
    "Research & Reporting",
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: "Cost Effective",
      description: "Save up to 70% compared to hiring in-house administrative staff.",
    },
    {
      icon: Calendar,
      title: "Flexible Hours",
      description: "Scale support hours based on your business needs and time zones.",
    },
    {
      icon: FileText,
      title: "Multi-Skilled Assistants",
      description: "Trained professionals with diverse administrative and operational skills.",
    },
    {
      icon: Mail,
      title: "Seamless Communication",
      description: "Proficient in all business communication tools and platforms.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Virtual Assistant Services | Remote Admin Support - CallNexus</title>
        <meta
          name="description"
          content="Hire professional virtual assistants for administrative, operational, and CRM tasks. Cost-effective remote support to help you focus on growing your business."
        />
        <meta name="keywords" content="virtual assistant services, remote admin support india, virtual receptionist, executive assistant outsourcing, VA services" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-20">
        <section className="py-24 bg-gradient-to-br from-violet-500/10 via-violet-600/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 rounded-full text-violet-600 text-sm font-medium mb-6">
                  <UserCheck className="h-4 w-4" />
                  Virtual Assistants
                </div>
                <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                  Virtual Assistant{" "}
                  <span className="gradient-text">Services</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Hire remote professionals for admin, operations, and CRM tasks. Focus on what matters while we handle the rest.
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
                <div className="bg-gradient-to-br from-violet-500/20 to-violet-600/10 rounded-3xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                    alt="Virtual assistant working"
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
                Professional Virtual Assistant Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover-lift border-2 hover:border-violet-500 transition-all"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-violet-500 mb-3" />
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
                Why Hire Virtual Assistants?
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
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                  Hire Your Virtual Assistant Today
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Get dedicated remote support to streamline your operations and boost productivity.
                </p>
              </div>

              <div className="animate-slide-in-right">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <LeadCaptureForm source="va-service" />
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

export default VirtualAssistant;
