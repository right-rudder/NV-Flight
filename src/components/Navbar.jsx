import { navbarLinks } from "../data/navbarLinks.js";
import { mobileNavbarLinks } from "../data/mobileNavbarLinks.js";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
  PHONE_NUMBER,
} from "../consts.ts";

const Navbar = ({ pathname }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [navBar, setNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMobile((prev) => !prev);
    document.body.classList.toggle("overflow-hidden", !openMobile);
  };

  const changeBackground = () => {
    const scrolled = window.scrollY >= 40;
    setNavbar(scrolled);

    // toggle text color on the nav container
    const navEl = document.getElementById("navbar");
    if (navEl) {
      navEl.classList.toggle("text-cloud", !scrolled);
      navEl.classList.toggle("text-charcoal", scrolled);
    }
  };

  useEffect(() => {
    // initialize on mount
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [subHoveredIndex, setSubHoveredIndex] = useState(null);

  const isActive = (menuItem, pathname) => {
    const match = (link) => link === pathname || link + "/" === pathname;
    return (
      match(menuItem.link) ||
      menuItem.submenu?.some((i) => match(i.link) || i.subsubmenu?.some((s) => match(s.link))) ||
      menuItem.subsubmenu?.some((i) => match(i.link))
    );
  };

  const handleItemClick = (index) => {
    setHoveredIndex((prev) => (prev === index ? null : index));
    setSubHoveredIndex(null);
  };

  const handleSubItemClick = (e, subIndex) => {
    e.stopPropagation();
    setSubHoveredIndex((prev) => (prev === subIndex ? null : subIndex));
  };

  return (
    <nav id="navbar">
      <div
        className={`${
          navBar || openMobile
            ? "bg-muted-900 shadow-md"
            : "transition-colors duration-700 ease-in-out bg-gradient-to-b from-muted-900 via-primary-950 to-transparent font-bold pb-6"
        } text-accent-100`}
      >
        <div className="px-4 lg:px-12 mx-auto">
          <div
            className={`${
              navBar || openMobile ? "lg:h-24" : "lg:h-30"
            } relative flex h-24 items-center justify-between transition-all`}
            id="navbar"
          >
            <a
              href="/"
              title="NV Flight School"
              className="flex items-center duration-200 hover:brightness-110"
            >
              <img
                src="/src/assets/nvflight-nobg.webp"
                alt="NV Flight School Logo"
                className={`${
                  navBar || openMobile ? "h-16 mt-2" : "h-20 mt-3"
                } object-contain duration-500 drop-shadow-md`}
              />
            </a>

            <ul className="hidden lg:flex ml-12 space-x-8">
              {navbarLinks.map((item, idx) => (
                <li
                  key={idx}
                  className={`relative uppercase font-title tracking-tight transition-font ${
                    isActive(item, pathname)
                      ? "underline decoration-teal decoration-4 font-bold"
                      : "font-medium"
                  }`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={item.link || "#"}
                    target={item.link?.includes("http") ? "_blank" : "_self"}
                    className="block py-4 lg:text-lg hover:text-emerald duration-300"
                  >
                    {item.name}
                  </a>

                  {item.submenu?.length > 0 && (
                    <ul
                      className={`absolute top-full left-0 bg-forest/95 text-cloud whitespace-nowrap rounded-md overflow-hidden transition-all ${
                        hoveredIndex === idx
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.submenu.map((sub, sidx) => (
                        <li
                          key={sidx}
                          className={`px-4 py-2 hover:bg-teal/80 ${
                            isActive(sub, pathname)
                              ? "bg-teal text-cloud"
                              : "text-cloud"
                          }`}
                          onMouseEnter={() => setSubHoveredIndex(sidx)}
                          onMouseLeave={() => setSubHoveredIndex(null)}
                        >
                          <a
                            href={sub.link || "#"}
                            target={sub.link?.includes("http") ? "_blank" : "_self"}
                          >
                            {sub.name}
                          </a>
                          {sub.subsubmenu?.length > 0 && (
                            <ul
                              className={`mt-1 bg-teal/90 rounded-md transition-all ${
                                subHoveredIndex === sidx
                                  ? "max-h-screen opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              {sub.subsubmenu.map((ss, ssidx) => (
                                <li
                                  key={ssidx}
                                  className="px-4 py-2 hover:bg-emerald"
                                >
                                  <a
                                    href={ss.link}
                                    target={ss.link.includes("http") ? "_blank" : "_self"}
                                    className="text-cloud"
                                  >
                                    {ss.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <button
              onClick={handleHamburgerClick}
              className="lg:hidden p-2 text-charcoal"
              aria-label="Toggle menu"
            >
              {openMobile ? (
                <IoIosArrowForward className="transform rotate-90 text-forest size-6" />
              ) : (
                <div className="space-y-1">
                  <span className="block h-0.5 w-6 bg-accent-100"></span>
                  <span className="block h-0.5 w-6 bg-accent-100"></span>
                  <span className="block h-0.5 w-6 bg-accent-100"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          openMobile
            ? "max-h-screen"
            : "max-h-0"
        } overflow-hidden transition-max-height duration-700 ease-in-out lg:hidden bg-gradient-to-b from-primary-900 via-primary-800 to-accent-300 absolute w-full z-20 top-0 transition-colors duration-700 ease-in-out`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={handleHamburgerClick}
            aria-label="Close menu"
            className="text-accent-100 hover:text-teal transition-colors"
          >
            &#10005;
          </button>
        </div>
        <div className="text-center pb-8">
          <a href="/">
            <img
              src="/src/assets/nvflight-nobg.webp"
              alt="NV Flight Logo"
              className="mx-auto h-20 drop-shadow-md"
            />
          </a>
        </div>
        <ul className="px-4 space-y-4 text-accent-100 text-center">
          {mobileNavbarLinks.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleItemClick(idx)}
              className="relative"
            >
              <a
                href={item.link || "#"}
                target={item.link?.includes("http") ? "_blank" : "_self"}
                className="block font-medium text-xl py-2 hover:text-emerald"
              >
                {item.name}
              </a>
              {item.submenu?.length > 0 && (
                <ul
                  className={`${
                    hoveredIndex === idx
                      ? "max-h-screen"
                      : "max-h-0"
                  } overflow-hidden transition-all`}
                >
                  {item.submenu.map((sub, sidx) => (
                    <li
                      key={sidx}
                      onClick={(e) => handleSubItemClick(e, sidx)}
                      className="pl-4 py-2 hover:text-teal"
                    >
                      <a href={sub.link || "#"}>{sub.name}</a>
                      {sub.subsubmenu?.length > 0 &&
                        hoveredIndex === idx && (
                          <ul
                            className={`${
                              subHoveredIndex === sidx
                                ? "max-h-screen"
                                : "max-h-0"
                            } overflow-hidden transition-all pl-6`}
                          >
                            {sub.subsubmenu.map((ss, ssidx) => (
                              <li
                                key={ssidx}
                                className="py-1 hover:text-emerald"
                              >
                                <a href={ss.link}>{ss.name}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="px-6 py-8 border-t border-cloud/20 space-y-4 text-cloud text-center">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 text-lg font-semibold"
          >
            <FaPhone className="text-emerald size-5" /> {PHONE_NUMBER}
          </a>
          <div className="flex justify-center space-x-4">
            {[LINKEDIN_URL, INSTAGRAM_URL, FACEBOOK_URL, TWITTER_URL, YOUTUBE_URL].map(
              (url, i) =>
                url ? (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    className="hover:text-teal transition-colors"
                  >
                    Icon
                  </a>
                ) : null
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
