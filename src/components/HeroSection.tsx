import { motion } from "framer-motion";
import { CalendarDays, Sparkles } from "lucide-react";
import profileHero from "@/assets/profile-hero.jpeg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden bg-gradient-hero min-h-[85vh] md:min-h-[90vh] flex items-center"
  >
    {/* Decorative background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
    </div>

    <div className="container mx-auto px-6 md:px-8 py-16 md:py-20 relative z-10">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
        {/* Text Content — right side in RTL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center md:text-right"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 mb-6"
          >
            <Sparkles className="h-4 w-4 text-purple-300" />
            <span className="text-sm font-body text-purple-200">תזונאית קלינית | B.Sc</span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            הגיע הזמן לצאת
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-200 via-purple-300 to-white">
              מלופ הדיאטות
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-white via-purple-200 to-purple-300">
              ולעבור שינוי אמיתי
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-purple-100/90 font-body leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
            מלווה נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושיפור אורח חיים, תוך התייחסות להיבטים רגשיים והתנהגותיים של האכילה.
          </p>

          <motion.button
            onClick={() => window.open("https://wa.me/972559272658", "_blank")}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(140, 82, 255, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 rounded-full bg-white text-primary px-8 py-4 text-lg font-display font-bold shadow-xl hover:shadow-2xl transition-all"
          >
            <CalendarDays className="h-5 w-5" />
            לתיאום פגישת ייעוץ
          </motion.button>
        </motion.div>

        {/* Profile Image — left in RTL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: -40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 relative"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-purple-500/20 rounded-[2rem] blur-2xl scale-105" />
          <img
            src={profileHero}
            alt="כליל דורי - תזונאית קלינית"
            className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[400px] rounded-[2rem] object-cover shadow-2xl ring-4 ring-white/10"
            style={{ aspectRatio: "3/4" }}
          />
        </motion.div>
      </div>
    </div>

    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
        <path d="M0 80V40C240 10 480 0 720 20C960 40 1200 60 1440 30V80H0Z" fill="white" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
