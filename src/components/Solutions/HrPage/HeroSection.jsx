import React from 'react';

const HeroSection = ({ data }) => {
  const { title, subtitle, media, cta, settings } = data;

  if (!settings.show) return null;

  return (
    <section className={`w-full min-h-screen bg-gradient-to-br from-[#191970] via-black to-blue-700 py-24 md:py-32 text-center flex flex-col items-center justify-center relative overflow-hidden ${settings.animation}`}>
      {/* Background Video */}
      {media.type === 'video' && (
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            onContextMenu={e => e.preventDefault()}
            onDragStart={e => e.preventDefault()}
            onDrop={e => e.preventDefault()}
            className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-[8s] ease-in-out pointer-events-none"
            style={{ 
              filter: 'brightness(0.7) contrast(1.2) saturate(1.3) hue-rotate(10deg)',
              animation: 'video-enhance 20s ease-in-out infinite',
              userSelect: 'none',
              WebkitUserSelect: 'none'
            }}
          >
            <source src={media.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className={`max-w-3xl mx-auto px-4 relative z-10 ${settings.animation}`}>
        <div className="accent-bar mx-auto mb-4" aria-hidden="true"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl">{title}</h1>
        <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg">{subtitle}</p>
        
        <div className="flex gap-4 justify-center">
          {cta.primary && (
            <a href={cta.primary.url} className={`btn ${cta.primary.variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`}>
              {cta.primary.text}
            </a>
          )}
          {cta.secondary && (
            <a href={cta.secondary.url} className="btn btn-outline">
              {cta.secondary.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;