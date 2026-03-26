import { motion } from "framer-motion";
import heroBgNew from "@/assets/hero-bg-new.jpeg";
import heroProfile from "@/assets/hero-profile.jpeg";
import { CalendarDays } from "lucide-react";

const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden"
    style={{
      backgroundImage: `url(${heroBgNew})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="container mx-auto px-6 py-10 md:py-16 lg:py-24">
      {/* Mobile: stack vertically (image above text). Desktop: side by side */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">

        {/* Profile image — top on mobile, right on desktop (RTL) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center md:order-last md:shrink-0"
        >
          <img
            src={heroProfile}
            alt="כליל דורי - תזונאית קלינית"
            className="w-52 sm:w-64 md:w-64 lg:w-72 rounded-3xl object-cover shadow-xl"
            style={{ aspectRatio: "3/4" }}
          />
        </motion.div>

        {/* Text — below image on mobile, right side on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 min-w-0 text-right"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] mb-2 md:mb-3">
            כליל דורי
          </h1>
          <p className="font-display text-lg sm:text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
            תזונאית קלינית
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-xl mb-6 md:mb-8">
            מלווה נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושיפור אורח חיים, תוך התייחסות להיבטים רגשיים והתנהגותיים של האכילה.
          </p>
          <motion.a
            href="https://wa.me/972559272658"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-7 py-3 text-base font-display font-bold shadow-lg hover:shadow-xl transition-shadow"
          >
            <CalendarDays className="h-5 w-5" />
            לתיאום פגישת ייעוץ
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
