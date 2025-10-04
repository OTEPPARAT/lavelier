import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-lavelier-transparent.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "หน้าแรก" },
    { path: "/products", label: "ผลิตภัณฑ์" },
    { path: "/spa", label: "จองสปา" },
    { path: "/about", label: "เกี่ยวกับ" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 glass-card border border-border/50 rounded-3xl shadow-lg mx-auto max-w-7xl">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28 md:h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Lavelier" className="h-16 sm:h-20 md:h-24 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-light transition-all duration-300 relative group nav-link-glow ${
                  isActive(link.path)
                    ? "text-amber-50/80"
                    : "text-amber-50/80 hover:text-amber-50"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-secondary to-primary transition-transform duration-300 ${
                    isActive(link.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden glass-button p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-light py-2 px-4 rounded-lg transition-all ${
                    isActive(link.path)
                      ? "bg-secondary/20 text-amber-50/80"
                      : "text-amber-50/80 hover:bg-muted hover:text-amber-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
