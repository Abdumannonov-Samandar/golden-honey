import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} className="bg-[url('/hero.png')] bg-contain bg-center bg-no-repeat">
      <motion.div
        className="relative flex flex-col items-center justify-center text-center px-4 py-10"
      >
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent"
        >
          Golden Hive Honey
        </motion.h1>

        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="relative w-full md:w-[400px] h-[500px]">
          <div className="absolute inset-0 bg-[url('/honey.svg')] bg-contain bg-center bg-no-repeat" />
        </motion.div>

          <Link href='/shop' className='absolute top-3/4 md:top-[48.5%] left-[28%] lg:left-[29.55%] xl:left-[36.2%]'>
            <Image src="/shop.svg" width={20} height={20} alt="Fireweed Blossom Honey" className='w-[60px] h-[60px] lg:w-[72px] lg:h-[72px]'/>
          </Link>
          <Link href='/catalog' className='absolute top-3/4 lg:top-[40.2%] md:top-[42%] right-[21.2%] lg:right-[23.25%] xl:right-[32%]'>
            <Image src="/catalog.svg" width={20} height={20} alt="Fireweed Blossom Honey" className='w-[60px] h-[60px] lg:w-[72px] lg:h-[72px]'/>
          </Link>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
