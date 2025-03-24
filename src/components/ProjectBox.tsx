import { Box, Text, Image, useBreakpointValue, HStack, Tag } from "@chakra-ui/react";

interface ProjectBoxProps {
    title: string;
    image: string;
    description: string;
    tags: string[];
};

const ProjectBox = ({ title, description, image, tags} : ProjectBoxProps) => {
    const fontSizeHeading = useBreakpointValue({
            base: "sm",
            md: "md",
            lg: "xl",
        });
    const fontSizeText = useBreakpointValue({
        base: "xs",
        md: "sm",
        lg: "lg",
    });
    return (
        <Box background="black.200" width="100%" height="30vh" padding="2" borderRadius="md" boxShadow="xl">
            <Image src={image} alt={title} width="100%" height="40%" objectFit="cover" borderRadius="md" />
            <Text fontSize={fontSizeHeading} fontWeight="bold" mt="2">{title}</Text>
            <Text fontSize={fontSizeText} color="gray.600">{description}</Text>
            <HStack>
                {tags.map((tag, index) => (
                    <Tag.Root key={index} size="sm" variant="solid" mt="2" color="green.400">{tag}</Tag.Root>
                ))}
            </HStack>
        </Box>
    );
};

export default ProjectBox;