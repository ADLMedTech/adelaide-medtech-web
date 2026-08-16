"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoCollage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative hidden h-[720px] lg:block"
    >

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="absolute left-0 top-0 overflow-hidden rounded-[36px]"
      >
        <Image
          src="/images/hero/hero1.webp"
          width={520}
          height={650}
          alt=""
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.04 }}
        className="glass absolute bottom-0 right-0 overflow-hidden rounded-[32px]"
      >
        <Image
          src="/images/hero/hero2.webp"
          width={290}
          height={250}
          alt=""
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.04 }}
        className="glass absolute left-24 bottom-32 overflow-hidden rounded-[30px]"
      >
        <Image
          src="/images/hero/hero4.webp"
          width={260}
          height={180}
          alt=""
        />
      </motion.div>

    </motion.div>
  );
}

/*

      <motion.div
        whileHover={{ scale: 1.04 }}
        className="glass absolute right-10 top-10 overflow-hidden rounded-[28px]"
      >
        <Image
          src="/images/hero/hero3.webp"
          width={220}
          height={260}
          alt=""
        />
      </motion.div>

*/