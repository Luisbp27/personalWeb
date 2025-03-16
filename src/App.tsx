import { Theme } from "@chakra-ui/react"
import Header from './components/Header';
import Home from './Pages/Home';

function App() {
    return (
        <Theme appearance="dark">
            <Header />
            <Home />
        </Theme>
    );
}

export default App;
