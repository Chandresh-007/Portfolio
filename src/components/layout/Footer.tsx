import { GithubIcon, LinkedinIcon, MailIcon } from '../ui/SocialIcons';
import { socialLinks } from '../../data/personal';

export default function Footer() {
  return (
    <footer className="bg-[#f5f3ec] dark:bg-[#0c0a09] border-t border-stone-300 dark:border-stone-800 px-4 sm:px-6 md:px-12 py-10 sm:py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1.5">
          <div className="font-display font-black text-xl tracking-tight text-stone-900 dark:text-stone-100">
            CHANDRESH P
          </div>
          <p className="text-sm text-stone-700 dark:text-stone-300 font-normal">
            Computer Science · Builder · Explorer
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400 font-mono uppercase tracking-wider">
            Coimbatore, India
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chandresh P on GitHub"
            className="p-2.5 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:text-accent hover:border-accent dark:hover:border-accent hover:scale-105 transition-all focus-visible:outline-none shadow-sm"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chandresh P on LinkedIn"
            className="p-2.5 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:text-accent hover:border-accent dark:hover:border-accent hover:scale-105 transition-all focus-visible:outline-none shadow-sm"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            aria-label="Send email to Chandresh P"
            className="p-2.5 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:text-accent hover:border-accent dark:hover:border-accent hover:scale-105 transition-all focus-visible:outline-none shadow-sm"
          >
            <MailIcon size={18} />
          </a>
        </div>

        <div className="text-center md:text-right font-mono text-xs text-stone-500 dark:text-stone-400">
          <div>© 2026 Chandresh P</div>
          <a
            href="#home"
            className="hover:text-stone-900 dark:hover:text-stone-300 transition-colors uppercase mt-1 inline-block text-[10px] tracking-wider font-semibold"
          >
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
