"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const fadeSlideIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="bg-surface-2 py-section">
      <div className="mx-auto max-w-[1200px] px-content-x">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="font-syne text-3xl font-bold text-text md:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-base text-muted">
            Ready to transform your business? Contact us today for a free consultation.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="flex h-full min-h-[400px] items-center justify-center rounded-card bg-primary/10">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                  <Send className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-syne text-xl font-bold text-text">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="mt-2 text-base text-muted">
                  Fill out the form and we&apos;ll be in touch within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text">
                    Name *
                  </label>
                  <input
                    {...register("name")}
                    className="w-full rounded-input border border-muted/30 bg-surface px-4 py-3 text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-danger">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-text">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    className="w-full rounded-input border border-muted/30 bg-surface px-4 py-3 text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-danger">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text">
                    Phone *
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full rounded-input border border-muted/30 bg-surface px-4 py-3 text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-danger">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-text">
                    Company *
                  </label>
                  <input
                    {...register("company")}
                    className="w-full rounded-input border border-muted/30 bg-surface px-4 py-3 text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Company Name"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-danger">{errors.company.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text">
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="w-full rounded-input border border-muted/30 bg-surface px-4 py-3 text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-danger">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="animate-button w-full rounded-button bg-cta py-3.5 text-base font-semibold text-cta-text transition-all hover:bg-primary-600 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
