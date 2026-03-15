import { motion } from "framer-motion";
import logoCircle from "@/assets/logo-circle.png";

const LogoBanner = () => (
  <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="w-full bg-secondary py-3 px-6 flex justify-end items-center border-b border-border"
  >
    <motion.img
      src={logoCircle}
      alt="כליל דורי"
      className="h-16 md:h-20 w-auto object-contain rounded-full shadow-sm"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    />
  </motion.header>
);

export default LogoBanner;
