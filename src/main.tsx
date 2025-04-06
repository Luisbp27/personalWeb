import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home.tsx";
import Projects from "./Pages/Projects.tsx";
import About from "./Pages/About.tsx";
import Contact from "./Pages/Contact.tsx";
import system from "./theme.ts";
import { ColorModeProvider } from "@/components/ui/color-mode";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ChakraProvider value={system}>
            <ColorModeProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </ColorModeProvider>
        </ChakraProvider>
    </BrowserRouter>,
);
