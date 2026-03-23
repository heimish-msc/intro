import { Camera, Music, UserRound } from 'lucide-react';

interface LandingContentProps {
  onNavigate: (target: string) => void;
}

const HERO_VIDEO_SRC = '/src/hero.mp4';

export function LandingContent({ onNavigate }: LandingContentProps) {
  return (
    <section className="landing-content">
      <div className="landing-hero">
        <video
          className="landing-hero-video"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Landing hero background video"
        />
      </div>

      <div className="landing-feature-grid">
        <button type="button" className="landing-feature-card" onClick={() => onNavigate('Education')}>
          <UserRound className="landing-feature-icon" aria-hidden="true" />
          <h2>Education</h2>
        </button>
        <button type="button" className="landing-feature-card" onClick={() => onNavigate('Classical')}>
          <Music className="landing-feature-icon" aria-hidden="true" />
          <h2>Works</h2>
        </button>
        <button type="button" className="landing-feature-card" onClick={() => onNavigate('Photography')}>
          <Camera className="landing-feature-icon" aria-hidden="true" />
          <h2>Photography</h2>
        </button>
      </div>
    </section>
  );
}
