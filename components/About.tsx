const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight text-readable-strong">
            About
          </h2>
          <div className="space-y-5 text-white text-xl leading-relaxed text-readable-strong">
            <p>
              I&apos;m a full-stack developer who likes turning ideas into
              working products.
            </p>
            <p>
              I work with React, Node, Python, and SQL; I care about clean
              code, clear UX, and shipping things that work.
            </p>
            <p>
              Currently finishing up my degree in Computer Science at Western Governors University and actively seeking internship opportunities.
            </p>
            <p className="text-white font-medium">
              Located in Orlando, Florida. Open to full-time and contract opportunities. Let&apos;s build
              something.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
