import { Link } from "react-router-dom";
import DropdownFilter from "./DropdownFilter";
import SearchBar from "./SearchBar";
import "../assets/css/pesquisa.css"

const NavBar = ({setBusca}) => {
  return (
    <div className="container-fluid sasb-navbar">
      <div className="row py-4">
        <div className="col-lg-1 col-md-12 d-flex justify-content-center">
          <a className="navbar-brand" href="/">
          </a>
        </div>

        <div className="col-lg-3 col-md-12">
          <SearchBar setBusca={setBusca}/>
        </div>

        <div className="col-lg-3 col-md-12">
          <DropdownFilter
            options={["Filtrar por categoria de risco", "Baixo", "Médio", "Alto"]}
          />
        </div>

        <div className="col-lg-2 col-md-12">
          <DropdownFilter
            options={["Filtrar por dano potencial", "Baixo", "Médio", "Alto"]}
          />
        </div>

        <div className="col-lg-2 col-md-12">
          <Link to={"/login"}>
            <button className="btn btn-lg btn-sasb-blue sasb-shadow">
              COLABORADOR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
