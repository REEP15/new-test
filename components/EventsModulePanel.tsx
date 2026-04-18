'use client';

import { useId, useState } from 'react';
import type { EventsModuleContent } from '@/data/deckContent';

type Props = {
  content: EventsModuleContent;
};

export function EventsModulePanel({ content }: Props) {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  return (
    <div className="section-shell mt-8 rounded-xl border border-dashed border-zinc-600/80 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="theme-accent text-xs uppercase tracking-[0.24em]">Events module</p>
          <p className="mt-2 max-w-2xl text-sm text-zinc-300">{content.summary}</p>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-full border border-current px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
        >
          {open ? 'Collapse' : 'Expand details'}
        </button>
      </div>
      <div id={panelId} hidden={!open} className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="theme-heading text-sm font-semibold uppercase tracking-[0.12em]">Hosting capabilities</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {content.capabilities.map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="theme-heading text-sm font-semibold uppercase tracking-[0.12em]">Past highlights</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {content.highlights.map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </div>
      </div>
      {open ? (
        <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-zinc-800 pt-6">
          <a
            href="mailto:events@example.com?subject=Event%20booking%20%E2%80%94%20American%20Dream"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            {content.ctaLabel}
          </a>
        </div>
      ) : null}
    </div>
  );
}
