import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState, type FormEvent } from "react";
import { useToast } from "@/components/ui/use-toast";
const EMAILJS_SERVICE_ID = "service_x8z4c9y";
const EMAILJS_TEMPLATE_ID = "template_eqvki9x";
const EMAILJS_PUBLIC_KEY = "bvvYBLbwD7CEiWCce";

const Contact = () => {
  const contactFormRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "raghvendra1708@gmail.com",
      href: "mailto:raghvendra1708@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8696170827",
      href: "tel:+918696170827",
      color: "text-secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/raghvendra-sharma-2a025a308",
      href: "https://linkedin.com/in/raghvendra-sharma-2a025a308",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Raghvendrasharma1708",
      href: "https://github.com/Raghvendrasharma1708",
      color: "text-secondary"
    }
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactFormRef.current) return;

    const formData = new FormData(contactFormRef.current);
    const honey = formData.get("hp_field");
    if (honey) {
      // silently ignore bots
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        contactFormRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast({
        title: "Message sent successfully",
        description: "Thanks! I’ll get back to you shortly.",
      });
      contactFormRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to work together, or just want to say hello, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-tech group cursor-pointer">
                  <a 
                    href={info.href}
                    className="flex items-center space-x-4 p-4"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-card-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Location */}
            <Card className="card-tech">
              <div className="flex items-center space-x-4 p-4">
                <div className="w-12 h-12 rounded-lg bg-card-border flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Ranchi, India</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-tech">
            <form ref={contactFormRef} onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              {/* Honeypot field to reduce spam */}
              <input type="text" name="hp_field" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="from_name">Name</label>
                  <Input id="from_name" name="from_name" placeholder="Your name" className="bg-muted border-card-border focus:border-primary" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="from_email">Email</label>
                  <Input id="from_email" name="from_email" type="email" placeholder="your.email@example.com" className="bg-muted border-card-border focus:border-primary" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="subject">Subject</label>
                <Input id="subject" name="subject" placeholder="Project inquiry" className="bg-muted border-card-border focus:border-primary" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={6} className="bg-muted border-card-border focus:border-primary resize-none" required />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-primary text-primary-foreground font-semibold py-3 glow hover:glow-lg transition-smooth"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;