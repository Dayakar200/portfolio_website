"use client";

import { motion } from "framer-motion";
import { Database, Brain, Code, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "30+" },
    { label: "Publications", value: "10+" },
  ];

  const domains = [
    { icon: LineChart, title: "Data Analysis", desc: "Extracting actionable insights from complex, high-dimensional datasets." },
    { icon: Brain, title: "Machine Learning", desc: "Developing robust predictive models and scalable ML pipelines." },
    { icon: Code, title: "Deep Learning", desc: "Designing advanced neural architectures for vision and speech." },
    { icon: Database, title: "NLP", desc: "Building state-of-the-art text understanding and generative systems." },
  ];

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary to-blue-600 p-1">
              <div className="w-full h-full bg-card rounded-full flex items-center justify-center border-4 border-background">
                <span className="text-6xl font-heading font-bold text-primary">JD</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am a passionate Data Scientist and AI Researcher with a Ph.D. in Computer Science. My core expertise lies in developing scalable machine learning models and implementing cutting-edge deep learning architectures.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Over the past 5 years, I have successfully delivered AI solutions across finance, healthcare, and e-commerce, driving measurable business impact through data-driven strategies and predictive analytics.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-4 bg-background rounded-lg border border-border">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold text-center mb-10">What I Do</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, i) => (
              <Card key={i} className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                    <domain.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{domain.title}</h4>
                  <p className="text-sm text-muted-foreground">{domain.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
