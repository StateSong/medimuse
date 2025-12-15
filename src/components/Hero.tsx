import { useState, useRef } from "react";
import { Play, ChevronDown } from "lucide-react";
import WaveformVisualizer from "./WaveformVisualizer";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={() => setVideoEnded(true)}
          className="absolute inset-0 w-full h-full object-cover opacity-80 brightness-125"
        >
          <source src="https://medimuse.net/static/media/StateSong_05s.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/80" />
        
        {/* Animated glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pulse-gentle" />
      </div>

      {/* Replay Button */}
      {videoEnded && (
        <button
          onClick={handleReplay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-20 h-20 rounded-full bg-primary/80 hover:bg-primary transition-all duration-300 hover:scale-110 shadow-xl shadow-primary/30"
        >
          <Play size={32} className="text-primary-foreground ml-1" />
        </button>
      )}

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl text-left">
          {/* Badge */}
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Patented Technology • US 10,369,323 B2</span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up delay-100 font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6">
            <span className="text-foreground">Listen...</span>
            <br />
            <span className="text-glow text-primary">You're Made of Music</span>
          </h1>

          {/* Subheadline */}
          <p className="fade-in-up delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            StateSong® translates your biometric data into <span className="text-foreground">endogenous music</span> — 
            personalized compositions from within, designed to entrain your mind and body into optimal states.
          </p>

          {/* Waveform */}
          <div className="fade-in-up delay-300 mb-10 max-w-2xl">
            <WaveformVisualizer isPlaying={true} barCount={60} className="opacity-60" />
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up delay-400 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#samples"
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Experience StateSong
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-border text-foreground rounded-full font-medium hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-up delay-500">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs tracking-widest uppercase">Discover</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
