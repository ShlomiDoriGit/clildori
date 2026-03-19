import { Instagram, Mail } from "lucide-react";
import logoCircle from "@/assets/logo-circle.png";

const Footer = () => (
  <footer id="footer" className="bg-secondary py-16">
    <div className="container mx-auto px-6 text-center">
      <img
        src={logoCircle}
        alt="לוגו כליל דורי"
        className="h-24 md:h-32 w-auto mx-auto mb-6 object-contain"
      />

      <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
        לרכישה ותיאום פגישה
      </h3>

      <a
        href="https://wa.me/972559272658"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-lg text-primary-foreground font-bold transition-all hover:scale-105 hover:shadow-xl mb-10"
      >
        גם אני רוצה להתחיל
      </a>

      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://www.instagram.com/clildori"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="mailto:clildori@gmail.com"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      <p className="text-sm text-muted-foreground font-body">
        clildori@gmail.com &nbsp;|&nbsp; @clildori
      </p>
    </div>
  </footer>
);

export default Footer;
