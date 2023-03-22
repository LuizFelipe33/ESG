import '../../assets/css/home.css'
import { useContext } from "react";
import Cursos from '../Cursos';
import Cabecalho from '../../componentes/Cabecalho';
import Rodape from '../../componentes/Rodape';
import { Link } from "react-router-dom";
import { TemaContext } from '../../contexts/TemaContexts';

const Home = () => {

    const {imagem, bg, esg, textesg, nome} = useContext(TemaContext)

    return (
        <div>
            <Cabecalho/>
                <div className='cont'>
                    <div className={`${bg}`}>
                        <div className='contesg'>
                            <h1 className={`${esg}`}>ESG</h1>  
                        </div>
                        <div className="contimg">
                            <img src={imagem} className="ss" alt="..." />
                        </div>
                        <div className={`${textesg}`}>
                            <h1>Sobre</h1>
                            <p>Environmental, social, and corporate governance, é uma abordagem para avaliar até que ponto uma corporação
                                trabalha em prol de objetivos sociais que vão além do papel de uma corporação para maximizar os lucros
                                em nome dos acionistas da corporação
                            </p>
                            <button className={`${nome}`}><Link to={'/login'}>Saiba mais</Link></button>
                        </div>
                    </div>

                <div className='cont2'>
                <Cursos/>
                </div>
            </div>
            <Rodape/>
        </div>
        
        
    )
}

export default Home;