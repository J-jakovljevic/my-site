import { NavLink, useLocation } from "react-router-dom";

import { HOME, NAV_LINKS } from "@utils/routes";

const Nav = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-20 border-b border-edge bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-8 px-6 py-8">
        <NavLink
          to={HOME}
          end
          className="font-nav-brand flex flex-col leading-snug text-accent transition-opacity hover:opacity-75"
        >
          <span className="text-sm">Jovana</span>
          <span className="text-sm">Jakovljević</span>
        </NavLink>

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
