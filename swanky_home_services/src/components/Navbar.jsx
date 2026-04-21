import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { logo } from "../assets";
import styles from '../style';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const offsets = {
    hero: 100,
    services: -10,
    FAQ: 50,
    reviews: 0,
    contact: window.innerWidth >= 768 ? 0 : -32,
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    setOpen(false);

    const element = document.getElementById(id);
    if (!element) return;
    const offset = offsets[id] || 0;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  const navItems = [
    { id: "hero", title: "Home" },
    { id: "services", title: "Services" },
    { id: "reviews", title: "Reviews" },
    { id: "FAQ", title: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[10000] bg-black/90 backdrop-blur-md border-b border-[hsl(var(--border))]">
      <div className="container mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <a href="#hero" className="cursor-pointer flex items-center" onClick={(e) => handleNavClick(e, "hero")}>
          <img src={logo} alt="Swanky Home Services" className="h-20 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              onClick={(e) => handleNavClick(e, nav.id)}
              className={`font-['Inter'] text-sm cursor-pointer transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-2px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${active === nav.title ? "text-white" : "text-[hsl(var(--muted-foreground))] hover:text-white"}`}
            >
              {nav.title}
            </a>
          ))}
          <a
            href="tel:+15622857619"
            className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-2 rounded-sm font-['Inter'] font-semibold text-xs tracking-wide uppercase hover:bg-[hsl(var(--gold-glow))] transition-colors duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-b border-[hsl(var(--border))] px-6 pb-6 space-y-4">
          {navItems.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              onClick={(e) => handleNavClick(e, nav.id)}
              className="block font-['Inter'] text-sm cursor-pointer text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
            >
              {nav.title}
            </a>
          ))}
          <a
            href="tel:+15622857619"
            className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-2 rounded-sm font-['Inter'] font-semibold text-xs tracking-wide uppercase hover:bg-[hsl(var(--gold-glow))] transition-colors duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;