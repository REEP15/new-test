'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  attractions,
  brandEcosystem,
  eventMoments,
  headlineStats
} from '@/data/deckContent';

const sections = ['Hero', 'Stats', 'Brand Ecosystem', 'Luxury', 'Attractions', 'Events', 'CTA'];

export function SalesDeck() {
  const luxuryRef = useRef<HTMLElement | null>(null);
  const [isLuxuryTheme, setIsLuxuryTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!luxuryRef.current) return;

      const bounds = luxuryRef.current.getBoundingClientRect();
      const triggerTop = window.innerHeight * 0.4;
      const triggerBottom = window.innerHeight * 0.8;
      const isInZone = bounds.top <= triggerTop && bounds.bottom >= triggerBottom;

      setIsLuxuryTheme(isInZone);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isLuxuryTheme ? 'luxury' : 'default');
  }, [isLuxuryTheme]);

  const sectionClass = useMemo(
    () =>
      'section-shell rounded-2xl bg-panel/60 px-6 py-10 md:px-10 md:py-14 backdrop-blur supports-[backdrop-filter]:bg-panel/40',
    []
  );

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 py-6 md:px-8">
      <nav className="section-shell sticky top-4 z-50 flex flex-wrap items-center justify-between gap-2 rounded-full bg-black/70 px-5 py-3 text-xs uppercase tracking-[0.18em]">
        {sections.map((section) => (
          <span key={section} className="theme-accent">
            {section}
          </span>
        ))}
      </nav>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${sectionClass} relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative grid gap-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="theme-accent text-xs uppercase tracking-[0.24em]">Hero</p>
            <h1 className="theme-heading mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              The city&apos;s most kinetic destination for retail, culture, and brand moments.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-zinc-200 md:text-lg">
              A cinematic, browser-native sales story built to communicate scale and commercial value in
              seconds.
            </p>
          </div>
          <div className="section-shell flex min-h-56 items-end rounded-xl border-dashed p-4 text-sm text-zinc-300">
            Placeholder for hero video module
          </div>
        </div>
      </motion.section>

      <section className={`${sectionClass}`}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">Stats</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {headlineStats.map((stat) => (
            <article key={stat.label} className="section-shell rounded-xl p-4">
              <p className="text-sm text-zinc-400">{stat.label}</p>
              <p className="theme-heading mt-3 text-2xl font-semibold">{stat.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass}`}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">Brand Ecosystem</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="section-shell rounded-xl p-5">
            <h2 className="theme-heading text-lg font-semibold">Retail Anchors</h2>
            <p className="mt-3 text-zinc-300">{brandEcosystem.retail.join(' · ')}</p>
          </article>
          <article className="section-shell rounded-xl p-5">
            <h2 className="theme-heading text-lg font-semibold">Luxury Cluster</h2>
            <p className="mt-3 text-zinc-300">{brandEcosystem.luxury.join(' · ')}</p>
          </article>
        </div>
      </section>

      <section ref={luxuryRef} className={`${sectionClass} bg-gradient-to-r from-zinc-900/80 to-zinc-800/20`}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">Luxury</p>
        <h2 className="theme-heading mt-4 text-3xl font-semibold">A dedicated premium environment.</h2>
        <p className="mt-4 max-w-3xl text-zinc-200">
          As you enter this zone, interface accents shift to gold to reinforce hierarchy and elevate perception.
          This foundation sets up richer future animation and parallax experiences.
        </p>
      </section>

      <section className={`${sectionClass}`}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">Attractions</p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {attractions.map((item) => (
            <li key={item} className="section-shell rounded-xl p-4 text-zinc-200">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className={`${sectionClass}`}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">Events</p>
        <ul className="mt-5 space-y-3">
          {eventMoments.map((event) => (
            <li key={event} className="section-shell rounded-xl p-4 text-zinc-200">
              {event}
            </li>
          ))}
        </ul>
      </section>

      <section className={`${sectionClass} mb-8 text-center`}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">CTA</p>
        <h2 className="theme-heading mt-4 text-3xl font-semibold">Let&apos;s build your next headline moment.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          Open conversations for leasing, sponsorship, and large-scale event partnerships.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">Leasing</button>
          <button className="rounded-full border border-current px-5 py-2 text-sm font-semibold text-white">
            Sponsorships
          </button>
          <button className="rounded-full border border-current px-5 py-2 text-sm font-semibold text-white">
            Events
          </button>
        </div>
      </section>
    </main>
  );
}
