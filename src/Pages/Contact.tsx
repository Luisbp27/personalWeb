import {
    Button,
    Field,
    Fieldset,
    For,
    Input,
    NativeSelect,
    Stack,
    AbsoluteCenter,
    Box,
} from "@chakra-ui/react";
import Header from "@/components/Header";

const Contact = () => {
    return (
        <Box position="relative" h="100vh">
            <Header />
            <AbsoluteCenter>
                <Fieldset.Root size="lg" maxW="md">
                    <Stack>
                        <Fieldset.Legend>Contact details</Fieldset.Legend>
                        <Fieldset.HelperText>
                            Please provide your contact details below.
                        </Fieldset.HelperText>
                    </Stack>

                    <Fieldset.Content>
                        <Field.Root>
                            <Field.Label>Name</Field.Label>
                            <Input name="name" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Email address</Field.Label>
                            <Input name="email" type="email" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Country</Field.Label>
                            <NativeSelect.Root>
                                <NativeSelect.Field name="country">
                                    <For
                                        each={[
                                            "United Kingdom",
                                            "Canada",
                                            "United States",
                                        ]}
                                    >
                                        {(item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        )}
                                    </For>
                                </NativeSelect.Field>
                                <NativeSelect.Indicator />
                            </NativeSelect.Root>
                        </Field.Root>
                    </Fieldset.Content>

                    <Button type="submit" alignSelf="flex-start">
                        Submit
                    </Button>
                </Fieldset.Root>
            </AbsoluteCenter>
        </Box>
    );
};

export default Contact;
