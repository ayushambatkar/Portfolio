import { appConfig } from "@/app_config";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-gradient">
          Experience
        </h2>
        <div className="space-y-12">
          {appConfig.experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted border-2 border-border group-hover:border-primary group-hover:bg-primary transition-colors duration-300" />
              <p className="text-sm text-muted-foreground font-medium mb-1">
                {exp.period}
              </p>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {exp.role}
              </h3>
              <p className="text-primary font-medium mb-3">{exp.company}</p>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
