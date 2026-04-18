'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { EventsModulePanel } from '@/components/EventsModulePanel';
import {
  attractions,
  diningLifestyle,
  eventsModuleDetail,
  eventsPlatform,
  headlineStats,
  luxuryCluster,
  propertyProfile,
  retailStory,
  whyProperty
} from '@/data/deckContent';

const navItems = [
  { id: 'hero', label: 'Opening' },
  { id: 'why-property', label: 'Why here' },
  { id: 'retail', label: 'Retail' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'dining', label: 'Dining' },
  { id: 'attractions', label: 'Attractions' },
  { id: 'events', label: 'Events' },
  { id: 'cta', label: 'CTA' }
] as const;

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
      'section-shell scroll-mt-28 rounded-2xl bg-panel/60 px-6 py-10 md:px-10 md:py-14 backdrop-blur supports-[backdrop-filter]:bg-panel/40',
    []
  );

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 py-6 md:px-8">
      <nav
        aria-label="Deck sections"
        className="section-shell sticky top-4 z-50 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full bg-black/70 px-4 py-3 text-[0.65rem] uppercase tracking-[0.14em] md:justify-between md:gap-2 md:px-5 md:text-xs md:tracking-[0.18em]"
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="theme-accent whitespace-nowrap underline-offset-4 transition hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-color)]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${sectionClass} relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative grid gap-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="theme-accent text-xs uppercase tracking-[0.24em]">Opening</p>
            <h1 className="theme-heading mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              {propertyProfile.name}: the region&apos;s most kinetic destination for retail, culture, and brand
              moments.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-zinc-200 md:text-lg">{propertyProfile.positioning}</p>
          </div>
          <div className="section-shell flex min-h-56 items-end rounded-xl border-dashed p-4 text-sm text-zinc-300">
            Placeholder for hero video module
          </div>
        </div>
      </motion.section>

      <section id="why-property" className={sectionClass}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">Why this property</p>
        <h2 className="theme-heading mt-4 text-3xl font-semibold">Location, access, scale, and reach—made legible.</h2>
        <p className="mt-4 max-w-3xl text-zinc-200">{propertyProfile.region}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="section-shell rounded-xl p-5">
            <h3 className="theme-heading text-sm font-semibold uppercase tracking-[0.12em]">Location</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {whyProperty.location.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
          <article className="section-shell rounded-xl p-5">
            <h3 className="theme-heading text-sm font-semibold uppercase tracking-[0.12em]">Access</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {whyProperty.access.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
          <article className="section-shell rounded-xl p-5">
            <h3 className="theme-heading text-sm font-semibold uppercase tracking-[0.12em]">Scale</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {whyProperty.scale.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
          <article className="section-shell rounded-xl p-5">
            <h3 className="theme-heading text-sm font-semibold uppercase tracking-[0.12em]">Demographics</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {whyProperty.demographics.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        </div>
        <article className="section-shell mt-6 rounded-xl p-5">
          <h3 className="theme-heading text-sm font-semibold uppercase tracking-[0.12em]">Regional reach</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {whyProperty.regionalReach.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {headlineStats.map((stat) => (
            <article key={stat.label} className="section-shell rounded-xl p-4">
              <p className="text-sm text-zinc-400">{stat.label}</p>
              <p className="theme-heading mt-3 text-2xl font-semibold">{stat.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="retail" className={sectionClass}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">Retail</p>
        <h2 className="theme-heading mt-4 text-3xl font-semibold">A curated retail environment with room to grow.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="section-shell rounded-xl p-5">
            <h3 className="theme-heading text-lg font-semibold">Key anchors &amp; volume drivers</h3>
            <p className="mt-3 text-zinc-300">{retailStory.anchors.join(' · ')}</p>
          </article>
          <article className="section-shell rounded-xl p-5">
            <h3 className="theme-heading text-lg font-semibold">Growth trajectory</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {retailStory.trajectory.map((line) => (
                <li key={line}>— {line}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section
        ref={luxuryRef}
        id="luxury"
        className={`${sectionClass} bg-gradient-to-r from-zinc-900/80 to-zinc-800/20`}
      >
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">Luxury</p>
        <h2 className="theme-heading mt-4 text-3xl font-semibold">A dedicated premium environment.</h2>
        <p className="mt-4 max-w-3xl text-zinc-200">
          As you enter this zone, interface accents shift to gold to reinforce hierarchy and elevate perception.
          This foundation sets up richer future animation and parallax experiences.
        </p>
        <p className="theme-accent mt-8 text-xs uppercase tracking-[0.24em]">Luxury cluster</p>
        <p className="mt-3 text-lg text-zinc-200">{luxuryCluster.join(' · ')}</p>
      </section>

      <section id="dining" className={sectionClass}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">Dining &amp; lifestyle</p>
        <h2 className="theme-heading mt-4 text-3xl font-semibold">Food as a lifestyle draw—not an afterthought.</h2>
        <ul className="mt-6 space-y-3">
          {diningLifestyle.map((line) => (
            <li key={line} className="section-shell rounded-xl p-4 text-zinc-200">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section id="attractions" className={sectionClass}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">Attractions &amp; entertainment</p>
        <h2 className="theme-heading mt-4 text-3xl font-semibold">The differentiator that fills the property with energy.</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {attractions.map((item) => (
            <li key={item} className="section-shell rounded-xl p-4 text-zinc-200">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="events" className={sectionClass}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">Events &amp; platform</p>
        <h2 className="theme-heading mt-4 text-3xl font-semibold">A global platform—not just a building.</h2>
        <ul className="mt-6 space-y-3">
          {eventsPlatform.moments.map((event) => (
            <li key={event} className="section-shell rounded-xl p-4 text-zinc-200">
              {event}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <h3 className="theme-heading text-sm font-semibold uppercase tracking-[0.12em]">Venue &amp; production footprint</h3>
          <ul className="mt-4 space-y-3">
            {eventsPlatform.venues.map((line) => (
              <li key={line} className="section-shell rounded-xl p-4 text-sm text-zinc-300">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <EventsModulePanel content={eventsModuleDetail} />
      </section>

      <section id="cta" className={`${sectionClass} mb-8 text-center`}>
        <p className="theme-accent text-xs uppercase tracking-[0.24em]">CTA</p>
        <h2 className="theme-heading mt-4 text-3xl font-semibold">Let&apos;s build your next headline moment.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          Open conversations for leasing, sponsorship, and large-scale event partnerships.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:leasing@example.com?subject=Leasing%20inquiry%20%E2%80%94%20American%20Dream"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            Leasing
          </a>
          <a
            href="mailto:sponsorships@example.com?subject=Sponsorship%20%E2%80%94%20American%20Dream"
            className="rounded-full border border-current px-5 py-2 text-sm font-semibold text-white"
          >
            Sponsorships
          </a>
          <a
            href="mailto:events@example.com?subject=Event%20booking%20%E2%80%94%20American%20Dream"
            className="rounded-full border border-current px-5 py-2 text-sm font-semibold text-white"
          >
            Events
          </a>
        </div>
      </section>
    </main>
  );
}
