import { Heart, Dumbbell, Music2 } from "lucide-react";
import wellnessImage from "@/assets/wellness-listener.jpg";

const UseCases = () => {
  const categories = [
    {
      icon: Heart,
      title: "Health & Wellness",
      color: "from-rose-500/20 to-rose-600/10",
      cases: [
        { song: "CalmSong", description: "Reduces PTSD anxiety and stress" },
        { song: "SleepSong", description: "Coaxes babies and adults into slumber" },
        { song: "LearnSong", description: "Helps ADHD children focus better" },
        { song: "MeditationSong", description: "Deepens meditation practice" },
      ],
    },
    {
      icon: Dumbbell,
      title: "Sports & Fitness",
      color: "from-amber-500/20 to-amber-600/10",
      cases: [
        { song: "2ndWindSong", description: "Pushes runners into their second wind" },
        { song: "TeamSong", description: "Synchronizes rowing and cycling teams" },
        { song: "EnduranceSong", description: "Enhances physical performance" },
        { song: "RecoverySong", description: "Optimizes post-workout recovery" },
      ],
    },
    {
      icon: Music2,
      title: "Music & Entertainment",
      color: "from-primary/20 to-primary/10",
      cases: [
        { song: "EmotionalScore", description: "State-driven music for film & TV" },
        { song: "MovementSong", description: "Dancers create music from motion" },
        { song: "PersonalSong", description: "Your unique endogenous compositions" },
        { song: "GameSong", description: "Immersive integration with gaming" },
      ],
    },
  ];

  return (
    <section id="use-cases" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Applications
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Your States, Your Songs
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground text-lg">
            StateSong technology spans health & wellness, sports & fitness, and music & entertainment — 
            wherever the power of personalized music can transform lives.
          </p>
        </div>

        {/* Featured image */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={wellnessImage}
              alt="Person experiencing wellness through StateSong technology"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          <div className="absolute bottom-8 left-8 right-8">
            <blockquote className="text-xl md:text-2xl font-serif text-foreground italic">
              "StateSong helps me find calm during my most anxious moments."
            </blockquote>
          </div>
        </div>

        {/* Use case categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${category.color} p-8`}>
                <div className="w-14 h-14 rounded-xl bg-background/80 backdrop-blur flex items-center justify-center mb-4">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-medium">{category.title}</h3>
              </div>

              {/* Use cases list */}
              <div className="p-6 space-y-4">
                {category.cases.map((useCase) => (
                  <div key={useCase.song} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{useCase.song}</span>
                      <p className="text-sm text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
