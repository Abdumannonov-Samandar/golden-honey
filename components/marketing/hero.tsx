import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-[url('/hero.png')] bg-contain bg-center bg-no-repeat">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen  flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-6xl font-bold bg-gradient-to-b from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent"
        >
          Golden Hive Honey
        </motion.h1>

        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="relative w-[400px] h-[500px]">
          <div className="absolute inset-0 bg-[url('/honey.svg')] bg-contain bg-center bg-no-repeat" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 mt-8"
        >
          <Button
            variant="outline"
            className="bg-transparent border-primary text-primary hover:bg-primary hover:text-background"
          >
            Shop
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-primary text-primary hover:bg-primary hover:text-background"
          >
            Catalog
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
