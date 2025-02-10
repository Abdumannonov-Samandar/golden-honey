"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="flex items-center justify-center gap-4">
            <motion.div
              className="flex-1 h-px bg-gradient-to-r to-primary from-primary/10"
              layoutId="underline"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "3rem" }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
            <h2 className="text-2xl font-semibold text-primary">
              Subscribe To Our Newsletter, Discounts And Promotions
            </h2>
            <motion.div
              className="flex-1 h-px bg-gradient-to-r from-primary to-primary/10"
              layoutId="underline"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "3rem" }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
          </div>

          <form className="space-y-4">
            <Input
              type="email"
              placeholder="Your Email Address"
              className="bg-black/40 border-primary text-white placeholder:text-gray-400 max-w-md mx-auto"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button type="submit" className="bg-primary auth-button text-black/30 hover:bg-primary">
                Subscribe
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
