import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-12 sm:pt-16 lg:pt-20">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0B3D91]/20 bg-[#0B3D91]/5 px-3 py-1 text-xs font-medium text-[#0B3D91]">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#0B3D91]" />
          AI mock courtroom for lawyers
        </div>

        <div className="mt-6 grid items-center gap-10 lg:mt-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Rehearse Hearings with an AI Bench
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-slate-600">
              Practice arguments with lifelike AI magistrates and opposition, get instant feedback, and walk into court fully prepared.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0B3D91] px-5 py-3 font-semibold text-white shadow-sm ring-1 ring-[#0B3D91]/30 transition hover:translate-y-[-1px] hover:shadow-md"
              >
                <Rocket className="h-5 w-5" />
                Get Early Access
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                <Play className="h-5 w-5" />
                See Features
              </a>
            </div>

            {/* Social proof mini */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                Trusted by 200+ early users
              </div>
              <div className="hidden h-4 w-px bg-slate-200 sm:block" />
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-amber-500" />
                Private beta — invite only
              </div>
            </div>
          </div>

          <div className="relative h-[440px] w-full rounded-2xl border border-slate-200/70 bg-white/60 shadow-sm backdrop-blur">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Glow overlay - make sure it doesn't block interactions */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl" aria-hidden>
              <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.20),rgba(245,166,35,0.10)_60%,transparent_75%)] blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient seam */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B3D91]/5 to-transparent" />
    </section>
  );
}
