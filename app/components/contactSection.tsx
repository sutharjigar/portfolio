"use client";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { LINKEDIN_MESSAGING_NAME } from "@/app/lib/constants";
import type { ContactFormData } from "@/app/lib/types";
import { buildLinkedinMessageUrl } from "@/app/lib/utils";
import { ContactAvailability } from "./contact/ContactAvailability";
import { ContactFormCard } from "./contact/ContactFormCard";
import { ContactHeader } from "./contact/ContactHeader";
import { ContactInfoGrid } from "./contact/ContactInfoGrid";
import { fadeUp } from "./contact/contactAnimations";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ContactFormData>({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const linkedInURL = buildLinkedinMessageUrl(
      LINKEDIN_MESSAGING_NAME,
      form.name,
      form.email,
      form.subject,
      form.message
    );

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(linkedInURL, "_blank", "noopener,noreferrer");
    }, 800);
  };


  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="max-w-3xl mb-auto w-full space-y-8"
    >
      <ContactHeader />
      <ContactInfoGrid />

      <Separator />

      <motion.div {...fadeUp(0.2)}>
        <ContactFormCard
          form={form}
          loading={loading}
          submitted={submitted}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onReset={handleReset}
        />
      </motion.div>

      <ContactAvailability />
    </motion.div>
  );
}
