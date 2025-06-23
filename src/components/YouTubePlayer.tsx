
import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

interface YouTubePlayerProps {
  videoId: string;
  className?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, className }) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ytPlayerRef = useRef<any>(null);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Set up intersection observer to detect when video is in view
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
        rootMargin: '0px'
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initializePlayer = () => {
      if (window.YT && window.YT.Player && playerRef.current) {
        ytPlayerRef.current = new window.YT.Player(playerRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: isMobile ? 0 : 1, // Don't autoplay immediately on mobile
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            mute: 1,
            rel: 0,
            showinfo: 0,
            cc_load_policy: 0,
            playsinline: 1,
            enablejsapi: 1
          },
          events: {
            onReady: (event: any) => {
              event.target.mute();
              // Only autoplay immediately on desktop
              if (!isMobile) {
                event.target.playVideo();
              }
            },
            onStateChange: (event: any) => {
              // When video ends, immediately restart it
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0);
                event.target.playVideo();
              }
              // If video is paused, play it again (but not on mobile when not in view)
              if (event.data === window.YT.PlayerState.PAUSED) {
                if (!isMobile || isInView) {
                  event.target.playVideo();
                }
              }
            }
          }
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      if (ytPlayerRef.current) {
        ytPlayerRef.current.destroy();
      }
    };
  }, [videoId, isMobile]);

  // Handle autoplay on scroll for mobile
  useEffect(() => {
    if (isMobile && ytPlayerRef.current && isInView) {
      // Small delay to ensure smooth scrolling
      const timer = setTimeout(() => {
        ytPlayerRef.current.playVideo();
      }, 300);
      
      return () => clearTimeout(timer);
    } else if (isMobile && ytPlayerRef.current && !isInView) {
      // Pause video when it goes out of view on mobile
      ytPlayerRef.current.pauseVideo();
    }
  }, [isInView, isMobile]);

  return (
    <div ref={containerRef} className={className}>
      <div
        ref={playerRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default YouTubePlayer;
