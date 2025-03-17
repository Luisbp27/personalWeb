import {
    Box,
    Flex,
    Text,
    HStack,
    Button,
    Portal,
    useBreakpointValue,
    Menu,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router";

const Header = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box as="header" p="4">
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="xl" fontWeight="bold" marginLeft="4">
                    Luis Barca
                </Text>

                {isMobile ? (
                    <Menu.Root >
                        <Menu.Trigger asChild>
                            <Button variant="outline" size="sm">
                                <IoMenu/>
                            </Button>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                                <Menu.Content>
                                    <Menu.Item value="new-txt">
                                        <Link to="/">Home</Link>
                                    </Menu.Item>
                                    <Menu.Item value="new-file">
                                        <Link to="/projects">Projects</Link>
                                    </Menu.Item>
                                    <Menu.Item value="new-win">
                                        <Link to="/about">About</Link>
                                    </Menu.Item>
                                    <Menu.Item value="open-file">
                                        <Link to="/contact">Contact</Link>
                                    </Menu.Item>
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>
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
