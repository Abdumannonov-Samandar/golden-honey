"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export default function MeetUsSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Image src="/bee.svg" alt="Bee icon" width={32} height={32} className="text-primary" />
              <h2 className="text-3xl font-semibold text-primary">Meet Us</h2>
            </div>
            <h3 className="text-2xl text-white">The Art Of Beekeeping</h3>
            <p className="text-gray-300 leading-relaxed">
              We invite you to join us on a virtual tour of our honey farm to see firsthand how we produce our premium
              honey. Our video showcases the daily work of our beekeepers and the care they give to our bees.
              You&apos;ll see how we carefully harvest the honey, ensuring that our bees are not harmed and that our
              honey is of the highest quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-xl overflow-hidden"
          >
            <Image
              src="https://picsum.photos/200/200"
              alt="Beekeeper working with hives"
              fill
              className="object-cover"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute inset-0 m-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center"
            >
              <Play className="w-8 h-8 text-background ml-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
