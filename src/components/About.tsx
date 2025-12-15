import { Zap, Heart, Brain, Music } from "lucide-react";
import statesongImage from "@/assets/statesong-biometric-music.jpg";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Biometric Data",
      description: "Capture heart rate, skin conductance, respiration, and more from your smart devices.",
    },
    {
      icon: Music,
      title: "Music Synthesis",
      description: "Transform biological signals directly into personalized musical compositions.",
    },
    {
      icon: Brain,
      title: "Entrainment",
      description: "Listen to your StateSong to guide yourself into calm, focus, sleep, or peak performance.",
    },
    {
      icon: Zap,
      title: "Real-Time",
      description: "Dynamic adaptation to your changing states for an immersive, responsive experience.",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            About StateSong
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Music From Within
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            StateSong® is a patented technology that converts your biological data into 
            <span className="text-foreground"> endogenous music</span> — compositions 
            generated from your own body's rhythms. When you listen to your StateSong, 
            you synchronize with your best self.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-copper">
              <img
                src={statesongImage}
                alt="Biometric data transforming into personalized music - heartbeat and brainwaves flowing into sound waves"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-elevated">
              <div className="text-3xl font-serif font-bold text-primary mb-1">2019</div>
              <div className="text-sm text-muted-foreground">US Patent Granted</div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                How It Works
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike other technologies that merely associate existing music with your moods, 
                <span className="text-primary font-medium"> only StateSong</span> directly 
                synthesizes music from your biometric data — creating truly personal, 
                endogenous compositions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-6 bg-card/50 border border-border/50 rounded-xl hover:border-primary/30 hover:bg-card transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
