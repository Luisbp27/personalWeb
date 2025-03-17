import { Box, SimpleGrid } from "@chakra-ui/react";
import Header from "@/components/Header";
import ProjectBox from "@/components/ProjectBox";

const Projects = () => {
    return (
        <Box position="relative">
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
        image: "https://storage.googleapis.com/kaggle-competitions/kaggle/3136/logos/header.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1742328338&Signature=dbjSFe1T376zpHXFmV3vkbWTOubQ4Fmpn7XgK5frwaYiCg5DPU%2FQmUL3wr9NCgSTsYFndALhwOkOVX%2B7GqMIt0an558mruN4Au71egoh3B2mKgB9l6hd7Azel%2FLRsfwJnJEWVd6iirxSVB6ZW%2FmdSrKp9IHQF0U75UC6Wt%2FwqUic7UNQF%2FTYtrp9Six0Iah5fEe%2F1ZQzSwlsOW3vSKjebKnxcVyEXx%2FUSD7DZnrQOHGE%2BSo%2BL66OonxkVue5dGtbaB94iihVkzL1KNdZqb33U3o0ldT%2BHJQI61fSBh%2FTtoR9tBe4kFvxB67FgysGf347%2BRwqZ9RKvcowEcvfrQoe6A%3D%3D",
        tags: ["Python", "Machine Learning", "Data Science"],
    },
    {
        title: "Housing Price Prediction",
        description: "Predict the price of houses in Boston",
        image: "https://raw.githubusercontent.com/Masterx-AI/Project_Housing_Price_Prediction_/main/hs.jpg",
        tags: ["Python", "Machine Learning", "Data Science"],
    },
];