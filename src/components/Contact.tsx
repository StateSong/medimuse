import { Mail, ExternalLink, Github, User } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Contact = () => {
  const [selectedBio, setSelectedBio] = useState<string | null>(null);

  const contacts = [
    {
      name: "Robert Joseph",
      role: "Inventor, Patent Recipient, Evangelist",
      email: "rjoseph@medimuse.net",
      bio: `A graduate of Neuro-Psychology from Stanford University, Robert Joseph worked in the Pediatrics Endocrinology Lab of Stanford Medical School, exploring the hormone systems that control stress, and reproductive and metabolic balance. It was within this context that he observed hormonal activity patterns within patterns and patterns that repeated in phases.

Noting that these were the very definition of musical canons and fugues, Robert envisioned that if we could convert hormonal data into sound, might not endogenous music (created from the inside) be as complex and beautiful as compositions created by Bach? Thus, the notion of StateSong was born, encapsulated in the phrase, "Listen, you're made of music!".

As wearables that captured biometric data began to appear, Robert formulated a startup company, MediMuse, and subsequently acquired the patent for the technology upon which the StateSong platform and applications are built.`,
    },
    {
      name: "Peter J. Slack",
      role: "Technology",
      email: "pslack@medimuse.net",
      bio: `Peter J. Slack, P.Eng., is a licensed professional Engineer based outside of Ottawa, Canada. Aside from practicing engineering, Peter has been studying and playing music since six years of age, and has been actively coding computer software for more than 40 years.

In addition to his role as Chief Engineer at MediMuse, Peter also serves as a senior software engineer at WaveDNA.com, which conducts research, develops, and publishes music software tools.

As Peter began looking for new opportunities to advance his music and coding research, he joined the MediMuse™ team to support, materialize and implement a shared vision with Robert Joseph for StateSong® Technology.`,
    },
  ];

  const links = [
    {
      label: "Empatica E4 Integration",
      url: "https://www.empatica.com/blog/statesong-converting-human-data-to-music-using-the-e4.html",
    },
    {
      label: "StateSong User Guide",
      url: "https://medimuse.net/static/media/StateSongManual.pdf",
    },
    {
      label: "The Big Picture",
      url: "https://medimuse.net/static/media/The_Big_Picture.pdf",
    },
  ];

  const selectedContact = contacts.find((c) => c.name === selectedBio);

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Connect
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Get In Touch
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground text-lg">
            Interested in licensing, partnerships, or joining our open-source community? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact cards */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-medium mb-4">Team Contacts</h3>
            {contacts.map((contact) => (
              <div
                key={contact.email}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <button
                      onClick={() => setSelectedBio(contact.name)}
                      className="font-medium text-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2"
                    >
                      {contact.name}
                      <User className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    </button>
                    <p className="text-sm text-muted-foreground mb-2">{contact.role}</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{contact.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Community */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-medium text-foreground mb-2">Join the Community</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with developers, creatives, and wellness enthusiasts building with StateSong.
              </p>
              <a
                href="mailto:community@medimuse.net?subject=Join the MediMuse Community"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
              >
                <Mail className="w-4 h-4" />
                community@medimuse.net
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-4">Resources</h3>
            <div className="bg-card border border-border rounded-xl divide-y divide-border">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 hover:bg-secondary/50 transition-colors group"
                >
                  <span className="text-foreground">{link.label}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            {/* Open Source */}
            <div className="mt-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium text-foreground">Open Source Access</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                MediMuse offers open-source UI development for techies and creatives to build 
                apps, plugins, and platforms leveraging StateSong technology.
              </p>
              <a
                href="mailto:info@medimuse.net?subject=Open Source Interest"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Dialog */}
      <Dialog open={!!selectedBio} onOpenChange={() => setSelectedBio(null)}>
        <DialogContent className="max-w-lg bg-card">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{selectedContact?.name}</DialogTitle>
            <DialogDescription className="text-primary">
              {selectedContact?.role}
            </DialogDescription>
          </DialogHeader>
          <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
            {selectedContact?.bio}
          </div>
          <a
            href={`mailto:${selectedContact?.email}`}
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline mt-2"
          >
            <Mail className="w-4 h-4" />
            {selectedContact?.email}
          </a>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
