import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../sass/navbar.scss";
import profile from "../../../../public/images/profile.jpeg"

export const Navbar = () => {
  const [isActiveHome, setIsActiveHome] = useState(true);

  const [isActiveProject, setIsActiveProject] = useState(false);

  const handlerIsActiveHome = () => {
    setIsActiveHome(true);
    setIsActiveProject(false);
  };

  const handlerIsActiveProjects = () => {
    setIsActiveHome(false);

    setIsActiveProject(true);
  };
  return (
    <>
      <nav
        className="navbar container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-menu">
        <figure className="image is-64x64">
              <img className="is-rounded" src={profile} />
            </figure>
          <div className="navbar-start navbar-items">
            <Link
              to="/"
              className={`link ${isActiveHome ? "active" : ""}`}
              onClick={handlerIsActiveHome}
            >
              Home
            </Link>
            <Link
              to="/projetos"
              className={`link ${isActiveProject ? "active" : ""}`}
              onClick={handlerIsActiveProjects}
            >
              Projetos
            </Link>
    
          </div>
        </div>
      </nav>
    </>
  );
};
