import '../../assets/css/home.css'
import imagem from '../../assets/arvore.png'
import Cursos from '../Cursos';
import Cabecalho from '../../componentes/Cabecalho';
import Rodape from '../../componentes/Rodape';

const Home = () => {
    return (
        <div className='cont'>
             <Cabecalho/>
            <div className='contmain'>
                <div className='contesg'>
                    <h1 className='nomeesg'>ESG</h1>  
                </div>
                <div className="contimg">
                    <img src={imagem} className="ss" alt="..." />
                </div>
                <div className="contparag">
                    <h1>Sobre</h1>
                    <p>Environmental, social, and corporate governance, é uma abordagem para avaliar até que ponto uma corporação
                        trabalha em prol de objetivos sociais que vão além do papel de uma corporação para maximizar os lucros
                        em nome dos acionistas da corporação
                    </p>
                    <button className='nome'>Saiba mais</button>
                </div>
            </div>

            <div className='cont2'>
                <Cursos/>
            </div>
            <Rodape/>
        </div>
        
    )
}

export default Home;