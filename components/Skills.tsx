const skills = [
  "React",
  "Next.js",
  "Node.js",
  "AI/ML",
  "Express.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "MongoDB",
  "MySQL",
  "SQL",
  "AWS",
  "Handlebars.js",
  "HTML & CSS",
  "Tailwind CSS",
  "Git",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-center font-[family-name:var(--font-heading)]">
          Skills & tech
        </h2>
        <p className="text-white/90 text-xl mb-12 text-readable text-center max-w-2xl mx-auto">
          Technologies and tools I work with.
        </p>
        <ul className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <li key={skill}>
              <span className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-base font-medium text-white/90 text-readable backdrop-blur-sm">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
