import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

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
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity mb-12"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="text-muted-foreground text-sm mt-20">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
