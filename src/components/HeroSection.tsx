import avatarPlaceholder from "@/assets/avatar-placeholder.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 animate-fade-up">
          <img
            src={avatarPlaceholder}
            alt="Profile photo"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-2xl shadow-primary/10"
          />
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up [animation-delay:0.1s] opacity-0">
          Hi, I'm <span className="text-gradient">Your Name</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up [animation-delay:0.2s] opacity-0">
          A passionate developer crafting beautiful digital experiences. I build
          things that live on the internet.
        </p>
        <div className="flex items-center justify-center gap-4 animate-fade-up [animation-delay:0.3s] opacity-0">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
