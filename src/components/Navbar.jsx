import { navbarLinks } from "../data/navbarLinks.js";
import { mobileNavbarLinks } from "../data/mobileNavbarLinks.js";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = ({ pathname }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [navBar, setNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavbar(window.scrollY >= 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (item) =>
    item.link === pathname ||
    item.link + "/" === pathname ||
    item.submenu?.some((sub) => sub.link === pathname);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-colors ${
        navBar
          ? "bg-muted-950/80 shadow-sm text-white py-2 backdrop-blur-md"
          : "bg-gradient-to-b from-muted-950 via-primary-950 to-transparent text-white py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Left: Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/nvflight-nobg.webp"
            alt="NV Flight School"
            className={`object-contain transition-all duration-300 ${
              navBar ? "h-12" : "h-20"
            }`}
          />
        </a>

        {/* Center: Links (named group for dimming: group/nav) */}
        <ul className="hidden lg:flex space-x-8 font-medium text-md group/nav">
          {navbarLinks.center.map((item, idx) => (
            <li key={idx} className="relative group">
              <a
                href={item.link || "#"}
                className={`inline-block transition-all duration-300
                  group-hover/nav:[&:not(:hover)]:opacity-50
                  hover:text-primary-300 focus-visible:text-accent-300
                  font-medium font-semibold
                  ${isActive(item) ? "text-primary-300" : ""}`}
              >
                {item.name}
              </a>

              {/* Dropdown (stays open on hover, fade + slide) */}
              {item.submenu?.length > 0 && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3
                             hidden group-hover:block
                             bg-white rounded-lg shadow-lg border border-gray-200
                             min-w-[220px] py-3 z-50
                             opacity-0 group-hover:opacity-100
                             translate-y-2 group-hover:translate-y-0
                             transition-all duration-300 ease-out"
                >
                  <ul className="flex flex-col space-y-1 px-2">
                    {item.submenu.map((sub, sidx) => (
                      <li key={sidx}>
                        <a
                          href={sub.link || "#"}
                          className="block text-sm text-gray-800 rounded-md px-3 py-2
                                     transition-colors duration-200
                                     hover:bg-accent-50 hover:text-accent-600"
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Action buttons */}

        <div className="hidden lg:flex items-center space-x-4">
          {navbarLinks.buttons.map((item, idx) => (
            <a key={idx} href={item.link || "#"} className="text-sm font-medium hover:text-emerald">
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpenMobile((v) => !v)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          {openMobile ? (
            <IoIosArrowForward className="rotate-90 text-emerald size-6" />
          ) : (
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-current"></span>
              <span className="block h-0.5 w-6 bg-current"></span>
              <span className="block h-0.5 w-6 bg-current"></span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all ${
          openMobile ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="bg-white text-charcoal px-6 py-4 space-y-4">
          {mobileNavbarLinks.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link || "#"}
                className="block py-2 hover:text-emerald font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a href="/login" className="block py-2 hover:text-emerald">
              Log In
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="block px-4 py-2 bg-emerald text-white rounded-md hover:bg-emerald/90"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
