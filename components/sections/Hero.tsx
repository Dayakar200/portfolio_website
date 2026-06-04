"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Briefcase, Globe } from "lucide-react";
import Link from "next/link";

const titles = [
  "AI/ML Enthusiast",
  "Aspiring Data Scientist",
  "Exploring Machine Learning",
  "Building AI Solutions for Real‑World Problems ",
  "Python & Deep Learning Learner",
  "AI & Data Science Fresher",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particle Background Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-medium tracking-widest uppercase mb-4">Welcome to my portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            Hi, I&apos;m Dayakar
          </h1>

          <div className="h-12 mb-6">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-2xl md:text-3xl text-muted-foreground font-light"
            >
              {titles[titleIndex]}
            </motion.p>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
            Exploring the world of Artificial Intelligence, Machine Learning and Data Science by Building AI solutions to solve real‑world problems          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="#projects" className="w-full sm:w-auto">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                View My Work
              </Button>
            </Link>
            <a href="https://drive.google.com/file/d/1GzE1CyNzfiLU05UEfRWwuvsyGz7obshA/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 w-full">
                View Resume
              </Button>
            </a>
            <a href="https://drive.google.com/uc?export=download&id=1GzE1CyNzfiLU05UEfRWwuvsyGz7obshA" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 w-full">
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {[
              { icon: Briefcase, href: "#" },
              { icon: Code, target: "_blank", href: "https://github.com/Dayakar200" },
              { icon: Globe, target: "_blank", href: "https://dayakar200.github.io" },
              // Kaggle doesn't have a built-in Lucide icon easily, using a text fallback or a generic icon
              { icon: () => <span className="font-bold text-xl leading-none">k</span>, href: "#" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border hover:border-primary transition-all shadow-lg"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
