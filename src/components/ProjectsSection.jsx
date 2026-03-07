import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { featuredProjects } from "../data/projects";

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured Projects
                </h2>
                <div className="flex flex-col gap-10">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`bg-card rounded-xl border border-border shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} h-full glow-card-hover`}
                        >
                            {/* Image Side */}
                            <div className="md:w-1/2 flex items-center justify-center p-6">
                                <div className="relative overflow-hidden rounded-lg aspect-video w-full bg-white border border-border flex items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_24px_4px_rgba(139,92,246,0.3)]"
                                    />
                                    <div className="absolute inset-0 pointer-events-none rounded-lg group-hover:bg-primary/10 transition-colors duration-300" />
                                </div>
                            </div>
                            {/* Info Side */}
                            <div className="md:w-1/2 flex flex-col justify-center p-6 space-y-4 text-left">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <h3 className="text-2xl font-bold text-primary">
                                        {project.title}
                                    </h3>
                                    {project.difficulty && (
                                        <span className={`px-3 py-0.5 text-xs font-semibold rounded-full border ${project.difficulty === 'Production System'
                                            ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                                            : project.difficulty === 'Advanced'
                                                ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                                                : 'bg-sky-500/15 text-sky-400 border-sky-500/30'
                                            }`}>
                                            {project.difficulty}
                                        </span>
                                    )}
                                </div>
                                <p className="text-muted-foreground">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 py-2">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 pt-4 flex-wrap">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cosmic-button !px-6 !py-2 flex items-center gap-2"
                                    >
                                        <Github className="h-5 w-5" />
                                        Code
                                    </a>
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors flex items-center gap-2 glow-hover"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="flex justify-center mt-14">
                    <a
                        href="/projects"
                        className="group/btn cosmic-button !px-10 !py-4 flex items-center gap-3 text-lg font-semibold"
                    >
                        View All Projects
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
};
