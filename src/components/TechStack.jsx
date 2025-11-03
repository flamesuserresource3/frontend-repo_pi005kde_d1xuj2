import React from 'react';

const items = [
  'React 19 & TypeScript',
  'Vite build tool',
  'Tailwind CSS styling',
  'Google Gemini AI API',
  'Firebase Authentication & Firestore',
  'Cloudflare R2 storage',
  'Dexie.js (IndexedDB wrapper)',
  'Web Speech API',
];

export default function TechStack() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Built With Modern Tech
          </h2>
          <span className="hidden text-sm text-slate-500 sm:block">Horizontal scroll</span>
        </div>
        <div className="overflow-x-auto">
          <div className="flex w-max gap-3">
            {items.map((it) => (
              <div
                key={it}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
              >
                {it}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
