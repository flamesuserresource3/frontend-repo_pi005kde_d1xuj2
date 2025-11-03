import React from 'react';

const items = [
  'React + Vite',
  'Tailwind CSS',
  'Lucide Icons',
  'Firebase Auth',
  'Firestore',
  'Cloudflare R2',
  'IndexedDB (Dexie)',
  'Web Speech API',
  'Gemini AI',
];

export default function TechStack() {
  return (
    <section className="relative bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Built With Modern Tech</h2>
          <span className="hidden text-sm text-slate-500 sm:block">Horizontal scroll</span>
        </div>
        <div className="overflow-x-auto">
          <div className="flex w-max gap-3">
            {items.map((it) => (
              <div
                key={it}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur hover:bg-white"
              >
                {it}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-200/40 to-transparent" />
    </section>
  );
}
