import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const LogoBanner = () => (
  <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="w-full bg-primary/5 py-4 border-b border-border"
  >
    <div className="container mx-auto px-6 flex justify-center">
      <img
        src={logo}
        alt="כליל דורי - תזונאית קלינית"
        className="h-20 md:h-28 lg:h-36 w-auto object-contain"
      />
    </div>
  </motion.header>
);

export default LogoBanner;
