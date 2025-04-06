import { Box, Wrap } from "@chakra-ui/react";
import Header from "@/components/Header";
import ProjectBox from "@/components/ProjectBox";

const tagMapping: Record<string, { label: string; colorPalette: string }> = {
    Python: { label: "Python", colorPalette: "green" },
    "Machine Learning": { label: "Machine Learning", colorPalette: "orange" },
    "Data Science": { label: "Data Science", colorPalette: "teal" },
    C: { label: "C", colorPalette: "blue" },
    Linux: { label: "Linux", colorPalette: "cyan" },
    "Operating System": { label: "Operating System", colorPalette: "yellow" },
    Economics: { label: "Economics", colorPalette: "red"}
};

const Projects = () => {
    return (
        <Box position="relative" w="100vw" h="100vh">
            <Header />
            <Wrap gap={["12px", "24px"]} justify="center">
                {projectsData.map((project, index) => (
                    <ProjectBox
                        key={index}
                        {...project}
                        tags={project.tags.map((tag) => ({
                            ...tagMapping[tag],
                            label: [tagMapping[tag].label],
                        }))}
                    />
                ))}
            </Wrap>
        </Box>
    );
};

export default Projects;

const projectsData = [
    {
        title: "Chocolate Sales Analysis",
        description: "Explore sales behavior, profitability, and commercial segmentation using clustering and PCA.",
        image: "https://res.cloudinary.com/luisbp27/image/upload/v1743971902/portfolio/mg9m3vvxazy80jpihxbu.jpg",
        tags: ["Python", "Data Science", "Economics"],
        link: "https://github.com/Luisbp27/chocoSales"
    },
    {
        title: "Titanic: Machine Learning from Disaster",
        description: "Which are the type of passengers that survived? There is any pattern?",
        image: "https://res.cloudinary.com/luisbp27/image/upload/v1743971904/portfolio/npdjls0umsxysbgdpgva.png",
        tags: ["Python", "Machine Learning", "Data Science"],
        link: "https://github.com/Luisbp27/practica2_ia",
    },
    {
        title: "Bash clone",
        description: "A simple clone of the bash shell",
        image: "https://res.cloudinary.com/luisbp27/image/upload/v1743971902/portfolio/tptxf7so3vflmsdndpop.png",
        tags: ["C", "Linux", "Operating System"],
        link: "https://github.com/Luisbp27/bash"
    },
    {
        title: "Housing Price Prediction",
        description: "Predict the price of a house based on its features",
        image: "https://res.cloudinary.com/luisbp27/image/upload/v1743971902/portfolio/jlpnusopimv54bsyhjwc.png",
        tags: ["Python", "Machine Learning", "Data Science"],
        link: "https://github.com/Luisbp27/housePredict"
    },
];
