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


          <Link href='/shop' className='absolute top-[48.5%] left-[34.1%]'>
            <Image src="/shop.svg" width={20} height={20} alt="Fireweed Blossom Honey" className='w-[85px] h-[85px]'/>
          </Link>
          <Link href='/catalog' className='absolute top-[39.9%] right-[29.4%]'>
            <Image src="/catalog.svg" width={20} height={20} alt="Fireweed Blossom Honey" className='w-[85px] h-[85px]'/>
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
