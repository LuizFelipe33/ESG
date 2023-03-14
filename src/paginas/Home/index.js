import '../../assets/css/home.css'
import imagem from '../../assets/arvore.png'

const Home = () => {
    return (
        <div className='cont'>
            <div className='contmain'>
                <div className='contesg'>
                    <h1 className='nomeesg'>ESG</h1>
                    <button className='nome'>Sobre</button>
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
                </div>
            </div>

            <div className='cont2'></div>
        </div>
        
    )
}

export default Home;