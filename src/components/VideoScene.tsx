import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoSceneProps {
  src: string;
  poster?: string;
  loop?: boolean;
  onEnded?: () => void;
  hasAudio?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function VideoScene({
  src,
  poster,
  loop = true,
  onEnded,
  hasAudio = false,
  className = '',
  children,
}: VideoSceneProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            if (videoRef.current && !hasEnded) {
              videoRef.current.preload = 'auto';
              if (!prefersReducedMotion.matches) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                  playPromise.catch((error) => {
                    console.log('Autoplay prevented:', error);
                  });
                }
              }
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasEnded]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleEnded = () => {
    if (!loop) {
      setHasEnded(true);
    }
    if (onEnded) {
      onEnded();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div ref={containerRef} className={`relative w-full h-full min-h-screen overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover z-0"
        playsInline
        muted={isMuted}
        loop={loop}
        preload="none"
        onEnded={handleEnded}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {hasAudio && isVisible && (
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-20 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-all"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      )}
    </div>
  );
}
