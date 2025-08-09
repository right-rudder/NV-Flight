import { useEffect, useMemo, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { navbarLinks } from "../data/navbarLinks.js";
import { mobileNavbarLinks } from "../data/mobileNavbarLinks.js";

// Optional: adjust these to your design system
const INDICATOR_CLASSES =
  "absolute -bottom-2 h-0.5 rounded-full bg-teal transition-all duration-300 ease-out";
const DESKTOP_LINK_CLASSES =
  "relative block py-5 text-base lg:text-lg tracking-tight hover:text-emerald transition-colors duration-200";

const Navbar = ({ pathname }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // which top-level item is hovered
  const [subHoveredIndex, setSubHoveredIndex] = useState(null); // nested hover for 2nd level

  // refs for animated underline (Ramp-style sliding indicator)
  const navRef = useRef(null);
  const listRef = useRef(null);
  const linkRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  // util: is a menu item active for the current pathname?
  const isActive = (menuItem, pathname) => {
    const match = (link) => link === pathname || link + "/" === pathname;
    return (
      match(menuItem.link) ||
      menuItem.submenu?.some(
        (i) => match(i.link) || i.subsubmenu?.some((s) => match(s.link))
      ) ||
      menuItem.subsubmenu?.some((i) => match(i.link))
    );
  };

  const activeIndex = useMemo(() => {
    const idx = navbarLinks.findIndex((i) => isActive(i, pathname));
    return idx >= 0 ? idx : null;
  }, [pathname]);

  // Scroll behavior (sticky + blur like ramp.com)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock on mobile menu
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", openMobile);
  }, [openMobile]);

  // Underline indicator positioning
  const setIndicatorForIndex = (idx) => {
    const listEl = listRef.current;
    const linkEl = linkRefs.current[idx];
    if (!listEl || !linkEl) {
      setIndicator((p) => ({ ...p, opacity: 0 }));
      return;
    }
    const linkRect = linkEl.getBoundingClientRect();
    const listRect = listEl.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - listRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  };

  // Set indicator to active on mount/resize/path changes
  useEffect(() => {
    const apply = () => {
      if (hoveredIndex !== null) setIndicatorForIndex(hoveredIndex);
      else if (activeIndex !== null) setIndicatorForIndex(activeIndex);
      else setIndicator((p) => ({ ...p, opacity: 0 }));
    };
    apply();
    const ro = new ResizeObserver(apply);
    if (listRef.current) ro.observe(listRef.current);
    window.addEventListener("resize", apply);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, [hoveredIndex, activeIndex]);

  // Desktop dropdown open state derives from hover/focus
  const openIdx = hoveredIndex;

  return (
    <nav ref={navRef} className="fixed inset-x-0 top-0 z-50">
      {/* Top bar */}
      <div
        className={
          "transition-all duration-300 " +
          (scrolled
            ? "bg-muted-900/80 backdrop-blur supports-[backdrop-filter]:bg-muted-900/60 border-b border-white/10"
            : "bg-gradient-to-b from-muted-900 via-primary-950 to-transparent")
        }
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Left: Logo */}
            <a
              href="/"
              title="NV Flight School"
              className="flex items-center hover:opacity-90"
            >
              <img
                src="/nvflight-nobg.webp"
                alt="NV Flight School Logo"
                className="h-24 w-auto object-contain sm:h-12"
              />
            </a>

            {/* Center: Primary nav with animated underline */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <ul
                ref={listRef}
                className="relative flex items-center gap-8 text-primary-100"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated underline */}
                <span
                  className={INDICATOR_CLASSES}
                  style={{
                    left: indicator.left,
                    width: indicator.width,
                    opacity: indicator.opacity,
                  }}
                />

                {navbarLinks.map((item, idx) => (
                  <li
                    key={idx}
                    className="group"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onFocus={() => setHoveredIndex(idx)}
                  >
                    <a
                      ref={(el) => (linkRefs.current[idx] = el)}
                      href={item.link || "#"}
                      target={item.link?.includes("http") ? "_blank" : "_self"}
                      className={
                        DESKTOP_LINK_CLASSES +
                        (isActive(item, pathname) ? " text-emerald" : "")
                      }
                    >
                      {item.name}
                    </a>

                    {/* Mega menu panel (Ramp-like) */}
                    {item.submenu?.length > 0 && (
                      <div
                        className={
                          "pointer-events-none absolute left-1/2 top-full z-40 w-[min(92vw,1040px)] -translate-x-1/2 pt-2" +
                          " hidden lg:block"
                        }
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div
                          className={
                            (openIdx === idx
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 -translate-y-1") +
                            " pointer-events-auto transform rounded-2xl border border-white/10 bg-muted-900/95 p-4 shadow-2xl transition duration-200 backdrop-blur supports-[backdrop-filter]:bg-muted-900/70"
                          }
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                            {item.submenu.map((sub, sidx) => (
                              <a
                                key={sidx}
                                href={sub.link || "#"}
                                target={
                                  sub.link?.includes("http")
                                    ? "_blank"
                                    : "_self"
                                }
                                className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-colors"
                                onMouseEnter={() => setSubHoveredIndex(sidx)}
                                onMouseLeave={() => setSubHoveredIndex(null)}
                              >
                                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald/80" />
                                <div>
                                  <div className="font-medium text-primary-50">
                                    {sub.name}
                                  </div>
                                  {/* If there are third-level items, show inline list */}
                                  {sub.subsubmenu?.length > 0 && (
                                    <ul className="mt-1 space-y-1 text-sm text-primary-200/80">
                                      {sub.subsubmenu.map((ss, ssidx) => (
                                        <li key={ssidx}>
                                          <a
                                            href={ss.link}
                                            target={
                                              ss.link?.includes("http")
                                                ? "_blank"
                                                : "_self"
                                            }
                                            className="hover:text-emerald/90"
                                          >
                                            {ss.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA / phone (adjust as needed) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/contact"
                className="text-primary-100 hover:text-emerald"
              >
                Contact US
              </a>
              <a
                href="/apply"
                className="inline-flex items-center rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald hover:bg-emerald/20 transition"
              >
                Get Started
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpenMobile((p) => !p)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-primary-100 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {openMobile ? (
                <IoIosArrowForward className="size-6 rotate-90 text-emerald" />
              ) : (
                <div className="space-y-1.5">
                  <span className="block h-0.5 w-6 bg-primary-100" />
                  <span className="block h-0.5 w-6 bg-primary-100" />
                  <span className="block h-0.5 w-6 bg-primary-100" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen panel (slides like Ramp) */}
      <div
        className={
          (openMobile
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2") +
          " fixed inset-x-0 top-20 z-40 origin-top transform bg-muted-900/98 backdrop-blur transition duration-200 lg:hidden"
        }
      >
        <div className="mx-auto max-w-7xl px-4 py-6">
          <ul className="divide-y divide-white/10 text-primary-100">
            {mobileNavbarLinks.map((item, idx) => (
              <li key={idx} className="py-3">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between py-2 text-lg font-medium">
                    <a
                      href={item.link || "#"}
                      target={item.link?.includes("http") ? "_blank" : "_self"}
                      className="flex-1 hover:text-emerald"
                      onClick={(e) => {
                        if (item.submenu?.length) {
                          // let details handle toggle for submenu
                          e.preventDefault();
                        } else {
                          setOpenMobile(false);
                        }
                      }}
                    >
                      {item.name}
                    </a>
                    {item.submenu?.length > 0 && (
                      <span className="ml-4 inline-block rotate-0 transition group-open:rotate-90">
                        ▶
                      </span>
                    )}
                  </summary>

                  {item.submenu?.length > 0 && (
                    <ul className="space-y-2 pb-2 pl-3">
                      {item.submenu.map((sub, sidx) => (
                        <li key={sidx}>
                          <details className="group">
                            <summary className="flex cursor-pointer items-center justify-between py-1.5 text-base">
                              <a
                                href={sub.link || "#"}
                                className="flex-1 hover:text-emerald"
                                onClick={(e) => {
                                  if (sub.subsubmenu?.length)
                                    e.preventDefault();
                                  else setOpenMobile(false);
                                }}
                              >
                                {sub.name}
                              </a>
                              {sub.subsubmenu?.length > 0 && (
                                <span className="ml-2 inline-block rotate-0 transition group-open:rotate-90">
                                  ▶
                                </span>
                              )}
                            </summary>
                            {sub.subsubmenu?.length > 0 && (
                              <ul className="space-y-1 pb-2 pl-3 text-primary-200">
                                {sub.subsubmenu.map((ss, ssidx) => (
                                  <li key={ssidx}>
                                    <a
                                      href={ss.link}
                                      className="block py-1 hover:text-emerald"
                                      onClick={() => setOpenMobile(false)}
                                    >
                                      {ss.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </details>
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              </li>
            ))}
          </ul>

          {/* Optional mobile CTA */}
          <div className="mt-6">
            <a
              href="/apply"
              className="inline-flex w-full items-center justify-center rounded-xl border border-emerald/30 bg-emerald/10 px-4 py-3 text-base font-semibold text-emerald hover:bg-emerald/20"
              onClick={() => setOpenMobile(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
