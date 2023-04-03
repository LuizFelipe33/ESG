import { useContext } from "react";
import { Link } from "react-router-dom";
import '../assets/css/navbar.css'
import { TemaContext } from "../contexts/TemaContexts";

const Cabecalho = () => {

    const {checked, setChecked, tema, lista, logo} = useContext(TemaContext)

    return (
        <nav className={`${tema}`}>
            <div className={`${logo}`}>
                <h1>Logo</h1>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        onChange={() => {
                            setChecked(!checked)
                        }}
                        checked={checked}
                    />
            </div>
            </div>
           
          <div className="nao">
            <li className={`${lista}`}>
                <ul><Link to={'/'}>Home</Link></ul>
                <ul><Link to={'/cursos'}>Cursos</Link></ul>
                <ul><Link to={'/consultoria'}>Consultoria</Link></ul>
                <ul><Link to={'/mapa'}>Mapa</Link></ul>
            </li>
            
          </div>
          
        </nav>
    )
}

export default Cabecalho;