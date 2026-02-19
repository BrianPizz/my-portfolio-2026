import { Eye, Download } from "lucide-react";

const RESUME_URL = "/assets/Brian_s_Resume.pdf";

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-white/10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-heading)]">
          Resume
        </h2>
        <p className="text-white/90 text-xl mb-10 text-readable">
          View or download my resume.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-6 py-3.5 text-base font-medium transition-colors hover:bg-gray-200"
          >
            <Eye className="w-5 h-5" />
            View resume
          </a>
          <a
            href={RESUME_URL}
            download="Brian_Pizzimenti_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
