import React, { useState } from 'react';
import { Instagram, Mail, Menu, X } from 'lucide-react';

interface MobileMenuProps {
  onGalleryChange: (gallery: string) => void;
  activeGallery: string;
}

const SIGNATURE_SRC = new URL('../../signature.png', import.meta.url).href;
const CONTACT_LINKS = {
  email: 'mailto:comp.yeonwoo@gmail.com',
  instagram: 'https://www.instagram.com/heimish_msc/'
};

export function MobileMenu({ onGalleryChange, activeGallery }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleProjectClick = (project: string) => {
    onGalleryChange(project);
    setIsOpen(false);
  };

  const handleSectionClick = (title: string) => {
    if (title === 'PROFILE') {
      onGalleryChange('Profile');
      setIsOpen(false);
    }
    if (title === 'PHOTOGRAPHY') {
      onGalleryChange('Photography');
      setIsOpen(false);
    }
  };

  const handleHomeClick = () => {
    onGalleryChange('Landing');
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white z-50 border-b border-[var(--border-light)]">
        <div className="flex items-center justify-between px-4 pt-[10px] pb-[10px] h-[70px] bg-[var(--bg-primary)]">
          <button type="button" className="logo" onClick={handleHomeClick} aria-label="Go to home">
            <img src={SIGNATURE_SRC} alt="Yeonwoo Seo signature" className="logo-image h-[90px] my-[10px]" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-[rgba(240,238,234,1)] z-40 border-t border-[var(--border-light)]">
          <nav className="p-6 overflow-y-auto h-full w-[700px] mt-7 mb-7">
            {galleries.map((gallery) => (
              <div key={gallery.title} className="mb-8">
                <button
                  type="button"
                  className={`gallery-title mb-3 ${
                    (activeGallery === 'Profile' && gallery.title === 'PROFILE') ||
                    (activeGallery === 'Photography' && gallery.title === 'PHOTOGRAPHY')
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => handleSectionClick(gallery.title)}
                >
                  {gallery.title}
                </button>
                {gallery.projects && (
                  <ul className="space-y-3">
                    {gallery.projects?.map((project) => (
                      <li key={project}>
                        <button
                          onClick={() => handleProjectClick(project)}
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
            <div className="sidebar-contact-icons" aria-label="Contact links">
              <a href={CONTACT_LINKS.email} className="sidebar-contact-link" aria-label="이메일 발송">
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
          </nav>
        </div>
      )}
    </>
  );
}
