import {
    AbsoluteCenter,
    VStack,
    Text,
    Box,
    Button,
    Link as ChakraLink,
    useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router";
import Header from "@/components/Header";

const Home = () => {
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

                    <Button
                        asChild
                        rounded="lg"
                        px={{ base: 4, md: 6, lg: 8, xl:10 }}
                        py={{ base: 2, md: 6, lg: 8, xl:8 }}
                        fontSize={fontSizeText}
                        colorPalette="blue"
                    >
                        <Link to="/projects">
                            <Text>View my work</Text>
                        </Link>
                    </Button>
                </VStack>
            </AbsoluteCenter>
        </Box>
    );
};

export default Home;
