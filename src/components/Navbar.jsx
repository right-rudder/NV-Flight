import { navbarLinks } from "../data/navbarLinks.js";
import { mobileNavbarLinks } from "../data/mobileNavbarLinks.js";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = ({ pathname }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [navBar, setNavbar] = useState(false);
  const [expandedIdx, setExpandedIdx] = useState(null); // which top-level is open

  useEffect(() => {
    const onScroll = () => setNavbar(window.scrollY >= 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", openMobile);
    return () => document.body.classList.remove("overflow-hidden");
  }, [openMobile]);

  const isActive = (item) =>
    item.link === pathname ||
    item.link + "/" === pathname ||
    item.submenu?.some((sub) => sub.link === pathname);

  const toggleSection = (idx) =>
    setExpandedIdx((cur) => (cur === idx ? null : idx));

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-colors ${
        navBar
          ? "bg-muted-950/80 shadow-sm text-white py-2"
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

        {/* Desktop center (unchanged) */}
        <ul className="hidden lg:flex space-x-8 font-medium text-md group/nav">
          {navbarLinks.center.map((item, idx) => (
            <li
              key={idx}
              className={`relative group transition-all duration-300
                group-hover/nav:[&:not(:hover)]:opacity-50
                hover:text-primary-300 focus-visible:text-primary-300 font-semibold`}
            >
              <a
                href={item.link || "#"}
                className={`inline-flex items-center gap-1 ${
                  isActive(item) ? "text-primary-300" : ""
                }`}
              >
                <span>{item.name}</span>
                {item.submenu?.length > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 transition-transform duration-200 group-hover:rotate-180"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </a>

              {item.submenu?.length > 0 && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block z-50">
                  <div className="relative bg-primary-950/80 text-muted-200 rounded-md shadow-lg min-w-[320px] py-2 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="pointer-events-auto absolute -top-3 left-0 right-0 h-3 content-['']" />
                    <ul className="flex flex-col">
                      {item.submenu.map((sub, sidx) => (
                        <li key={sidx}>
                          <a
                            href={sub.link || "#"}
                            className="relative flex items-center justify-between gap-3 px-4 py-2 text-sm rounded-md transition-colors duration-200 hover:text-accent-300 focus-visible:text-accent-300"
                          >
                            <span className="relative inline-block pb-0.5 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-accent-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100">
                              {sub.name}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6 opacity-60 group-hover:opacity-100 transition-opacity"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop right (unchanged) */}
        <div className="hidden lg:flex items-center space-x-4">
          {navbarLinks.buttons.map((item, idx) => (
            <a
              key={idx}
              href={item.link || "#"}
              className={
                idx === 0 ? "btn-primary text-white" : "btn-accent text-white"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpenMobile((v) => !v)}
          className="lg:hidden p-2 touch-manipulation"
          aria-label="Toggle menu"
          aria-expanded={openMobile}
          aria-controls="mobile-menu"
        >
          {openMobile ? (
            <IoIosArrowForward className="rotate-90 text-emerald size-6" />
          ) : (
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </div>
          )}
        </button>
      </div>

      {/* MOBILE: whole-row toggles submenu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-[60] bg-gradient-to-b from-muted-950 to-primary-950 text-muted-100 transform transition-transform duration-300 ease-out ${
          openMobile
            ? "translate-y-0 opacity-100 visible pointer-events-auto"
            : "-translate-y-full opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden={!openMobile}
      >
        <div className="flex h-full flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-muted-800">
            <a
              href="/"
              className="flex items-center"
              onClick={() => setOpenMobile(false)}
            >
              <img
                src="/nvflight-nobg.webp"
                alt="NV Flight"
                className="h-10 object-contain"
              />
            </a>
            <button
              onClick={() => setOpenMobile(false)}
              className="text-muted-200 hover:text-emerald text-2xl leading-none touch-manipulation"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Main nav (accordion) */}
          <div className="flex-1 overflow-y-auto px-6 py-6 overscroll-contain">
            <nav className="divide-y divide-muted-800/50">
              {navbarLinks.center.map((item, idx) => {
                const hasSub = item.submenu?.length > 0;
                const open = expandedIdx === idx;

                return (
                  <div key={idx} className="py-2">
                    {/* Entire row is a button that toggles */}
                    <button
                      type="button"
                      onClick={() =>
                        hasSub
                          ? toggleSection(idx)
                          : (window.location.href = item.link || "#")
                      }
                      aria-expanded={open}
                      aria-controls={`mobile-sub-${idx}`}
                      className={`w-full flex items-center justify-between gap-3 text-left py-3 touch-manipulation`}
                    >
                      <span
                        className={`font-heading text-2xl leading-tight tracking-tight ${
                          isActive(item)
                            ? "text-primary-300"
                            : "hover:text-primary-300"
                        }`}
                      >
                        {item.name}
                      </span>
                      {hasSub && (
                        <IoIosArrowForward
                          className={`size-6 shrink-0 transition-transform ${open ? "rotate-90" : ""}`}
                          aria-hidden="true"
                        />
                      )}
                    </button>

                    {/* Submenu panel */}
                    {hasSub && (
                      <div
                        id={`mobile-sub-${idx}`}
                        className={`overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <ul className="mt-1 pl-2">
                          {/* Optional: visit parent page */}
                          {item.link && (
                            <li>
                              <a
                                href={item.link}
                                onClick={() => setOpenMobile(false)}
                                className="flex items-center gap-3 px-1 py-2 text-base rounded-md hover:text-accent-300"
                              >
                                <span>Visit {item.name}</span>
                              </a>
                            </li>
                          )}
                          {item.submenu.map((sub, sidx) => (
                            <li key={sidx}>
                              <a
                                href={sub.link || "#"}
                                onClick={() => setOpenMobile(false)}
                                className={`flex items-center justify-between gap-3 px-1 py-2 text-base rounded-md transition-colors ${
                                  pathname === sub.link
                                    ? "text-accent-300"
                                    : "hover:text-accent-300"
                                }`}
                              >
                                <span className="relative inline-block pb-0.5 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-accent-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                                  {sub.name}
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-5 opacity-70"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Footer CTAs (kept) */}
          <div className="px-6 py-6 border-t border-muted-800 space-y-4">
            {mobileNavbarLinks.buttons?.length > 0 && (
              <div className="space-y-3">
                {mobileNavbarLinks.buttons.map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.link || "#"}
                    className="block w-full text-center font-heading text-lg py-3 rounded-md bg-emerald text-white hover:bg-emerald/90 transition-colors"
                    onClick={() => setOpenMobile(false)}
                  >
                    {btn.name}
                  </a>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between text-sm text-muted-300">
              <span className="opacity-50">
                © {new Date().getFullYear()} NV Flight
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
