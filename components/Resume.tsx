const RESUME_URL = "/assets/Brian_s_Resume.pdf";

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-white/10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
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
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View resume
          </a>
          <a
            href={RESUME_URL}
            download="Brian_Pizzimenti_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
