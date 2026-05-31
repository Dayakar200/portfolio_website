"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    title: "VP of Engineering",
    company: "TechNova AI",
    initials: "SC",
    quote: "John's ability to translate complex business problems into scalable ML solutions is unmatched. His recommendation engine directly led to a 35% increase in our core metrics."
  },
  {
    name: "Michael Rodriguez",
    title: "Director of Product",
    company: "DataSphere",
    initials: "MR",
    quote: "A rare blend of deep technical expertise and strong business acumen. John doesn't just build models; he builds products that deliver measurable impact."
  },
  {
    name: "Dr. Emily Taylor",
    title: "Lead AI Researcher",
    company: "AI Vision Labs",
    initials: "ET",
    quote: "Working with John on our computer vision research was fantastic. His innovative approach to anomaly detection pushed our lab's capabilities to the next level."
  },
  {
    name: "James Wilson",
    title: "CTO",
    company: "FinTech Solutions",
    initials: "JW",
    quote: "John completely transformed our data infrastructure. The fraud detection pipeline he architected paid for itself within the first month of deployment."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="testimonials" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div 
          className="relative overflow-hidden px-4 py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((test, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-4 md:px-12">
                <Card className="bg-card border-primary/20 p-8 text-center relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg border-4 border-background">
                    {test.initials}
                  </div>
                  <CardContent className="pt-8">
                    <div className="flex justify-center gap-1 mb-6 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground italic mb-8 leading-relaxed">
                      &quot;{test.quote}&quot;
                    </p>
                    <div>
                      <h4 className="text-white font-bold text-lg">{test.name}</h4>
                      <p className="text-primary text-sm font-medium">{test.title}, {test.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-primary" : "bg-muted-foreground/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
