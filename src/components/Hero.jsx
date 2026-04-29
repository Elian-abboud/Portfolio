import { FiCode, FiDownload, FiMail, FiEye } from "react-icons/fi";
import cvFile from "../assets/Elian_Abboud_CV.pdf";

export default function Hero({
  handleMouseMove,
  pointer,
  scrollToSection,
  profileImg,
  TorusDecor,
  AnimatedSection,
}) {
  const handleScroll = (id) => scrollToSection(id);

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pt-28 pb-12 text-[#e8dcc8] sm:px-8 lg:px-12"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(177,137,71,0.15),transparent_28%),radial-gradient(circle_at_15%_20%,rgba(255,223,141,0.12),transparent_18%)]" />

      {/* Floating Orbs */}
      <div
        className="hero-orb left-[-12%] top-12 h-80 w-[320px] bg-[#b18947]/20 transform-gpu will-change-transform"
        style={{
          transform: `translate(${pointer.x * -20}px, ${pointer.y * -20}px)`,
        }}
      />
      <div
        className="hero-orb right-[-10%] bottom-20 h-48 w-48 bg-[#d4a85a]/20 transform-gpu blur-2xl will-change-transform"
        style={{
          transform: `translate(${pointer.x * 15}px, ${pointer.y * 15}px)`,
        }}
      />

      {/* Decorations */}
      <TorusDecor
        size={540}
        opacity={0.16}
        style={{ right: "-6%", bottom: "-8%" }}
        duration={25}
      />
      <TorusDecor
        size={260}
        opacity={0.1}
        style={{ left: "-7%", top: "4%" }}
        reverse
        duration={38}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Left */}
        <div className="space-y-6">
          <AnimatedSection>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[#b18947]">
              <span className="inline-block h-0.5 w-10 rounded-full bg-[#b18947]" />
              WELCOME TO MY PORTFOLIO
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="font-serif text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Elian <span className="gold-gradient-text">Abboud</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg font-semibold text-[#b18947] sm:text-xl">
              Informatics Engineer & Frontend Developer
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="max-w-xl text-base leading-8 text-[#a09070] sm:text-lg">
              I build modern, responsive web applications with React and clean
              UI design.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => handleScroll("projects")}
                className="btn-gold"
              >
                <FiCode className="h-4 w-4" />
                View Projects
              </button>

              {/* VIEW CV (FIXED ICON) */}
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                <FiEye className="h-4 w-4" />
                View My CV
              </a>

              <button
                onClick={() => handleScroll("contact")}
                className="btn-outline-gold"
              >
                <FiMail className="h-4 w-4" />
                Contact Me
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Right */}
        <AnimatedSection delay={200}>
          <div className="relative mx-auto flex max-w-[320px] justify-center">
            <img
              src={profileImg}
              alt="Elian Abboud portrait"
              loading="lazy"
              className="h-64 w-full max-w-[256px] rounded-full object-cover object-top shadow-[0_0_45px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
