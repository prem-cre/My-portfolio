import { useEffect, useState } from "react";

export const LightThemeBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const starColors = [
    { color: "#ADD8E6", shadow: "0 0 4px #ADD8E6" }, // Light Blue
    { color: "#FFB6C1", shadow: "0 0 4px #FFB6C1" }, // Light Pink
    { color: "#E6E6FA", shadow: "0 0 4px #E6E6FA" }, // Lavender
  ];

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    const meteorInterval = setInterval(() => {
      generateMeteors();
    }, 8000);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(meteorInterval);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const colorIndex = Math.floor(Math.random() * starColors.length);
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        animationDelay: Math.random() * 4,
        color: starColors[colorIndex].color,
        shadow: starColors[colorIndex].shadow,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 3;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      const colorIndex = Math.floor(Math.random() * starColors.length);
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: i * 2,
        animationDuration: Math.random() * 2 + 2,
        color: starColors[colorIndex].color,
        shadow: starColors[colorIndex].shadow,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="animate-pulse-subtle"
          style={{
            position: "absolute",
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            animationDelay: star.animationDelay + "s",
            backgroundColor: star.color,
            boxShadow: star.shadow,
            borderRadius: "50%",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="animate-meteor"
          style={{
            position: "absolute",
            width: meteor.size * 80 + "px",
            height: meteor.size * 1.5 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            background: `linear-gradient(90deg, ${meteor.color}, transparent)`,
            boxShadow: meteor.shadow,
            transform: "rotate(-45deg)",
          }}
        />
      ))}
    </div>
  );
}; 