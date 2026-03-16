import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="hero" className="relative min-h-[80vh] flex items-center overflow-hidden bg-secondary">
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6 py-20 lg:py-0">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <div className="relative">
          <img
            alt="כליל דורי - תזונאית קלינית"
            className="w-72 lg:w-[420px] rounded-3xl object-cover shadow-2xl"
            src="/lovable-uploads/2319db81-7e7e-42f4-bda2-87c5903f852d.png"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2 text-right"
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
          כליל דורי
          <br />
          <span className="text-primary">תזונאית קלינית</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 font-display font-bold leading-relaxed mb-4">
          תזונה מותאמת <span className="text-primary">גוף ונפש</span>
        </p>
        <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed mb-10 max-w-lg mr-0 ml-auto lg:ml-0 lg:mr-0">
          מלווה נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושיפור אורח חיים, תוך התייחסות להיבטים רגשיים והתנהגותיים של האכילה.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
