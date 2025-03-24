import { Box, SimpleGrid } from "@chakra-ui/react";
import Header from "@/components/Header";
import ProjectBox from "@/components/ProjectBox";

const Projects = () => {
    return (
        <Box position="relative" w="100vw" h="100vh">
            <Header />
            <SimpleGrid columns={2} gap="8" padding="8">
                {projectsData.map((project, index) => (
                    <ProjectBox key={index} title={project.title} description={project.description} image={project.image} tags={project.tags} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Projects;

const projectsData = [
    {
        title: "Titanic: Machine Learning from Disaster",
        description: "Predict survival on the Titanic",
        image: "../../assets/images/titanic.webp",
        tags: ["Python", "Machine Learning", "Data Science"],
    },
    {
        title: "Housing Price Prediction",
        description: "Predict the price of houses in Boston",
        image: "../../assets/images/housing.webp",
        tags: ["Python", "Machine Learning", "Data Science"],
    },
];