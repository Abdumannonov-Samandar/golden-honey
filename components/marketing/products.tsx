import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

const products = [
  { icon: "🍯", name: "Raw Honey" },
  { icon: "🌸", name: "Pollen" },
  { icon: "🐝", name: "Royal Jelly" },
  { icon: "🍯", name: "Honeycomb" },
  { icon: "🕯️", name: "Beeswax" },
  { icon: "🥄", name: "Honey Dipper" },
  { icon: "💊", name: "Supplements" },
];

export function Products() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-16">
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <Hexagon className="w-12 h-12 text-primary" />
          </motion.div>
          <h2 className="text-4xl font-bold text-primary">Products</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square relative overflow-hidden"
              style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-background transform rotate-45 rounded-xl" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
                  <span className="text-4xl mb-2">{product.icon}</span>
                  <span className="text-sm font-medium">{product.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
