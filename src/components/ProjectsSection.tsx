import { ExternalLink, Github } from "lucide-react";
import { appConfig } from "@/app_config";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.2] pb-1 mb-16 text-gradient">
          Projects
        </h2>
        <div className="grid gap-6">
          {appConfig.projects.map((project, i) => (
            <div
              key={i}
              className="group glass rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0 mt-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Open live project for ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Open GitHub repository for ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h6 className="font-display text-md font-light text-muted-foreground group-hover:text-foreground transition-colors mb-4">
                {project.subtitle}
              </h6>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                {project.description.map((desc, j) => (
                  <li key={j}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
