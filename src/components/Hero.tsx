import { useState, useRef } from "react";
import { Play, ChevronDown } from "lucide-react";

const Hero = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setVideoEnded(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Video - left aligned with text */}
      <div className="absolute inset-0 -left-[120px] md:-left-[96px]">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={() => setVideoEnded(true)}
          className="absolute inset-0 w-full h-full object-cover brightness-110"
        >
          <source src="https://medimuse.net/static/media/StateSong_05s.mp4" type="video/mp4" />
        </video>
        {/* Subtle gradient only at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
        
        {/* Animated glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px] pulse-gentle" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-28 flex-1 flex flex-col">
        {/* Top section - StateSong text */}
        <div className="max-w-2xl text-left">
          <p className="fade-in-up text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
            StateSong® translates your biometric data into <span className="text-foreground">endogenous music</span> —
            <br />
            personalized compositions from within, designed to entrain your mind and body into optimal states.
          </p>
        </div>

        {/* Spacer to push buttons to bottom */}
        <div className="flex-1" />

        {/* Bottom section - Buttons */}
        <div className="mb-16">
          {/* CTA Buttons */}
          <div className="fade-in-up delay-200 flex items-center gap-4 mb-8">
            <button
              onClick={handleReplay}
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 whitespace-nowrap"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Play Again
            </button>
            <a
              href="#about"
              className="px-8 py-4 border border-border text-foreground rounded-full font-medium hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300 whitespace-nowrap"
            >
              Learn More
            </a>
            <a
              href="#samples"
              className="px-8 py-4 border border-border text-foreground rounded-full font-medium hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300 whitespace-nowrap"
            >
              Experience StateSong
            </a>
          </div>

          {/* Discover button at very bottom */}
          <div className="fade-in-up delay-300 flex justify-center">
            <a 
              href="#about" 
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm tracking-widest uppercase">Discover</span>
              <ChevronDown size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
