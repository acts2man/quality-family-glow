
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { sendEmail, createEmailData } from "@/lib/emailjs";

const questionFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  question: z.string().min(5, { message: "Please provide your question." }),
});

type QuestionFormValues = z.infer<typeof questionFormSchema>;

const OtherCoveragesSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<QuestionFormValues>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  });

  async function onSubmit(data: QuestionFormValues) {
    setIsSubmitting(true);
    
    try {
      const emailData = createEmailData(data, "Homepage", "question");
      await sendEmail(emailData);
      
      // Fire conversion tracking
      if (typeof window !== 'undefined') {
        // Facebook Pixel
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Homepage Question Form',
            source: 'homepage'
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
      
      toast.success("Your question has been submitted. We'll get back to you soon!");
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Sorry, there was an error sending your message. Please try again or call us directly at 708.330.4516.");
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <section className="py-12 px-4 bg-primary-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Other Coverages with updated title */}
          <div className="w-full lg:w-1/2 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight tracking-wide">
              DON'T FORGET TO CHECK OUT
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-8 leading-tight tracking-wide">
              OUR OTHER COVERAGES AVAILABLE
            </h3>
            
            <div className="space-y-4 max-w-xl">
              <Link 
                to="/accident" 
                className="flex items-center justify-between text-lg md:text-xl hover:text-accent-gold transition-colors duration-300 tracking-wide p-2 border-b border-white/20"
              >
                <span>ACCIDENT INSURANCE</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/critical-illness" 
                className="flex items-center justify-between text-lg md:text-xl hover:text-accent-gold transition-colors duration-300 tracking-wide p-2 border-b border-white/20"
              >
                <span>CRITICAL ILLNESS</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/cancer-dread-disease" 
                className="flex items-center justify-between text-lg md:text-xl hover:text-accent-gold transition-colors duration-300 tracking-wide p-2 border-b border-white/20"
              >
                <span>CANCER AND OTHER DREAD DISEASE</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/life-insurance" 
                className="flex items-center justify-between text-lg md:text-xl hover:text-accent-gold transition-colors duration-300 tracking-wide p-2 border-b border-white/20"
              >
                <span>LIFE INSURANCE</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-semibold mb-6 text-center text-accent-gold">Got questions? We've got answers.</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" className="bg-white/20 border-white/30 text-white placeholder:text-white/50" {...form.register("name")} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" className="bg-white/20 border-white/30 text-white placeholder:text-white/50" {...form.register("email")} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel className="text-white">Question</FormLabel>
                    <FormControl>
                      <Input placeholder="What would you like to know?" className="bg-white/20 border-white/30 text-white placeholder:text-white/50" {...form.register("question")} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent-gold text-primary-800 hover:bg-accent-gold/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Question"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherCoveragesSection;
