"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Machine Learning Engineer",
    company: "TechNova AI",
    date: "2022 - Present",
    location: "San Francisco, CA",
    achievements: [
      "Architected and deployed a scalable recommendation engine increasing user engagement by 35%.",
      "Led a team of 4 data scientists to develop LLM-powered internal tools.",
      "Optimized deep learning inference pipelines using TensorRT, reducing latency by 40%.",
      "Implemented automated MLOps pipelines using MLflow and GitHub Actions."
    ]
  },
  {
    role: "Data Scientist",
    company: "DataSphere Solutions",
    date: "2019 - 2022",
    location: "New York, NY",
    achievements: [
      "Developed a predictive churn model with 92% accuracy, retaining $2M in annual revenue.",
      "Built NLP pipelines for sentiment analysis on customer feedback using Transformers.",
      "Designed dynamic dashboards in Tableau for executive reporting.",
      "Collaborated with product teams to define A/B testing frameworks."
    ]
  },
  {
    role: "Machine Learning Researcher",
    company: "AI Vision Labs",
    date: "2017 - 2019",
    location: "Boston, MA",
    achievements: [
      "Researched novel computer vision techniques for real-time anomaly detection.",
      "Published 3 papers in top-tier AI conferences (CVPR, NeurIPS).",
      "Developed YOLO-based object detection models for autonomous drones.",
      "Mentored junior researchers and graduate students."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:border-l-0">
          {/* Desktop central line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-primary/30" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>

              {/* Empty space for opposite side on desktop */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content Card */}
              <div className="ml-8 md:ml-0 md:w-1/2 bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-primary font-medium text-sm bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                    {exp.date}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company} • {exp.location}</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
