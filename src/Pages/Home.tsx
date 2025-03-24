import {
    AbsoluteCenter,
    VStack,
    Box,
    Button,
    Wrap,
    Icon,
    Link as ChakraLink,
    useBreakpointValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router";
import Header from "@/components/Header";

const Home = () => {
    const fontSizeHeading = useBreakpointValue({
        base: "4xl",
        md: "6xl",
        lg: "8xl",
    });
    const fontSizeText = useBreakpointValue({
        base: "md",
        md: "2xl",
        lg: "4xl",
    });

    return (
        <Box position="relative" w="100vw" h="100vh">
            <Header />
            <AbsoluteCenter>
                <VStack
                    textAlign="center"
                    justifyContent="center"
                    gap={useBreakpointValue({ base: "8", md: "12" })}
                >
                    <Text fontSize={fontSizeHeading} fontWeight="bold">
                        Luis Barca
                    </Text>
                    <Text fontSize={fontSizeText}>
                        Computer engineer, now working as a SWA at{" "}
                        <ChakraLink
                            variant="underline"
                            href="https://es.nttdata.com/"
                        >
                            NTT Data Spain
                        </ChakraLink>
                    </Text>

                    <Button rounded="2xl" size="md" fontSize={fontSizeText}>
                        <Link to="/projects">
                            <Text textStyle={fontSizeText}>View my work</Text>
                        </Link>
                    </Button>

                    <Wrap gap="8">
                        <Icon
                            as={FaGithub}
                            href="https://www.github.com"
                            size="lg"
                        />
                        <Icon
                            as={FaLinkedin}
                            href="https://www.linkedin.com"
                            size="lg"
                        />
                    </Wrap>
                </VStack>
            </AbsoluteCenter>
        </Box>
    );
};

export default Home;
