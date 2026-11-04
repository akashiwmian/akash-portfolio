import React from 'react';
import { personalData } from '../data/portfolioData';

export const socialIcons = [
  {
    name: 'WhatsApp',
    href: personalData.socials.whatsapp,
    color: 'hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10',
    badgeColor: 'bg-[#25D366] text-white',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    )
  },
  {
    name: 'Telegram',
    href: personalData.socials.telegram,
    color: 'hover:text-[#229ED9] hover:border-[#229ED9]/40 hover:bg-[#229ED9]/10',
    badgeColor: 'bg-[#229ED9] text-white',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.536-.195 1.006.128.832.922z" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: personalData.socials.facebook,
    color: 'hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10',
    badgeColor: 'bg-[#1877F2] text-white',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: personalData.socials.instagram,
    color: 'hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10',
    badgeColor: 'bg-[#E1306C] text-white',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: personalData.socials.linkedin,
    color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10',
    badgeColor: 'bg-[#0A66C2] text-white',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    name: 'ResearchGate',
    href: personalData.socials.researchgate,
    color: 'hover:text-[#00CCBB] hover:border-[#00CCBB]/40 hover:bg-[#00CCBB]/10',
    badgeColor: 'bg-[#00CCBB] text-white',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.586 0c-.818 0-1.508.19-2.074.565-.566.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.363 8.363 0 0 0-.083.773c-.015.284-.022.613-.022.986v.44h-2.548c-.966 0-1.758.118-2.378.353-.62.236-1.12.58-1.5 1.034-.38.453-.654 1.02-.821 1.701a7.842 7.842 0 0 0-.251 2.062c0 .822.083 1.54.251 2.155.167.614.436 1.13.806 1.547.37.417.845.733 1.425.95.58.216 1.28.324 2.102.324.717 0 1.342-.084 1.874-.251.533-.168.983-.414 1.35-.74.368-.325.651-.728.85-1.208.199-.48.31-1.03.333-1.65h-4.32v-2.075h7.108v9.42h-2.434v-1.68c-.443.593-.996 1.054-1.658 1.385-.662.33-1.442.496-2.34.496-1.134 0-2.12-.178-2.958-.535-.838-.356-1.534-.875-2.088-1.556-.554-.68-.962-1.52-1.224-2.52A12.78 12.78 0 0 1 5 11.238c0-1.163.14-2.22.42-3.17.28-.95.698-1.77 1.255-2.46.557-.69 1.26-1.22 2.11-1.59.85-.37 1.838-.555 2.964-.555h4.333V3.41c0-.498.05-.904.15-1.218.1-.314.254-.56.463-.738.208-.178.472-.295.792-.352.32-.057.697-.086 1.13-.086.49 0 .97.042 1.44.126.47.084.92.203 1.35.357L24 .214A9.852 9.852 0 0 0 19.586 0z" />
      </svg>
    )
  },
  {
    name: 'Google Scholar',
    href: personalData.socials.scholar,
    color: 'hover:text-[#4285F4] hover:border-[#4285F4]/40 hover:bg-[#4285F4]/10',
    badgeColor: 'bg-[#4285F4] text-white',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
      </svg>
    )
  }
];

export default function SocialLinks({ variant = 'default', className = '' }) {
  if (variant === 'pills') {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {socialIcons.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white border border-nature-border text-nature-text text-xs font-semibold shadow-soft transition-all transform hover:-translate-y-0.5 ${s.color}`}
          >
            {s.svg}
            <span>{s.name}</span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'icons-only') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {socialIcons.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
            className={`w-9 h-9 rounded-xl bg-white border border-nature-border flex items-center justify-center text-nature-text shadow-soft transition-all transform hover:-translate-y-0.5 hover:shadow-card ${s.color}`}
          >
            {s.svg}
          </a>
        ))}
      </div>
    );
  }

  // Default Grid layout with title
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 ${className}`}>
      {socialIcons.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-nature-border text-nature-text shadow-soft hover:shadow-card transition-all transform hover:-translate-y-0.5 ${s.color}`}
        >
          <div className="mb-1.5">{s.svg}</div>
          <span className="text-[11px] font-bold text-center leading-tight">
            {s.name}
          </span>
        </a>
      ))}
    </div>
  );
}

