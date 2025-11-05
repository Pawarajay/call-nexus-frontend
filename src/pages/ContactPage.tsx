import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 22 1234 5678", "+91 98765 43210"],
      link: "tel:+912212345678",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@zaptechnology.in", "support@zaptechnology.in"],
      link: "mailto:hello@zaptechnology.in",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Business Park, Andheri East", "Mumbai, Maharashtra 400069"],
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["24/7 Support Available", "Office: Mon-Sat 9AM-6PM"],
      link: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Get Free Consultation - Zap Technology</title>
        <meta
          name="description"
          content="Contact Zap Technology for 24/7 customer support outsourcing solutions. Get a free consultation from India's leading call center and virtual assistant company."
        />
        <meta name="keywords" content="contact zap technology, customer support consultation, call center quote, outsourcing inquiry mumbai" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <MessageSquare className="h-4 w-4" />
                Let's Talk
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6">
                Get In Touch With{" "}
                <span className="gradient-text">Our Team</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Ready to transform your customer support? Fill out the form below and our experts will reach out within 24 hours with a customized solution for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="hover-lift border-2 hover:border-primary transition-all group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {info.link && idx === 0 ? (
                            <a
                              href={info.link}
                              className="hover:text-primary transition-colors"
                              target={info.link.startsWith("http") ? "_blank" : undefined}
                              rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Info */}
              <div className="animate-fade-in">
                <h2 className="text-4xl font-heading font-bold mb-6">
                  Request a Free Consultation
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Share your requirements and we'll design a customized customer support solution that fits your business needs and budget.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Fill the Form</h3>
                      <p className="text-sm text-muted-foreground">
                        Provide your details and tell us about your requirements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Expert Consultation</h3>
                      <p className="text-sm text-muted-foreground">
                        Our team will analyze your needs and schedule a call
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Customized Proposal</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive a tailored solution with transparent pricing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Quick Onboarding</h3>
                      <p className="text-sm text-muted-foreground">
                        Start within 7-10 days with full support setup
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
                  <h3 className="font-heading font-semibold mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      No setup fees or hidden charges
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Flexible month-to-month contracts
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      24/7 support and monitoring
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="animate-slide-in-right">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <LeadCaptureForm source="contact-page" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map Placeholder - Integrate Google Maps</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
