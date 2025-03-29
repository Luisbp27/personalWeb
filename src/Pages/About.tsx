import Header from "@/components/Header";
import {
    Box,
    Text,
    Image,
    AbsoluteCenter,
    VStack,
    Button,
    useBreakpointValue,
} from "@chakra-ui/react";

const About = () => {
    const fontSizeHeading = useBreakpointValue({
        base: "4xl",
        md: "4xl",
        lg: "6xl",
        xl: "6xl",
    });
    const fontSizeText = useBreakpointValue({
        base: "md",
        md: "2xl",
        lg: "4xl",
        xl: "4xl",
    });

    return (
        <Box position="relative" w="100vw" h="100vh" overflowY="auto">
            <Header />
            <AbsoluteCenter>
                <VStack textAlign="center" justifyContent="center">
                    <Image
                        src="../../assets/images/profile.webp"
                        boxSize={{
                            base: "100px",
                            md: "150px",
                            lg: "200px",
                            xl: "250px",
                        }}
                        borderRadius="full"
                    />
                    <VStack
                        gap={{ base: 4, md: 6, lg: 6 }}
                        w={{ base: "180%", md: "150%", lg: "120%", xl: "100%" }}
                        textAlign="center"
                    >
                        <Text
                            fontSize={fontSizeHeading}
                            fontWeight="bold"
                            mt="4"
                        >
                            About Me
                        </Text>
                        <Text fontSize={fontSizeText}>
                            Hi! I'm Luis Barca, computer engineer and
                            appasionate about tech, data and IA.
                        </Text>
                        <Text fontSize={fontSizeText}>
                            In my spare time I like to train on efficiency and
                            process optimisation, looking for innovative
                            solutions that improve user experience and project
                            management.
                        </Text>
                        <Text fontSize={fontSizeText}>
                            If you want to know more about my projects, don't
                            hesitate to contact me! 🚀
                        </Text>
                        <Button
                            asChild
                            rounded="lg"
                            px={{ base: 4, md: 6, lg: 8, xl: 10 }}
                            py={{ base: 2, md: 6, lg: 8, xl: 8 }}
                            fontSize={fontSizeText}
                            mt="4"
                            colorPalette="blue"
                        >
                            <a href="mailto:luisbarcapons@gmail.com">Get in touch</a>
                        </Button>
                    </VStack>
                </VStack>
            </AbsoluteCenter>
        </Box>
    );
};

export default About;
