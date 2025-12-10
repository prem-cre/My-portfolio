import { Code2, Cloud, Server, Terminal, Braces, Layers } from "lucide-react";

export const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Layers className="h-6 w-6" />,
            skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS","HTML5","CSS3" ,"Javascript" ,"Redux"]
        },
        {
            title: "Backend Development",
            icon: <Server className="h-6 w-6" />,
            skills: ["Node.js", "Express.js","MongoDB","MySQL","Django","Flask","FastApi",]
        },
        {
            title: "DevOps & Cloud",
            icon: <Cloud className="h-6 w-6" />,
            skills: ["GitHub","Git","Vercel","Netlify","Docker","Kubernetes","AWS"]
        },
        {
            title: "Coding Languages",
            icon: <Code2 className="h-6 w-6" />,
            skills: ["C","C++","Python","Java",]
        },
        {
            title: "AI/ML & Data Science",
            icon: <Terminal className="h-6 w-6" />,
            skills: ["PyTorch","Tensorflow","Scikit-learn","RAG","Langraph,Langchain","n8n(no-code tools)","NLP"]
        },
        {
            title: "Others",
            icon: <Braces className="h-6 w-6" />,
            skills: ["REST Framework","Custom MCP SERVERS","Fine-Tuning Models"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Skills & Technologies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-border group hover:border-primary glow-card-hover"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-primary p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-primary">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
