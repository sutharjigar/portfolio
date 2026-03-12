"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ContactFormData } from "@/app/lib/types";
import { ContactSuccessCard } from "./ContactSuccessCard";

interface ContactFormCardProps {
  form: ContactFormData;
  loading: boolean;
  submitted: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
}

export function ContactFormCard({
  form,
  loading,
  submitted,
  onChange,
  onSubmit,
  onReset,
}: ContactFormCardProps) {
  if (submitted) {
    return <ContactSuccessCard onReset={onReset} />;
  }

  return (
    <Card className="border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <CardContent className="px-6 py-6">
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-200"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-200"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={onChange}
              placeholder="What's this about?"
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-200"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Message</label>
            <textarea
              rows={5}
              name="message"
              required
              value={form.message}
              onChange={onChange}
              placeholder="Tell me about your project, idea, or opportunity..."
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-200 resize-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={loading} className="gap-2 shadow-sm shadow-primary/20">
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-3.5 h-3.5 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Send Message
                </>
              )}
            </Button>
            <p className="text-xs text-muted-foreground">Usually reply within 24h</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
