import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeToNewsletter } from "@/services/api";
import SuccessMessage from "./SuccessMessage";
import { ArrowRight } from "lucide-react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setFormStatus({
        success: false,
        message: "Please enter your email address",
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({});

    try {
      const result = await subscribeToNewsletter({ email });
      setFormStatus(result);

      if (result.success) {
        setEmail("");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {formStatus.success ? (
        <SuccessMessage
          message={formStatus.message || "Successfully subscribed!"}
        />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <div className="relative group">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="pr-12 border-transparent bg-midnight-500/40 backdrop-blur-sm text-sage focus:border-sunset focus-visible:ring-0 h-14 text-lg"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-0 top-0 h-full rounded-l-none bg-sunset hover:bg-sunset-400 text-midnight transition-all duration-300 px-5"
                aria-label="Subscribe"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-midnight border-t-transparent" />
                ) : (
                  <ArrowRight className="h-5 w-5" />
                )}
              </Button>
            </div>
            {formStatus.message && !formStatus.success && (
              <p className="text-sm text-red-400">{formStatus.message}</p>
            )}
          </div>

          <p className="text-sm text-sage/80 text-center">
            We will notify you when Skull launches
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
