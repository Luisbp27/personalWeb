import { Box, Text, Image } from "@chakra-ui/react";

interface ProjectBoxProps {
    title: string;
    image: string;
    description: string;
    tags: string[];
};

const ProjectBox = ({ title, description, image, tags} : ProjectBoxProps) => {
    return (
        <Box background="gray.200" width="100%" height="30vh" padding="8" borderRadius="md" boxShadow="md">
            <Image src={image} alt={title} width="100%" height="60%" objectFit="cover" borderRadius="md" />
            <Text fontSize="xl" fontWeight="bold" mt="4">{title}</Text>
            <Text fontSize="md" color="gray.600">{description}</Text>
            <Text fontSize="md" color="gray.600">{tags.join(", ")}</Text>
        </Box>
    );
};

export default ProjectBox;