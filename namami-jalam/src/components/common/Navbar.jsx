import React, { useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
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
          { label: "Leaderboard", path: "/ngo/leaderboard", icon: <FaTrophy /> },
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
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-white"
      style={{
        
        borderBottom: "4px solid var(--ocean-500)",
      }}
    >
      {/* TOP BAR */}
      <div className="w-full flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* LEFT — Brand */}
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

        {/* CENTER — Links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            // For hash links on the landing page, perform smooth-scroll instead of navigating
            const isHash = link.path && link.path.startsWith("#");
            const linkClass = `flex items-center gap-2 px-4 py-2 rounded-lg font-semibold 
                    text-black bg-white 
                   hover:linear-gradient(90deg,var(--ocean-700), var(--accent)) hover:text-black transition-all`;
            const activeStyle = isActive(link.path)
              ? {
                  background: "linear-gradient(90deg,var(--ocean-700), var(--accent))",
      color: "white",
                }
              : {};

            return isHash ? (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(link.path);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={linkClass}
                style={activeStyle}
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={linkClass}
                style={activeStyle}
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* RIGHT — Login / Profile */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-black/90"
              >
                {userType === "user" ? <FaUser /> : userType === "ngo" ? <FaBuilding /> : <FaLandmark />}
                <span>{userName}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showDropdown && (
                <div
                  className="absolute right-0 mt-2 w-56 rounded-lg shadow-xl p-2"
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <Link
                    to={
                      userType === "user" ? "/user/profile" : userType === "ngo" ? "/ngo/profile" : "/gov/profile"
                    }
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-white/90 hover:bg-white/10"
                  >
                    <FaUser />
                    Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-3 w-full text-red-500 hover:bg-red-900/20 rounded-lg"
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
                className="text-[1.3rem] font-bold text-(--ocean-700)"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="text-[1.3rem] font-bold px-6 py-2 rounded-lg text-black"
                style={{
                  background: "black" ,
                    background: "white",
                }}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>

      {/* MOBILE NAV */}
      {isLoggedIn && (
        <div className="md:hidden flex gap-2 overflow-x-auto px-4 pb-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center gap-1 px-3 py-2 rounded-lg whitespace-nowrap text-black/90"
              style={
                isActive(link.path)
                  ? {
                      background:
                        "linear-gradient(90deg,var(--ocean-700), var(--accent))",
                    }
                  : { backgroundColor: "rgba(255,255,255,0.04)" }
              }
            >
              <span>{link.icon}</span>
              <span className="text-sm">{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
