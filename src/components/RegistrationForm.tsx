import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Mail, Phone, Briefcase } from "lucide-react";

const services = [
  "Web & App Development",
  "SEO & Content Marketing",
  "Social Media Marketing",
  "AI Solutions",
  "Podcast Production",
  "Financial Consulting",
];

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  service: z.string().min(1, "Please select a service"),
  consent: z.boolean().refine((val) => val === true, "You must agree to continue"),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<FormData>>({
    name: "",
    email: "",
    phone: "",
    service: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateField = (field: keyof FormData, value: unknown) => {
    try {
      const fieldSchema = formSchema.shape[field];
      fieldSchema.parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [field]: error.errors[0].message }));
      }
      return false;
    }
  };

  // ***************************************
  // UPDATED handleSubmit WITH API CALL
  // ***************************************
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setApiError(null);

    try{
      const validatedData = formSchema.parse(formData);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/submit-form`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(validatedData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setApiError(result?.message || "Something went wrong. Try again.");
        toast({
          title: "Submission Failed",
          description: result?.message || "Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you soon.",
      });

      navigate("/thank-you", {
        state: {
          name: validatedData.name,
          service: validatedData.service,
        },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof FormData;
          newErrors[field] = err.message;
        });
        setErrors(newErrors);

        toast({
          title: "Please check the form",
          description: "Some fields require your attention.",
          variant: "destructive",
        });
      } else {
        setApiError("Unexpected error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60 p-[2px]">
              <div className="w-full h-full rounded-3xl bg-background" />
            </div>

            <div className="relative">
              <div className="bg-gradient-to-b from-card to-background p-8 pb-6 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3"
                >
                  Get Your Free Consultation
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground"
                >
                  Transform your business with our expert digital solutions
                </motion.p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <User className="w-5 h-5" />
                    </div>
                    <Input
                      placeholder="Enter Name *"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        validateField("name", e.target.value);
                      }}
                      className="pl-12 bg-background/80 border-border/60 focus:border-primary"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Mail className="w-5 h-5" />
                    </div>
                    <Input
                      type="email"
                      placeholder="Enter Email Address *"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        validateField("email", e.target.value);
                      }}
                      className="pl-12 bg-background/80 border-border/60 focus:border-primary"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">
                    <div className="w-24 flex-shrink-0">
                      <Select defaultValue="+91">
                        <SelectTrigger className="bg-background/80 border-border/60">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+91">+91</SelectItem>
                          <SelectItem value="+1">+1</SelectItem>
                          <SelectItem value="+44">+44</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex-1 relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Phone className="w-5 h-5" />
                      </div>
                      <Input
                        type="tel"
                        placeholder="Enter Mobile Number *"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          validateField("phone", e.target.value);
                        }}
                        className="pl-12 bg-background/80 border-border/60 focus:border-primary"
                      />
                    </div>
                  </div>
                  {errors.phone && (
                    <p className="text-destructive text-sm -mt-3">{errors.phone}</p>
                  )}

                  {/* Service */}
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => {
                        setFormData({ ...formData, service: value });
                        validateField("service", value);
                      }}
                    >
                      <SelectTrigger className="pl-12 bg-background/80 border-border/60 h-12">
                        <SelectValue placeholder="Select Service of Interest *" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-destructive text-sm mt-1">{errors.service}</p>
                    )}
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => {
                        setFormData({ ...formData, consent: checked as boolean });
                        validateField("consent", checked);
                      }}
                      className="mt-1 border-border data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      I agree to receive information regarding my submitted application
                      and updates from Avani Enterprises *
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-destructive text-sm -mt-3">{errors.consent}</p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>

                  {/* API ERROR BELOW BUTTON */}
                  {apiError && (
                    <p className="text-destructive text-sm text-center mt-2">
                      {apiError}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
