import Header from "@/components/Header";
import { Box, Text } from "@chakra-ui/react";

const About = () => {
    return (
        <Box position="relative" h="100vh">
            <Header />
            <Text
                fontSize="2xl"
                fontWeight="bold"
                textAlign="center"
                marginTop="4"
            >
                About Me
            </Text>
            <Text fontSize="lg" textAlign="center" marginTop="4">
                I am a Full Stack Developer with experience in React, Node.js,
                and MongoDB. I am also a Computer Science student at the
                University of Barcelona.
            </Text>
        </Box>
    );
};

export default About;
