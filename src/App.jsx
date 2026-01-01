import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  const [copied, setCopied] = useState(false);

  const handleConnect = async () => {
    await navigator.clipboard.writeText("promariddhi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "blogs", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "TRANSPORT LAYER DATABASE ACCESS FIREWALL",
      description:
        "Protocol agnostic Layer-4 TCP proxy with graceful shutdown and enforced security policies global and per IP connection limits, token bucket based connection rate limiting, and configurable timeouts.",
      github: "https://github.com/promariddhi/database_firewall",
      demo: null,
      demoType: "video",
    },
    {
      title: "VIDEO CONFERENCING APPLICATION",
      description:
        "End-to-end video conferencing system implementing WebRTC peer connections and real-time signaling, backed by FastAPI and PostgreSQL.",
      github: "https://github.com/promariddhi/roundtable",
      demo: null,
      demoType: "video",
    },
    {
      title: "DAEMON BASED JOB SCHEDULER",
      description:
        "In-memory job scheduler built in Python using priority queues and background workers, focused on concurrency and task coordination.",
      github: "https://github.com/promariddhi/jobmngr",
      demo: null,
      demoType: null,
    },
    {
      title: "DRONE AREA COVERAGE VISUALISER",
      description:
        "Web-based visualization tool to demonstrate area coverage algorithms for drones. Built with React and Tailwind CSS and deployed on Vercel.",
      github: null,
      demo: "https://coverage-visualiser-web.vercel.app/",
      demoType: "live",
    },
  ];

  const blogs = [
    {
      title: "BUILDING A DATABASE FIREWALL PART 1: TCP PROXY",
      excerpt:
        "Notes on why a database firewall is needed and how to build the tcp proxy required for it from scratch, covering connection lifetimes, coordinated teardowns and graceful shutdown.",
      date: "2025-12-30",
      link: "https://medium.com/@promariddhi/building-a-database-firewall-part-1-tcp-proxy-4134026ef739",
    },
  ];

  const technologies = [
    "PYTHON",
    "GO",
    "SQL",
    "JAVASCRIPT",
    "REACT",
    "TAILWIND CSS",
    "FASTAPI",
    "DJANGO",
    "POSTGRESQL",
    "AWS",
    "LINUX",
    "DOCKER",
  ];

  return (
    <div className="min-h-screen bg-white font-mono text-black">
      {/* Fixed Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-80 border-r-2 border-black bg-white p-8 overflow-y-auto">
        <div className="space-y-8">
          {/*Box */}
          <div className="w-32 h-32 border-2 border-black flex items-center justify-center font-mono">
            <span className="text-3xl tracking-widest">$</span>
            <span className="text-3xl ml-2 animate-pulse">_</span>
          </div>

          {/* Name & Tagline */}
          <div>
            <h1 className="text-2xl font-bold tracking-widest uppercase mb-2">
              PROMA RIDDHI DAS
            </h1>
            <p className="text-sm tracking-wide">BACKEND SOFTWARE DEVELOPER</p>
          </div>

          {/* Social Links */}
          <div className="space-y-3 pt-4 border-t-2 border-black">
            <a
              href="https://github.com/promariddhi"
              className="flex items-center gap-3 hover:underline"
            >
              <Github size={20} />
              <span className="text-sm tracking-wide">GITHUB</span>
            </a>
            <a
              href="https://medium.com/@promariddhi"
              className="flex items-center gap-3 hover:underline"
            >
              <FileText size={20} />
              <span className="text-sm tracking-wide">BLOG</span>
            </a>
            <a
              href="https://linkedin.com/in/promariddhi"
              className="flex items-center gap-3 hover:underline"
            >
              <Linkedin size={20} />
              <span className="text-sm tracking-wide">LINKEDIN</span>
            </a>
            <button
              onClick={handleConnect}
              className="flex items-center gap-3 hover:underline text-left"
            >
              <Mail size={20} />
              <span className="text-sm tracking-wide">EMAIL</span>
            </button>

            <p
              className={`text-xs tracking-widest opacity-60 ml-7 h-4 ${
                copied ? "visible" : "invisible"
              }`}
            >
              EMAIL COPIED
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full mt-4 border-2 border-black px-4 py-3 text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              <span>RESUME</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-80">
        {/* Top Navigation */}
        <nav className="sticky top-0 bg-white border-b-2 border-black z-10">
          <div className="flex gap-8 px-12 py-6">
            {["ABOUT", "PROJECTS", "BLOGS", "CONTACT"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-bold tracking-widest hover:underline ${
                  activeSection === item.toLowerCase() ? "underline" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>

        {/* About Section */}
        <section id="about" className="min-h-screen px-12 py-16">
          <h2 className="text-5xl font-bold tracking-widest uppercase mb-12">
            ABOUT.
          </h2>

          <div className="max-w-3xl space-y-6 text-sm leading-relaxed">
            <p>
              Backend and systems software developer. Comfortable building
              full-stack web applications, with primary focus on backend and
              system design.
            </p>
            <p>
              Special Interest: Understanding how systems work under
              abstraction.
            </p>
          </div>

          <div className="mt-12 max-w-3xl">
            <h3 className="text-xl font-bold tracking-widest uppercase mb-6">
              TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border-2 border-black text-xs font-bold tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen px-12 py-16 border-t-2 border-black"
        >
          <h2 className="text-5xl font-bold tracking-widest uppercase mb-12">
            PROJECTS.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border-2 border-black p-8 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold tracking-widest uppercase mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-4 mt-auto">
                  {/* SOURCE */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-black px-4 py-2 text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    SOURCE
                  </a>

                  {/* DEMO */}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-black px-4 py-2 text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      {project.demoType.toUpperCase()}
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blogs Section */}
        <section
          id="blogs"
          className="min-h-screen px-12 py-16 border-t-2 border-black"
        >
          <h2 className="text-5xl font-bold tracking-widest uppercase mb-12">
            BLOGS.
          </h2>

          <div className="space-y-8 max-w-4xl">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="pb-8 border-b-2 border-black last:border-0"
              >
                <div className="text-xs tracking-widest mb-2 opacity-60">
                  {blog.date}
                </div>
                <h3 className="text-2xl font-bold tracking-wide uppercase mb-4">
                  <span className="inline-flex items-center gap-2">
                    {blog.title}
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </span>
                </h3>
                <p className="text-sm leading-relaxed">{blog.excerpt}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen px-12 py-16 border-t-2 border-black"
        >
          <h2 className="text-5xl font-bold tracking-widest uppercase mb-12">
            CONTACT.
          </h2>

          <div className="max-w-3xl space-y-8">
            <p className="text-sm leading-relaxed">
              Open to internships, entry-level roles, and opportunities focused
              on backend engineering, full stack development, and systems roles.
            </p>

            <div className="space-y-4">
              <div className="text-sm">
                <span className="font-bold tracking-widest">EMAIL:</span>
                <br />
                promariddhi@gmail.com
              </div>

              <button
                onClick={handleConnect}
                className="border-2 border-black px-8 py-4 text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                LET'S CONNECT
              </button>

              {copied && (
                <p className="mt-3 text-xs tracking-widest opacity-60">
                  EMAIL COPIED TO CLIPBOARD
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
