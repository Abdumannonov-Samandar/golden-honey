import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Shop() {
  return (
    <section className="py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container max-w-6xl"
      >
        <div className="flex items-center gap-4 mb-16">
          <motion.img
            src="/bee.svg"
            alt="Bee Icon"
            className="w-12 h-12"
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <h2 className="text-4xl font-bold text-primary">Shop</h2>
        </div>

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-955 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center"
        >
          <motion.div whileHover={{ rotate: 5 }} className="flex-1">
            <Image width={500} height={500} src="/honey.svg" alt="Fireweed Blossom Honey" className="w-full max-w-md mx-auto" />
          </motion.div>

          <div className="flex-1 space-y-6 text-gray-300">
            <h3 className="text-2xl font-bold text-primary">Fireweed Blossom Honey</h3>

            <div>
              <h4 className="text-primary mb-2">Flavor:</h4>
              <p>
                Fireweed Honey Has A Delicate, Sweet Flavor With Subtle Floral Notes. It Has A Smooth And Creamy Texture
                That Melts In Your Mouth.
              </p>
            </div>

            <div>
              <h4 className="text-primary mb-2">Health Benefits:</h4>
              <p>
                Fireweed Honey Is Rich In Antioxidants, Vitamins, And Minerals. It Has Antibacterial And
                Anti-Inflammatory Properties, Making It A Natural Remedy For Sore Throats, Coughs, And Colds.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-primary mb-2">Size:</h4>
                <div className="flex gap-2">
                  {[250, 500, 1000].map((size) => (
                    <motion.div
                      key={size}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 flex items-center justify-center border border-primary rounded-lg cursor-pointer"
                    >
                      {size}g
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-primary mb-2">Price:</h4>
                <p className="text-2xl font-bold">$200</p>
              </div>
            </div>

            <Button className="w-full bg-primary text-black hover:bg-primary/80">Add To Cart</Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
