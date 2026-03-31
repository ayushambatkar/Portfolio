import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { appConfig } from "@/app_config";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gradient">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
          I'm always open to new opportunities and interesting projects. Feel
          free to reach out!
        </p>

        <a
          href={`mailto:${appConfig.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity mb-12"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6">
          {Object.entries(appConfig.socials).map(([key, href]) => {
            const Icon = socialIcons[key as keyof typeof socialIcons];
            if (!Icon) return null;
            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        <p className="text-muted-foreground text-sm mt-20">
          © {new Date().getFullYear()} {appConfig.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
