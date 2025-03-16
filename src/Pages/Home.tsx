import {
    AbsoluteCenter,
    VStack,
    Box,
    Button,
    Wrap,
    Icon,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router";

const Home = () => {
    return (
        <Box position="relative" h="100vh">
            <AbsoluteCenter>
                <VStack
                    marginTop="-40"
                    textAlign="center"
                    justifyContent="center"
                    gap="4"
                >
                    <Text fontSize="6xl" fontWeight="bold">
                        Luis Barca
                    </Text>
                    <Text fontSize="2xl">
                        Computer engineer, now working as a SWA at{" "}
                        <a href="https://es.nttdata.com/">NTT Data Spain</a>
                    </Text>

                    <Button w="50%" m="4" p="8" fontSize="2xl">
                        <Link to="/projects">View my work</Link>
                    </Button>

                    <Wrap gap="8">
                        <Icon as={FaGithub} w="8" h="8" />
                        <Icon as={FaLinkedin} w="8" h="8" />
                        <Icon as={FaTwitter} w="8" h="8" />
                    </Wrap>
                </VStack>
            </AbsoluteCenter>
        </Box>
    );
};

export default Home;
