import { FileText } from "lucide-react";

const ResumeSection = () => {
  // Replace this with your actual PDF URL or import
  const resumeUrl = "";

  return (
    <section id="resume" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-gradient">
          Resume
        </h2>

        {resumeUrl ? (
          <div className="glass rounded-2xl overflow-hidden">
            <iframe
              src={resumeUrl}
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
              Upload your PDF and update the <code className="text-primary">resumeUrl</code> in ResumeSection.tsx
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeSection;
