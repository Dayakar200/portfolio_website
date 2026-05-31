"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState, useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "R", level: 80 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    title: "ML/DL Frameworks",
    skills: [
      { name: "PyTorch", level: 88 },
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-Learn", level: 92 },
      { name: "Hugging Face", level: 85 },
    ],
  },
  {
    title: "Data & Viz",
    skills: [
      { name: "Pandas/NumPy", level: 95 },
      { name: "Tableau", level: 80 },
      { name: "Matplotlib/Seaborn", level: 90 },
      { name: "PowerBI", level: 75 },
    ],
  },
  {
    title: "Cloud & MLOps",
    skills: [
      { name: "AWS (SageMaker)", level: 85 },
      { name: "Docker/Kubernetes", level: 80 },
      { name: "MLflow", level: 82 },
      { name: "GCP", level: 70 },
    ],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                      <span className="text-sm font-bold text-primary">{isVisible ? skill.level : 0}%</span>
                    </div>
                    <Progress value={isVisible ? skill.level : 0} className="h-2 bg-background" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
