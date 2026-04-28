import { useEffect, useRef, useState } from "react";
import { FiCode, FiDatabase, FiTool } from "react-icons/fi";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import logoImg from "./assets/logo.png";
import profileImg from "./assets/profile.jpg";
import backImg from "./assets/back.png";
import jawwiImg from "./assets/jawwi.png";
import carrxImg from "./assets/carrx.png";
import qrafterImg from "./assets/qrafter.png";
import smartBorderImg from "./assets/smart-border.jpg";
import iustImg from "./assets/iust.jpg";
import francisTechLogo from "./assets/francis-tech-logo.png";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, threshold]);

  return [ref, inView];
}

function AnimatedSection({ children, delay = 0 }) {
  const [ref, inView] = useInView(0.12);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`opacity-0 translate-y-5 ${inView ? "opacity-100 translate-y-0 animate-fade-in-up" : ""}`}
    >
      {children}
    </div>
  );
}

function TorusDecor({
  size = 320,
  opacity = 0.05,
  style = {},
  reverse = false,
  duration = 30,
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        opacity,
        filter: "brightness(1.6) sepia(1) saturate(2.5) hue-rotate(5deg)",
        animation: `spin-torus ${duration}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
        pointerEvents: "none",
        ...style,
      }}
    >
      <img
        src={backImg}
        alt="Torus decor"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

const navLinks = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Certifications", target: "certifications" },
  { label: "Contact", target: "contact" },
];

const skillCategories = [
  {
    title: "Frontend",
    icon: <FiCode className="text-[#d4a85a] h-6 w-6" />,
    skills: [
      { label: "HTML", icon: <SiHtml5 className="text-orange-500 h-4 w-4" /> },
      {
        label: "CSS",
        icon: (
          <span className="text-sky-400 text-[0.85rem] font-semibold">CSS</span>
        ),
      },
      {
        label: "JavaScript",
        icon: <SiJavascript className="text-yellow-400 h-4 w-4" />,
      },
      { label: "React", icon: <SiReact className="text-cyan-400 h-4 w-4" /> },
      {
        label: "Bootstrap",
        icon: <SiBootstrap className="text-fuchsia-500 h-4 w-4" />,
      },
      {
        label: "TailwindCSS",
        icon: <SiTailwindcss className="text-teal-300 h-4 w-4" />,
      },
    ],
  },
  {
    title: "Database",
    icon: <FiDatabase className="text-[#d4a85a] h-6 w-6" />,
    skills: [
      { label: "SQL", icon: <TbSql className="text-sky-500 h-4 w-4" /> },
      { label: "MySQL", icon: <SiMysql className="text-blue-500 h-4 w-4" /> },
    ],
  },
  {
    title: "Tools & Design",
    icon: <FiTool className="text-[#d4a85a] h-6 w-6" />,
    skills: [
      { label: "Git", icon: <SiGit className="text-orange-500 h-4 w-4" /> },
      {
        label: "GitHub",
        icon: <SiGithub className="text-slate-300 h-4 w-4" />,
      },
      { label: "Figma", icon: <SiFigma className="text-pink-400 h-4 w-4" /> },
    ],
  },
];

const projects = [
  {
    title: "Francis-Tech Websites",
    subtitle: "Corporate Web Platforms",
    description:
      "Developed two interconnected, multilingual, and fully responsive digital platforms for a software solutions provider based in France. Includes an official company profile website and a dedicated digital marketing services website with structured pricing packages.",
    tech: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    image: francisTechLogo,
    isLogo: true,
    imageBackground: "linear-gradient(135deg, #0d1a2e 0%, #0a1525 100%)",
    demo: "https://www.francis-tech.com/",
  },
  {
    title: "Jawwi",
    subtitle: "Dynamic Weather Web App",
    description:
      "A modern high-performance single-page weather application that provides real-time meteorological data and 3-day forecasts with dynamic city search, geolocation detection, and adaptive UI themes.",
    tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript", "HTML", "CSS"],
    image: jawwiImg,
  },
  {
    title: "CarRx",
    subtitle: "Automotive Diagnostic Platform",
    description:
      "A bilingual platform that helps car owners diagnose vehicle error codes and understand technical problems.",
    tech: ["React.js", "JavaScript", "Bootstrap", "HTML", "CSS"],
    image: carrxImg,
    demo: "https://elian-abboud.github.io/CarRx/",
  },
  {
    title: "Qrafter",
    subtitle: "QR Code Generator",
    description:
      "A web app that allows users to generate customizable QR codes with a simple and intuitive interface.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
    image: qrafterImg,
    demo: "https://elian-abboud.github.io/Qrafter_QR_Code/",
  },
  {
    title: "Smart Border",
    subtitle: "Vehicle Identification System",
    description:
      "An AI-powered system that recognizes, counts, classifies, and tracks vehicles using computer vision technologies.",
    tech: ["YOLOv8", "ByteTrack", "Computer Vision"],
    image: smartBorderImg,
  },
  {
    title: "IUST App",
    subtitle: "University Mobile Application",
    description:
      "A mobile app designed for university students to manage schedules, GPA calculation, and notifications.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: iustImg,
  },
];

const certifications = [
  "Meta Front-End Developer Specialization",
  "Developing Websites and Front-Ends with Bootstrap",
  "Getting Started with Front-End and Web",
  "Web Development Fundamentals",
  "Intro to Generative AI",
  "AI for Everyone",
  "SQL Intermediate",
  "Create & Design DB Using MySQL Workbench",
  "Digital Marketing Fundamentals",
  "CompTIA A+",
  "Technical Support Fundamentals",
  "The Bits & Bytes of Computer Networking",
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x, y });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#080808] text-[#e8dcc8]">
      <div className="grain-overlay" />
      <Navbar
        logoImg={logoImg}
        navLinks={navLinks}
        scrollToSection={scrollToSection}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        scrolled={scrolled}
      />

      <main>
        <Hero
          handleMouseMove={handleMouseMove}
          pointer={pointer}
          scrollToSection={scrollToSection}
          profileImg={profileImg}
          TorusDecor={TorusDecor}
          AnimatedSection={AnimatedSection}
        />

        <About TorusDecor={TorusDecor} AnimatedSection={AnimatedSection} />

        <Skills
          TorusDecor={TorusDecor}
          AnimatedSection={AnimatedSection}
          skillCategories={skillCategories}
        />

        <Projects
          TorusDecor={TorusDecor}
          AnimatedSection={AnimatedSection}
          projects={projects}
        />

        <Certifications
          TorusDecor={TorusDecor}
          AnimatedSection={AnimatedSection}
          certifications={certifications}
        />

        <Contact TorusDecor={TorusDecor} AnimatedSection={AnimatedSection} />
      </main>

      <Footer logoImg={logoImg} />
    </div>
  );
}
