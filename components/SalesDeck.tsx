import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { LuxuryShowcase } from '@/components/luxury/LuxuryShowcase';
import { LuxuryThemeObserver } from '@/components/LuxuryThemeObserver';
import attractionDining from '@/ref_img2/Culinary boulevard with destination dining.png';
import attractionFamily from '@/ref_img2/Immersive family entertainment district.png';
import attractionCinema from '@/ref_img2/Multi-screen premium cinema complex.png';
import attractionSeasonal from '@/ref_img2/Seasonal interactive installations.png';
import adidasIcon from '@/ref_icon/adidas_icon.png';
import hmIcon from '@/ref_icon/h&m_icon.jpeg';
import nikeIcon from '@/ref_icon/nike_icon.jpeg';
import uniqloIcon from '@/ref_icon/uniqlo_icon.jpeg';
import zaraIcon from '@/ref_icon/zara_icon.jpeg';
import {
  attractions,
  diningLifestyle,
  eventsPlatform,
  headlineStats,
  propertyProfile,
  retailStory,
  whyProperty
} from '@/data/deckContent';

const heroVisionaryVideo = '/ref_vids/The Visionary Retail Experience_720p.mp4';
const whyPropertyAmbientVideo = '/ref_vids/PixVerse_Pixverse-c1_Fusion_540P_1__2__3__4.mp4';

const attractionVisuals: Record<string, { image: StaticImageData; caption: string }> = {
  'Immersive family entertainment district': {
    image: attractionFamily,
    caption: 'Family-led footfall engine'
  },
  'Multi-screen premium cinema complex': {
    image: attractionCinema,
    caption: 'Night and weekend traffic anchor'
  },
  'Culinary boulevard with destination dining': {
    image: attractionDining,
    caption: 'Food-forward dwell-time accelerator'
  },
  'Seasonal interactive installations': {
    image: attractionSeasonal,
    caption: 'Year-round programmable moments'
  }
};

const anchorLogoItems: { name: string; src: StaticImageData; widthClass: string }[] = [
  { name: 'Zara', src: zaraIcon, widthClass: 'w-24 md:w-28' },
  { name: 'H&M', src: hmIcon, widthClass: 'w-16 md:w-20' },
  { name: 'Nike', src: nikeIcon, widthClass: 'w-20 md:w-24' },
  { name: 'Adidas', src: adidasIcon, widthClass: 'w-24 md:w-28' },
  { name: 'Uniqlo', src: uniqloIcon, widthClass: 'w-16 md:w-20' }
];

const anchorLogoTrack = [...anchorLogoItems, ...anchorLogoItems];

export function SalesDeck() {
  const sectionClass =
    'section-shell scroll-mt-28 rounded-2xl bg-panel/60 px-6 py-10 md:px-10 md:py-14 backdrop-blur supports-[backdrop-filter]:bg-panel/40';

  const chapterLabel = 'text-[0.68rem] uppercase tracking-[0.32em] text-zinc-400';
  const chapterTitle = 'theme-heading mt-5 text-4xl font-semibold leading-tight md:text-6xl';
  const chapterBody = 'mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg';

  return (
    <>
      <LuxuryThemeObserver targetId="luxury" />
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-6 md:px-8 md:py-8">
        <section className="section-shell rounded-2xl bg-black/55 px-6 py-5 md:px-10 md:py-6">
          <p className="theme-accent text-[0.65rem] uppercase tracking-[0.32em]">Interactive sales deck</p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Digideck-style narrative designed for investor conversations: cinematic pacing, premium visuals, and clear
            commercial pathways.
          </p>
        </section>

        <section
          id="hero"
          className={`${sectionClass} deck-fade-up relative flex min-h-[86vh] items-end overflow-hidden md:min-h-[92vh]`}
        >
          <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.1),transparent_60%)]"
            aria-hidden
          />
          <div className="relative z-10 grid w-full gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div className="pb-2 md:pb-6">
              <p className="theme-accent text-[0.68rem] uppercase tracking-[0.32em]">Opening</p>
              <h1 className="theme-heading mt-5 text-5xl font-semibold leading-[0.98] md:text-7xl">
                {propertyProfile.name}: the region&apos;s most kinetic destination for retail, culture, and brand
                moments.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-200">{propertyProfile.positioning}</p>
            </div>
            <div className="section-shell relative min-h-64 overflow-hidden rounded-xl border border-zinc-800/40 md:min-h-[24rem]">
              <video
                src={heroVisionaryVideo}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </section>

        <section id="why-property" className={`${sectionClass} min-h-[82vh] !p-0 overflow-hidden`}>
          <div className="relative h-52 w-full shrink-0 sm:h-60 md:h-72">
            <video
              src={whyPropertyAmbientVideo}
              className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
            <div className="absolute inset-0 bg-black/55" aria-hidden />
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950"
              aria-hidden
            />
          </div>
          <div className="px-6 py-10 md:px-10 md:py-14">
            <p className={chapterLabel}>Why this property</p>
            <h2 className={chapterTitle}>Scale that translates to commercial outcomes.</h2>
            <p className={chapterBody}>{propertyProfile.region}</p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {headlineStats.map((stat) => (
                <article key={stat.label} className="text-center">
                  <p className="theme-heading text-4xl font-semibold md:text-5xl">{stat.value}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">{stat.label}</p>
                  <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent" />
                </article>
              ))}
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                { label: 'Location', line: whyProperty.location[0] },
                { label: 'Access', line: whyProperty.access[0] },
                { label: 'Regional reach', line: whyProperty.regionalReach[0] }
              ].map((item) => (
                <article key={item.label} className="section-shell rounded-xl bg-zinc-950/40 p-5">
                  <p className="theme-accent text-[0.68rem] uppercase tracking-[0.22em]">{item.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.line}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="retail" className={`${sectionClass} min-h-[74vh]`}>
          <p className={chapterLabel}>Retail</p>
          <h2 className={chapterTitle}>A merchandising mix built for volume and flagship ambition.</h2>
          <p className={chapterBody}>
            Existing anchors establish daily traffic while curated leasing paths unlock premium growth categories.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="section-shell rounded-xl bg-zinc-950/40 p-6">
              <p className="theme-accent text-[0.68rem] uppercase tracking-[0.22em]">Anchor lineup</p>
              <div className="relative mt-6 overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-zinc-950/95 to-transparent md:w-20"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-zinc-950/95 to-transparent md:w-20"
                  aria-hidden
                />
                <div className="brand-marquee-track flex w-max items-center gap-10 md:gap-14">
                  {anchorLogoTrack.map((logo, index) => (
                    <div
                      key={`${logo.name}-${index}`}
                      className="flex h-16 w-[7.5rem] shrink-0 items-center justify-center md:h-20 md:w-[9rem]"
                      aria-hidden={index >= anchorLogoItems.length}
                    >
                      <Image src={logo.src} alt={logo.name} className={`${logo.widthClass} h-auto object-contain`} />
                    </div>
                  ))}
                </div>
              </div>
            </article>
            <article className="section-shell rounded-xl bg-zinc-950/40 p-6">
              <p className="theme-accent text-[0.68rem] uppercase tracking-[0.22em]">Growth trajectory</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
                {retailStory.trajectory.slice(0, 2).map((line) => (
                  <li key={line}>- {line}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <LuxuryShowcase />

        <section id="dining" className={`${sectionClass} min-h-[74vh]`}>
          <p className={chapterLabel}>Dining &amp; lifestyle</p>
          <h2 className={chapterTitle}>Food-led dwell time that extends day into night.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {diningLifestyle.map((line) => (
              <article key={line} className="section-shell rounded-xl bg-zinc-950/35 p-5">
                <p className="text-sm leading-relaxed text-zinc-300">{line}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="attractions" className={`${sectionClass} min-h-[74vh]`}>
          <p className={chapterLabel}>Attractions &amp; entertainment</p>
          <h2 className={chapterTitle}>Destination experiences that no standard mall can replicate.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {attractions.map((item, index) => {
              const visual = attractionVisuals[item];

              return (
                <article
                  key={item}
                  className="group deck-fade-up relative"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="section-shell relative h-[23rem] overflow-hidden rounded-2xl bg-zinc-900">
                    {visual ? (
                      <Image
                        src={visual.image}
                        alt={item}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : null}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
                      aria-hidden
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-zinc-300">
                        {visual?.caption ?? 'Destination attraction'}
                      </p>
                      <p className="theme-heading mt-3 text-2xl leading-tight">{item}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="events" className={`${sectionClass} min-h-[84vh]`}>
          <p className={chapterLabel}>Events &amp; platform</p>
          <h2 className={chapterTitle}>A programmable venue ecosystem for sponsors and producers.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {eventsPlatform.moments.map((event) => (
              <article key={event} className="section-shell rounded-xl bg-zinc-950/35 p-6">
                <p className="theme-heading text-xl">{event}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-4">
            {eventsPlatform.venues.slice(0, 2).map((line) => (
              <article key={line} className="section-shell rounded-xl bg-zinc-950/35 p-5">
                <p className="text-sm leading-relaxed text-zinc-300">{line}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="cta" className={`${sectionClass} mb-8 min-h-[58vh] text-center`}>
          <p className={chapterLabel}>Commercial pathways</p>
          <h2 className="theme-heading mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Leasing. Sponsorship. Events.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            One destination platform for long-term tenancy, high-impact partnerships, and headline programming.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: 'Leasing', note: 'Luxury, flagship, and selective pop-up modules.' },
              { title: 'Sponsorships', note: 'Tiered activations tied to audience and seasonality.' },
              { title: 'Events', note: 'Concerts, conventions, and launch-scale productions.' }
            ].map((path) => (
              <article key={path.title} className="section-shell rounded-xl bg-zinc-950/35 px-5 py-5 text-left">
                <p className="theme-heading text-lg font-semibold">{path.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{path.note}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
