import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with AI-powered recommendations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    stats: { growth: "+180%", metric: "Sales Growth" },
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard for enterprise resource planning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    stats: { growth: "+250%", metric: "User Engagement" },
  },
  {
    title: "Digital Marketing Campaign",
    category: "Marketing",
    description: "Multi-channel campaign driving brand awareness",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
    stats: { growth: "+320%", metric: "Lead Generation" },
  },
  {
    title: "Mobile Banking App",
    category: "App Development",
    description: "Secure fintech solution with biometric authentication",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    stats: { growth: "+95%", metric: "App Downloads" },
  },
  {
    title: "AI Chatbot Integration",
    category: "AI Solutions",
    description: "Intelligent customer service automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    stats: { growth: "-60%", metric: "Support Tickets" },
  },
  {
    title: "Podcast Studio Setup",
    category: "Content Production",
    description: "Full-service podcast production and distribution",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80",
    stats: { growth: "+500K", metric: "Monthly Listeners" },
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how we've helped businesses transform their digital presence 
            and achieve remarkable growth.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass card-shadow"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 glass rounded-lg px-3 py-2 text-center">
                  <div className="text-accent font-bold text-lg">{item.stats.growth}</div>
                  <div className="text-xs text-muted-foreground">{item.stats.metric}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="glass" size="lg" asChild>
            <a href="#contact" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
