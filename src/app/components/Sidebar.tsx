import React from 'react';
import { Instagram, Mail } from 'lucide-react';

interface SidebarProps {
  onGalleryChange: (gallery: string) => void;
  activeGallery: string;
}

const SIGNATURE_SRC = new URL('../../signature.png', import.meta.url).href;
const CONTACT_LINKS = {
  email: 'mailto:comp.yeonwoo@gmail.com',
  instagram: 'https://www.instagram.com/heimish_msc/'
};

export function Sidebar({ onGalleryChange, activeGallery }: SidebarProps) {
  const galleries = [
    {
      title: 'PROFILE',
      projects: ['Education', 'Experience']
    },
    {
      title: 'WORKS',
      projects: ['Classical', 'Pop']
    },
    {
      title: 'PHOTOGRAPHY'
    }
  ];

  return (
    <aside className="sidebar">
      <button
        type="button"
        className="logo"
        onClick={() => onGalleryChange('Landing')}
        aria-label="Go to home"
      >
        <img src={SIGNATURE_SRC} alt="Yeonwoo Seo signature" className="logo-image" />
      </button>
      
      <nav className="navigation">
        {galleries.map((gallery) => (
          <div key={gallery.title} className="sidebar-section">
            <button
              type="button"
              className={`gallery-title ${
                (activeGallery === 'Profile' && gallery.title === 'PROFILE') ||
                (activeGallery === 'Photography' && gallery.title === 'PHOTOGRAPHY')
                  ? 'active'
                  : ''
              }`}
              onClick={() => {
                if (gallery.title === 'PROFILE') onGalleryChange('Profile');
                if (gallery.title === 'PHOTOGRAPHY') onGalleryChange('Photography');
              }}
            >
              {gallery.title}
            </button>
            {gallery.projects && (
              <ul className="sidebar-project-list">
                {gallery.projects?.map((project) => (
                  <li key={project}>
                    <button
                      onClick={() => onGalleryChange(project)}
                      className={`project-title block w-full text-left ${
                        activeGallery === project ? 'active' : ''
                      }`}
                    >
                      {project}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>

      <div className="sidebar-contact-icons" aria-label="Contact links">
        <a
          href={CONTACT_LINKS.email}
          className="sidebar-contact-link"
          aria-label="이메일 발송"
        >
          <Mail size={18} />
        </a>
        <a
          href={CONTACT_LINKS.instagram}
          className="sidebar-contact-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="인스타그램 프로필"
        >
          <Instagram size={18} />
        </a>
      </div>
    </aside>
  );
}
