import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollNavigator from './components/navigation/ScrollNavigator';
import ClickSpark from './components/reactbits/ClickSpark';

import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';

const AboutMe = lazy(() => import('./components/sections/AboutMe'));
const SelectedBuilds = lazy(() => import('./components/sections/SelectedBuilds'));
const SideQuests = lazy(() => import('./components/sections/SideQuests'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Workbench = lazy(() => import('./components/sections/Workbench'));
const CloudPractice = lazy(() => import('./components/sections/CloudPractice'));
const Contact = lazy(() => import('./components/sections/Contact'));

export default function App() {
  return (
    <ThemeProvider>
      <ClickSpark
        sparkColor="#ea580c"
        sparkSize={5}
        sparkRadius={14}
        sparkCount={6}
        duration={350}
      >
        <div className="min-h-screen bg-[#faf9f5] dark:bg-[#0c0a09] text-stone-900 dark:text-stone-100 selection:bg-stone-900 selection:text-white dark:selection:bg-accent dark:selection:text-white transition-colors duration-300 relative">
          {/* React Bits: Line Sidebar (Desktop Viewport Edge Scroll Orientation) */}
          <ScrollNavigator />

          {/* React Bits: Bubble Menu (Primary Navigation Interface) */}
          <Navbar />

          {/* Core Content Flow: ME → BUILDS → EXPERIMENTS → LEARNING → CLOUD/LEADERSHIP → CONTACT */}
          <main>
            {/* Hero with LaserFlow, GradientText, and SplitFlapText */}
            <Hero />

            {/* Verified Workspace Telemetry with CountUp */}
            <Stats />

            <Suspense fallback={<div className="w-full min-h-[50vh]" />}>
              {/* Dedicated About Me & ProfileCard: Personal Student/Builder Narrative */}
              <AboutMe />

              {/* Selected Builds: MoodScape Flagship + Accordion Gallery + Project Ledger */}
              <SelectedBuilds />

              {/* The Side Quests: Off-Resume Lab & Modding */}
              <SideQuests />

              {/* Technical Index with LogoLoop Marquee */}
              <Skills />

              {/* Active Research Workbench & Ongoing Inquiries */}
              <Workbench />

              {/* Cloud Architecture & AWS SBG Campus Leadership */}
              <CloudPractice />

              {/* Contact & Colophon with BorderGlow Direct Email */}
              <Contact />
            </Suspense>
          </main>

          {/* Personal Developer Footer */}
          <Footer />
        </div>
      </ClickSpark>
    </ThemeProvider>
  );
}
