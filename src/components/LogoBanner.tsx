import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const LogoBanner = () =>
<motion.header
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
   className="w-full bg-primary/5 border-b border-border">
  
    <div className="w-full">
      <img
        alt="כליל דורי - תזונאית קלינית"
        className="w-full h-auto object-cover"
        src="/lovable-uploads/2e2f1189-5a97-483d-91c6-11771f1a81ad.png"
      />
    </div>
  </motion.header>;


export default LogoBanner;