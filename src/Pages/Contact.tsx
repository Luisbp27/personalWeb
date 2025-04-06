import {
    Box,
    AbsoluteCenter,
    Stack,
    VStack,
    Input,
    Text,
    Button,
    Field,
    Textarea,
    useBreakpointValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Header from "@/components/Header";
import { Toaster, toaster } from "@/components/ui/toaster";

interface FormValues {
    name: string;
    mail: string;
    message: string;
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const form = useRef<HTMLFormElement>(null);

    const fontSizeHeading = useBreakpointValue({
        base: "4xl",
        md: "4xl",
        lg: "6xl",
        xl: "6xl",
    });

    const fontSizeText = useBreakpointValue({
        base: "md",
        md: "lg",
        lg: "xl",
        xl: "2xl",
    });

    const gap = useBreakpointValue({
        base: "4",
        md: "8",
    });

    const onSubmit = handleSubmit(() => {
        if (!form.current) return;

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            .then(
                () => {
                    toaster.create({
                        description: "Email sent successfully!",
                        type: "info",
                    });
                },
                (error) => {
                    console.log("FORM", form.current);
                    console.log(
                        "SERVICE ID",
                        import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    );
                    toaster.create({
                        description: "Error sending email: " + error.text,
                        type: "error",
                    });
                },
            );
    });

    return (
        <Box position="relative" w="100vw" h="100vh">
            <Toaster />
            <Header />
            <AbsoluteCenter>
                <VStack gap={gap} align="center">
                    <Text fontSize={fontSizeHeading} fontWeight="bold" textAlign="center">
                        Contact Me
                    </Text>

                    <Box
                        as="form"
                        ref={form}
                        w={{ base: "160%", md: "150%", lg: "120%", xl: "100%" }}
                    >
                        <Stack gap={gap} align="flex-start" maxW="sm">
                            <Field.Root invalid={!!errors.name}>
                                <Field.Label textStyle={fontSizeText}>
                                    Name <Field.RequiredIndicator />
                                </Field.Label>
                                <Input
                                    {...register("name", {
                                        required: "Your name is required",
                                    })}
                                    placeholder="Your name"
                                />
                                <Field.ErrorText>
                                    {errors.name?.message}
                                </Field.ErrorText>
                            </Field.Root>

                            <Field.Root invalid={!!errors.mail}>
                                <Field.Label textStyle={fontSizeText}>
                                    Email
                                </Field.Label>
                                <Input
                                    {...register("mail", {
                                        required: "Your email is required",
                                    })}
                                    placeholder="Your email"
                                />
                                <Field.ErrorText>
                                    {errors.mail?.message}
                                </Field.ErrorText>
                            </Field.Root>

                            <Field.Root invalid={!!errors.message}>
                                <Field.Label textStyle={fontSizeText}>
                                    Message
                                </Field.Label>
                                <Textarea
                                    placeholder="Tell me what you think"
                                    {...register("message", {
                                        required: "Your message is required",
                                    })}
                                />
                                <Field.ErrorText>
                                    {errors.message?.message}
                                </Field.ErrorText>
                            </Field.Root>

                            <Button
                                type="submit"
                                rounded="lg"
                                px={{ base: 4, md: 6, lg: 10, xl: 12 }}
                                py={{ base: 2, md: 4, lg: 6, xl: 6 }}
                                fontSize={fontSizeText}
                                mt="4"
                                colorPalette="blue"
                                onClick={onSubmit}
                                alignSelf="center"
                            >
                                Send
                            </Button>
                        </Stack>
                    </Box>
                </VStack>
            </AbsoluteCenter>
        </Box>
    );
};

export default Contact;
