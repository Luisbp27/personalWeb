import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Projects from "./Pages/Projects.tsx";
import About from "./Pages/About.tsx";
import Contact from "./Pages/Contact.tsx";
import { Theme } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ChakraProvider value={defaultSystem}>
            <Theme appearance="dark">
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Theme>
        </ChakraProvider>
    </BrowserRouter>,
);
