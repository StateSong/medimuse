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
      {/* Background Video - contained width */}
      <div className="absolute inset-0 flex justify-end">
        <div className="relative w-full max-w-4xl h-full">
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
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        
        {/* Animated glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] pulse-gentle" />
      </div>

      {/* Replay Button */}
      {videoEnded && (
        <button
          onClick={handleReplay}
          className="absolute top-1/2 right-[25%] -translate-y-1/2 z-20 flex items-center justify-center w-20 h-20 rounded-full bg-primary/80 hover:bg-primary transition-all duration-300 hover:scale-110 shadow-xl shadow-primary/30"
        >
          <Play size={32} className="text-primary-foreground ml-1" />
        </button>
      )}

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-xl text-left">
          {/* Subheadline - 2 lines */}
          <p className="fade-in-up delay-100 text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            StateSong® translates your biometric data into <span className="text-foreground">endogenous music</span> — personalized compositions from within, designed to entrain your mind and body into optimal states.
          </p>

          {/* Waveform */}
          <div className="fade-in-up delay-200 mb-10 max-w-xl">
            <WaveformVisualizer isPlaying={true} barCount={60} className="opacity-60" />
          </div>

          {/* CTA Buttons - single line, bottom aligned */}
          <div className="fade-in-up delay-300 flex items-end gap-4">
            <a
              href="#samples"
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 whitespace-nowrap"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Experience StateSong
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-border text-foreground rounded-full font-medium hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300 whitespace-nowrap"
            >
              Learn More
            </a>
            <a 
              href="#about" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
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
