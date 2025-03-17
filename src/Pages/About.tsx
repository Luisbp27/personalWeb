import Header from "@/components/Header";
import {
    Box,
    Text,
    Image,
    AbsoluteCenter,
    VStack,
    Button,
} from "@chakra-ui/react";

const About = () => {
    return (
        <Box position="relative" h="100vh">
            <Header />
            <AbsoluteCenter>
                <VStack>
                    <Image
                        src="../assets/avatar.webp"
                        boxSize="250px"
                        borderRadius="full"
                    />
                    <Text fontSize="4xl" fontWeight="bold" marginTop="4">
                        About Me
                    </Text>
                    <Text fontSize="2xl" textAlign="center" marginTop="4">
                        Hola! Soy Luis Barca, ingeniero informático apasionado por la tecnología, el dato y la IA.
                    </Text>
                    <Text fontSize="2xl" textAlign="center" marginTop="4">
                        En mis tiempos libres me gusta formame sobre la eficiencia y la optimización de procesos, buscando soluciones innovadoras que mejoren la experiencia del usuario y la gestión de proyectos.
                    </Text>
                    <Text fontSize="2xl" textAlign="center" marginTop="4">
                        Si quieres saber más sobre mis proyectos, ¡no dudes en contactarme! 🚀
                    </Text>
                    <Button rounded="2xl" m="4" p="8" fontSize="2xl">
                        Get in touch
                    </Button>
                </VStack>
            </AbsoluteCenter>
        </Box>
    );
};

export default About;
