import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const LogoBanner = () =>
<motion.header
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="w-full bg-primary/5 py-4 border-b border-border">
  
    <div className="container flex-row gap-0 border-none rounded-full shadow-2xl px-[80px] mx-0 bg-card flex items-start justify-start">
      <img

      alt="כליל דורי - תזונאית קלינית"
      className="h-20 md:h-28 lg:h-36 w-auto object-cover border-none rounded-full shadow-none border-8" src="/lovable-uploads/2e2f1189-5a97-483d-91c6-11771f1a81ad.png" />
    
    </div>
  </motion.header>;


export default LogoBanner;