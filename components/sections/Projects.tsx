"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink } from "lucide-react";

const categories = ["All", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Analysis"];

const projects = [
  {
    id: 1,
    title: "Real-time Fraud Detection",
    category: "Machine Learning",
    description: "An ensemble ML model processing streaming transaction data to identify fraudulent activities with 99.8% precision.",
    tech: ["Python", "XGBoost", "Kafka", "FastAPI"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Medical Image Classifier",
    category: "Computer Vision",
    description: "Deep learning pipeline using ResNet50 for identifying anomalies in X-ray scans. Deployed via Docker container.",
    tech: ["PyTorch", "OpenCV", "Docker", "AWS"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Sentiment Analysis API",
    category: "NLP",
    description: "Production-ready REST API that analyzes customer reviews utilizing a fine-tuned BERT model.",
    tech: ["Hugging Face", "FastAPI", "React", "PostgreSQL"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Customer Churn Predictor",
    category: "Data Analysis",
    description: "Comprehensive end-to-end data pipeline to predict customer churn, including interactive Tableau dashboards.",
    tech: ["Pandas", "Scikit-Learn", "Tableau", "SQL"],
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "YOLOv8 Object Detection",
    category: "Computer Vision",
    description: "Optimized object detection system for edge devices running at 60 FPS for real-time traffic monitoring.",
    tech: ["YOLOv8", "TensorRT", "C++", "CUDA"],
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    title: "LLM Fine-Tuning Pipeline",
    category: "Deep Learning",
    description: "Automated pipeline for fine-tuning open-source LLMs (Llama-3) on domain-specific proprietary datasets using LoRA.",
    tech: ["PyTorch", "Transformers", "Ray", "Weights & Biases"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card text-muted-foreground hover:bg-primary/20 hover:text-primary border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-card border-border overflow-hidden group h-full flex flex-col">
                  {/* Placeholder Image container */}
                  <div className="h-48 bg-gradient-to-br from-background to-border relative overflow-hidden flex items-center justify-center">
                    <span className="text-muted-foreground/50 font-bold text-xl">{project.category}</span>
                    <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center backdrop-blur-sm">
                      <div className="flex gap-4">
                        <a href={project.github} className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-white hover:text-primary transition-colors">
                          <Code size={20} />
                        </a>
                        <a href={project.demo} className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-white hover:text-primary transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <Badge className="w-fit bg-primary/20 text-primary border-none mb-4 hover:bg-primary/30">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs text-muted-foreground bg-background px-2 py-1 rounded border border-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
