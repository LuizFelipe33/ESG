import { Link } from "react-router-dom";
import '../assets/css/navbar.css'

const Cabecalho = () => {
    return (
        <nav className="navmain">
            <div className="logo">
                <h1>Logo</h1>
            </div>
          <div className="nao">
            <li className="lista">
                <ul><Link to={'/'}>Home</Link></ul>
                <ul><Link to={'/cursos'}>Cursos</Link></ul>
                <ul><Link to={'/consultoria'}>Consultoria</Link></ul>
            </li>
          </div>
        </nav>
    )
}

export default Cabecalho;