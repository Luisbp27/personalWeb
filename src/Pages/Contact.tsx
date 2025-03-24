import {
    Button,
    Field,
    Fieldset,
    Input,
    Text,
    Textarea,
    Stack,
    AbsoluteCenter,
    Box,
    useBreakpointValue,
} from "@chakra-ui/react";
import Header from "@/components/Header";

const Contact = () => {
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
                <Fieldset.Root size="lg" maxW="md">
                    <Stack textAlign="center" justifyContent="center">
                        <Fieldset.Legend>
                            <Text fontSize={fontSizeHeading} fontWeight="bold">
                                Contact Me
                            </Text>
                        </Fieldset.Legend>
                        <Fieldset.HelperText>
                            <Text
                                fontSize={fontSizeText}
                                textAlign="center"
                                mt="8"
                            >
                                If you want to collaborate or simply comment
                                something with me, be free to send me an email.
                            </Text>
                        </Fieldset.HelperText>
                    </Stack>
                    <Fieldset.Content mt="8">
                        <Field.Root>
                            <Field.Label>
                                <Text fontSize={fontSizeText} mb="2">
                                    Name
                                </Text>
                            </Field.Label>
                            <Input name="name" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>
                                <Text fontSize={fontSizeText} mb="2">
                                    Email address
                                </Text>
                            </Field.Label>
                            <Input name="email" type="email" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>
                                <Text fontSize={fontSizeText} mb="2">
                                    Message
                                </Text>
                            </Field.Label>
                            <Textarea placeholder="Write your message here..." />
                        </Field.Root>
                    </Fieldset.Content>

                    <Button type="submit" alignSelf="center" size="xl" w="sm">
                        <Text fontSize="2xl">Send</Text>
                    </Button>
                </Fieldset.Root>
            </AbsoluteCenter>
        </Box>
    );
};

export default Contact;
