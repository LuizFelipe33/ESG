import Cabecalho from "../../componentes/Cabecalho";
import CursoCard from "../../componentes/CursoCard";
import Rodape from "../../componentes/Rodape";
import { cursos } from "../../mocks/cursos";

const Cursos = () => {
    return (
        <div>
            <Cabecalho/>
            <div className="container text-center my-5">
            <div className="row">
                {
                    cursos.map((curso, indice) => {
                        return (
                            <div className="col" key={indice}>
                                <CursoCard
                                    imagem={curso.imagem}
                                    titulo={curso.titulo}
                                    texto={curso.texto}
                                    rotulo={curso.rotulo}
                                />
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
        <Rodape/>
        </div>
    )
}

export default Cursos;