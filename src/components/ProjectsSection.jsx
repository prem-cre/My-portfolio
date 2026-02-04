import { Github, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
    const projects = [
        {
            title: "Vibe - A MultiAgent No-code Website Generator",
            description: "An Advanced AI-powered SaaS platform for creating websites using Next.js,tRPC and Inngest for Agent Orchestration. It enables intelligent code generation, background task orchestration of multi-agents, and secure authentication. Featuring a premium, responsive glassmorphic user interface.",
            techStack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Inngest", "Clerk", "Gemini AI", "Tailwind CSS", "E2B Sandbox"],
            githubLink: "https://github.com/prem-cre/Lovable-Advance-SaaS-project",
            demoLink: "https://lovable-advance-saa-s-project.vercel.app/home",
            image: "/winkchat.png"
        },
        {
            title: "CoderBuddy(Lovable-clone-Minverse)",
            description: "CoderBuddy leverages Google Gemini AI and LangGraph's multi-agent architecture to transform text prompts into complete, working applications. Built with FastAPI and Next.js, it orchestrates specialized AI agents to plan, architect, and implement full-stack projects autonomously.",
            techStack: [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",

  "FastAPI",

  "LangChain",
  "LangGraph",
  "Google Gemini AI",

],
            githubLink: "https://github.com/prem-cre/lovable-clone",
            demoLink: "https://lovable-clone-lyart.vercel.app/",
            image: "/safestreets.png"
        },

        
    ];

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My Projects
                </h2>
                <div className="flex flex-col gap-10">
                    {projects.map((project, index) => (
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
                                <h3 className="text-2xl font-bold text-primary">
                                    {project.title}
                                </h3>
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
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors flex items-center gap-2 glow-hover"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

