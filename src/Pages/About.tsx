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
                <VStack>
                    <Image
                        src="../../assets/images/profile.webp"
                        boxSize="250px"
                        borderRadius="full"
                    />
                    <Text fontSize={fontSizeHeading} fontWeight="bold" mt="4">
                        About Me
                    </Text>
                    <Text fontSize={fontSizeText} textAlign="center" mt="4">
                        Hola! Soy Luis Barca, ingeniero informático apasionado
                        por la tecnología, el dato y la IA.
                    </Text>
                    <Text fontSize={fontSizeText} textAlign="center" mt="4">
                        En mis tiempos libres me gusta formame sobre la
                        eficiencia y la optimización de procesos, buscando
                        soluciones innovadoras que mejoren la experiencia del
                        usuario y la gestión de proyectos.
                    </Text>
                    <Text fontSize={fontSizeText} textAlign="center" mt="4">
                        Si quieres saber más sobre mis proyectos, ¡no dudes en
                        contactarme! 🚀
                    </Text>
                    <Button rounded="2xl" mt="4" p="8" size="xs" fontSize="medium">
                        Get in touch
                    </Button>
                </VStack>
            </AbsoluteCenter>
        </Box>
    );
};

export default About;
