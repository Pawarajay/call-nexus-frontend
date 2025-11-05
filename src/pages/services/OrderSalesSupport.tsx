import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, CheckCircle2, ArrowRight, Package, CreditCard, Truck, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const OrderSalesSupport = () => {
  const features = [
    "Order Processing & Fulfillment",
    "Payment Processing Support",
    "Shipping & Tracking Assistance",
    "Returns & Refunds Management",
    "Inventory Inquiries",
    "Upselling & Cross-selling",
    "Post-Purchase Support",
    "Customer Account Management",
  ];

  const benefits = [
    {
      icon: Package,
      title: "Streamlined Processing",
      description: "Efficient order handling from placement to delivery confirmation.",
    },
    {
      icon: CreditCard,
      title: "Payment Support",
      description: "Secure payment processing and transaction assistance.",
    },
    {
      icon: Truck,
      title: "Logistics Coordination",
      description: "Seamless shipping coordination and real-time tracking updates.",
    },
    {
      icon: RefreshCw,
      title: "Returns Management",
      description: "Hassle-free returns, exchanges, and refund processing.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Order & Sales Support Services | E-commerce Support - Zap Technology</title>
        <meta
          name="description"
          content="Professional order processing and sales support services. Streamline your e-commerce operations with expert order management, fulfillment, and post-sales support."
        />
        <meta name="keywords" content="order processing services, sales support, e-commerce support india, order fulfillment BPO, customer order management" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-20">
        <section className="py-24 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-600 text-sm font-medium mb-6">
                  <ShoppingCart className="h-4 w-4" />
                  Order & Sales Support
                </div>
                <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                  Order & Sales Support{" "}
                  <span className="gradient-text">Services</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Streamline your order management and post-sales process efficiently with our expert support team.
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
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/10 rounded-3xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                    alt="Order processing"
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
                Complete Order & Sales Support
              </h2>
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

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Why Choose Our Order Support?
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                  Optimize Your Order Management
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Let us handle your orders and sales support so you can focus on growing your business.
                </p>
              </div>

              <div className="animate-slide-in-right">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <LeadCaptureForm source="order-service" />
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

export default OrderSalesSupport;
