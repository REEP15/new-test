'use client';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { luxuryBrandOrder, luxuryImageBySlug } from '@/components/luxury/luxuryAssets';
import attractionDining from '@/ref_img2/Culinary boulevard with destination dining.png';
import attractionFamily from '@/ref_img2/Immersive family entertainment district.png';
import attractionCinema from '@/ref_img2/Multi-screen premium cinema complex.png';
import attractionSeasonal from '@/ref_img2/Seasonal interactive installations.png';
import adidasIcon from '@/ref_icon/adidas_icon.png';
import ckIcon from '@/ref_icon/ck_icon.jpeg';
import hmIcon from '@/ref_icon/h&m_icon.jpeg';
import levisIcon from '@/ref_icon/levi_icon.jpeg';
import nikeIcon from '@/ref_icon/nike_icon.jpeg';
import tommyIcon from '@/ref_icon/tommy_icon.jpeg';
import uniqloIcon from '@/ref_icon/uniqlo_icon.jpeg';
import zaraIcon from '@/ref_icon/zara_icon.jpeg';
import bkIcon from '@/ref_iconfood/bk_icon.png';
import dominosIcon from '@/ref_iconfood/dominos_icon.jpeg';
import kfcIcon from '@/ref_iconfood/kfc_icon.png';
import mcdIcon from '@/ref_iconfood/mcd_icon.png';
import pizzaHutIcon from '@/ref_iconfood/pizzahut_icon.png';
import starbucksIcon from '@/ref_iconfood/starbucks_icon.jpeg';
import subwayIcon from '@/ref_iconfood/subway_icon.png';
import appleIcon from '@/ref_iconelectronics/apple_icon.png';
import boseIcon from '@/ref_iconelectronics/bose_icon.jpeg';
import dysonIcon from '@/ref_iconelectronics/dyson_icon.png';
import huaweiIcon from '@/ref_iconelectronics/huawei_icon.jpeg';
import oneplusIcon from '@/ref_iconelectronics/oneplus_icon.jpeg';
import redmiIcon from '@/ref_iconelectronics/redmi_icon.jpeg';
import samsungIcon from '@/ref_iconelectronics/samsung_icon.jpeg';
import sonyIcon from '@/ref_iconelectronics/sony_icon.jpeg';
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
const preIntroDeckVideo = '/ref_preintro/pixelbin-video (1).mp4';
const introDeckVideo = '/ref_intro/the-modern-mall-experience-720p_sdXBGcNw-ezremove.mp4';

const slideLabels = ['Opening', 'Why', 'Retail', 'Luxury', 'Dining', 'Entertainment', 'Events', 'CTA'];
const slideAccentColors = ['#f6f2ea', '#78d0ff', '#f5d86c', '#d6b36a', '#9fe0c0', '#ff8d6c', '#8db7ff', '#ffffff'];

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
  { name: 'Uniqlo', src: uniqloIcon, widthClass: 'w-16 md:w-20' },
  { name: 'Levi', src: levisIcon, widthClass: 'w-20 md:w-24' },
  { name: 'Tommy Hilfiger', src: tommyIcon, widthClass: 'w-24 md:w-28' },
  { name: 'Calvin Klein', src: ckIcon, widthClass: 'w-20 md:w-24' }
];

const foodLogoItems: { name: string; src: StaticImageData; widthClass: string }[] = [
  { name: 'Burger King', src: bkIcon, widthClass: 'w-20 md:w-24' },
  { name: 'Dominos', src: dominosIcon, widthClass: 'w-20 md:w-24' },
  { name: 'KFC', src: kfcIcon, widthClass: 'w-16 md:w-20' },
  { name: 'McDonalds', src: mcdIcon, widthClass: 'w-20 md:w-24' },
  { name: 'Pizza Hut', src: pizzaHutIcon, widthClass: 'w-20 md:w-24' },
  { name: 'Starbucks', src: starbucksIcon, widthClass: 'w-24 md:w-28' },
  { name: 'Subway', src: subwayIcon, widthClass: 'w-20 md:w-24' }
];

const electronicsLogoItems: { name: string; src: StaticImageData; widthClass: string }[] = [
  { name: 'Apple', src: appleIcon, widthClass: 'w-16 md:w-20' },
  { name: 'Bose', src: boseIcon, widthClass: 'w-20 md:w-24' },
  { name: 'Dyson', src: dysonIcon, widthClass: 'w-20 md:w-24' },
  { name: 'Huawei', src: huaweiIcon, widthClass: 'w-20 md:w-24' },
  { name: 'OnePlus', src: oneplusIcon, widthClass: 'w-20 md:w-24' },
  { name: 'Redmi', src: redmiIcon, widthClass: 'w-20 md:w-24' },
  { name: 'Samsung', src: samsungIcon, widthClass: 'w-24 md:w-28' },
  { name: 'Sony', src: sonyIcon, widthClass: 'w-20 md:w-24' }
];

const anchorLogoTrack = [...anchorLogoItems, ...anchorLogoItems];
const foodLogoTrack = [...foodLogoItems, ...foodLogoItems];
const electronicsLogoTrack = [...electronicsLogoItems, ...electronicsLogoItems];
const luxurySlidePairs = [
  ['louis_vuitton', 'burberry'],
  ['gucci', 'cartier'],
  ['prada', 'dior']
] as const;

const slideShell = 'relative h-screen w-full flex-none overflow-hidden bg-[#050505]';
const glassPanel = 'section-shell rounded-[2rem] border border-white/10 bg-black/38 p-6 backdrop-blur-xl md:p-10';

export function SalesDeck() {
  const [hasEntered, setHasEntered] = useState(false);
  const [hasStartedIntro, setHasStartedIntro] = useState(false);
  const [introEnded, setIntroEnded] = useState(false);
  const [introMuted, setIntroMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [enteredSlide, setEnteredSlide] = useState<number | null>(null);
  const [showLuxuryIntro, setShowLuxuryIntro] = useState(false);
  const [fadeLuxuryIntro, setFadeLuxuryIntro] = useState(false);
  const [luxuryPairStates, setLuxuryPairStates] = useState([0, 0, 0]);
  const [luxuryHoveredCard, setLuxuryHoveredCard] = useState<number | null>(null);
  const [heroLoopFading, setHeroLoopFading] = useState(false);
  const [whyLoopFading, setWhyLoopFading] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const preIntroVideoRef = useRef<HTMLVideoElement | null>(null);
  const introVideoRef = useRef<HTMLVideoElement | null>(null);
  const whyVideoRef = useRef<HTMLVideoElement | null>(null);
  const luxuryIntervalRefs = useRef<(ReturnType<typeof setInterval> | null)[]>([null, null, null]);

  const totalSlides = slideLabels.length;

  const luxuryCards = useMemo(
    () =>
      luxurySlidePairs.map((pair, index) => {
        const activeSlug = pair[luxuryPairStates[index]];
        const brand = luxuryBrandOrder.find((entry) => entry.slug === activeSlug)!;
        const images = luxuryImageBySlug[brand.slug];

        return {
          ...brand,
          image: images.primary,
          secondaryImage: images.secondary
        };
      }),
    [luxuryPairStates]
  );

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousTouchAction = body.style.touchAction;

    root.setAttribute('data-theme', hasEntered && currentSlide === 3 ? 'luxury' : 'default');
    body.style.overflow = 'hidden';
    body.style.touchAction = 'none';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        if (!hasEntered) {
          if (introEnded) {
            setHasEntered(true);
          }
          return;
        }
        setCurrentSlide((value) => Math.min(value + 1, totalSlides - 1));
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (!hasEntered) {
          return;
        }
        setCurrentSlide((value) => Math.max(value - 1, 0));
      }
    };

    const stopScroll = (event: WheelEvent | TouchEvent) => {
      event.preventDefault();
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('wheel', stopScroll, { passive: false });
    window.addEventListener('touchmove', stopScroll, { passive: false });

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('wheel', stopScroll);
      window.removeEventListener('touchmove', stopScroll);
      body.style.overflow = previousOverflow;
      body.style.touchAction = previousTouchAction;
      root.setAttribute('data-theme', 'default');
    };
  }, [currentSlide, hasEntered, totalSlides]);

  useEffect(() => {
    if (!hasEntered) {
      setEnteredSlide(null);
      return;
    }

    setEnteredSlide(null);

    const timeoutId = window.setTimeout(() => {
      setEnteredSlide(currentSlide);
    }, 720);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [currentSlide, hasEntered]);

  useEffect(() => {
    if (!hasEntered || currentSlide !== 3) {
      setShowLuxuryIntro(false);
      setFadeLuxuryIntro(false);
      return;
    }

    setShowLuxuryIntro(true);
    setFadeLuxuryIntro(false);

    const fadeTimeoutId = window.setTimeout(() => {
      setFadeLuxuryIntro(true);
    }, 1200);

    const removeTimeoutId = window.setTimeout(() => {
      setShowLuxuryIntro(false);
      setFadeLuxuryIntro(false);
    }, 1850);

    return () => {
      window.clearTimeout(fadeTimeoutId);
      window.clearTimeout(removeTimeoutId);
    };
  }, [currentSlide, hasEntered]);

  useEffect(() => {
    const introVideo = introVideoRef.current;
    const preIntroVideo = preIntroVideoRef.current;

    if (preIntroVideo && !hasEntered && !hasStartedIntro) {
      preIntroVideo.muted = true;
    }

    if (!introVideo || hasEntered) {
      return;
    }

    introVideo.muted = introMuted;
  }, [hasEntered, hasStartedIntro, introMuted]);

  useEffect(() => {
    const heroVideo = heroVideoRef.current;

    if (!heroVideo) {
      return;
    }

    const trimHeroLoop = () => {
      if (!heroVideo.duration || Number.isNaN(heroVideo.duration)) {
        return;
      }

      if (heroVideo.currentTime >= heroVideo.duration - 8.35) {
        setHeroLoopFading(true);
      }

      if (heroVideo.currentTime >= heroVideo.duration - 8) {
        heroVideo.currentTime = 0.1;
        void heroVideo.play().catch(() => {});
        window.setTimeout(() => {
          setHeroLoopFading(false);
        }, 220);
      }
    };

    heroVideo.addEventListener('timeupdate', trimHeroLoop);

    return () => {
      heroVideo.removeEventListener('timeupdate', trimHeroLoop);
    };
  }, [hasEntered]);

  useEffect(() => {
    const whyVideo = whyVideoRef.current;

    if (!whyVideo) {
      return;
    }

    const smoothAmbientLoop = () => {
      if (!whyVideo.duration || Number.isNaN(whyVideo.duration)) {
        return;
      }

      if (whyVideo.currentTime >= whyVideo.duration - 0.55) {
        setWhyLoopFading(true);
      }
    };

    const replayAmbientVideo = () => {
      setWhyLoopFading(true);
      window.setTimeout(() => {
        whyVideo.currentTime = 0.04;
        void whyVideo.play().catch(() => {});
        window.setTimeout(() => {
          setWhyLoopFading(false);
        }, 200);
      }, 120);
    };

    whyVideo.addEventListener('timeupdate', smoothAmbientLoop);
    whyVideo.addEventListener('ended', replayAmbientVideo);

    return () => {
      whyVideo.removeEventListener('timeupdate', smoothAmbientLoop);
      whyVideo.removeEventListener('ended', replayAmbientVideo);
    };
  }, [hasEntered]);

  useEffect(() => {
    return () => {
      luxuryIntervalRefs.current.forEach((intervalId) => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      });
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)));
  };

  const goToNextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const goToPreviousSlide = () => {
    goToSlide(currentSlide - 1);
  };

  const isActiveSlide = (index: number) => currentSlide === index;
  const hasSlideEntered = (index: number) => enteredSlide === index;

  const startLuxuryCycle = (index: number) => {
    setLuxuryHoveredCard(index);

    if (luxuryIntervalRefs.current[index]) {
      return;
    }

    luxuryIntervalRefs.current[index] = setInterval(() => {
      setLuxuryPairStates((state) => {
        const next = [...state];
        next[index] = next[index] === 0 ? 1 : 0;
        return next;
      });
    }, 1400);
  };

  const stopLuxuryCycle = (index: number) => {
    setLuxuryHoveredCard((value) => (value === index ? null : value));

    if (luxuryIntervalRefs.current[index]) {
      clearInterval(luxuryIntervalRefs.current[index]!);
      luxuryIntervalRefs.current[index] = null;
    }
  };

  const startIntroExperience = () => {
    const introVideo = introVideoRef.current;

    setHasStartedIntro(true);
    setIntroEnded(false);

    if (introVideo) {
      introVideo.currentTime = 0;
      introVideo.muted = introMuted;
      void introVideo.play().catch(() => {});
    }

    window.setTimeout(() => {
      preIntroVideoRef.current?.pause();
    }, 900);
  };

  if (!hasEntered) {
    return (
      <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#050505] text-white">
        <video
          ref={preIntroVideoRef}
          src={preIntroDeckVideo}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[800ms] ease-out ${
            hasStartedIntro ? 'opacity-0' : 'opacity-100'
          }`}
          autoPlay
          playsInline
          muted
          preload="auto"
        />
        <video
          ref={introVideoRef}
          src={introDeckVideo}
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1000ms] ease-out ${
            hasStartedIntro ? 'scale-100 opacity-100' : 'scale-[1.05] opacity-0'
          }`}
          autoPlay={hasStartedIntro}
          playsInline
          muted={introMuted}
          preload="auto"
          onEnded={() => setIntroEnded(true)}
        />
        <div
          className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.52))] transition-opacity duration-[900ms] ease-out ${
            hasStartedIntro ? 'opacity-100' : 'opacity-70'
          }`}
        />
        {!hasStartedIntro ? (
          <div className="absolute inset-x-0 bottom-[16vh] z-10 flex justify-center px-6">
            <button
              type="button"
              onClick={startIntroExperience}
              className="rounded-full border border-white/20 bg-white/12 px-8 py-4 text-sm font-medium tracking-[0.18em] text-white backdrop-blur-xl transition duration-300 ease-out hover:scale-[1.05] hover:bg-white/18 hover:shadow-[0_0_30px_rgba(255,255,255,0.22)] active:scale-[0.97]"
            >
              Start Experience
            </button>
          </div>
        ) : introEnded ? (
          <div className="relative z-10 flex w-full items-center justify-center px-6">
            <button
              type="button"
              onClick={() => setHasEntered(true)}
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.26em] text-black shadow-[0_0_0_rgba(255,255,255,0)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(255,255,255,0.45)]"
            >
              Start deck
            </button>
          </div>
        ) : (
          <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setIntroEnded(true);
                if (introVideoRef.current) {
                  introVideoRef.current.pause();
                }
              }}
              className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
            >
              Skip intro
            </button>
            <button
              type="button"
              onClick={() => setIntroMuted((value) => !value)}
              className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
            >
              {introMuted ? 'Unmute audio' : 'Mute audio'}
            </button>
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="relative h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,179,106,0.1),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%)]" />

      <div className="absolute left-4 right-4 top-6 z-40 flex items-center justify-between md:left-8 md:right-8">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/45 px-3 py-3 backdrop-blur-xl">
          <button
            type="button"
            onClick={goToPreviousSlide}
            disabled={currentSlide === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-2xl text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goToNextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-2xl text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Next slide"
          >
            ›
          </button>
          <div
            className="slide-accent-bar ml-2 h-2.5 w-28 rounded-full"
            style={{ ['--slide-accent' as string]: slideAccentColors[currentSlide] }}
            aria-hidden
          />
        </div>
        <div className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[0.68rem] uppercase tracking-[0.34em] text-zinc-300 backdrop-blur-xl">
          Digideck presentation
        </div>
      </div>

      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <section className={slideShell}>
          <video
            ref={heroVideoRef}
            src={heroVisionaryVideo}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            preload="metadata"
          />
          <div
            className={`pointer-events-none absolute inset-0 bg-black transition-opacity duration-200 ${
              heroLoopFading ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(4,4,4,0.85),rgba(4,4,4,0.35)_52%,rgba(4,4,4,0.72))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(255,255,255,0.18),transparent_28%)]" />
          <div className="relative z-10 flex h-full items-center px-6 py-24 md:px-12 lg:px-20">
            <div className="max-w-4xl">
              <p className="theme-accent text-[0.72rem] uppercase tracking-[0.36em]">Opening slide</p>
              <h1 className="theme-heading mt-6 max-w-5xl text-5xl font-semibold leading-[0.92] md:text-7xl xl:text-[5.8rem]">
                {propertyProfile.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-200 md:text-2xl">
                The region&apos;s most kinetic destination for retail, culture, and brand moments.
              </p>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
                {propertyProfile.positioning}
              </p>
            </div>
          </div>
        </section>

        <section className={slideShell}>
          <video
            ref={whyVideoRef}
            src={whyPropertyAmbientVideo}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
          <div
            className={`pointer-events-none absolute inset-0 bg-black transition-opacity duration-200 ${
              whyLoopFading ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.72),rgba(7,7,7,0.88))]" />
          <div className="relative z-10 flex h-full items-center px-6 py-20 md:px-12 lg:px-20">
            <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.9fr]">
              <div
                className={`${glassPanel} deck-pop-panel deck-origin-left ${
                  hasSlideEntered(1) ? 'deck-pop-active' : 'deck-pop-inactive'
                }`}
                style={{ transitionDelay: '40ms' }}
              >
                <p className="theme-accent text-[0.72rem] uppercase tracking-[0.34em]">Why this property</p>
                <h2 className="theme-heading mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                  Scale that translates into commercial outcomes.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-200 md:text-lg">
                  {propertyProfile.region}
                </p>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {headlineStats.map((stat) => (
                    <article key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="theme-heading text-3xl font-semibold md:text-4xl">{stat.value}</p>
                      <p className="mt-2 text-[0.7rem] uppercase tracking-[0.24em] text-zinc-400">{stat.label}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 self-center">
                {[
                  { label: 'Location', line: whyProperty.location[0] },
                  { label: 'Access', line: whyProperty.access[0] },
                  { label: 'Regional reach', line: whyProperty.regionalReach[0] }
                ].map((item, index) => (
                  <article
                    key={item.label}
                    className={`${glassPanel} deck-drop-panel deck-origin-right ${
                      hasSlideEntered(1) ? 'deck-drop-active' : 'deck-drop-inactive'
                    }`}
                    style={{ transitionDelay: `${120 + index * 70}ms` }}
                  >
                    <p className="theme-accent text-[0.68rem] uppercase tracking-[0.28em]">{item.label}</p>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">{item.line}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={slideShell}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(135deg,#070707,#111111)]" />
          <div className="relative z-10 flex h-full items-center px-6 py-20 md:px-12 lg:px-20">
            <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div
                className={`${glassPanel} deck-pop-panel deck-origin-left ${
                  hasSlideEntered(2) ? 'deck-pop-active' : 'deck-pop-inactive'
                }`}
                style={{ transitionDelay: '40ms' }}
              >
                <p className="theme-accent text-[0.72rem] uppercase tracking-[0.34em]">Retail</p>
                <h2 className="theme-heading mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                  Volume anchors with flagship ambition.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
                  Existing anchors establish daily traffic while curated leasing paths unlock premium growth categories.
                </p>
                <div className="relative mt-10 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0b0b0b] to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0b0b0b] to-transparent" />
                  <div
                    className={`brand-marquee-track flex w-max items-center gap-10 md:gap-14 deck-marquee-row ${
                      hasSlideEntered(2) ? 'deck-marquee-top-active' : 'deck-marquee-top-inactive'
                    }`}
                    style={{ transitionDelay: '180ms' }}
                  >
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
                  <div className="mx-auto mt-5 h-px w-[92%] bg-white/10" />
                  <div className="relative mt-5 overflow-hidden">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0b0b0b] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0b0b0b] to-transparent" />
                    <div
                      className={`brand-marquee-track-reverse flex w-max items-center gap-10 md:gap-14 deck-marquee-row ${
                        hasSlideEntered(2) ? 'deck-marquee-middle-active' : 'deck-marquee-middle-inactive'
                      }`}
                      style={{ transitionDelay: '260ms' }}
                    >
                      {foodLogoTrack.map((logo, index) => (
                        <div
                          key={`${logo.name}-food-${index}`}
                          className="flex h-16 w-[7.5rem] shrink-0 items-center justify-center md:h-20 md:w-[9rem]"
                          aria-hidden={index >= foodLogoItems.length}
                        >
                          <Image src={logo.src} alt={logo.name} className={`${logo.widthClass} h-auto object-contain`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mx-auto mt-5 h-px w-[92%] bg-white/10" />
                  <div className="relative mt-5 overflow-hidden">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0b0b0b] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0b0b0b] to-transparent" />
                    <div
                      className={`brand-marquee-track flex w-max items-center gap-10 md:gap-14 deck-marquee-row ${
                        hasSlideEntered(2) ? 'deck-marquee-bottom-active' : 'deck-marquee-bottom-inactive'
                      }`}
                      style={{ transitionDelay: '340ms' }}
                    >
                      {electronicsLogoTrack.map((logo, index) => (
                        <div
                          key={`${logo.name}-electronics-${index}`}
                          className="flex h-16 w-[7.5rem] shrink-0 items-center justify-center md:h-20 md:w-[9rem]"
                          aria-hidden={index >= electronicsLogoItems.length}
                        >
                          <Image src={logo.src} alt={logo.name} className={`${logo.widthClass} h-auto object-contain`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 self-center">
                {retailStory.trajectory.map((line, index) => (
                  <article
                    key={line}
                    className={`${glassPanel} deck-drop-panel deck-origin-right ${
                      hasSlideEntered(2) ? 'deck-drop-active' : 'deck-drop-inactive'
                    }`}
                    style={{ transitionDelay: `${120 + index * 70}ms` }}
                  >
                    <p className="text-sm leading-relaxed text-zinc-300 md:text-base">{line}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={slideShell}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,179,106,0.14),transparent_34%),linear-gradient(180deg,#050505,#090909)]" />
          <div className="luxury-window-glow absolute inset-[18px] rounded-[2.4rem]" aria-hidden />
          {showLuxuryIntro ? (
            <div
              className={`luxury-intro-overlay absolute inset-0 z-30 ${
                fadeLuxuryIntro ? 'luxury-intro-overlay-fade' : 'luxury-intro-overlay-show'
              }`}
              aria-hidden
            >
              <div className="luxury-intro-word">LUXURY</div>
            </div>
          ) : null}
          <div className="relative z-10 flex h-full items-center px-6 py-20 md:px-12 lg:px-20">
            <div className="mx-auto w-full max-w-6xl">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#d6b36a]">Luxury precinct</p>
                <h2 className="theme-heading mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                  A dedicated premium environment.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
                  Investor-grade storytelling built around hero maisons, editorial imagery, and a more rarefied retail cadence.
                </p>
              </div>
              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {luxuryCards.map((brand, index) => (
                  <article
                    key={`${brand.slug}-${index}`}
                    className={`group overflow-hidden rounded-[1.8rem] border border-[rgba(214,179,106,0.24)] bg-[rgba(255,255,255,0.03)] transition duration-500 deck-pop-panel deck-origin-bottom ${
                      hasSlideEntered(3) ? 'deck-pop-active' : 'deck-pop-inactive'
                    } ${luxuryHoveredCard === index ? 'shadow-[0_24px_60px_-26px_rgba(214,179,106,0.65)]' : ''}`}
                    style={{ transitionDelay: `${160 + index * 100}ms` }}
                    onMouseEnter={() => startLuxuryCycle(index)}
                    onMouseLeave={() => stopLuxuryCycle(index)}
                    onFocus={() => startLuxuryCycle(index)}
                    onBlur={() => stopLuxuryCycle(index)}
                  >
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={brand.image}
                        alt={brand.displayName}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className={`object-cover transition duration-[1200ms] ease-out ${
                          luxuryHoveredCard === index ? 'scale-[1.14] -translate-y-3 opacity-0' : 'scale-100 opacity-100'
                        }`}
                      />
                      <Image
                        src={brand.secondaryImage}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className={`object-cover transition duration-[1200ms] ease-out ${
                          luxuryHoveredCard === index ? 'scale-[1.08] opacity-100' : 'scale-100 opacity-0'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6 transition duration-500 group-hover:-translate-y-1">
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d6b36a]">Maison</p>
                        <p className="theme-heading mt-3 text-3xl">{brand.displayName}</p>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-300">{brand.line}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={slideShell}>
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#070707,#121212)]" />
          <div className="relative z-10 flex h-full items-center px-6 py-20 md:px-12 lg:px-20">
            <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr]">
              <div
                className={`${glassPanel} deck-pop-panel deck-origin-left ${
                  hasSlideEntered(4) ? 'deck-pop-active' : 'deck-pop-inactive'
                }`}
                style={{ transitionDelay: '40ms' }}
              >
                <p className="theme-accent text-[0.72rem] uppercase tracking-[0.34em]">Dining &amp; lifestyle</p>
                <h2 className="theme-heading mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                  Food-led dwell time that extends day into night.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-zinc-300 md:text-lg">
                  Daypart programming becomes an all-day engine for spend, social proof, and repeat visitation.
                </p>
              </div>
              <div className="grid gap-4">
                {diningLifestyle.map((line, index) => (
                  <article
                    key={line}
                    className={`${glassPanel} deck-drop-panel deck-origin-right ${
                      hasSlideEntered(4) ? 'deck-drop-active' : 'deck-drop-inactive'
                    }`}
                    style={{ transitionDelay: `${120 + index * 70}ms` }}
                  >
                    <p className="text-sm leading-relaxed text-zinc-300 md:text-base">{line}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={slideShell}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.08),transparent_25%),linear-gradient(135deg,#060606,#101010)]" />
          <div className="relative z-10 flex h-full items-center px-6 py-20 md:px-12 lg:px-20">
            <div className="mx-auto w-full max-w-6xl">
              <div
                className={`mx-auto max-w-3xl text-center deck-pop-panel deck-origin-top ${
                  hasSlideEntered(5) ? 'deck-pop-active' : 'deck-pop-inactive'
                }`}
                style={{ transitionDelay: '40ms' }}
              >
                <p className="theme-accent text-[0.72rem] uppercase tracking-[0.34em]">Entertainment</p>
                <h2 className="theme-heading mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                  Destination experiences that standard malls cannot replicate.
                </h2>
              </div>
              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {attractions.map((item, index) => {
                  const visual = attractionVisuals[item];

                  return (
                    <article
                      key={item}
                      className={`group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] deck-fall-card ${
                        hasSlideEntered(5) ? 'deck-fall-active' : 'deck-fall-inactive'
                      }`}
                      style={{ transitionDelay: `${180 + index * 120}ms` }}
                    >
                      <div className="relative h-64">
                        {visual ? (
                          <Image
                            src={visual.image}
                            alt={item}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition duration-500 ease-out group-hover:scale-[1.08]"
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/34 to-black/10" />
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-zinc-300">
                            {visual?.caption ?? 'Destination attraction'}
                          </p>
                          <p className="theme-heading mt-3 text-2xl leading-tight">{item}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={slideShell}>
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#060606,#121212)]" />
          <div className="relative z-10 flex h-full items-center px-6 py-20 md:px-12 lg:px-20">
            <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
              <div
                className={`${glassPanel} deck-pop-panel deck-origin-left ${
                  hasSlideEntered(6) ? 'deck-pop-active' : 'deck-pop-inactive'
                }`}
                style={{ transitionDelay: '40ms' }}
              >
                <p className="theme-accent text-[0.72rem] uppercase tracking-[0.34em]">Events platform</p>
                <h2 className="theme-heading mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                  A programmable venue ecosystem for sponsors and producers.
                </h2>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {eventsPlatform.moments.map((event) => (
                    <article key={event} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="theme-heading text-xl leading-snug">{event}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 self-center">
                {eventsPlatform.venues.map((line, index) => (
                  <article
                    key={line}
                    className={`${glassPanel} deck-drop-panel deck-origin-right ${
                      hasSlideEntered(6) ? 'deck-drop-active' : 'deck-drop-inactive'
                    }`}
                    style={{ transitionDelay: `${130 + index * 70}ms` }}
                  >
                    <p className="text-sm leading-relaxed text-zinc-300 md:text-base">{line}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={slideShell}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_25%),linear-gradient(180deg,#060606,#0f0f0f)]" />
          <div className="relative z-10 flex h-full items-center justify-center px-6 py-20 md:px-12 lg:px-20">
            <div
              className={`mx-auto max-w-5xl text-center deck-pop-panel deck-origin-bottom ${
                hasSlideEntered(7) ? 'deck-pop-active' : 'deck-pop-inactive'
              }`}
              style={{ transitionDelay: '50ms' }}
            >
              <p className="theme-accent text-[0.72rem] uppercase tracking-[0.34em]">Call to action</p>
              <h2 className="theme-heading mt-6 text-5xl font-semibold leading-[0.94] md:text-7xl">
                Leasing. Sponsorship. Events.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-xl">
                One destination platform for long-term tenancy, high-impact partnerships, and headline programming.
              </p>
              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {[
                  { title: 'Leasing', note: 'Luxury, flagship, and selective pop-up modules.' },
                  { title: 'Sponsorships', note: 'Tiered activations tied to audience and seasonality.' },
                  { title: 'Events', note: 'Concerts, conventions, and launch-scale productions.' }
                ].map((path) => (
                  <article key={path.title} className={glassPanel}>
                    <p className="theme-heading text-xl font-semibold">{path.title}</p>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-300">{path.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl">
        {slideLabels.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'w-10 bg-white' : 'w-2.5 bg-white/35 hover:bg-white/60'
            }`}
            aria-label={`Go to ${label} slide`}
          />
        ))}
      </div>

      {currentSlide === totalSlides - 1 ? (
        <button
          type="button"
          onClick={() => {
            setCurrentSlide(0);
            setHasEntered(false);
          }}
          className="absolute bottom-6 right-6 z-40 rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_0_rgba(255,255,255,0)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(255,255,255,0.45)]"
        >
          End tour
        </button>
      ) : null}
    </main>
  );
}
