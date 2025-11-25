// // import { useState, useEffect } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { Button } from "@/components/ui/button";
// // import { Menu, X, Phone, Mail } from "lucide-react";

// // const Navbar = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const location = useLocation();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 20);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const navLinks = [
// //     { name: "Home", path: "/" },
// //     { name: "About Us", path: "/about" },
// //     { name: "Services", path: "/#services" },
// //     { name: "Industries", path: "/#industries" },
// //     { name: "Contact", path: "/contact" },
// //   ];

// //   const scrollToSection = (hash: string) => {
// //     if (hash && location.pathname === "/") {
// //       const element = document.querySelector(hash);
// //       if (element) {
// //         element.scrollIntoView({ behavior: "smooth" });
// //       }
// //     }
// //   };

// //   return (
// //     <nav
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// //         isScrolled
// //           ? "bg-background/95 backdrop-blur-md shadow-lg"
// //           : "bg-transparent"
// //       }`}
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-20">
// //           {/* Logo */}
// //           <Link to="/" className="flex items-center space-x-2 group">
// //             <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
// //               <span className="text-white font-bold text-xl">C</span>
// //             </div>
// //             <span className="text-xl font-heading font-bold gradient-text">
// //               CallNexus
// //             </span>
// //           </Link> 

// //           {/* Desktop Navigation */}
// //           <div className="hidden lg:flex items-center space-x-8">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 to={link.path}
// //                 onClick={(e) => {
// //                   if (link.path.includes("#")) {
// //                     e.preventDefault();
// //                     scrollToSection(link.path.split("#")[1] ? `#${link.path.split("#")[1]}` : "");
// //                   }
// //                 }}
// //                 className={`text-sm font-medium transition-colors hover:text-primary ${
// //                   location.pathname === link.path
// //                     ? "text-primary"
// //                     : "text-foreground/80"
// //                 }`}
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>

// //           {/* CTA Buttons */}
// //           <div className="hidden lg:flex items-center space-x-4">
// //             <a href="tel:+912212345678" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
// //               <Phone className="h-4 w-4" />
// //               <span>+91 72085 31038</span>
// //             </a>
// //             <Button asChild size="sm" className="rounded-full">
// //               <Link to="/contact">Get Started</Link>
// //             </Button>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="lg:hidden p-2"
// //             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //           >
// //             {isMobileMenuOpen ? (
// //               <X className="h-6 w-6" />
// //             ) : (
// //               <Menu className="h-6 w-6" />
// //             )}
// //           </button>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isMobileMenuOpen && (
// //           <div className="lg:hidden py-4 border-t animate-fade-in">
// //             <div className="flex flex-col space-y-4">
// //               {navLinks.map((link) => (
// //                 <Link
// //                   key={link.name}
// //                   to={link.path}
// //                   onClick={(e) => {
// //                     if (link.path.includes("#")) {
// //                       e.preventDefault();
// //                       scrollToSection(link.path.split("#")[1] ? `#${link.path.split("#")[1]}` : "");
// //                     }
// //                     setIsMobileMenuOpen(false);
// //                   }}
// //                   className={`text-sm font-medium transition-colors hover:text-primary ${
// //                     location.pathname === link.path
// //                       ? "text-primary"
// //                       : "text-foreground/80"
// //                   }`}
// //                 >
// //                   {link.name}
// //                 </Link>
// //               ))}
// //               <div className="flex flex-col gap-3 pt-4 border-t">
// //                 <a href="tel:+912212345678" className="flex items-center gap-2 text-sm text-muted-foreground">
// //                   <Phone className="h-4 w-4" />
// //                   <span>+91 72085 31038</span>
// //                 </a>
// //                 <Button asChild size="sm" className="rounded-full w-full">
// //                   <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
// //                     Get Started
// //                   </Link>
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// //testing

// // import { useState, useEffect } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { Button } from "@/components/ui/button";
// // import { Menu, X, Phone, Mail } from "lucide-react";

// // const Navbar = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const location = useLocation();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 20);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const navLinks = [
// //     { name: "Home", path: "/" },
// //     { name: "About Us", path: "/about" },
// //     { name: "Services", path: "/#services" },
// //     { name: "Industries", path: "/#industries" },
// //     { name: "Contact", path: "/contact" },
// //     { name: "Terms & Privacy", path: "/terms-privacy" }, // <-- Added link
// //   ];

// //   const scrollToSection = (hash: string) => {
// //     if (hash && location.pathname === "/") {
// //       const element = document.querySelector(hash);
// //       if (element) {
// //         element.scrollIntoView({ behavior: "smooth" });
// //       }
// //     }
// //   };

// //   return (
// //     <nav
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// //         isScrolled
// //           ? "bg-background/95 backdrop-blur-md shadow-lg"
// //           : "bg-transparent"
// //       }`}
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-20">
// //           {/* Logo */}
// //           <Link to="/" className="flex items-center space-x-2 group">
// //             <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
// //               <span className="text-white font-bold text-xl">C</span>
// //             </div>
// //             <span className="text-xl font-heading font-bold gradient-text">
// //               CallNexus
// //             </span>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden lg:flex items-center space-x-8">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 to={link.path}
// //                 onClick={(e) => {
// //                   if (link.path.includes("#")) {
// //                     e.preventDefault();
// //                     scrollToSection(
// //                       link.path.split("#")[1]
// //                         ? `#${link.path.split("#")[1]}`
// //                         : ""
// //                     );
// //                   }
// //                 }}
// //                 className={`text-sm font-medium transition-colors hover:text-primary ${
// //                   location.pathname === link.path
// //                     ? "text-primary"
// //                     : "text-foreground/80"
// //                 }`}
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>

// //           {/* CTA Buttons */}
// //           <div className="hidden lg:flex items-center space-x-4">
// //             <a
// //               href="tel:+912212345678"
// //               className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
// //             >
// //               <Phone className="h-4 w-4" />
// //               <span>+91 72085 31038</span>
// //             </a>
// //             <Button asChild size="sm" className="rounded-full">
// //               <Link to="/contact">Get Started</Link>
// //             </Button>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="lg:hidden p-2"
// //             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //           >
// //             {isMobileMenuOpen ? (
// //               <X className="h-6 w-6" />
// //             ) : (
// //               <Menu className="h-6 w-6" />
// //             )}
// //           </button>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isMobileMenuOpen && (
// //           <div className="lg:hidden py-4 border-t animate-fade-in">
// //             <div className="flex flex-col space-y-4">
// //               {navLinks.map((link) => (
// //                 <Link
// //                   key={link.name}
// //                   to={link.path}
// //                   onClick={(e) => {
// //                     if (link.path.includes("#")) {
// //                       e.preventDefault();
// //                       scrollToSection(
// //                         link.path.split("#")[1]
// //                           ? `#${link.path.split("#")[1]}`
// //                           : ""
// //                       );
// //                     }
// //                     setIsMobileMenuOpen(false);
// //                   }}
// //                   className={`text-sm font-medium transition-colors hover:text-primary ${
// //                     location.pathname === link.path
// //                       ? "text-primary"
// //                       : "text-foreground/80"
// //                   }`}
// //                 >
// //                   {link.name}
// //                 </Link>
// //               ))}
// //               <div className="flex flex-col gap-3 pt-4 border-t">
// //                 <a
// //                   href="tel:+912212345678"
// //                   className="flex items-center gap-2 text-sm text-muted-foreground"
// //                 >
// //                   <Phone className="h-4 w-4" />
// //                   <span>+91 72085 31038</span>
// //                 </a>
// //                 <Button asChild size="sm" className="rounded-full w-full">
// //                   <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
// //                     Get Started
// //                   </Link>
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// //UI Improvemnt
// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Phone, Mail } from "lucide-react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/#services" },
//     { name: "Industries", path: "/#industries" },
//     { name: "Contact", path: "/contact" },
//     { name: "Terms & Privacy", path: "/terms-privacy" }, // <-- Added link
//   ];

//   const scrollToSection = (hash) => {
//     if (hash && location.pathname === "/") {
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 sm:h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 group">
//             <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
//               <span className="text-white font-bold text-lg sm:text-xl">C</span>
//             </div>
//             <span className="text-lg sm:text-xl font-heading font-bold gradient-text">
//               CallNexus
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={(e) => {
//                   if (link.path.includes("#")) {
//                     e.preventDefault();
//                     scrollToSection(
//                       link.path.split("#")[1]
//                         ? `#${link.path.split("#")[1]}`
//                         : ""
//                     );
//                   }
//                 }}
//                 className={`text-sm font-medium transition-colors hover:text-primary ${
//                   location.pathname === link.path
//                     ? "text-primary"
//                     : "text-foreground/80"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
//             <a
//               href="tel:+912212345678"
//               className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
//             >
//               <Phone className="h-4 w-4" />
//               <span>+91 72085 31038</span>
//             </a>
//             <Button asChild size="sm" className="rounded-full">
//               <Link to="/contact">Get Started</Link>
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//           >
//             {isMobileMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu (Drawer Style) */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md animate-fade-in">
//             <div className="container mx-auto px-4 py-8">
//               <div className="flex flex-col gap-6">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     onClick={(e) => {
//                       if (link.path.includes("#")) {
//                         e.preventDefault();
//                         scrollToSection(
//                           link.path.split("#")[1]
//                             ? `#${link.path.split("#")[1]}`
//                             : ""
//                         );
//                       }
//                       setIsMobileMenuOpen(false);
//                     }}
//                     className={`text-base font-medium transition-colors hover:text-primary ${
//                       location.pathname === link.path
//                         ? "text-primary"
//                         : "text-foreground/80"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//                 <div className="flex flex-col gap-3 pt-6 border-t">
//                   <a
//                     href="tel:+912212345678"
//                     className="flex items-center gap-2 text-base text-muted-foreground"
//                   >
//                     <Phone className="h-5 w-5" />
//                     <span>+91 72085 31038</span>
//                   </a>
//                   <Button asChild size="sm" className="rounded-full w-full">
//                     <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
//                       Get Started
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


ort { Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
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
