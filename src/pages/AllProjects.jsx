import { useState, useMemo } from "react";
import {
    Github,
    ExternalLink,
    ArrowLeft,
    Search,
    X,
    Layers,
    Sparkles,
} from "lucide-react";
import { allProjects, categories, getCategoryStats } from "../data/projects";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const AllProjects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const stats = getCategoryStats();


    // Category icons mapping
    const categoryIcons = {
        All: "🚀",
        "AI/ML": "🤖",
        Backend: "⚙️",
        DevOps: "🔧",
        "Data Science": "📊",
    };

    // Difficulty color mapping
    const difficultyStyles = {
        "Production System": {
            bg: "bg-emerald-500/15",
            text: "text-emerald-400",
            border: "border-emerald-500/30",
            dot: "bg-emerald-400",
        },
        Advanced: {
            bg: "bg-amber-500/15",
            text: "text-amber-400",
            border: "border-amber-500/30",
            dot: "bg-amber-400",
        },
        Intermediate: {
            bg: "bg-sky-500/15",
            text: "text-sky-400",
            border: "border-sky-500/30",
            dot: "bg-sky-400",
        },
    };

    // Filter projects
    const filteredProjects = useMemo(() => {
        return allProjects.filter((project) => {
            const matchesCategory =
                activeCategory === "All" || project.category === activeCategory;
            const matchesSearch =
                searchQuery === "" ||
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.techStack.some((tech) =>
                    tech.toLowerCase().includes(searchQuery.toLowerCase())
                );
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-background text-foreground relative">
            <StarBackground />
            <ThemeToggle />

            {/* Fixed Back Button */}
            <a
                href="/"
                className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-md border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 group"
            >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="font-medium text-sm">Back to Portfolio</span>
            </a>

            {/* Hero Header */}
            <header className="pt-28 pb-8 px-4 relative">
                <div className="container mx-auto max-w-6xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <Sparkles className="h-4 w-4" />
                        Complete Project Portfolio
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        All{" "}
                        <span className="text-primary text-glow">Projects</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore my complete collection of projects across AI/ML, Backend,
                        DevOps, and Data Science domains.
                    </p>
                </div>
            </header>



            {/* Search + Filter Section */}
            <section className="px-4 pb-6 sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 py-4">
                <div className="container mx-auto max-w-6xl">
                    {/* Search Bar */}
                    <div className="relative mb-5">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search projects by name, description, or tech stack..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-card/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-sm"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        )}
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                                    : "bg-card/60 border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5"
                                    }`}
                            >
                                <span>{categoryIcons[category]}</span>
                                {category}
                                <span
                                    className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === category
                                        ? "bg-white/20"
                                        : "bg-primary/10 text-primary"
                                        }`}
                                >
                                    {category === "All" ? stats.total : stats[category] || 0}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Count */}
            <section className="px-4 pt-6 pb-2">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Layers className="h-4 w-4" />
                        <span>
                            Showing{" "}
                            <span className="text-foreground font-semibold">
                                {filteredProjects.length}
                            </span>{" "}
                            {filteredProjects.length === 1 ? "project" : "projects"}
                            {activeCategory !== "All" && (
                                <span>
                                    {" "}
                                    in{" "}
                                    <span className="text-primary font-semibold">
                                        {activeCategory}
                                    </span>
                                </span>
                            )}
                            {searchQuery && (
                                <span>
                                    {" "}
                                    matching "
                                    <span className="text-primary font-semibold">
                                        {searchQuery}
                                    </span>
                                    "
                                </span>
                            )}
                        </span>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 py-8 pb-20">
                <div className="container mx-auto max-w-6xl">
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project, index) => {
                                const diffStyle = difficultyStyles[project.difficulty] || difficultyStyles["Intermediate"];
                                return (
                                    <div
                                        key={index}
                                        className="group bg-card/70 backdrop-blur-sm rounded-xl border border-border hover:border-primary/40 shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                        style={{
                                            animationDelay: `${index * 60}ms`,
                                            animation: "fade-in 0.5s ease-out forwards",
                                            opacity: 0,
                                        }}
                                    >
                                        {/* Card Header  - Category & Difficulty */}
                                        <div className="flex items-center justify-between px-5 pt-5 pb-2">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                                <span>{categoryIcons[project.category]}</span>
                                                {project.category}
                                            </span>
                                            <span
                                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border}`}
                                            >
                                                <span
                                                    className={`w-1.5 h-1.5 rounded-full ${diffStyle.dot}`}
                                                />
                                                {project.difficulty}
                                            </span>
                                        </div>

                                        {/* Card Body */}
                                        <div className="flex-1 flex flex-col px-5 pb-5">
                                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mt-2 mb-3 leading-snug">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="mb-4">
                                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                                    Tech Stack
                                                </p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.techStack.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-2.5 py-0.5 text-xs rounded-full bg-primary/8 text-primary/80 border border-primary/15 font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-3 pt-3 border-t border-border/50">
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 cosmic-button !py-2.5 !text-sm flex items-center justify-center gap-2"
                                                >
                                                    <Github className="h-4 w-4" />
                                                    GitHub
                                                </a>
                                                {project.demoLink && (
                                                    <a
                                                        href={project.demoLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 py-2.5 text-sm rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 glow-hover font-medium"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                No projects found
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Try adjusting your search or filter criteria.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("All");
                                }}
                                className="cosmic-button !px-8 !py-3"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/50 py-8 px-4 bg-card/30 backdrop-blur-sm">
                <div className="container mx-auto max-w-6xl text-center">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Portfolio
                    </a>
                    <p className="text-muted-foreground text-sm mt-3">
                        © {new Date().getFullYear()} Prem Kumar. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};
