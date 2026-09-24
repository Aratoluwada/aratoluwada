import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* =========================================================
   ICONS / GLYPHS
========================================================= */

const Glyph = ({ children, className = "" }) => (
  <span className={`glyph ${className}`} aria-hidden="true">
    {children}
  </span>
);

const SiHtml5 = () => <Glyph>HTML</Glyph>;
const FaCss3Alt = () => <Glyph>CSS</Glyph>;
const SiJavascript = () => <Glyph>JS</Glyph>;
const SiBootstrap = () => <Glyph>BS</Glyph>;
const SiReact = () => <Glyph>⚛</Glyph>;
const SiFirebase = () => <Glyph>FB</Glyph>;
const SiEspressif = () => <Glyph>ESP</Glyph>;
const SiArduino = () => <Glyph>ARD</Glyph>;
const SiCplusplus = () => <Glyph>C++</Glyph>;
const FiTool = () => <Glyph>CAD</Glyph>;
const FiBox = () => <Glyph>SW</Glyph>;
const FiCpu = () => <Glyph>CPU</Glyph>;
const FiArrowUpRight = () => <Glyph>↗</Glyph>;
const FiTerminal = () => <Glyph>⌘</Glyph>;
const FiRadio = () => <Glyph>◉</Glyph>;
const FiMail = () => <Glyph>@</Glyph>;
const FiExternalLink = () => <Glyph>↗</Glyph>;
const SiGithub = () => <Glyph>GH</Glyph>;
const SiLinkedin = () => <Glyph>in</Glyph>;
const SiX = () => <Glyph>𝕏</Glyph>;

function TechIcon({ type, className = "" }) {
  const common = {
    className: `tech-svg ${className}`,
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (type) {
    case "html":
      return (
        <svg {...common}>
          <path d="M8 6h48l-4.4 49L32 59 12.4 55 8 6Z" fill="currentColor" />
          <path d="M32 52V11h19l-1.8 20.1L32 36v8l14.2-4.1L45 50l-13 2Z" fill="var(--bg, #080b08)" />
          <path d="M14 12h18v7H21l.7 7H32v7H15.1L14 12Zm2.1 22H32v7H23l.6 6.7-7.5-2.1L16.1 34Z" fill="var(--bg, #080b08)" />
        </svg>
      );

    case "css":
      return (
        <svg {...common}>
          <path d="M8 6h48l-4.4 49L32 59 12.4 55 8 6Z" fill="currentColor" />
          <path d="M32 11v41l13-3.7 2.8-30.3H32Z" fill="var(--bg, #080b08)" />
          <path d="M15 13h17v7H22.4l.7 7H32v7H16l-.8-7L15 13Zm2 25h15v7h-7.9l.6 5.8-7-2-1-10.8Z" fill="var(--bg, #080b08)" />
        </svg>
      );

    case "javascript":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="52" height="52" rx="4" fill="currentColor" />
          <path
            d="M28 22h-7v20c0 4.8 2.8 7.2 7.7 7.2 4.7 0 7.3-2.2 7.3-7.1V22h-7v19.2c0 1.4-.5 2-1.5 2s-1.5-.7-1.5-2V22Zm13 17.8v2c0 4.9 2.7 7.4 7.8 7.4 5 0 7.8-2.5 7.8-7.1 0-3.5-1.7-5.5-6.5-8.1-2.2-1.2-3.1-2-3.1-3.2 0-1 .6-1.6 1.6-1.6 1.1 0 1.7.7 1.7 2.2h6.5c0-5-2.9-7.5-8.1-7.5-5 0-7.7 2.5-7.7 7 0 3.8 2.1 5.8 6.6 8.2 2.2 1.2 3 2 3 3.1 0 1.1-.7 1.7-1.8 1.7-1.3 0-1.9-.8-1.9-2.1v-2h-5.9Z"
            fill="var(--bg, #080b08)"
          />
        </svg>
      );

    case "bootstrap":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="52" height="52" rx="10" fill="currentColor" />
          <path
            d="M20 17h12.4c6.5 0 10.1 3.1 10.1 7.8 0 3.2-1.7 5.5-4.6 6.5 3.6.9 5.6 3.4 5.6 7.1 0 5.5-4.1 8.6-11.1 8.6H20V17Zm7 5.8v6.2h5c2.3 0 3.5-1.1 3.5-3.1 0-2-1.2-3.1-3.5-3.1h-5Zm0 11.8v6.6h5.7c2.5 0 3.9-1.2 3.9-3.3 0-2.1-1.4-3.3-3.9-3.3H27Z"
            fill="var(--bg, #080b08)"
          />
        </svg>
      );

    case "react":
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="5" fill="currentColor" />
          <ellipse cx="32" cy="32" rx="25" ry="10" stroke="currentColor" strokeWidth="4" />
          <ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(60 32 32)" stroke="currentColor" strokeWidth="4" />
          <ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(120 32 32)" stroke="currentColor" strokeWidth="4" />
        </svg>
      );

    case "firebase":
      return (
        <svg {...common}>
          <path d="M11 48 18 13l10 13-17 22Z" fill="currentColor" />
          <path d="M18 13 25 31l7-13 5 18-19 12Z" fill="currentColor" />
          <path d="m25 31 7-13 17 30-30 4 6-21Z" fill="currentColor" />
        </svg>
      );

    case "esp32":
      return (
        <svg {...common}>
          <rect x="14" y="14" width="36" height="36" rx="5" stroke="currentColor" strokeWidth="4" />
          <rect x="23" y="23" width="18" height="18" rx="3" fill="currentColor" />
          <path d="M9 21h5M9 29h5M9 37h5M9 45h5M50 21h5M50 29h5M50 37h5M50 45h5M21 9v5M29 9v5M37 9v5M45 9v5M21 50v5M29 50v5M37 50v5M45 50v5"
            stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case "arduino":
      return (
        <svg {...common}>
          <path
            d="M14 32c5-11 12-11 18 0 6 11 13 11 18 0-5-11-12-11-18 0-6 11-13 11-18 0Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="32" cy="32" r="3" fill="currentColor" />
        </svg>
      );

    case "cpp":
      return (
        <svg {...common}>
          <path
            d="M31 14c-10-6-22 1-22 18s12 24 22 18l5-4-5-6c-7 6-13 2-13-8s6-14 13-8l5-6-5-4Z"
            fill="currentColor"
          />
          <path d="M43 25v6h-6v4h6v6h4v-6h6v-4h-6v-6h-4Z" fill="currentColor" />
        </svg>
      );

    case "autocad":
      return (
        <svg {...common}>
          <path d="M32 8 7 56h10l5-10h20l5 10h10L32 8Zm0 17 6.2 13H25.8L32 25Z" fill="currentColor" />
        </svg>
      );

    case "solidworks":
      return (
        <svg {...common}>
          <path d="M12 48 28 16h10l14 32H41l-3-8H25l-4 8H12Zm16-15h7l-3.5-9-3.5 9Z" fill="currentColor" />
          <path d="M18 52h32" stroke="currentColor" strokeWidth="4" />
        </svg>
      );

    case "fritzing":
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="4" />
          <circle cx="32" cy="32" r="7" fill="currentColor" />
          <path d="M32 10v15M32 39v15M10 32h15M39 32h15" stroke="currentColor" strokeWidth="4" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="4" />
          <circle cx="32" cy="32" r="5" fill="currentColor" />
        </svg>
      );
  }
}
/* =========================================================
   STACK
========================================================= */

const stack = [
  { name: "HTML5", group: "SOFTWARE", icon: () => <TechIcon type="html" /> },
  { name: "CSS3", group: "SOFTWARE", icon: () => <TechIcon type="css" /> },
  { name: "JavaScript", group: "SOFTWARE", icon: () => <TechIcon type="javascript" /> },
  { name: "Bootstrap", group: "SOFTWARE", icon: () => <TechIcon type="bootstrap" /> },
  { name: "React", group: "SOFTWARE", icon: () => <TechIcon type="react" /> },
  { name: "Firebase", group: "SOFTWARE", icon: () => <TechIcon type="firebase" /> },

  { name: "ESP32", group: "HARDWARE", icon: () => <TechIcon type="esp32" /> },
  { name: "Arduino", group: "HARDWARE", icon: () => <TechIcon type="arduino" /> },
  { name: "C++", group: "HARDWARE", icon: () => <TechIcon type="cpp" /> },
  { name: "AutoCAD", group: "HARDWARE", icon: () => <TechIcon type="autocad" /> },
  { name: "SolidWorks", group: "HARDWARE", icon: () => <TechIcon type="solidworks" /> },
  { name: "Fritzing", group: "HARDWARE", icon: () => <TechIcon type="fritzing" /> },
];


/* =========================================================
   PROJECT DATABASE
========================================================= */

const projects = [
  {
    id: "001",
    slug: "royalty",
    name: "ROYALTY HALL",
    type: "WEB SYSTEM",
    status: 100,
    statusLabel: "DEPLOYED",
    description:
      "A responsive school website with an online registration system, built and deployed for Royalty Hall Schools.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "https://royaltyhallschools.vercel.app/",
    visual: "browser",
    category: "SOFTWARE",

    screenshots: [
      {
        label: "HOME PAGE",
        image: "/assets/projects/royalty-hall-home.png",
      },
      {
        label: "REGISTRATION",
        image: "/assets/projects/royalty-hall-registration.png",
      },
      {
        label: "ABOUT PAGE",
        image: "/assets/projects/royalty-hall-about.png",
      },
    ],
  },

  {
    id: "002",
    slug: "gridwatch",
    name: "GRIDWATCH",
    type: "IoT / SOLAR TELEMETRY",
    status: 80,
    statusLabel: "IN DEVELOPMENT",
    description:
      "An IoT-based solar monitoring system connecting an ESP32 controller to a web dashboard through MQTT telemetry.",
    stack: [
      "C++",
      "ESP32",
      "JavaScript",
      "HTML",
      "CSS",
      "Hive MQTT",
      "Cirkit",
    ],
    link: "https://gridwatch-dashboard-one.vercel.app/",
    visual: "grid",
    featured: true,
    category: "SOFTWARE + HARDWARE",

    screenshots: [
      {
        label: "DASHBOARD",
        image: "/assets/projects/gridwatch-dashboard.png",
      },
      {
        label: "TELEMETRY",
        image: "/assets/projects/gridwatch-telemetry.png",
      },
      {
        label: "SYSTEM VIEW",
        image: "/assets/projects/gridwatch-system.png",
      },
    ],
  },

  {
    id: "003",
    slug: "dispenser",
    name: "WATER DISPENSER",
    type: "IoT / HARDWARE",
    status: 100,
    statusLabel: "COMPLETE",
    description:
      "A multi-drink dispensing prototype controlled from a phone or other device using an ESP32 and Arduino UNO.",
    stack: [
      "ESP32",
      "Arduino UNO",
      "C++",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: null,
    visual: "hardware",
    category: "HARDWARE",

    screenshots: [
      {
        label: "PROTOTYPE",
        image: "/assets/projects/water-dispenser-01.jpg",
      },
      {
        label: "CONTROL SYSTEM",
        image: "/assets/projects/water-dispenser-02.jpg",
      },
    ],
  },

  {
    id: "004",
    slug: "luxe",
    name: "LUXECLOSET",
    type: "SOFTWARE / AI",
    status: 59,
    statusLabel: "EXPERIMENTAL BUILD",
    description:
      "An app for tracking daily outfits and laundry, with an AI-powered outfit selector.",
    stack: ["JavaScript"],
    link: null,
    visual: "app",
    category: "SOFTWARE",

    screenshots: [
      {
        label: "PLANNER",
        image: "/assets/projects/luxecloset-planner.png",
      },
      {
        label: "CLOSET",
        image: "/assets/projects/luxecloset-closet.png",
      },
      {
        label: "AI ADVISOR",
        image: "/assets/projects/luxecloset-ai.png",
      },
    ],
  },
];


/* =========================================================
   APP
========================================================= */

function App() {
  const [booted, setBooted] = useState(false);
const [selectedTech, setSelectedTech] = useState(null);
const [selectedProject, setSelectedProject] = useState(projects[0].id);
const [menuOpen, setMenuOpen] = useState(false);

const [projectMode, setProjectMode] = useState("software");

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const activeProject =
    projects.find((project) => project.slug === selectedProject) ||
    projects[0];

  return (
    <>
      {/* =====================================================
          BOOT SCREEN
      ===================================================== */}

      {!booted && (
        <div
          className="boot-screen"
          onClick={() => setBooted(true)}
        >
          <div className="boot-box">

            <div className="boot-brand">
              <span className="status-dot" />
              BUILD_SYSTEM
            </div>

            <div className="boot-lines">
              <p>&gt; initializing developer_profile...</p>
              <p>&gt; loading hardware_modules...</p>
              <p>&gt; loading software_stack...</p>
              <p>&gt; scanning project_database...</p>
            </div>

            <div className="progress">
              <span />
            </div>

            <div className="boot-ready">
              SYSTEM READY <span>[ ENTER ]</span>
            </div>

          </div>
        </div>
      )}


      <div className="noise" />


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="nav">

        <button
          className="brand"
          onClick={() => scrollTo("home")}
        >
          <span className="brand-mark">A_</span>

          <span>
            ARATOLUWADA<span className="muted">.dev</span>
          </span>
        </button>


        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>


        <nav className={menuOpen ? "nav-links open" : "nav-links"}>

          <button onClick={() => scrollTo("home")}>
            01 / HOME
          </button>

          <button onClick={() => scrollTo("stack")}>
            02 / STACK
          </button>

          <button onClick={() => scrollTo("projects")}>
            03 / BUILDS
          </button>

          <button onClick={() => scrollTo("about")}>
            04 / PROFILE
          </button>

          <button
            className="nav-contact"
            onClick={() => scrollTo("contact")}
          >
            CONTACT <FiArrowUpRight />
          </button>

        </nav>

      </header>


      <main>

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="hero" id="home">

          <div className="hero-grid" />

          <div className="hero-content">

            <div className="hero-status">
              <span className="status-dot" />
              SYSTEM ONLINE

              <span className="status-separator">
                /
              </span>

              BUILD MODE: ACTIVE
            </div>


            <div className="hero-kicker">
              ARATOLUWADA // BUILD SYSTEM
            </div>


            <h1>
              I BUILD
              <span
                className="glitch-text"
                data-text="THINGS"
              >
                THINGS
              </span>

              <br />

              THAT MOVE.
            </h1>


            <p className="hero-description">
              Front-End Developer × Mechatronics Engineering Student
            </p>


            <p className="hero-subtext">
              Somewhere between software, hardware, broken prototypes,
              firmware bugs and “let me just try this.”
            </p>


            <div className="hero-actions">

              <a
                href="#projects"
                className="btn btn-primary"
              >
                <span>01</span>
                VIEW BUILDS
                <span>↗</span>
              </a>


              <a
                href="#contact"
                className="btn btn-secondary"
              >
                <span>02</span>
                CONNECT
              </a>

            </div>


            <div className="hero-metrics">

              <div className="metric">
                <span className="metric-value">04</span>
                <span className="metric-label">
                  ACTIVE BUILDS
                </span>
              </div>


              <div className="metric">
                <span className="metric-value">12+</span>
                <span className="metric-label">
                  TOOLS IN STACK
                </span>
              </div>


              <div className="metric">
                <span className="metric-value">01</span>
                <span className="metric-label">
                  ENGINEERING BRAIN
                </span>
              </div>

            </div>

          </div>


          {/* HERO TERMINAL */}

          <div className="hero-terminal">

            <div className="terminal-header">

              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>

              <span>
                aratoluwada@build-system
              </span>

              <span className="terminal-live">
                ● LIVE
              </span>

            </div>


            <div className="terminal-body">

              <p>
                <span className="terminal-green">$</span>{" "}
                whoami
              </p>

              <p className="terminal-output">
                aratoluwada_toluwade
              </p>


              <p>
                <span className="terminal-green">$</span>{" "}
                current_focus
              </p>

              <p className="terminal-output">
                software + hardware
              </p>


              <p>
                <span className="terminal-green">$</span>{" "}
                status
              </p>


              <div className="terminal-status">

                <div>
                  <span>FRONTEND</span>
                  <strong>ONLINE</strong>
                </div>

                <div>
                  <span>ESP32</span>
                  <strong>CONNECTED</strong>
                </div>

                <div>
                  <span>FIRMWARE</span>
                  <strong>DEBUGGING</strong>
                </div>

                <div>
                  <span>IDEAS</span>
                  <strong>UNSTABLE</strong>
                </div>

              </div>


              <p className="terminal-cursor">
                <span className="terminal-green">$</span>{" "}
                _
              </p>

            </div>

          </div>


          <div className="hero-scroll">
            <span>SCROLL TO INSPECT</span>
            <div className="scroll-line" />
          </div>

        </section>


        {/* ===================================================
            STACK
        =================================================== */}

        <section
          id="stack"
          className="section stack-section"
        >

          <div className="section-head">

            <div>
              <span className="section-number">
                02
              </span>

              <span className="eyebrow">
                TOOLCHAIN // LIVE
              </span>
            </div>

            <p>
              12 modules detected. Hover or tap a module to
              inspect it.
            </p>

          </div>


          <div className="stack-status">
            <span className="live-dot" />
            TOOLCHAIN ONLINE

            <span className="status-count">
              12 MODULES LOADED
            </span>
          </div>


          <div className="stack-layout">

            <div className="stack-cloud">

              {stack.map((tech, i) => {

                const Icon = tech.icon;

                const active =
                  selectedTech?.name === tech.name;

                return (
                  <button
                    key={tech.name}
                    className={`tech-node ${
                      active ? "active" : ""
                    } ${tech.group.toLowerCase()}`}
                    style={{
                      "--i": i,
                    }}
                    onMouseEnter={() =>
                      setSelectedTech(tech)
                    }
                    onFocus={() =>
                      setSelectedTech(tech)
                    }
                    onClick={() =>
                      setSelectedTech(
                        active ? null : tech
                      )
                    }
                  >
                    <Icon />
                    <span>{tech.name}</span>
                  </button>
                );

              })}

            </div>


            <div className="tech-inspector">

              <div className="inspector-header">
                <FiTerminal />
                MODULE_INSPECTOR
              </div>


              {selectedTech ? (

                <div className="inspector-content">

                  {(() => {
                    const InspectorIcon =
                      selectedTech.icon;

                    return (
                      <InspectorIcon
                        className="inspector-icon"
                      />
                    );
                  })()}

                  <h3>
                    {selectedTech.name}
                  </h3>

                  <span className="tag">
                    {selectedTech.group}
                  </span>

                  <div className="mini-bar">
                    <span />
                  </div>

                  <p>
                    ACTIVE IN TOOLCHAIN
                  </p>

                </div>

              ) : (

                <div className="inspector-empty">

                  <FiCpu />

                  <p>
                    SELECT A MODULE
                  </p>

                  <small>
                    Inspect the tools behind the builds.
                  </small>

                </div>

              )}

            </div>

          </div>

        </section>

              <section id="projects" className="projects-section">

  {/* =====================================================
      SECTION HEADER
  ====================================================== */}

  <div className="section-head">

    <div>
      <span className="section-index">
        03 / BUILD_SYSTEM
      </span>

      <h2>PROJECTS</h2>
    </div>

    <div className="section-meta">
      <span>04 BUILDS</span>
      <span>SOFTWARE × HARDWARE</span>
    </div>

  </div>


  {/* =====================================================
      PROJECT TYPE TOGGLE
  ====================================================== */}

  <div className="project-toggle">

    <button
      className={
        projectMode === "software"
          ? "active"
          : ""
      }
      onClick={() => setProjectMode("software")}
    >
      <span className="toggle-number">01</span>
      SOFTWARE
    </button>


    <button
      className={
        projectMode === "hardware"
          ? "active"
          : ""
      }
      onClick={() => setProjectMode("hardware")}
    >
      <span className="toggle-number">02</span>
      HARDWARE
    </button>

  </div>


  {/* =====================================================
      SOFTWARE PROJECTS
  ====================================================== */}

  {projectMode === "software" && (

    <div className="project-category">

      <div className="category-header">

        <div>
          <span className="category-code">
            SYSTEM_TYPE // 01
          </span>

          <h3>SOFTWARE PROJECTS</h3>
        </div>

        <span className="category-count">
          02 PROJECTS
        </span>

      </div>


      {/* ROYALTY HALL */}

      <article className="project-card">

        <div className="project-card-top">

          <div className="project-object">
            <span>SOFT_001</span>
            <span>WEB APPLICATION</span>
          </div>

          <div className="project-status">
            <span className="status-dot"></span>
            DEPLOYED
          </div>

        </div>


        <div className="project-card-content">

          <div className="project-info">

            <span className="project-type">
              WEBSITE for Royalty Hall Schools
            </span>

            <h4>
              SCHOOL WEBSITE
            </h4>

            <p>
              A complete school website with a registration
              system designed to give Royalty Hall Schools
              a functional digital presence.
            </p>


            <div className="project-progress">

              <div className="progress-label">
                <span>BUILD PROGRESS</span>
                <strong>100%</strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: "100%" }}
                ></div>
              </div>

            </div>


            <div className="project-stack">

              <span className="stack-label">
                TOOLCHAIN
              </span>

              <div className="project-stack-list">

                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Bootstrap"
                ].map((tech) => (
                  <span
                    className="project-tech"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>


            <a
              href="https://royaltyhallschools.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="project-live-link"
            >
              OPEN LIVE SYSTEM
              <FiArrowUpRight />
            </a>

          </div>


          <div className="project-media">

            <div className="media-header">
              <span>VISUAL_DATA</span>
              <span>03 FILES</span>
            </div>

            <div className="media-grid">

              <div className="media-item media-main">
                <img
                  src="/assets/img-1.png"
                  alt="Royalty Hall homepage"
                />

                <span className="media-index">
                  HOME
                </span>
              </div>

              <div className="media-item">

                <img
                  src="/assets/img-2.png"
                  alt="Royalty Hall registration"
                />

                <span className="media-index">
                  REGISTRATION
                </span>

              </div>

              <div className="media-item">

                <img
                  src="/assets/img-3.png"
                  alt="Royalty Hall about page"
                />

                <span className="media-index">
                  ABOUT
                </span>

              </div>

            </div>

          </div>

        </div>

      </article>

          {/* SIWES WEBSITE           */}
      <article className="project-card">

        <div className="project-card-top">

          <div className="project-object">
            <span>SOFT_003</span>
            <span>WEBSITE</span>
          </div>

          <div className="project-status">
            <span className="status-dot"></span>
            DEPLOYED
          </div>

        </div>


        <div className="project-card-content">

          <div className="project-info">

            <span className="project-type">
              WEBSITE TO VIEW SIWES HIGHLIGHTS
            </span>

            <h4>
              SIWES WEBSITE
            </h4>

            <p>
              A website to view my SIWES highlights and 
              download my technical 
              report and presentation slides.
            </p>


            <div className="project-progress">

              <div className="progress-label">
                <span>BUILD PROGRESS</span>
                <strong>100%</strong>
              </div>

              <div className="progress-track">

                <div
                  className="progress-fill"
                  style={{ width: "100%" }}
                ></div>

              </div>

            </div>


            <div className="project-stack">

              <span className="stack-label">
                TOOLCHAIN
              </span>

              <div className="project-stack-list">

                <span className="project-tech">
                  JavaScript
                </span>

                <span className="project-tech">
                  HTML
                </span>

                <span className="project-tech">
                  CSS
                </span>

              </div>

            </div>

          </div>

                
          <div className="project-media">

            <div className="media-header">
              <span>VISUAL_DATA</span>
              <span>03 FILES</span>
            </div>

            <div className="media-grid">

              <div className="media-item media-main">

                <img
                  src="/assets/img-5.png"
                  alt="SIWES hero"
                />

                <span className="media-index">
                  HERO
                </span>

              </div>

              <div className="media-item">

                <img
                  src="/assets/img-7.png"
                  alt="Gallery"
                />

                <span className="media-index">
                  GALLERY
                </span>

              </div>

              <div className="media-item">

                <img
                  src="/assets/img-6.png"
                  alt="Overview"
                />

                <span className="media-index">
                  OVERVIEW
                </span>

              </div>

            </div>

          </div>

        </div>

      </article>


      {/* LUXECLOSET */}

      <article className="project-card">

        <div className="project-card-top">

          <div className="project-object">
            <span>SOFT_002</span>
            <span>PRODUCT / AI</span>
          </div>

          <div className="project-status building">
            <span className="status-dot"></span>
            BUILDING
          </div>

        </div>


        <div className="project-card-content">

          <div className="project-info">

            <span className="project-type">
              AI OUTFIT + LAUNDRY APP
            </span>

            <h4>
              LuxeCloset
            </h4>

            <p>
              An application for tracking daily outfits
              and laundry, with an AI-powered outfit
              selection system.
            </p>


            <div className="project-progress">

              <div className="progress-label">
                <span>BUILD PROGRESS</span>
                <strong>59%</strong>
              </div>

              <div className="progress-track">

                <div
                  className="progress-fill"
                  style={{ width: "59%" }}
                ></div>

              </div>

            </div>


            <div className="project-stack">

              <span className="stack-label">
                TOOLCHAIN
              </span>

              <div className="project-stack-list">

                <span className="project-tech">
                  JavaScript
                </span>

                <span className="project-tech">
                  AI
                </span>

              </div>

            </div>

          </div>


          <div className="project-media">

            <div className="media-header">
              <span>VISUAL_DATA</span>
              <span>03 FILES</span>
            </div>

            <div className="media-grid">

              <div className="media-item media-main">

                <img
                  src="/assets/img-4.png"
                  alt="LuxeCloset planner"
                />

                <span className="media-index">
                  PLANNER
                </span>

              </div>

              <div className="media-item">

                <img
                  src="/assets/projects/luxecloset-closet.png"
                  alt="LuxeCloset closet"
                />

                <span className="media-index">
                  CLOSET
                </span>

              </div>

              <div className="media-item">

                <img
                  src="/assets/projects/luxecloset-ai.png"
                  alt="LuxeCloset AI"
                />

                <span className="media-index">
                  AI_ENGINE
                </span>

              </div>

            </div>

          </div>

        </div>
    </article>


      {/* SOFTWARE PLACEHOLDER */}

      {/* <div className="project-placeholder">

        <div className="placeholder-icon">
          +
        </div>

        <div>
          <span>
            SOFT_003
          </span>

          <h4>
            NEXT SOFTWARE BUILD
          </h4>

          <p>
            A new software experiment will appear here.
          </p>
        </div>

        <span className="placeholder-status">
          NOT_INITIALIZED
        </span>

      </div> */}

    </div>

  )}


  {/* =====================================================
      HARDWARE PROJECTS
  ====================================================== */}

  {projectMode === "hardware" && (

    <div className="project-category">

      <div className="category-header">

        <div>
          <span className="category-code">
            SYSTEM_TYPE // 02
          </span>

          <h3>HARDWARE PROJECTS</h3>
        </div>

        <span className="category-count">
          02 PROJECTS
        </span>

      </div>


      {/* GRIDWATCH */}

      <article className="project-card">

        <div className="project-card-top">

          <div className="project-object">

            <span>
              HARD_001
            </span>

            <span>
              IoT / ENERGY
            </span>

          </div>


          <div className="project-status building">

            <span className="status-dot"></span>

            BUILDING

          </div>

        </div>


        <div className="project-card-content">

          <div className="project-info">

            <span className="project-type">
              IoT SOLAR MONITORING
            </span>

            <h4>
              Gridwatch
            </h4>

            <p>
              An IoT-based solar monitoring system that
              combines ESP32 hardware, telemetry and a
              web dashboard for monitoring solar activity.
            </p>


            <div className="project-progress">

              <div className="progress-label">

                <span>
                  BUILD PROGRESS
                </span>

                <strong>
                  80%
                </strong>

              </div>


              <div className="progress-track">

                <div
                  className="progress-fill"
                  style={{ width: "80%" }}
                ></div>

              </div>

            </div>


            <div className="project-stack">

              <span className="stack-label">
                TOOLCHAIN
              </span>

              <div className="project-stack-list">

                {[
                  "C++",
                  "ESP32",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Hive MQTT"
                ].map((tech) => (

                  <span
                    className="project-tech"
                    key={tech}
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>


            <a
              href="https://gridwatch-dashboard-one.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="project-live-link"
            >
              OPEN LIVE SYSTEM

              <FiArrowUpRight />

            </a>

          </div>


          <div className="project-media">

            <div className="media-header">

              <span>
                VISUAL_DATA
              </span>

              <span>
                03 FILES
              </span>

            </div>


            <div className="media-grid">

              <div className="media-item media-main">

                <img
                  src="/assets/img-8.png"
                  alt="Gridwatch dashboard"
                />

                <span className="media-index">
                  DASHBOARD
                </span>

              </div>


              <div className="media-item">

                <img
                  src="/assets/img-10.jpg"
                  alt="Gridwatch telemetry"
                />

                <span className="media-index">
                  TELEMETRY
                </span>

              </div>


              <div className="media-item">

                <img
                  src="/assets/img-9.jpg"
                  alt="Gridwatch system"
                />

                <span className="media-index">
                  SYSTEM
                </span>

              </div>

            </div>

          </div>

        </div>

      </article>


      {/* WATER DISPENSER */}

      <article className="project-card">

        <div className="project-card-top">

          <div className="project-object">

            <span>
              HARD_002
            </span>

            <span>
              EMBEDDED / IoT
            </span>

          </div>


          <div className="project-status">

            <span className="status-dot"></span>

            COMPLETE

          </div>

        </div>


        <div className="project-card-content">

          <div className="project-info">

            <span className="project-type">
              IoT BEVERAGE DISPENSER
            </span>

            <h4>
              Beverage Dispenser
            </h4>

            <p>
              A physical dispensing system capable of
              serving different drinks while being
              controlled through a connected device.
            </p>


            <div className="project-progress">

              <div className="progress-label">

                <span>
                  BUILD PROGRESS
                </span>

                <strong>
                  100%
                </strong>

              </div>


              <div className="progress-track">

                <div
                  className="progress-fill"
                  style={{ width: "100%" }}
                ></div>

              </div>

            </div>


            <div className="project-stack">

              <span className="stack-label">
                TOOLCHAIN
              </span>


              <div className="project-stack-list">

                {[
                  "ESP32",
                  "Arduino UNO",
                  "C++",
                  "HTML",
                  "CSS",
                  "JavaScript"
                ].map((tech) => (

                  <span
                    className="project-tech"
                    key={tech}
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>


          <div className="project-media">

            <div className="media-header">

              <span>
                HARDWARE_DATA
              </span>

              <span>
                02 FILES
              </span>

            </div>


            <div className="media-grid">

              <div className="media-item media-main">

                <img
                  src="/assets/img-11.jpg"
                  alt="IoT water dispenser prototype"
                />

                <span className="media-index">
                  PROTOTYPE_01
                </span>

              </div>


              <div className="media-item">

                <img
                  src="/assets/img-12.jpg"
                  alt="IoT water dispenser prototype"
                />

                <span className="media-index">
                  PROTOTYPE_02
                </span>

              </div>

            </div>

          </div>

        </div>

      </article>


      {/* HARDWARE PLACEHOLDER */}

      {/* <div className="project-placeholder">

        <div className="placeholder-icon">
          +
        </div>

        <div>

          <span>
            HARD_003
          </span>

          <h4>
            NEXT HARDWARE BUILD
          </h4>

          <p>
            A new hardware experiment will appear here.
          </p>

        </div>

        <span className="placeholder-status">                     
          NOT_INITIALIZED
        </span>

      </div>
 */}
    </div>

  )}

</section>
        {/* ===================================================
            ABOUT
        =================================================== */}

        <section
          id="about"
          className="section about-section"
        >

          <div className="section-head">

            <div>
              <span className="section-number">
                04
              </span>

              <span className="eyebrow">
                USER_PROFILE
              </span>
            </div>

          </div>


          <div className="about-grid">

            <div className="about-title">

              <span className="terminal-comment">
                // SOMEWHERE BETWEEN
              </span>

              <h2>
                HARDWARE
                <br />
                <span>×</span> SOFTWARE
              </h2>

            </div>


            <div className="about-copy">

              <p className="big-copy">
                I like building things that cross the line
                between the physical and digital world.
              </p>

              <p>
                I'm a Front-End Developer and Mechatronics
                Engineering student, exploring web development,
                embedded systems and IoT by actually making
                things — breaking them, debugging them, and
                trying again.
              </p>


              <div className="about-stats">

                <div>
                  <b>∞</b>
                  <span>BUILDS</span>
                </div>

                <div>
                  <b>12+</b>
                  <span>TOOLS</span>
                </div>

                <div>
                  <b>01</b>
                  <span>MISSION</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            CONTACT
        =================================================== */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="contact-terminal">

            <div className="terminal-top">

              <span>
                <i />
                <i />
                <i />
              </span>

              <small>
                outgoing_transmission
              </small>

            </div>


            <div className="contact-inner">

              <span className="eyebrow">
                OPEN CHANNEL
              </span>

              <h2>
                HAVE A SYSTEM
                <br />
                <span>TO BUILD?</span>
              </h2>


              <a
                className="email-link"
                href="mailto:aratoluwadatoluwade@gmail.com"
              >
                <FiMail />
                aratoluwadatoluwade@gmail.com
              </a>


              <div className="socials">

                <a
                  href="https://github.com/Aratoluwada"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGithub />
                  GITHUB
                </a>


                <a
                  href="https://www.linkedin.com/in/aratoluwada-toluwade-64b559350"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLinkedin />
                  LINKEDIN
                </a>


                <a
                  href="https://x.com/TAG_Degen"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiX />
                  X / @TAG_DEGEN
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>


      <footer>

        <span>
          ARATOLUWADA // BUILD_SYSTEM
        </span>

        <span>
          © {new Date().getFullYear()} — ALL SYSTEMS NOMINAL
        </span>

      </footer>

    </>
  );
}


// /* =========================================================
//    PROJECT GALLERY
// ========================================================= */

// function ProjectGallery({ project }) {

//   const isHardware =
//     project.category === "HARDWARE";

//   return (

//     <div className="project-gallery">

//       <div className="gallery-header">

//         <div>
//           <span className="gallery-command">
//             {isHardware
//               ? "// HARDWARE_ARCHIVE"
//               : "// SCREENSHOT_ARCHIVE"}
//           </span>

//           <h4>
//             {isHardware
//               ? "HARDWARE PHOTOS"
//               : "SOFTWARE SCREENSHOTS"}
//           </h4>
//         </div>

//         <span className="gallery-count">
//           {String(project.screenshots.length).padStart(2, "0")} FILES
//         </span>

//       </div>


//       <div className="screenshot-grid">

//         {project.screenshots.map((shot, index) => (

//           <div
//             className="screenshot-frame"
//             key={shot.image}
//           >

//             <div className="screenshot-topbar">

//               <span>
//                 IMG_{String(index + 1).padStart(2, "0")}
//               </span>

//               <span>
//                 {shot.label}
//               </span>

//             </div>


//             <div className="screenshot-image">

//               <img
//                 src={shot.image}
//                 alt={`${project.name} ${shot.label}`}
//                 onError={(event) => {
//                   event.currentTarget.style.display =
//                     "none";

//                   event.currentTarget.parentElement.classList.add(
//                     "image-missing"
//                   );
//                 }}
//               />

//               <div className="screenshot-placeholder">

//                 <span>
//                   {isHardware
//                     ? "HARDWARE IMAGE"
//                     : "SOFTWARE SCREENSHOT"}
//                 </span>

//                 <small>
//                   {shot.image}
//                 </small>

//               </div>

//             </div>


//             <div className="screenshot-footer">
//               <span>{shot.label}</span>
//               <span>↗</span>
//             </div>

//           </div>

//         ))}

//       </div>


//       <div className="gallery-note">

//         <span>+</span>

//         <p>
//           {isHardware
//             ? "PHYSICAL PROTOTYPE DOCUMENTATION"
//             : "INTERFACE / PRODUCT VISUAL DOCUMENTATION"}
//         </p>

//       </div>

//     </div>
//   );
// }


// /* =========================================================
//    PROJECT VISUALS
// ========================================================= */

// function ProjectVisual({ type }) {

//   if (type === "browser") {

//     return (

//       <div className="project-visual browser-visual">

//         <div className="fake-browser-bar">
//           <span />
//           <span />
//           <span />

//           <small>
//             royaltyhallschools.vercel.app
//           </small>
//         </div>


//         <div className="fake-school">

//           <div className="fake-nav">
//             ROYALTY HALL SCHOOLS

//             <b>
//               Home &nbsp; About &nbsp; Gallery &nbsp; Contact
//             </b>
//           </div>


//           <div className="fake-school-content">

//             <small>
//               EXCELLENCE WITH PURPOSE
//             </small>

//             <h3>
//               Born to Win,
//               <br />
//               Raised to Lead.
//             </h3>

//             <div />

//           </div>

//         </div>

//       </div>

//     );
//   }


//   if (type === "grid") {

//     return (

//       <div className="project-visual grid-visual">

//         <div className="grid-overlay" />

//         <div className="grid-top">
//           <span>GRIDWATCH</span>
//           <b>● CONNECTING</b>
//         </div>

//         <div className="grid-big">
//           SOLAR
//           <br />
//           <span>TELEMETRY</span>
//         </div>

//         <div className="grid-node esp">
//           <FiCpu />
//           <small>ESP32</small>
//         </div>

//         <div className="grid-node mqtt">
//           <FiRadio />
//           <small>MQTT</small>
//         </div>

//         <div className="grid-line one" />
//         <div className="grid-line two" />

//         <div className="grid-chart">
//           <span />
//           <span />
//           <span />
//           <span />
//           <span />
//         </div>

//       </div>

//     );
//   }


//   if (type === "hardware") {

//     return (

//       <div className="project-visual hardware-visual">

//         <div className="hardware-grid" />

//         <div className="board">

//           <div className="board-chip">
//             ESP32
//           </div>

//           <div className="wire w1" />
//           <div className="wire w2" />
//           <div className="wire w3" />

//           <div className="pump p1" />
//           <div className="pump p2" />
//           <div className="pump p3" />

//           <span className="drink d1">
//             01
//           </span>

//           <span className="drink d2">
//             02
//           </span>

//           <span className="drink d3">
//             03
//           </span>

//         </div>

//         <div className="hardware-label">
//           PROTOTYPE // UNIT_03
//         </div>

//       </div>

//     );
//   }


//   return (

//     <div className="project-visual app-visual">

//       <div className="app-sidebar">

//         <b>◈ LuxeCloset</b>

//         <span>Closet</span>

//         <span className="selected">
//           Planner
//         </span>

//         <span>Laundry</span>

//         <span>AI Advisor</span>

//       </div>


//       <div className="app-main">

//         <small>
//           WEEKLY PLANNER
//         </small>

//         <h3>
//           Plan your week.
//         </h3>

//         <div className="app-days">
//           <i />
//           <i />
//           <i />
//           <i />
//           <i />
//           <i />
//         </div>

//         <div className="app-empty">
//           ✦
//           <br />

//           <span>
//             Drop items here
//           </span>
//         </div>

//       </div>

//     </div>

//   );
// }


/* =========================================================
   MOUNT
========================================================= */

createRoot(
  document.getElementById("root")
).render(
  <App />
);