// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";
// import { ArrowRight } from "lucide-react";

// interface LeadCaptureFormProps {
//   source?: string;
//   className?: string;
// }

// const LeadCaptureForm = ({ source = "general", className = "" }: LeadCaptureFormProps) => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     service: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const res = await fetch("https://call-neuex-backend-2.onrender.com/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, source }),
//       });

//       if (res.ok) {
//         toast({
//           title: "Thank you for your interest!",
//           description: "Your message has been sent. Our team will contact you within 24 hours.",
//         });
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           company: "",
//           service: "",
//           message: "",
//         });
//       } else {
//         toast({
//           title: "Form submission failed.",
//           description: "There was an error sending your message. Please try again later.",
//           variant: "destructive",
//         });
//       }
//     } catch (error) {
//       toast({
//         title: "Network error.",
//         description: "Could not reach server. Please check your connection and try again.",
//         variant: "destructive",
//       });
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
//       <div className="grid md:grid-cols-2 gap-6">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium mb-2">
//             Full Name *
//           </label>
//           <Input
//             id="name"
//             required
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             placeholder="John Doe"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium mb-2">
//             Email Address *
//           </label>
//           <Input
//             id="email"
//             type="email"
//             required
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             placeholder="john@company.com"
//           />
//         </div>
//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium mb-2">
//             Phone Number *
//           </label>
//           <Input
//             id="phone"
//             type="tel"
//             required
//             value={formData.phone}
//             onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//             placeholder="+91 98765 43210"
//           />
//         </div>
//         <div>
//           <label htmlFor="company" className="block text-sm font-medium mb-2">
//             Company Name
//           </label>
//           <Input
//             id="company"
//             value={formData.company}
//             onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//             placeholder="Your Company"
//           />
//         </div>
//       </div>
//       <div>
//         <label htmlFor="service" className="block text-sm font-medium mb-2">
//           Service Interested In *
//         </label>
//         <Select
//           required
//           value={formData.service}
//           onValueChange={(value) => setFormData({ ...formData, service: value })}
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Select a service" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="inbound">Inbound Call Center</SelectItem>
//             <SelectItem value="outbound">Outbound Call Center</SelectItem>
//             <SelectItem value="technical">Technical Support</SelectItem>
//             <SelectItem value="virtual-assistant">Virtual Assistant</SelectItem>
//             <SelectItem value="order-sales">Order & Sales Support</SelectItem>
//             <SelectItem value="custom">Custom Solution</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//       <div>
//         <label htmlFor="message" className="block text-sm font-medium mb-2">
//           Message
//         </label>
//         <Textarea
//           id="message"
//           value={formData.message}
//           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//           placeholder="Tell us about your requirements..."
//           rows={4}
//         />
//       </div>
//       <Button
//         type="submit"
//         disabled={isSubmitting}
//         size="lg"
//         className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-full"
//       >
//         {isSubmitting ? "Submitting..." : "Request Free Consultation"}
//         <ArrowRight className="ml-2 h-5 w-5" />
//       </Button>
//       <p className="text-xs text-muted-foreground text-center">
//         By submitting this form, you agree to our Privacy Policy and Terms of Service.
//       </p>
//     </form>
//   );
// };

// export default LeadCaptureForm;


//UI improvemnt 
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

interface LeadCaptureFormProps {
  source?: string;
  className?: string;
}

const LeadCaptureForm = ({ source = "general", className = "" }: LeadCaptureFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://call-neuex-backend-2.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source }),
      });

      if (res.ok) {
        toast({
          title: "Thank you for your interest!",
          description: "Your message has been sent. Our team will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        toast({
          title: "Form submission failed.",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error.",
        description: "Could not reach server. Please check your connection and try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@company.com"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number *
          </label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company Name
          </label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Your Company"
            className="w-full"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2">
          Service Interested In *
        </label>
        <Select
          required
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inbound">Inbound Call Center</SelectItem>
            <SelectItem value="outbound">Outbound Call Center</SelectItem>
            <SelectItem value="technical">Technical Support</SelectItem>
            <SelectItem value="virtual-assistant">Virtual Assistant</SelectItem>
            <SelectItem value="order-sales">Order & Sales Support</SelectItem>
            <SelectItem value="custom">Custom Solution</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your requirements..."
          rows={4}
          className="w-full"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-full"
      >
        {isSubmitting ? "Submitting..." : "Request Free Consultation"}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  );
};

export default LeadCaptureForm;
