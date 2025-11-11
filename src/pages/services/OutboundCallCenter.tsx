import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneOutgoing, CheckCircle2, ArrowRight, TrendingUp, Target, BarChart3, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const OutboundCallCenter = () => {
  const features = [
    "Lead Generation & Qualification",
    "Telemarketing Campaigns",
    "Customer Surveys & Feedback",
    "Appointment Setting",
    "Market Research",
    "Product Launches",
    "Customer Retention Calls",
    "Debt Collection Services",
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Sales Revenue",
      description: "Increase conversions with targeted outbound calling campaigns.",
    },
    {
      icon: Target,
      title: "Reach More Prospects",
      description: "Expand your market reach with systematic outbound communication.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Campaigns",
      description: "Leverage analytics to optimize calling strategies and improve ROI.",
    },
    {
      icon: Users2,
      title: "Experienced Sales Team",
      description: "Trained professionals who understand sales psychology and closing techniques.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Outbound Call Center Services | Telemarketing & Lead Generation - CallNexus</title>
        <meta
          name="description"
          content="Professional outbound call center services for lead generation, telemarketing, surveys, and customer retention. Boost sales with our expert outbound calling teams."
        />
        <meta name="keywords" content="outbound call center, telemarketing services, lead generation india, appointment setting, sales calling BPO" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-20">
        <section className="py-24 bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full text-purple-600 text-sm font-medium mb-6">
                  <PhoneOutgoing className="h-4 w-4" />
                  Outbound Services
                </div>
                <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                  Outbound Call Center{" "}
                  <span className="gradient-text">Services</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Boost sales and retention through proactive outbound calling campaigns. From lead generation to customer surveys, we drive results that matter.
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
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-3xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                    alt="Sales team working"
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
                Comprehensive Outbound Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover-lift border-2 hover:border-purple-500 transition-all"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-6 w-6 text-purple-500 mb-3" />
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
                Why Choose Our Outbound Services?
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
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                  Ready to Boost Your Sales?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Let our outbound experts generate qualified leads and increase your revenue. Get started today with a free consultation.
                </p>
              </div>

              <div className="animate-slide-in-right">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <LeadCaptureForm source="outbound-service" />
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

export default OutboundCallCenter;
