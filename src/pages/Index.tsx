import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Customer Support Outsourcing Company | 24/7 Call Center Solutions – CallNexus</title>
        <meta
          name="description"
          content="Leading customer support outsourcing company in India offering 24/7 inbound, outbound, and technical support solutions for global businesses. Expert virtual assistants and call center services."
        />
        <meta name="keywords" content="customer support outsourcing India, call center services, virtual assistant, technical support, BPO services, 24/7 customer support" />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyChooseUs />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
