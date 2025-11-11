import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2, ArrowRight, Clock, Users, HeadphonesIcon, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const InboundCallCenter = () => {
  const features = [
    "24/7 Customer Support",
    "Multi-channel Support (Phone, Email, Chat)",
    "Order Processing & Tracking",
    "Product Inquiry Handling",
    "Complaint Resolution",
    "Help Desk Support",
    "Appointment Scheduling",
    "After-hours Support",
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Round-the-Clock Availability",
      description: "Never miss a customer call with our 24/7/365 inbound support services.",
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Experienced agents trained in customer service excellence and your industry specifics.",
    },
    {
      icon: HeadphonesIcon,
      title: "Multi-Language Support",
      description: "Connect with customers in their preferred language with our multilingual team.",
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Integration",
      description: "Seamless support across phone, email, live chat, and social media platforms.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Requirements Analysis",
      description: "We understand your business needs, customer base, and support requirements.",
    },
    {
      step: "2",
      title: "Team Setup & Training",
      description: "Dedicated agents are recruited, trained on your products/services, and systems.",
    },
    {
      step: "3",
      title: "Integration & Testing",
      description: "Seamless integration with your CRM, phone systems, and communication tools.",
    },
    {
      step: "4",
      title: "Go Live & Monitor",
      description: "Launch support operations with continuous monitoring and quality assurance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Inbound Call Center Services | 24/7 Customer Support - CallNexus</title>
        <meta
          name="description"
          content="Professional inbound call center services in India. 24/7 customer support, order processing, help desk, and multi-channel support to enhance customer satisfaction."
        />
        <meta name="keywords" content="inbound call center, customer support services, 24/7 call center india, help desk outsourcing, customer service BPO" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-600 text-sm font-medium mb-6">
                  <Phone className="h-4 w-4" />
                  Inbound Services
                </div>
                <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                  Inbound Call Center{" "}
                  <span className="gradient-text">Services</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Enhance customer satisfaction with professional 24/7 inbound call handling, order processing, and multi-channel support services designed to keep your customers happy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full">
                    <a href="tel:+912212345678">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us Now
                    </a>
                  </Button>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Customer service representative"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Comprehensive Inbound Support Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                From customer inquiries to order processing, we handle every inbound interaction with professionalism and care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover-lift border-2 hover:border-blue-500 transition-all"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mb-3" />
                    <p className="font-medium">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Why Choose Our Inbound Services?
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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

        {/* Process Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Our Onboarding Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Get started in just 4 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" style={{ transform: "translateX(-50%)" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Form Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-heading font-bold mb-6">
                  Ready to Enhance Your Customer Support?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Let our inbound call center experts handle your customer interactions while you focus on growing your business. Get a free consultation and custom quote today.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>No setup fees or hidden charges</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Flexible contracts - scale up or down anytime</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Quick onboarding in 7-10 days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Dedicated account manager included</span>
                  </div>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <LeadCaptureForm source="inbound-service" />
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

export default InboundCallCenter;
