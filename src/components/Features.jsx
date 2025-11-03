import React from 'react';
import { Shield, Folder, MessageSquare, Mic, Cloud, Languages, ArrowRight } from 'lucide-react';

const features = [
  {
    Icon: Shield,
    title: 'Secure Authentication',
    description: 'Email/password and Google sign-in ensure your case files stay private.',
  },
  {
    Icon: Folder,
    title: 'Case Management',
    description: 'Organize matters, upload documents, and track progress with ease.',
  },
  {
    Icon: MessageSquare,
    title: 'AI Chat & Mock Hearings',
    description: 'Practice against AI magistrates and opposition for realistic preparation.',
  },
  {
    Icon: Mic,
    title: 'Voice-Enabled',
    description: 'Speak your arguments, get live captions, and distinct AI voices in-session.',
  },
  {
    Icon: Cloud,
    title: 'Smart Storage',
    description: 'Offline-ready with IndexedDB; seamless sync to the cloud when online.',
  },
  {
    Icon: Languages,
    title: 'Multi-Lingual',
    description: 'Available in English, Hindi, Tamil, Telugu, Malayalam and Kannada.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Core Features</h2>
          <p className="mt-3 text-slate-600">Everything you need to rehearse like a pro.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {features.map(({ Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B3D91]/5 ring-1 ring-[#0B3D91]/10">
                  <Icon className="h-6 w-6 text-[#0B3D91]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0B3D91] opacity-0 transition group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </div>

              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.18),transparent_60%)] opacity-0 transition duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>

      {/* Background accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-24 bg-gradient-to-b from-[#0B3D91]/5 to-transparent" />
    </section>
  );
}
