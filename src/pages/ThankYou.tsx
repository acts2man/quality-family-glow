import { useEffect } from "react";
import { CheckCircle, Calendar, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Global tracking interfaces
declare global {
  interface Window {
    fbq: any;
    gtag: any;
  }
}

const ThankYou = () => {
  useEffect(() => {
    // Fire Facebook pixel conversion event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Schedule', {
        content_name: 'Insurance Consultation',
        content_category: 'consultation',
        value: 1,
        currency: 'USD'
      });
      console.log('Facebook pixel Schedule event fired');
    }

    // Fire Google Ads conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17492201375',
        'event_callback': () => {
          console.log('Google Ads conversion event fired');
        }
      });
    }

    // Set page title for SEO
    document.title = "Thank You - Appointment Scheduled | Quality Family Benefits";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <CheckCircle className="w-20 h-20 text-green-500" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent mb-6">
              Thank You for Scheduling!
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your consultation has been successfully booked. We're excited to help you secure the protection your family deserves.
            </p>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="section-padding py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Happens Next?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="card-hover bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-8 text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Confirmation Email</h3>
                  <p className="text-muted-foreground">
                    You'll receive a confirmation email with your appointment details within the next few minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-8 text-center">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Personal Consultation</h3>
                  <p className="text-muted-foreground">
                    A licensed insurance specialist will call you at your scheduled time to discuss your needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Customized Plan</h3>
                  <p className="text-muted-foreground">
                    We'll create a personalized insurance plan that fits your family's unique situation and budget.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary-glow/10 to-accent/10 border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-center mb-6">
                  Need to Make Changes?
                </h3>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">info@qualityfamilybenefits.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">(555) 123-4567</span>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  If you need to reschedule or have any questions, please contact us directly.
                </p>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground mb-6">
                While you wait, learn more about our insurance offerings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => window.location.href = '/accident'}
                  className="glow-button"
                >
                  Accident Insurance
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => window.location.href = '/critical-illness'}
                  className="glow-button"
                >
                  Critical Illness
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => window.location.href = '/life-insurance'}
                  className="glow-button"
                >
                  Life Insurance
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;