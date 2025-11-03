import React from 'react';
import { Star } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="bg-white">
      {/* Testimonial */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">What Early Users Are Saying</h2>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm">
          <div className="mb-3 flex items-center justify-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-lg italic text-slate-800">
            "Finally, I can rehearse hearings as if I'm in a real courtroom – the AI element is uncanny."
          </p>
          <p className="mt-4 text-right text-sm font-medium text-slate-600">– Advocate S. Ramesh, Chennai</p>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="relative isolate overflow-hidden bg-[#0B3D91]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h3 className="text-2xl font-semibold sm:text-3xl">Ready to Practice Like a Pro?</h3>
            <p className="mt-3 text-white/90">Join the waitlist and get exclusive early access.</p>
            <a
              href="/signup"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-[#0B3D91] shadow-sm ring-1 ring-white/20 transition hover:translate-y-[-1px] hover:shadow-md"
            >
              Join Waitlist
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Footer */}
      <footer className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#0B3D91]/10 text-[#0B3D91]">
            <span className="text-sm font-semibold">LA</span>
          </div>
          <p className="mt-3 text-sm text-slate-500">© 2025 Legally AI. All rights reserved.</p>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm">
            <a href="/privacy" className="text-slate-600 hover:text-[#0B3D91]">Privacy Policy</a>
            <a href="/terms" className="text-slate-600 hover:text-[#0B3D91]">Terms of Use</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
