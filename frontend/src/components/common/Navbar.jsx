import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGSAP } from "@gsap/react";

// Icons
import {
  FaHome,
  FaCamera,
  FaTrophy,
  FaUsers,
  FaChartBar,
  FaBroom,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
  FaUser,
  FaBuilding,
  FaLandmark,
  FaChevronDown,
} from "react-icons/fa";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const userType = localStorage.getItem("userType");
  const userName = localStorage.getItem("userName");
  const isLoggedIn = !!userType;

  useGSAP(() => {
    gsap.from(navRef.current, {
      duration: 0.6,
      opacity: 0,
      y: -20,
      ease: "power3.out",
    });
  });

  const handleLogout = () => {
    localStorage.clear();
    setShowDropdown(false);
    setMobileOpen(false);
    navigate("/");
  };

  const isActive = (path) => location.pathname.startsWith(path);

  const navLinks =
    userType === "user"
      ? [
          { label: "Home", path: "/user/home", icon: <FaHome /> },
          { label: "Report", path: "/user/report", icon: <FaCamera /> },
          { label: "Leaderboard", path: "/user/leaderboard", icon: <FaTrophy /> },
          { label: "Community", path: "/user/community", icon: <FaUsers /> },
        ]
      : userType === "ngo"
      ? [
          { label: "Dashboard", path: "/ngo/home", icon: <FaChartBar /> },
          { label: "Drives", path: "/ngo/drives", icon: <FaBroom /> },
          { label: "Community", path: "/ngo/community", icon: <FaUsers /> },
        ]
      : userType === "gov"
      ? [
          { label: "Dashboard", path: "/gov/home", icon: <FaChartBar /> },
          { label: "Reports", path: "/gov/reports", icon: <FaCamera /> },
        ]
      : location.pathname === "/"
      ? [
          { label: "About", path: "#about-us", icon: <FaInfoCircle /> },
          { label: "How it Works", path: "#how-it-works", icon: <FaCogs /> },
          { label: "Contact", path: "#contact", icon: <FaEnvelope /> },
        ]
      : [];

  return (
    <>
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-white border-b-4"
      style={{ borderColor: "var(--ocean-500)" }}
    >
      {/* TOP BAR */}
      <div className="w-full flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* HAMBURGER (Mobile Only) */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMobileOpen(true)}
        >
          <FaBars />
        </button>

        {/* Brand */}
        <Link
          to={
            isLoggedIn
              ? userType === "user"
                ? "/user/home"
                : userType === "ngo"
                ? "/ngo/home"
                : "/gov/home"
              : "/"
          }
          className="text-[1.3rem] font-bold bg-linear-to-r from-(--ocean-700) to-(--accent) bg-clip-text text-transparent"
        >
          Namami Jalam
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const isHash = link.path.startsWith("#");

            const linkClass = `flex items-center gap-2 px-4 py-2 rounded-lg font-semibold 
              hover:bg-gray-100 transition`;

            const activeStyle = isActive(link.path)
              ? { background: "var(--ocean-500)", color: "white" }
              : {};

            return isHash ? (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(link.path);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={linkClass}
                style={activeStyle}
              >
                {link.icon} {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={linkClass}
                style={activeStyle}
              >
                {link.icon} {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Profile/Login */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border text-black/90"
              >
                {userType === "user" ? <FaUser /> : userType === "ngo" ? <FaBuilding /> : <FaLandmark />}
                <span>{userName}</span>
                <FaChevronDown
                  className={`transition-transform ${showDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg shadow-xl p-2 bg-white">
                  <Link
                    to={
                      userType === "user"
                        ? "/user/profile"
                        : userType === "ngo"
                        ? "/ngo/profile"
                        : "/gov/profile"
                    }
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-gray-100"
                  >
                    <FaUser /> Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-3 w-full text-red-500 hover:bg-red-100 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="font-bold text-(--ocean-700)"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="font-bold px-6 py-2 rounded-lg bg-black text-white"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>

      </nav>

      {/* BACKDROP & SIDE DRAWER (Mobile) - rendered at document.body via portal so it covers page images */}
      {createPortal(
        <>
          <div
            className={`fixed inset-0 transition-opacity ${
              mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            style={{ backgroundColor: mobileOpen ? "rgba(255,255,255,1)" : "transparent", zIndex: mobileOpen ? 999 : -1 }}
            onClick={() => setMobileOpen(false)}
          ></div>

          <div
            className={`fixed top-0 left-0 h-full w-72 shadow-xl p-6 transition-transform ${
              mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              opacity: 1,
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              zIndex: 1000,
            }}
          >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setMobileOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-3 py-2 text-lg rounded-lg hover:bg-gray-100"
              style={isActive(link.path) ? { background: "var(--ocean-500)", color: "white" } : {}}
            >
              {link.icon} {link.label}
            </Link>
          ))}

          {!isLoggedIn && (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                  setMobileOpen(false);
                }}
                className="w-full px-4 py-2 rounded-lg bg-(--ocean-700) text-white"
              >
                Login
              </button>

              <button
                onClick={() => {
                  navigate("/register");
                  setMobileOpen(false);
                }}
                className="w-full px-4 py-2 rounded-lg border"
              >
                Register
              </button>
            </>
          )}

          {isLoggedIn && (
            <>
              <Link
                to={
                  userType === "user"
                    ? "/user/profile"
                    : userType === "ngo"
                    ? "/ngo/profile"
                    : "/gov/profile"
                }
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <FaUser /> Profile
              </Link>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2 text-red-500 rounded-lg hover:bg-red-100"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
        </>,
        document.body
      )}
    </>
  );
};

export default Navbar;
