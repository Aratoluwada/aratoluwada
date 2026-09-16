import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const Glyph = ({ children, className = "" }) => <span className={`glyph ${className}`} aria-hidden="true">{children}</span>;
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

const stack = [
  { name: "HTML5", group: "SOFTWARE", icon: SiHtml5 },
  { name: "CSS3", group: "SOFTWARE", icon: FaCss3Alt },
  { name: "JavaScript", group: "SOFTWARE", icon: SiJavascript },
  { name: "Bootstrap", group: "SOFTWARE", icon: SiBootstrap },
  { name: "React", group: "SOFTWARE", icon: SiReact },
  { name: "Firebase", group: "SOFTWARE", icon: SiFirebase },
  { name: "ESP32", group: "HARDWARE", icon: SiEspressif },
  { name: "Arduino", group: "HARDWARE", icon: SiArduino },
  { name: "C++", group: "HARDWARE", icon: SiCplusplus },
  { name: "AutoCAD", group: "HARDWARE", icon: FiTool },
  { name: "SolidWorks", group: "HARDWARE", icon: FiBox },
  { name: "Fritzing", group: "HARDWARE", icon: FiCpu },
];

const projects = [
  {
    id: "001",
    name: "ROYALTY HALL",
    type: "WEB SYSTEM",
    status: 100,
    statusLabel: "DEPLOYED",
    description: "A responsive school website with an online registration system, built and deployed for Royalty Hall Schools.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "https://royaltyhallschools.vercel.app/",
    visual: "browser",
  },
  {
    id: "002",
    name: "GRIDWATCH",
    type: "IoT / SOLAR TELEMETRY",
    status: 80,
    statusLabel: "IN DEVELOPMENT",
    description: "An IoT-based solar monitoring system connecting an ESP32 controller to a web dashboard through MQTT telemetry.",
    stack: ["C++", "ESP32", "JavaScript", "HTML", "CSS", "Hive MQTT", "Cirkit"],
    link: "https://gridwatch-dashboard-one.vercel.app/",
    visual: "grid",
    featured: true,
  },
  {
    id: "003",
    name: "WATER DISPENSER",
    type: "IoT / HARDWARE",
    status: 100,
    statusLabel: "COMPLETE",
    description: "A multi-drink dispensing prototype controlled from a phone or other device using an ESP32 and Arduino UNO.",
    stack: ["ESP32", "Arduino UNO", "C++", "HTML", "CSS", "JavaScript"],
    link: null,
    visual: "hardware",
  },
  {
    id: "004",
    name: "LUXECLOSET",
    type: "SOFTWARE / AI",
    status: 59,
    statusLabel: "EXPERIMENTAL BUILD",
    description: "An app for tracking daily outfits and laundry, with an AI-powered outfit selector.",
    stack: ["JavaScript"],
    link: null,
    visual: "app",
  },
];

function App() {
  const [booted, setBooted] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {!booted && (
        <div className="boot-screen" onClick={() => setBooted(true)}>
          <div className="boot-box">
            <div className="boot-brand">
              <span className="status-dot" /> BUILD_SYSTEM
            </div>
            <div className="boot-lines">
              <p>&gt; initializing developer_profile...</p>
              <p>&gt; loading hardware_modules...</p>
              <p>&gt; loading software_stack...</p>
              <p>&gt; scanning project_database...</p>
            </div>
            <div className="progress"><span /></div>
            <div className="boot-ready">SYSTEM READY <span>[ ENTER ]</span></div>
          </div>
        </div>
      )}

      <div className="noise" />

      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-mark">A_</span>
          <span>ARATOLUWADA<span className="muted">.dev</span></span>
        </button>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span /> <span />
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <button onClick={() => scrollTo("home")}>01 / HOME</button>
          <button onClick={() => scrollTo("stack")}>02 / STACK</button>
          <button onClick={() => scrollTo("projects")}>03 / BUILDS</button>
          <button onClick={() => scrollTo("about")}>04 / PROFILE</button>
          <button className="nav-contact" onClick={() => scrollTo("contact")}>CONTACT <FiArrowUpRight /></button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> FRONT-END DEVELOPER // MECHATRONICS ENGINEERING</div>
            <h1>I BUILD<br /><span>THINGS.</span></h1>
            <p className="hero-sub">
              Software, hardware, interfaces and systems — usually connected in ways they probably shouldn't be.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo("projects")}>INSPECT BUILDS <FiArrowUpRight /></button>
              <button className="ghost-btn" onClick={() => scrollTo("contact")}>OPEN CHANNEL <FiRadio /></button>
            </div>
          </div>

          <div className="hero-terminal">
            <div className="terminal-top">
              <span><i /> <i /> <i /></span>
              <small>dev_machine / status.log</small>
            </div>
            <div className="terminal-body">
              <div className="terminal-line"><span className="green">root@buildsystem</span>:~$ whoami</div>
              <div className="terminal-output">aratoluwada</div>
              <div className="terminal-line"><span className="green">root@buildsystem</span>:~$ cat profile.txt</div>
              <div className="profile-readout">
                <span>ROLE</span><b>FRONT-END DEVELOPER</b>
                <span>FIELD</span><b>MECHATRONICS</b>
                <span>BUILDS</span><b>04 PROJECTS</b>
                <span>MODE</span><b className="green">BUILDING...</b>
              </div>
              <div className="terminal-line cursor-line"><span className="green">root@buildsystem</span>:~$ <span className="cursor" /></div>
            </div>
          </div>

          <div className="scroll-hint">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-head">
            <div>
              <span className="section-number">02</span>
              <span className="eyebrow">TOOLCHAIN // LIVE</span>
            </div>
            <p>12 modules detected. Hover or tap a module to inspect it.</p>
          </div>

          <div className="stack-status">
            <span className="live-dot" /> TOOLCHAIN ONLINE
            <span className="status-count">12 MODULES LOADED</span>
          </div>

          <div className="stack-layout">
            <div className="stack-cloud">
              {stack.map((tech, i) => {
                const Icon = tech.icon;
                const active = selectedTech?.name === tech.name;
                return (
                  <button
                    key={tech.name}
                    className={`tech-node ${active ? "active" : ""} ${tech.group.toLowerCase()}`}
                    style={{ "--i": i }}
                    onMouseEnter={() => setSelectedTech(tech)}
                    onFocus={() => setSelectedTech(tech)}
                    onClick={() => setSelectedTech(active ? null : tech)}
                  >
                    <Icon />
                    <span>{tech.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="tech-inspector">
              <div className="inspector-header"><FiTerminal /> MODULE_INSPECTOR</div>
              {selectedTech ? (
                <div className="inspector-content">
                  {(() => { const InspectorIcon = selectedTech.icon; return <InspectorIcon className="inspector-icon" />; })()}
                  <h3>{selectedTech.name}</h3>
                  <span className="tag">{selectedTech.group}</span>
                  <div className="mini-bar"><span /></div>
                  <p>ACTIVE IN TOOLCHAIN</p>
                </div>
              ) : (
                <div className="inspector-empty">
                  <FiCpu />
                  <p>SELECT A MODULE</p>
                  <small>Inspect the tools behind the builds.</small>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-head">
            <div>
              <span className="section-number">03</span>
              <span className="eyebrow">PROJECT_DATABASE</span>
            </div>
            <p>Four records found. Some deployed. Some still under construction.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.id}>
                <div className="project-meta">
                  <span>[ {project.id} ]</span>
                  <span>{project.type}</span>
                </div>

                <div className="project-main">
                  <div className="project-info">
                    <div className="project-title-row">
                      <h2>{project.name}</h2>
                      <span className={`status-pill ${project.status === 100 ? "complete" : ""}`}>
                        ● {project.statusLabel}
                      </span>
                    </div>
                    <p>{project.description}</p>
                    <div className="project-stack">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                    <div className="build-progress">
                      <div><span>BUILD PROGRESS</span><b>{project.status}%</b></div>
                      <div className="progress-track"><span style={{ width: `${project.status}%` }} /></div>
                    </div>
                    {project.link && (
                      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                        LAUNCH SYSTEM <FiExternalLink />
                      </a>
                    )}
                  </div>

                  <ProjectVisual type={project.visual} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-head">
            <div>
              <span className="section-number">04</span>
              <span className="eyebrow">USER_PROFILE</span>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-title">
              <span className="terminal-comment">// SOMEWHERE BETWEEN</span>
              <h2>HARDWARE<br /><span>×</span> SOFTWARE</h2>
            </div>
            <div className="about-copy">
              <p className="big-copy">
                I like building things that cross the line between the physical and digital world.
              </p>
              <p>
                I'm a Front-End Developer and Mechatronics Engineering student, exploring web development, embedded systems and IoT by actually making things — breaking them, debugging them, and trying again.
              </p>
              <div className="about-stats">
                <div><b>04</b><span>BUILDS</span></div>
                <div><b>12</b><span>TOOLS</span></div>
                <div><b>01</b><span>MISSION</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-terminal">
            <div className="terminal-top">
              <span><i /> <i /> <i /></span>
              <small>outgoing_transmission</small>
            </div>
            <div className="contact-inner">
              <span className="eyebrow">OPEN CHANNEL</span>
              <h2>HAVE A SYSTEM<br /><span>TO BUILD?</span></h2>
              <a className="email-link" href="mailto:aratoluwadatoluwade@gmail.com">
                <FiMail /> aratoluwadatoluwade@gmail.com
              </a>
              <div className="socials">
                <a href="https://github.com/Aratoluwada" target="_blank" rel="noreferrer"><SiGithub /> GITHUB</a>
                <a href="https://www.linkedin.com/in/aratoluwada-toluwade-64b559350" target="_blank" rel="noreferrer"><SiLinkedin /> LINKEDIN</a>
                <a href="https://x.com/TAG_Degen" target="_blank" rel="noreferrer"><SiX /> X / @TAG_DEGEN</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>ARATOLUWADA // BUILD_SYSTEM</span>
        <span>© {new Date().getFullYear()} — ALL SYSTEMS NOMINAL</span>
      </footer>
    </>
  );
}

function ProjectVisual({ type }) {
  if (type === "browser") {
    return (
      <div className="project-visual browser-visual">
        <div className="fake-browser-bar"><span /> <span /> <span /><small>royaltyhallschools.vercel.app</small></div>
        <div className="fake-school">
          <div className="fake-nav">ROYALTY HALL SCHOOLS <b>Home &nbsp; About &nbsp; Gallery &nbsp; Contact</b></div>
          <div className="fake-school-content"><small>EXCELLENCE WITH PURPOSE</small><h3>Born to Win,<br />Raised to Lead.</h3><div /></div>
        </div>
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className="project-visual grid-visual">
        <div className="grid-overlay" />
        <div className="grid-top"><span>GRIDWATCH</span><b>● CONNECTING</b></div>
        <div className="grid-big">SOLAR<br /><span>TELEMETRY</span></div>
        <div className="grid-node esp"><FiCpu /><small>ESP32</small></div>
        <div className="grid-node mqtt"><FiRadio /><small>MQTT</small></div>
        <div className="grid-line one" /><div className="grid-line two" />
        <div className="grid-chart"><span /><span /><span /><span /><span /></div>
      </div>
    );
  }

  if (type === "hardware") {
    return (
      <div className="project-visual hardware-visual">
        <div className="hardware-grid" />
        <div className="board">
          <div className="board-chip">ESP32</div>
          <div className="wire w1" /><div className="wire w2" /><div className="wire w3" />
          <div className="pump p1" /><div className="pump p2" /><div className="pump p3" />
          <span className="drink d1">01</span><span className="drink d2">02</span><span className="drink d3">03</span>
        </div>
        <div className="hardware-label">PROTOTYPE // UNIT_03</div>
      </div>
    );
  }

  return (
    <div className="project-visual app-visual">
      <div className="app-sidebar">
        <b>◈ LuxeCloset</b><span>Closet</span><span className="selected">Planner</span><span>Laundry</span><span>AI Advisor</span>
      </div>
      <div className="app-main">
        <small>WEEKLY PLANNER</small>
        <h3>Plan your week.</h3>
        <div className="app-days"><i /><i /><i /><i /><i /><i /></div>
        <div className="app-empty">✦<br /><span>Drop items here</span></div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);