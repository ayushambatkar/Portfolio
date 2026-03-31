import { FileText } from "lucide-react";
import { appConfig } from "@/app_config";

const getResumeEmbedUrl = (resumePath: string) => {
  const driveFilePattern = /drive\.google\.com\/file\/d\/([^/]+)/;
  const match = resumePath.match(driveFilePattern);

  if (match?.[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }

  return resumePath;
};

const ResumeSection = () => {
  const resumeEmbedUrl = appConfig.resumePath ? getResumeEmbedUrl(appConfig.resumePath) : "";

  return (
    <section id="resume" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-gradient">
          Resume
        </h2>

        {resumeEmbedUrl ? (
          <div className="glass rounded-2xl overflow-hidden pt-4">
            <div className="relative w-full aspect-[210/275]">
              <iframe
                src={resumeEmbedUrl}
                title="Resume"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        ) : (
          <div className="glass rounded-2xl p-12 text-center">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg mb-2">
              Resume not available at the moment. Please visit: <br /> <a href={appConfig.resumePath} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {appConfig.resumePath}
              </a>
            </p>
            <p className="text-muted-foreground text-sm">
              <code className="text-primary">{appConfig.resumePath}</code>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeSection;
