import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({
  logoImg,
  navLinks,
  scrollToSection,
  mobileOpen,
  setMobileOpen,
  scrolled,
}) {
  const toggleMenu = () => setMobileOpen((prev) => !prev);

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <li key={link.target}>
        <button
          onClick={() => {
            scrollToSection(link.target);
            setMobileOpen(false);
          }}
          className={`nav-link ${
            isMobile
              ? "w-full rounded-2xl px-4 py-3 text-left text-base font-medium"
              : "text-sm uppercase tracking-[0.25em]"
          }`}
          aria-label={`Go to ${link.label} section`}
        >
          {link.label}
        </button>
      </li>
    ));

  const navbarScrolled =
    "bg-[#2a2419]/70 backdrop-blur-xl border-b border-[#b18947]/20 shadow-[0_18px_60px_rgba(177,137,71,0.08)]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? navbarScrolled : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 focus:outline-none"
          aria-label="Go to home section"
        >
          <img
            src={logoImg}
            alt="EA logo"
            className="h-14 sm:h-16 lg:h-20 w-auto drop-shadow-[0_0_20px_rgba(177,137,71,0.45)] transition-transform duration-300 hover:scale-105"
          />
        </button>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex">
          <ul className="flex items-center gap-8">{renderLinks(false)}</ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#a09070] transition hover:text-[#b18947]"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden rounded-b-4xl border-t border-[#d4a85a]/10 bg-[#1c1a17]/95 px-6 pb-6 pt-2 backdrop-blur-xl">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4">{renderLinks(true)}</ul>
          </nav>
        </div>
      )}
    </header>
  );
}
