import BubbleMenu from '../reactbits/BubbleMenu';
import { GithubIcon, LinkedinIcon, MailIcon } from '../ui/SocialIcons';
import { socialLinks } from '../../data/personal';

export default function Navbar() {
  const bubbleItems = [
    {
      label: 'HOME',
      href: '#home',
      ariaLabel: 'Home',
      hoverStyles: { bgColor: '#ea580c', textColor: '#ffffff' },
    },
    {
      label: 'ABOUT',
      href: '#about',
      ariaLabel: 'About Me',
      hoverStyles: { bgColor: '#ea580c', textColor: '#ffffff' },
    },
    {
      label: 'BUILDS',
      href: '#builds',
      ariaLabel: 'Selected Builds',
      hoverStyles: { bgColor: '#ea580c', textColor: '#ffffff' },
    },
    {
      label: 'EXPERIMENTS',
      href: '#sidequests',
      ariaLabel: 'The Side Quests',
      hoverStyles: { bgColor: '#ea580c', textColor: '#ffffff' },
    },
    {
      label: 'CLOUD',
      href: '#cloud',
      ariaLabel: 'AWS Cloud Practice',
      hoverStyles: { bgColor: '#ea580c', textColor: '#ffffff' },
    },
    {
      label: 'CONTACT',
      href: '#contact',
      ariaLabel: 'Contact',
      hoverStyles: { bgColor: '#ea580c', textColor: '#ffffff' },
    },
  ];

  const logoNode = (
    <div className="flex items-center gap-2 whitespace-nowrap shrink-0 px-1">
      <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shrink-0" />
      <span className="font-display font-black text-sm md:text-base tracking-tight text-white whitespace-nowrap">
        CHANDRESH P
      </span>
      <span className="font-mono text-[10px] text-stone-400 hidden sm:inline whitespace-nowrap">
        // DEV
      </span>
    </div>
  );

  const extraControls = (
    <div className="flex items-center gap-2">
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="p-1.5 rounded-full border border-stone-700 text-stone-300 hover:text-white hover:border-accent bg-[#1f1d1a] transition-all flex items-center justify-center focus-visible:outline-none"
      >
        <GithubIcon size={15} />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="p-1.5 rounded-full border border-stone-700 text-stone-300 hover:text-white hover:border-accent bg-[#1f1d1a] transition-all flex items-center justify-center focus-visible:outline-none"
      >
        <LinkedinIcon size={15} />
      </a>
      <a
        href={`mailto:${socialLinks.email}`}
        aria-label="Send Email"
        className="p-1.5 rounded-full border border-stone-700 text-stone-300 hover:text-white hover:border-accent bg-[#1f1d1a] transition-all flex items-center justify-center focus-visible:outline-none"
      >
        <MailIcon size={15} />
      </a>
    </div>
  );

  return (
    <BubbleMenu
      logo={logoNode}
      extraControls={extraControls}
      items={bubbleItems}
      useFixedPosition={true}
      menuBg="#171614"
      menuContentColor="#f5f5f4"
      className="top-5 px-5 sm:px-8 md:px-12"
    />
  );
}
