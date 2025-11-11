import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap, Award, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Customer-First Approach",
      description: "Every decision we make is centered around delivering exceptional customer experiences.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our multilingual agents are trained across industries to handle diverse customer needs.",
    },
    {
      icon: Zap,
      title: "Technology-Driven",
      description: "We leverage cutting-edge AI and automation to enhance efficiency without losing the human touch.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality checks and continuous training ensure consistently high service standards.",
    },
  ];

  const milestones = [
    { year: "2018", event: "Founded in Mumbai" },
    { year: "2019", event: "Served 10+ Clients" },
    { year: "2021", event: "Expanded to 50+ Team Members" },
    { year: "2023", event: "50+ Global Clients" },
    { year: "2025", event: "Industry Leader in Tech-Enabled Support" },
  ];

  const stats = [
    { value: "50+", label: "Global Clients" },
    { value: "100K+", label: "Calls Handled Monthly" },
    { value: "24/7", label: "Support Coverage" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <>
      <Helmet>
        <title>About CallNexus | Leading Customer Support Outsourcing Company</title>
        <meta
          name="description"
          content="Learn about CallNexus, Mumbai's premier customer support outsourcing company. Discover our mission, values, and commitment to delivering exceptional 24/7 support services."
        />
        <meta name="keywords" content="about CallNexus, customer support company mumbai, call center company india, outsourcing company story" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6">
                Empowering Businesses Through{" "}
                <span className="gradient-text">Exceptional Support</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Since 2018, we've been on a mission to transform how businesses connect with their customers through innovative, technology-driven support solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-heading font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    CallNexus was founded in 2018 with a simple yet powerful vision: to bridge the gap between businesses and their customers through exceptional, technology-enabled support services.
                  </p>
                  <p>
                    Starting in Mumbai, we recognized that businesses needed more than just call answering services—they needed a strategic partner who could scale with them, understand their unique challenges, and deliver consistent, high-quality customer experiences.
                  </p>
                  <p>
                    Today, we proudly serve 50+ clients across E-commerce, Healthcare, Finance, Real Estate, and Travel industries, handling over 100,000 customer interactions monthly. Our success stems from combining human expertise with cutting-edge technology, ensuring every customer interaction is meaningful and efficient.
                  </p>
                  <p>
                    We're not just a service provider—we're your growth partner, committed to helping you build lasting customer relationships that drive business success.
                  </p>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-heading font-bold mb-6">Our Journey</h3>
                  <div className="space-y-6">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-20 flex-shrink-0">
                          <div className="text-lg font-bold text-primary">{milestone.year}</div>
                        </div>
                        <div className="flex-1">
                          <div className="h-px bg-border my-3" />
                          <p className="text-sm">{milestone.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-6">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="hover-lift border-2 hover:border-primary transition-all group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-center text-white">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let's discuss how we can help transform your customer support operations
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
