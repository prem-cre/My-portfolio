import aboutMeImage from '../assets/about-me.png';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >
                    About Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl text-primary font-semibold">Passionate Web Developer & Competitive Programmer | Co-Lead @GFG VIIT</h3>
                        <p className="text-muted-foreground text-left">
                            {" "}
                            Hi, I'm Prem Kumar Mahanty, a Computer Science Engineering student at Vignan's Institute of Information Technology. I'm deeply passionate about programming and love the thrill of tackling complex problems with logical thinking and creativity.
                        </p>
                        <p className="text-muted-foreground text-left">
                            {" "}
                           As the Co-Lead of the GeeksforGeeks Student Chapter at VIIT, I help organize events and foster a strong tech community, which has boosted my leadership and teamwork skills alongside my technical growth.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href="/Geethanjali-Resume.pdf"
                                download
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 glow-card-hover"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <img 
                                src={aboutMeImage} 
                                alt="About Me" 
                                className="rounded-lg transition-all duration-300 hover:shadow-[0_0_32px_8px_rgba(255,255,255,0.7)] hover:brightness-110"
                            />
                        </div>     
                    </div>
                </div>
            </div>
        </section>
    );
};
