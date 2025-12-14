import { useState, useRef } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import WaveformVisualizer from "./WaveformVisualizer";

interface AudioSample {
  id: string;
  title: string;
  category: string;
  url: string;
}

const AudioSamples = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const samples: AudioSample[] = [
    { id: "sleep", title: "Into Sleep", category: "Wellness", url: "https://medimuse.net/static/media/audio/Into_Sleep.mp3" },
    { id: "hot-water", title: "Into Hot Water", category: "Relaxation", url: "https://medimuse.net/static/media/audio/Into_Hot_Water.mp3" },
    { id: "daydream", title: "Day Dreaming", category: "Relaxation", url: "https://medimuse.net/static/media/audio/Day_Dreaming.mp3" },
    { id: "cool-down", title: "Cool Down", category: "Recovery", url: "https://medimuse.net/static/media/audio/Cool_Down.mp3" },
    { id: "morning", title: "Good Morning", category: "Energy", url: "https://medimuse.net/static/media/audio/Good_Morning.mp3" },
    { id: "afternoon", title: "Good Afternoon", category: "Focus", url: "https://medimuse.net/static/media/audio/Good_Afternoon.mp3" },
    { id: "waking-dream", title: "Waking Dream", category: "Meditation", url: "https://medimuse.net/static/media/audio/Waking_Dream.mp3" },
    { id: "weight-lift", title: "Weight Lift", category: "Strength", url: "https://medimuse.net/static/media/audio/Weight_Lift.mp3" },
  ];

  const togglePlay = (sample: AudioSample) => {
    const audio = audioRefs.current[sample.id];
    
    if (playingId === sample.id) {
      audio?.pause();
      setPlayingId(null);
    } else {
      // Pause any currently playing audio
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId]?.pause();
      }
      audio?.play();
      setPlayingId(sample.id);
    }
  };

  const handleAudioEnd = (sampleId: string) => {
    if (playingId === sampleId) {
      setPlayingId(null);
    }
  };

  return (
    <section id="samples" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Listen Now
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            StateSong Samples
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground text-lg">
            These samples were converted from real biometric data into music using StateSong technology. 
            Experience what your states, moods, and activities can sound like.
          </p>
        </div>

        {/* Audio grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {samples.map((sample) => (
            <div
              key={sample.id}
              className={`group bg-card border rounded-xl p-6 transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                playingId === sample.id 
                  ? "border-primary shadow-lg shadow-primary/10" 
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => togglePlay(sample)}
            >
              {/* Hidden audio element */}
              <audio
                ref={(el) => (audioRefs.current[sample.id] = el)}
                src={sample.url}
                onEnded={() => handleAudioEnd(sample.id)}
                preload="none"
              />

              {/* Play button */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                playingId === sample.id 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary group-hover:bg-primary/10"
              }`}>
                {playingId === sample.id ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-1" />
                )}
              </div>

              {/* Waveform visualization */}
              <div className="h-10 mb-4">
                <WaveformVisualizer 
                  isPlaying={playingId === sample.id} 
                  barCount={20}
                  className="h-full"
                />
              </div>

              {/* Title and category */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-medium text-foreground">{sample.title}</h3>
                  <p className="text-sm text-muted-foreground">{sample.category}</p>
                </div>
                <Volume2 className={`w-4 h-4 mt-1 transition-colors ${
                  playingId === sample.id ? "text-primary" : "text-muted-foreground"
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to create your own StateSong?
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=medimuse.com.statesong"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
          >
            Download the App
          </a>
        </div>
      </div>
    </section>
  );
};

export default AudioSamples;
