import React from 'react';
import { FooterProps } from './types';
import timoImg from '@/assets/images/timo.JPEG';

const Footer: React.FC<FooterProps> = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Work', id: 'addie' },
    { label: 'Migration', id: 'migration' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/amadeodlp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amadeodlp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:amadeodlp@hotmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative z-10">
      {/* Main Footer */}
      <div className="bg-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Brand + socials */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Amadeo de la Peña</h3>
              <p className="text-white/40 text-sm mb-4">Buenos Aires, Argentina</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#00E9C5] transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navLinks.map(({ label, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timo */}
            <div className="flex flex-col items-start">
              <h3 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-4">A note</h3>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                <img
                  src={timoImg}
                  alt="Timo"
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0 border border-white/20"
                />
                <div>
                  <p className="text-white text-sm font-medium mb-0.5">Mention Timo</p>
                  <p className="text-white/50 text-xs leading-relaxed">for a faster reply 🐶</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#502a72] py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="text-white/70 text-sm">
            © {year} Amadeo de la Peña — All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
