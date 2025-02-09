import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image'

const images = [
  "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1587049352847-4a222e784d39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1587049352848-4a222e784d40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1587049352849-4a222e784d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1587049352850-4a222e784d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
];

export function Gallery() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-16">
          <motion.img
            src="/bee-icon.png"
            alt="Bee Icon"
            className="w-12 h-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <h2 className="text-4xl font-bold text-primary">Gallery</h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square relative overflow-hidden"
                style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
              >
                <Image
                  width={500}
                  height={500}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-black/50 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-black/50 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
