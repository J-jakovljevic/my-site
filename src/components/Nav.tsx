import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

import { HOME, NAV_LINKS } from "@utils/routes";

// motion() lets a react-router component (NavLink) receive framer-motion
// props like whileHover/variants, same as a plain motion.div would.
const MotionNavLink = motion(NavLink);

const NAME_LINES = ["Jovana", "Jakovljević"];

const Nav = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-20 border-b border-edge bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-8 px-6 py-8">
        <MotionNavLink
          to={HOME}
          end
          initial="rest"
          whileHover="hover"
          // staggerChildren here orchestrates every letter span below in
          // render order - the plain <span> per line is just for layout
          // and doesn't reset or split the stagger sequence.
          variants={{ rest: {}, hover: { transition: { staggerChildren: 0.03 } } }}
          className="font-nav-brand flex flex-col leading-snug text-accent"
        >
          {/* Real text for screen readers/SEO; the letter spans below are
          purely decorative and hidden from assistive tech. */}
          <span className="sr-only">Jovana Jakovljević</span>

          <span aria-hidden="true">
            {NAME_LINES.map((line) => (
              <span key={line} className="block text-sm">
                {line.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={{ rest: { y: 0 }, hover: { y: [0, -5, 0] } }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>
        </MotionNavLink>

        <nav>
          <ul className="flex gap-7">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.to === HOME
                  ? location.pathname === HOME
                  : location.pathname.startsWith(link.to);

              return (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={`block min-w-[190px] border-t border-r border-l px-8 pt-2.5 pb-3 text-right text-[11px] font-light tracking-[0.18em] uppercase transition-colors ${
                      isActive
                        ? "border-ink text-ink"
                        : "border-edge text-muted hover:border-ink hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
