import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-[#0B3D91] sm:text-5xl lg:text-6xl">
              Welcome to Legally AI
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-gray-600">
              Transform how you prepare for legal hearings using AI-powered mock courtrooms.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-md bg-[#0B3D91] px-6 py-3 text-white shadow-md transition hover:shadow-lg"
                style={{ fontWeight: 600 }}
              >
                Get Early Access
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-[#0B3D91]/20 px-6 py-3 text-[#0B3D91] hover:bg-[#0B3D91]/5"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative h-[420px] w-full rounded-2xl border border-slate-200/60 shadow-sm">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft radial glow overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl" aria-hidden>
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.25),rgba(245,166,35,0.12)_60%,transparent_70%)] blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient strip at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B3D91]/5 to-transparent" />
    </section>
  );
}
