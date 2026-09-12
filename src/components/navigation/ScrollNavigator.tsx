import { useEffect, useState } from 'react';
import LineSidebar from '../reactbits/LineSidebar';

const sectionList = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'builds', label: 'BUILDS' },
  { id: 'sidequests', label: 'EXPERIMENTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'cloud', label: 'CLOUD' },
  { id: 'contact', label: 'CONTACT' },
];

export default function ScrollNavigator() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      for (let i = sectionList.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionList[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveIdx(i);
          return;
        }
      }
      setActiveIdx(0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (index: number) => {
    const target = document.getElementById(sectionList[index].id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Scroll Orientation"
      className="hidden 2xl:block fixed left-6 top-1/2 -translate-y-1/2 z-30 pointer-events-auto select-none"
    >
      <div className="font-mono text-[9px] uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2 pl-3 font-semibold">
        INDEX //
      </div>
      <LineSidebar
        items={sectionList.map((s) => s.label)}
        accentColor="#ea580c"
        textColor="#78716c"
        markerColor="#57534e"
        fontSize={0.8}
        itemGap={14}
        markerLength={24}
        defaultActive={activeIdx}
        onItemClick={handleItemClick}
        showIndex={true}
        showMarker={true}
      />
    </aside>
  );
}
