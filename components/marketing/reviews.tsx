"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    image: "https://picsum.photos/200/200",
    rating: 4,
  },
  // Add more review data as needed
];

export default function Reviews() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <Image src="/bee.svg" alt="Bee icon" width={32} height={32} className="text-primary" />
          <h2 className="text-3xl font-semibold text-primary">Reviews</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[...Array(12)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <div className="w-full relative pt-[115%]">
                {reviews[index]?.image ? (
                  <div className="hexagon">
                    <Image
                      src={reviews[index].image || "/placeholder.svg"}
                      alt={`Review ${index + 1}`}
                      fill
                      className="object-cover rounded-xl"
                    />
                    {reviews[index].rating && (
                      <div className="absolute bottom-2 right-2 flex">
                        {[...Array(reviews[index].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="hexagon bg-[#2a2a2a]" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hexagon {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #2a2a2a;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
