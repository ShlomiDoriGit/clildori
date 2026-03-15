import { motion } from "framer-motion";
import logo from "@/assets/logo-updated.png";

const LogoBanner = () => (
  <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="w-full bg-gradient-to-l from-primary/10 via-primary/5 to-transparent py-6 md:py-8 border-b border-border"
  >
    <div className="w-full px-4 flex justify-center">
      <img
        src={logo}
        alt="כליל דורי - תזונאית קלינית"
        className="h-24 md:h-36 lg:h-44 w-auto object-contain"
      />
    </div>
  </motion.header>
);

export default LogoBanner;
