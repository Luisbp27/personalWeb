import {
    Box,
    Text,
    Image,
    useBreakpointValue,
    HStack,
    Tag,
    Link,
} from "@chakra-ui/react";

interface ProjectBoxProps {
    title: string;
    description: string;
    image: string;
    tags: { label: string[]; colorPalette: string }[];
    link: string;
}
import { LuExternalLink } from "react-icons/lu";

const ProjectBox = ({ title, description, image, tags, link }: ProjectBoxProps) => {
    const fontSizeHeading = useBreakpointValue({
        base: "sm",
        md: "md",
        lg: "xl",
    });
    const fontSizeText = useBreakpointValue({
        base: "xs",
        md: "sm",
        lg: "md",
    });

    return (
        <Box
            background="blackAlpha.100"
            w={{ base: "300px", md: "450px" }}
            h={{ base: "300px", md: "450px" }}
            m="30px"
            boxShadow="xl"
            borderColor="white"
            display="flex"
            flexDirection="column"
        >
            <Image
                src={image}
                alt={title}
                width="100%"
                height={{ base: "40%", md: "50%", lg: "50%", xl: "60%" }}
            />
            <Box p="4" flex="1" mb="-4">
                <Text fontSize={fontSizeHeading} fontWeight="bold" mt="2">
                    <Link href={link}>{title} <LuExternalLink/></Link>
                </Text>
                <Text fontSize={fontSizeText} color="gray.600" mt="2">
                    {description}
                </Text>
            </Box>
            <HStack p="4" gap="2">
                {tags.map((tag, index) => (
                    <Tag.Root
                        key={index}
                        textStyle={fontSizeText}
                        variant="surface"
                        colorPalette={tag.colorPalette}
                    >
                        {tag.label}
                    </Tag.Root>
                ))}
            </HStack>
        </Box>
    );
};

export default ProjectBox;
