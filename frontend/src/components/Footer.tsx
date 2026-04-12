import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Facebook from "@/assets/facebook.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border pt-20 pb-10 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-12 mb-16">

          {/* Column 1: Branding & Bio */}
          <div className="space-y-6 grid justify-items-center md:justify-items-start">
            <div className="font-display text-2xl font-bold tracking-tight">
              <span className="text-foreground">NEX</span>
              <span className="text-gradient-fire">FLARE</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs text-center md:text-left">
              Igniting growth through next-level systems.
              We turn your vision into a blazing reality.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/yourpage" // Replace with your actual link
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center fill-muted-foreground hover:bg-flame hover:fill-white transition-all duration-300"
              >
                <svg className="h-[18px] w-[18px]" version="1.1" id="Layer_1" viewBox="-337 273 123.5 256" stroke="currentColor">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground grid justify-items-center md:justify-items-start">
              Navigation
            </h4>
            <ul className="space-y-4 grid justify-items-center md:justify-items-start">
              {["Services", "Works", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-flame transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-6 grid justify-items-center md:justify-items-start">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Get in Touch
            </h4>
            <ul className="space-y-4 grid justify-items-center md:justify-items-start">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-flame flex-shrink-0" />
                <span>Lantic, Carmona, Cavite, Philippines</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-flame flex-shrink-0" />
                <a href="mailto:hello@nexflare.tech" className="hover:text-flame">
                  hello@nexflare.tech
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-flame flex-shrink-0" />
                <a href="tel:+639611754592" className="hover:text-flame">
                  +63 961 175 4592
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-flame flex-shrink-0" />
                <a href="tel:+639357928171" className="hover:text-flame">
                  +63 935 792 8171
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NEXFLARE. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/terms-of-service" className="hover:text-flame transition-colors">Terms of Service</Link>
            <Link to="/faq" className="hover:text-flame transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;