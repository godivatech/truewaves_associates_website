import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    title: 'Eco-Friendly Construction Trends',
    category: 'Social Media',
    date: 'Mar 18, 2025',
    image: '/images/blog-1.jpg',
  },
  {
    title: 'Luxury Meets Minimalism in Homes',
    category: 'Company',
    date: 'Mar 18, 2025',
    image: '/images/blog-2.jpg',
  },
  {
    title: 'Biophilic Architecture: Nature in Design',
    category: 'Social Media',
    date: 'Mar 18, 2025',
    image: '/images/blog-3.jpg',
  },
];

interface BlogCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
  index: number;
}

function BlogCard({ title, category, date, image, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-56 rounded-2xl overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-3">
        <span className="px-3 py-1 bg-accent rounded-full text-xs font-medium text-navy">
          {category}
        </span>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-navy group-hover:text-accent transition-colors">
        {title}
      </h3>
    </motion.article>
  );
}

export default function BlogSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-navy/20 rounded-full text-xs font-medium tracking-wider text-navy">
                INSIGHTS <span className="text-accent">-</span> ARTICLES & NEWS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
            >
              Discover inspiration
              <br />
              and trends
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="#"
            className="group inline-flex items-center gap-3 px-5 py-2.5 border border-navy/20 rounded-full text-sm font-medium text-navy hover:bg-navy hover:text-white transition-colors"
          >
            View All Posts
            <span className="w-8 h-8 bg-accent group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </motion.a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <BlogCard
              key={article.title}
              title={article.title}
              category={article.category}
              date={article.date}
              image={article.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
