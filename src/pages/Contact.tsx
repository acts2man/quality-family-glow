
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock } from "lucide-react";
import { sendEmail, createEmailData } from "@/lib/emailjs";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    interestedIn: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interestedIn: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = createEmailData(formData, "Contact Page", "message");
      await sendEmail(emailData);
      
      // Fire conversion tracking
      if (typeof window !== 'undefined') {
        // Facebook Pixel
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Contact Form',
            source: 'contact_page'
          });
        }
        
        // Google Ads
        if (window.gtag) {
          window.gtag('event', 'generate_lead', {
            'currency': 'USD',
            'value': 1.0
          });
        }
      }

      toast({
        title: "Thank you! We'll be in touch shortly.",
        description: "A licensed counselor will contact you soon.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        interestedIn: "",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Sorry, there was an error sending your message.",
        description: "Please try again or call us directly at (773) 799-5524.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const interestOptions = [
    "Accident Insurance",
    "Critical Illness Coverage",
    "Cancer & Dread Disease Plans",
    "Life Insurance",
    "Long-Term Care / Home Health Care",
    "Not Sure Yet"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Have questions about coverage, pricing, or how our plans work? Give us a call or send a message — a licensed and experienced counselor will respond promptly with no pressure and clear answers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">📞 Call Us:</h3>
                        <a 
                          href="tel:7083304516" 
                          className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          708.330.4516
                        </a>
                        <p className="text-gray-600 mt-1">(Available Monday–Friday, 9am to 5pm CST)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us:</h3>
                        <a 
                          href="mailto:info@qualityfamilybenefits.com"
                          className="text-lg text-primary-600 hover:text-primary-700 transition-colors break-words"
                        >
                          info@qualityfamilybenefits.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours:</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM CST</p>
                        <p className="text-gray-600">Saturday & Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule Section */}
                <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Schedule a Free Consultation
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Prefer to book a time?</strong>
                  </p>
                  <p className="text-gray-600 mb-6">
                    We'll soon have online scheduling available — check back soon or call us directly at 708.330.4516.
                  </p>
                  <Button asChild className="glow-button">
                    <a href="tel:7083304516">
                      <span>Call to Schedule</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interestedIn" className="text-gray-700 font-medium">
                      Interested In (Optional)
                    </Label>
                    <Select onValueChange={handleSelectChange} value={formData.interestedIn}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {interestOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      How can we help? *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell us about your questions or what coverage you're interested in..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full glow-button"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? "Sending..." : "Request a Callback"}</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
