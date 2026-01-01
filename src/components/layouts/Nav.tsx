import { Link, useLocation } from "react-router-dom";
import { Camera, Image, Layout, Sparkles } from "lucide-react";

const navItems = [
  { path: "/classic-polaroid", label: "Classic Polaroid", icon: Camera },
  { path: "/strip-layout", label: "Strip Layout", icon: Layout },
  { path: "/photo-prints", label: "Photo Prints", icon: Image },
  { path: "/creative-layouts", label: "Creative Layouts", icon: Sparkles },
];

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="transition-all">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-row items-center gap-2 lg:gap-4 font-normal text-sm text-[var(--color-light)]">
        {/* Left Nav Items */}
        {navItems.slice(0, 2).map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 block ${location.pathname === item.path
                ? "bg-[var(--color-accent)] text-[var(--color-primary)] font-medium"
                : "hover:bg-white/10 hover:text-[var(--color-accent)]"
                }`}
            >
              {item.label}
            </Link>
          </li>
        ))}

        {/* Logo Center */}
        <li className="mx-4 lg:mx-8">
          <Link
            to="/"
            className="text-lg lg:text-xl font-bold tracking-wider hover:text-[var(--color-accent)] transition-colors"
          >
            POLAROWEB
          </Link>
        </li>

        {/* Right Nav Items */}
        {navItems.slice(2).map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 block ${location.pathname === item.path
                ? "bg-[var(--color-accent)] text-[var(--color-primary)] font-medium"
                : "hover:bg-white/10 hover:text-[var(--color-accent)]"
                }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <ul className="md:hidden flex flex-col gap-2 text-[var(--color-light)]">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={item.path}
              style={{ animationDelay: `${index * 50}ms` }}
              className="animate-fade-in-up"
            >
              <Link
                to={item.path}
                className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${location.pathname === item.path
                  ? "bg-[var(--color-accent)] text-[var(--color-primary)] font-medium shadow-lg shadow-[var(--color-accent)]/20"
                  : "bg-white/5 hover:bg-white/10 hover:translate-x-2"
                  }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${location.pathname === item.path
                    ? "bg-[var(--color-primary)]/20"
                    : "bg-[var(--color-accent)]/20"
                    }`}
                >
                  <Icon
                    size={20}
                    className={
                      location.pathname === item.path
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-accent)]"
                    }
                  />
                </div>
                <span className="text-base">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
