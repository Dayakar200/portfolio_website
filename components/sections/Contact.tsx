"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between space-y-8"
          >
            <div>
              <h3 className="text-3xl font-heading font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Whether you have a question, a project proposal, or just want to say hi, I&apos;ll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 hover:bg-card transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-inner">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</h4>
                      <a href="mailto:hello@johndoe.ai" className="text-white hover:text-primary transition-colors text-sm font-medium">hello@johndoe.ai</a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 hover:bg-card transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-inner">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">LinkedIn</h4>
                      <a href="#" className="text-white hover:text-primary transition-colors text-sm font-medium">linkedin.com/in/johndoe</a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground bg-primary/5 border border-primary/10 rounded-full px-5 py-3 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-medium">Available for new opportunities</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/45 backdrop-blur-md border-border p-2 shadow-2xl hover:border-primary/20 transition-all duration-500">
              <CardContent className="p-6">
                {status === "success" ? (
                  <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-primary animate-bounce" />
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-white">Name</label>
                      <Input id="name" required placeholder="Your Name" className="bg-background/80 border-border focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-white">Email</label>
                      <Input id="email" type="email" required placeholder="your.email@example.com" className="bg-background/80 border-border focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-white">Subject</label>
                      <select id="subject" required className="w-full h-10 px-3 rounded-md border border-border bg-background/80 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-muted-foreground focus:text-white">
                        <option value="">Select a topic...</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="consulting">Consulting</option>
                        <option value="speaking">Speaking</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-white">Message</label>
                      <Textarea id="message" required placeholder="Your message here..." className="bg-background/80 border-border min-h-[120px] focus-visible:ring-primary" />
                    </div>
                    <Button type="submit" disabled={status === "submitting"} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold transition-all duration-300">
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
