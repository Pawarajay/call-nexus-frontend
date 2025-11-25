import { Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold gradient-text">
              CallNexus
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Leading customer support outsourcing company in India offering 24/7 inbound, outbound, and technical support solutions for global businesses.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/callnexus" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@callnexus" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover-lift"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/callnexus" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover-lift"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a 
                  href="/#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/#industries"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Industries
                </a>
              </li>
              <li>
                <Link 
                  to="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Inbound Call Center',
                'Outbound Call Center',
                'Technical Support',
                'Virtual Assistants',
                'Order Management',
                'Customer Support BPO'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="/#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Andhri (east), Business park, Mumbai, Maharashtra 400069
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="tel:+917208531038" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 72085 31038
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:info@Callnexus.in" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@Callnexus.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} CallNexus. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/terms-privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/terms-privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
