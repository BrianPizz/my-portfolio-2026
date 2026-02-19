import Link from "next/link";
import projects from "@/utils/Projects.js";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-heading)]">
          Projects
        </h2>
        <p className="text-white/90 text-xl mb-14 max-w-2xl text-readable">
          A selection of things I&apos;ve built: full-stack apps and tools.
        </p>

        <ul className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <article
                className="group h-full flex flex-col rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_8px_32px_rgba(0,0,0,0.24)]"
              >
                <div className="relative w-full overflow-hidden bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.imageLink}
                    alt={project.title}
                    className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight font-[family-name:var(--font-heading)]">
                    {project.title}
                  </h3>
                  <p className="text-white/85 text-base leading-relaxed mb-4 flex-1 line-clamp-3 text-readable">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white/90 text-readable">
                    {project.tech1}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white/90 text-readable">
                      {project.tech2}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-white text-gray-900 px-5 py-2.5 text-base font-medium transition-colors hover:bg-gray-200"
                    >
                      Live demo
                    </Link>
                    <Link
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg border border-white/30 bg-transparent px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-white/10"
                    >
                      Code
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
