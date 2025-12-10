import { Award ,StarIcon,TrophyIcon } from "lucide-react";

export const AchievementsSection = () => {
    const achievements = [
        {
            icon: <Award className="w-20 h-8 text-primary" />,
            title: "Victories",
            description: "Hacakthon winner of WOW GOOGLE DEVELOPERS GROUP 2025,Recognized as a finalist in the Gen E-Summit Ideathon and earned a top 13 ranking in a competitive national ideathon."
        },
        {
            icon: <StarIcon className="w-20 h-8 text-primary" />,
            title: "2 Star Coder",
            description: "2 Star coder at CodeChef,max-rating 1399"
        },
        {
            icon: <TrophyIcon className="w-20 h-8 text-primary" />,
            title: "Oracle Certified System Administrator",
            description: "Global certification from ServiceNow"
        }
    ];

    return (
        <section id="achievements" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Achievements
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="group relative bg-card rounded-lg p-6 w-full border border-border glow-card-hover"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary rounded-t-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    {achievement.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-primary">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
