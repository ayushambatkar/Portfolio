import { ExternalLink } from "lucide-react";
import { appConfig } from "@/app_config";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-gradient">
          Projects
        </h2>
        <div className="grid gap-6">
          {appConfig.projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              className="group glass rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 block"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
