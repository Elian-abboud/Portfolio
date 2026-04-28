import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer({ logoImg }) {
  return (
    <footer className="border-t border-[#b18947]/15 bg-[#0d0d0d] px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Left side */}
          <div className="flex items-center gap-5">
            <img
              src={logoImg}
              alt="EA logo"
              className="h-16 w-auto drop-shadow-[0_0_25px_rgba(177,137,71,0.55)] transition-transform duration-300 hover:scale-105"
            />

            <div>
              <p className="text-2xl font-semibold text-[#e8dcc8]">
                Elian Abboud
              </p>
              <p className="text-sm text-[#a09070] leading-6">
                Informatics Engineer & Frontend Developer
              </p>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-5 justify-start lg:justify-end">
            <a
              href="https://github.com/Elian-abboud"
              target="_blank"
              rel="noreferrer"
              className="text-[#a09070] transition-all hover:text-[#b18947] hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/elian-abboud/"
              target="_blank"
              rel="noreferrer"
              className="text-[#a09070] transition-all hover:text-[#b18947] hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:elianabboud5@gmail.com"
              className="text-[#a09070] transition-all hover:text-[#b18947] hover:scale-110"
              aria-label="Email"
            >
              <FiMail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[#b18947]/10 pt-6 text-sm text-[#888070] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Elian Abboud. All rights reserved.</p>

          <p className="text-[#a09070]">Built by Eng.Elian Abboud</p>
        </div>
      </div>
    </footer>
  );
}
