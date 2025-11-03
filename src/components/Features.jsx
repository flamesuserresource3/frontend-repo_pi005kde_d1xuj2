import React from 'react';
import { Shield, Folder, MessageSquare, Mic, Cloud, Languages } from 'lucide-react';

const features = [
  {
    Icon: Shield,
    title: 'Secure Authentication',
    description: 'Email/password and Google sign-in via Firebase for trusted access.',
  },
  {
    Icon: Folder,
    title: 'Case Management',
    description: 'Create, track and manage legal cases with document uploads and status tracking.',
  },
  {
    Icon: MessageSquare,
    title: 'AI Chat & Mock Hearings',
    description: 'Interact with AI Magistrate, Opposition Counsel and practice your arguments.',
  },
  {
    Icon: Mic,
    title: 'Voice-Enabled Hearing',
    description: 'Switch to voice mode: speak your argument, get live captions and distinct AI voices.',
  },
  {
    Icon: Cloud,
    title: 'Offline & Cloud Storage',
    description: 'Local caching with IndexedDB, cloud sync with Firestore and Cloudflare R2.',
  },
  {
    Icon: Languages,
    title: 'Multi-Language Support',
    description: 'Hearings available in English, Hindi, Tamil, Telugu, Malayalam & Kannada.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-[#0B3D91] sm:text-4xl">Core Features</h2>
          <p className="mt-3 text-gray-600">Everything you need to rehearse like a pro.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {features.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B3D91]/5 ring-1 ring-[#0B3D91]/10">
                  <Icon className="h-6 w-6 text-[#0B3D91]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.15),transparent_60%)] opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
