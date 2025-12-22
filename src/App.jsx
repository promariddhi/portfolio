import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

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
      title: "VIDEO CONFERENCING APPLICATION",
      description:
        "End-to-end video conferencing system implementing WebRTC peer connections and real-time signaling, backed by FastAPI and PostgreSQL.",
      github: null,
      demo: null,
      demoType: "video",
    },
    {
      title: "JOBMNGR",
      description:
        "In-memory job scheduler built in Python using priority queues and background workers, focused on concurrency and task coordination.",
      github: null,
      demo: null,
      demoType: "video",
    },
    {
      title: "COVERAGE VISUALISER",
      description:
        "Web-based visualization tool to demonstrate area coverage algorithms for drones. Built with React and Tailwind CSS and deployed on Vercel.",
      github: null,
      demo: "https://coverage-visualiser-web.vercel.app/",
      demoType: "live",
    },
    {
      title: "PROJTIMER",
      description:
        "CLI utility built using native Python libraries to track cumulative time spent on a project.",
      github: null,
      demo: null,
      demoType: "video",
    },
  ];

  const blogs = [
    {
      title: "BUILDING REAL-TIME SYSTEMS WITH WEBRTC",
      excerpt:
        "Notes from implementing a video conferencing system from scratch, covering peer connections, signaling, ICE candidates, and common pitfalls in real-time communication.",
      date: "2024-11",
    },
    {
      title: "DESIGNING SAFE CONCURRENCY IN PYTHON",
      excerpt:
        "Exploration of threading, scheduling, and shared-state coordination through the lens of a custom job scheduler.",
      date: "2024-10",
    },
    {
      title: "THINKING IN SYSTEMS, NOT FRAMEWORKS",
      excerpt:
        "Reflections on learning how systems work under abstraction and why fundamentals matter more than tooling.",
      date: "2024-09",
    },
  ];

  const technologies = [
    "PYTHON",
    "SQL",
    "JAVASCRIPT",
    "REACT",
    "TAILWIND CSS",
    "FASTAPI",
    "DJANGO",
    "POSTGRESQL",
    "AWS",
    "LINUX",
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
            <p className="text-sm tracking-wide">
              BACKEND / SYSTEMS-ORIENTED SOFTWARE DEVELOPER
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3 pt-4 border-t-2 border-black">
            <button
              disabled
              className="flex items-center gap-3 opacity-40 cursor-not-allowed"
            >
              <Github size={20} />
              <span className="text-sm tracking-wide">GITHUB</span>
            </button>

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
            {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
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
                  {/* SOURCE (disabled for now) */}
                  <button
                    disabled
                    className="flex items-center gap-2 border-2 border-black px-4 py-2 text-xs font-bold tracking-widest opacity-40 cursor-not-allowed"
                  >
                    <Github size={16} />
                    SOURCE
                  </button>

                  {/* DEMO */}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-black px-4 py-2 text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      LIVE DEMO
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-2 border-2 border-black px-4 py-2 text-xs font-bold tracking-widest opacity-40 cursor-not-allowed"
                    >
                      <ExternalLink size={16} />
                      DEMO VIDEO
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blogs Section */}
        {/*<section
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
                  {blog.title}
                </h3>
                <p className="text-sm leading-relaxed">{blog.excerpt}</p>
              </div>
            ))}
          </div>
        </section>*/}

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
