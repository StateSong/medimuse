import { Watch, Smartphone, Cloud, AudioWaveform } from "lucide-react";

const Technology = () => {
  const steps = [
    {
      number: "01",
      icon: Watch,
      title: "Capture",
      description: "Biometric data from your wearable devices — heart rate, EDA, respiration, movement.",
    },
    {
      number: "02",
      icon: AudioWaveform,
      title: "Transform",
      description: "Our patented algorithms transcode biological signals into musical parameters.",
    },
    {
      number: "03",
      icon: Smartphone,
      title: "Generate",
      description: "StateSong synthesizes personalized compositions reflecting your internal states.",
    },
    {
      number: "04",
      icon: Cloud,
      title: "Entrain",
      description: "Listen to guide yourself into calm, focus, energy, sleep — your best states.",
    },
  ];

  return (
    <section id="technology" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, hsl(var(--primary)) 50px, hsl(var(--primary)) 51px)`,
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            The Technology
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            From Body to Sound
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground text-lg">
            StateSong bridges the gap between your biology and music production, 
            creating a powerful biofeedback loop for wellness and performance.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                  {/* Step number */}
                  <div className="text-6xl font-serif font-bold text-primary/10 absolute top-4 right-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-serif text-xl font-medium mb-3 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 text-primary/40">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-card border border-border rounded-full">
            <span className="text-sm text-muted-foreground">Powered by</span>
            <span className="font-serif text-lg font-medium text-primary">US Patent 10,369,323 B2</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
