import { defineConfig } from "@chakra-ui/react";
import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = defineConfig({
    theme: {
        tokens: {
            colors: {

            },
        },
    },
});

export default createSystem(defaultConfig, system);
