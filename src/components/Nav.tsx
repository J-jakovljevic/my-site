import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { HOME, NAV_LINKS } from "@utils/routes";
import { useMediaQuery } from "usehooks-ts";

// Total time for the letter stagger + bounce to fully play out (17 letters *
// 0.03s stagger + 0.35s bounce), so the tap-triggered replay reverts to rest
// only after the animation has actually finished.
const NAME_ANIMATION_DURATION = 850;

const EASE = [0.22, 1, 0.36, 1] as const;

// motion() lets a react-router component (NavLink) receive framer-motion
// props like whileHover/variants, same as a plain motion.div would.
const MotionNavLink = motion(NavLink);

const NAME_LINES = ["Jovana", "Jakovljević"];

const Nav = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [nameTapped, setNameTapped] = useState(false);

  const tapTimeout = useRef<ReturnType<typeof setTimeout>>();

  const isSmallScreen = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => clearTimeout(tapTimeout.current);
  }, []);

  const handleNameTap = () => {
    if (!isSmallScreen) return;

    clearTimeout(tapTimeout.current);
    setNameTapped(true);

    tapTimeout.current = setTimeout(
      () => setNameTapped(false),
      NAME_ANIMATION_DURATION,
    );
  };

  return (
    <header className="sticky top-0 z-20 border-b border-edge bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-8 px-6 pt-6 md:pt-8 pb-5">
        <MotionNavLink
          to={HOME}
          end
          initial="rest"
          whileHover="hover"
          animate={nameTapped ? "hover" : "rest"}
          onClick={handleNameTap}
          variants={{
            rest: {},
            hover: { transition: { staggerChildren: 0.03 } },
          }}
          className="font-nav-brand flex flex-col leading-snug text-accent"
        >
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

        <nav className="hidden lg:block">
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
                    className={`block min-w-[190px] border-t border-r border-l pl-8 pr-3 pt-2.5 pb-3 text-right text-[11px] font-light tracking-[0.18em] uppercase transition-colors ${
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

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative h-4 w-6 shrink-0 cursor-pointer lg:hidden"
        >
          {/* Hamburger -> X: Constant y: "-50%" makes each bar's `top` act as
           its center, so the two outer bars converge on the exact same point 
           as the middle bar when rotated into an X */}
          <motion.span
            className="absolute left-0 h-0.5 w-6 bg-ink"
            style={{ y: "-50%" }}
            animate={{
              top: menuOpen ? "50%" : "0%",
              rotate: menuOpen ? 45 : 0,
            }}
            transition={{ duration: 0.25, ease: EASE }}
          />

          <motion.span
            className="absolute top-1/2 left-0 h-0.5 w-6 bg-ink"
            style={{ y: "-50%" }}
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.15 }}
          />

          <motion.span
            className="absolute left-0 h-0.5 w-6 bg-ink"
            style={{ y: "-50%" }}
            animate={{
              top: menuOpen ? "50%" : "100%",
              rotate: menuOpen ? -45 : 0,
            }}
            transition={{ duration: 0.25, ease: EASE }}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-t border-edge lg:hidden"
          >
            <ul className="flex flex-col px-6 py-2">
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
                      className={`block py-3 text-[11px] font-light tracking-[0.18em] uppercase transition-colors ${
                        isActive ? "text-ink" : "text-muted hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
