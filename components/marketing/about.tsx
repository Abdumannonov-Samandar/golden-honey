import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from 'next/image'

export function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.img
              src="/bee.svg"
              alt="Bee Icon"
              className="w-12 h-12"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <h2 className="text-4xl font-bold text-primary">About Us</h2>
          </div>

          <div className="space-y-4 text-gray-300">
            <p>At Golden Hive Honey, We Are Passionate About</p>
            <p>Providing Our Customers With The Finest Quality Honey</p>
            <p>Products Straight From Our Beekeeping Farms. Our</p>
            <p>Journey Began Years Ago When Our Founders, A Group...</p>
          </div>

          <Button
            variant="outline"
            className="mt-8 bg-transparent border-primary text-primary hover:bg-primary hover:text-black"
          >
            More
          </Button>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="relative w-full aspect-square">
            <Image width={500} height={500} src="/about.svg" alt="Honey Jar" className="w-full h-full object-contain" />
            <motion.div
              className="absolute inset-0 bg-[url('/about.svg')] bg-no-repeat bg-contain opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
