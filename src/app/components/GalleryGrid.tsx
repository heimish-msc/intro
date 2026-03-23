import { useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Share2 } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  title: string;
}

export function GalleryGrid({ items, title }: GalleryGridProps) {
  const isWorksCategory = title === 'Classical' || title === 'Pop';
  const isPhotographyCategory = title === 'Photography';
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const revealTargets = root.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [title, items]);

  return (
    <section ref={sectionRef} className="gallery-section">
      <h1 className="page-title scroll-reveal is-visible">{title}</h1>

      {isWorksCategory ? (
        <div className="works-list">
          {items.map((item, index) => {
            const popLinkUrl =
              title === 'Pop' && index === 0
                ? 'https://soundcloud.com/outlier-562958464/nostalgia?si=b86fe89d827f44658bb366d0e775c942&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                : title === 'Pop' && index === 1
                  ? 'https://soundcloud.com/outlier-562958464/summer-in-my-youth?si=565fe02dd4334c2eab333b60fec64135&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                  : undefined;

            return (
              <article
                key={item.id}
                className="works-item scroll-reveal"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
              <div className="works-image-wrap">
                {popLinkUrl ? (
                  <a
                    href={popLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="works-image-link group"
                    aria-label={`${item.title} 재생 링크`}
                  >
                    <ImageWithFallback
                      src={item.imageUrl}
                      alt={item.title}
                      className="works-image"
                    />
                    <div className="works-play-overlay">
                      <Play size={28} className="text-white fill-white/80" aria-hidden="true" />
                    </div>
                  </a>
                ) : (
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.title}
                    className="works-image"
                  />
                )}
              </div>
              <h3 className="works-title">{item.title}</h3>
              <p className="works-description">{item.description ?? '작품 설명을 입력하세요.'}</p>
            </article>
            );
          })}
        </div>
      ) : (
        <div className={`gallery-grid ${isPhotographyCategory ? 'photography-grid' : ''}`}>
        {items.map((item, index) => {
          const isExperienceTextBlock = title === 'Experience' && (index === 1 || index === 2 || index === 5 || index === 6);
          const isExperienceImageBlock = title === 'Experience' && !isExperienceTextBlock;
          const isExperienceLinkImage = title === 'Experience' && (index === 4 || index === 7);
          const experienceLinkUrl =
            title === 'Experience' && index === 4
              ? 'https://product.kyobobook.co.kr/detail/S000216464173'
              : title === 'Experience' && index === 7
                ? 'https://product.kyobobook.co.kr/detail/S000216213889'
                : undefined;
          const experienceImageOverride =
            title === 'Experience' && index === 4
              ? '/src/초급.png'
              : title === 'Experience' && index === 7
                ? '/src/중급.png'
                : item.imageUrl;

          if (isExperienceTextBlock) {
            return (
              <article
                key={item.id}
                className="gallery-grid-item scroll-reveal"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="gallery-media experience-text-card">
                  {index === 1 ? (
                    <>
                      <p className="experience-year-heading">2025</p>
                      <p className="experience-text-description experience-text-preline">
                        {'이화여자대학교 작곡과 1명\n숙명여자대학교 작곡과 1명(장학생)\n단국대학교 작곡과 1명\n목원대학교 음악교육과 1명\n계원예술고등학교 피아노과 1명\n기악과 석사 음악분석 논문 지도'}
                      </p>
                    </>
                  ) : index === 2 ? (
                    <>
                      <p className="experience-year-heading">2026</p>
                      <p className="experience-text-description experience-text-preline">
                        {'국민대학교 작곡과 1명\n이화여자대학교 작곡과 1명\n한국교원대학교 음악교육과 1명'}
                      </p>
                    </>
                  ) : index === 5 ? (
                    <>
                      <h3 className="experience-text-title">ID PIANO 피아노 독학 첫걸음</h3>
                      <p className="experience-text-description">
                        교보문고 POD 주간 베스트 2위 달성
                      </p>
                    </>
                  ) : index === 6 ? (
                    <>
                      <h3 className="experience-text-title">ID PIANO 나에게 주는 음악선물</h3>
                      <p className="experience-text-description">
                        교보문고 POD 월간, 주간 베스트 1위 달성
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="experience-text-label">{item.category}</p>
                      <h3 className="experience-text-title">{item.title}</h3>
                      <p className="experience-text-description">
                        Add your experience details for this section.
                      </p>
                    </>
                  )}
                </div>
              </article>
            );
          }

          return (
            <article
              key={item.id}
              className="gallery-grid-item relative group scroll-reveal"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {isExperienceLinkImage && experienceLinkUrl ? (
                <a href={experienceLinkUrl} target="_blank" rel="noopener noreferrer" aria-label="교보문고 바로가기">
                  <div className="gallery-media">
                    <ImageWithFallback
                      src={experienceImageOverride}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="overlay absolute inset-0 bg-overlay opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                      <div className="text-center flex items-center gap-2 text-white">
                        <Share2 size={18} className="experience-share-icon" aria-hidden="true" />
                        <p className="module-subtitle text-white">교보문고 바로가기</p>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="gallery-media">
                  <ImageWithFallback
                    src={experienceImageOverride}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {!isExperienceImageBlock && !isPhotographyCategory && (
                    <div className="overlay absolute inset-0 bg-overlay opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                      <div className="text-center">
                        <h3 className="module-subtitle text-white mb-2">{item.title}</h3>
                        <p className="caption text-white">{item.category}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
        </div>
      )}
    </section>
  );
}
