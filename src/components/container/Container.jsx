import { useLocation } from "react-router-dom";
import {Home} from "../../pages/Home";
import {Projects} from "../../pages/Projects";

export default function Container() {
  const location = useLocation();
  return (
    <>
      <section>
        {location.pathname ==='/' && <Home/>}
        {location.pathname === '/projetos' && <Projects/>}
      </section>
    </>
  );
}