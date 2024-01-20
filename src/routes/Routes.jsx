import { Route, Routes} from "react-router";
import Container from "../components/container/Container.jsx";
import { BrowserRouter,Navigate } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar/Navbar.jsx";
import { Footer } from "../components/footer/Footer.jsx";

export const Root = () => {
    return(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/projetos" element={<Container/>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    )
}

