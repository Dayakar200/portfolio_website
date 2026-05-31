"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Demystifying Transformer Architecture",
    category: "Deep Learning",
    excerpt: "An in-depth look at self-attention mechanisms and how transformers revolutionized natural language processing.",
    date: "May 12, 2024",
    readTime: "8 min read",
    link: "#"
  },
  {
    title: "MLOps Best Practices in 2024",
    category: "MLOps",
    excerpt: "Streamlining your machine learning lifecycle with modern tools like MLflow, Kubeflow, and automated CI/CD pipelines.",
    date: "April 28, 2024",
    readTime: "6 min read",
    link: "#"
  },
  {
    title: "A Practical Guide to LLM Fine-Tuning",
    category: "NLP",
    excerpt: "Step-by-step tutorial on adapting open-source large language models to domain-specific tasks using LoRA.",
    date: "April 10, 2024",
    readTime: "10 min read",
    link: "#"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Latest Insights</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-card border-border h-full flex flex-col hover:border-primary/50 transition-all hover:-translate-y-2 duration-300">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-primary/20 text-primary border-none hover:bg-primary/30">
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href={post.link} className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
