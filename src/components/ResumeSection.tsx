import { FileText } from "lucide-react";
import { appConfig } from "@/app_config";

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-gradient">
          Resume
        </h2>

        {appConfig.resumePath ? (
          <div className="glass rounded-2xl overflow-hidden">
            <iframe
              src={appConfig.resumePath}
              title="Resume"
              className="w-full h-[80vh] border-0"
            />
          </div>
        ) : (
          <div className="glass rounded-2xl p-12 text-center">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg mb-2">
              Resume PDF will be displayed here
            </p>
            <p className="text-muted-foreground text-sm">
              Place your PDF in <code className="text-primary">/assets/resume.pdf</code>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeSection;
