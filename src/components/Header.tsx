import {
    Box,
    Flex,
    Text,
    HStack,
    VStack,
    Button,
    CloseButton,
    Drawer,
    Portal,
    useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router";

const Header = () => {
    const [open, setOpen] = useState(false);
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box as="header" p="4">
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="xl" fontWeight="bold" marginLeft="4">
                    Luis Barca
                </Text>

                {isMobile ? (
                    <Drawer.Root
                        open={open}
                        onOpenChange={(e) => setOpen(e.open)}
                    >
                        <Drawer.Trigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setOpen(true)}
                            >
                                <IoMenu />
                            </Button>
                        </Drawer.Trigger>
                        <Portal>
                            <Drawer.Backdrop />
                            <Drawer.Positioner>
                                <Drawer.Content>
                                    <Drawer.Header />
                                    <Drawer.Body>
                                        <VStack gap="4" direction="column">
                                            <Text
                                                cursor="pointer"
                                                _hover={{
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                <Link to="/">Home</Link>
                                            </Text>
                                            <Text
                                                cursor="pointer"
                                                _hover={{
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                <Link to="/projects">
                                                    Projects
                                                </Link>
                                            </Text>
                                            <Text
                                                cursor="pointer"
                                                _hover={{
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                <Link to="/about">About</Link>
                                            </Text>
                                            <Text
                                                cursor="pointer"
                                                _hover={{
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                <Link to="/contact">
                                                    Contact
                                                </Link>
                                            </Text>
                                        </VStack>
                                    </Drawer.Body>
                                    <Drawer.Footer>
                                        <Drawer.CloseTrigger asChild>
                                            <CloseButton size="sm" />
                                        </Drawer.CloseTrigger>
                                    </Drawer.Footer>
                                </Drawer.Content>
                            </Drawer.Positioner>
                        </Portal>
                    </Drawer.Root>
                ) : (
                    <HStack gap="8" marginRight="8">
                        <Text
                            cursor="pointer"
                            _hover={{ textDecoration: "underline" }}
                        >
                            <Link to="/">Home</Link>
                        </Text>
                        <Text
                            cursor="pointer"
                            _hover={{ textDecoration: "underline" }}
                        >
                            <Link to="/projects">Projects</Link>
                        </Text>
                        <Text
                            cursor="pointer"
                            _hover={{ textDecoration: "underline" }}
                        >
                            <Link to="/about">About</Link>
                        </Text>
                        <Text
                            cursor="pointer"
                            _hover={{ textDecoration: "underline" }}
                        >
                            <Link to="/contact">Contact</Link>
                        </Text>
                    </HStack>
                )}
            </Flex>
        </Box>
    );
};

export default Header;

/*
import Flag from "react-flagkit";
<Text cursor="pointer"><Flag country="ES"/></Text>
<Text cursor="pointer"><Flag country="GB"/></Text>
*/
