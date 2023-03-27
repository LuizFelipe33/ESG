import { useState } from "react";
import { useLocation } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { obterEndereco} from "../../service/api.js"
import "../../assets/css/consultoria.css"

const Consultoria = () => {

    const [cep, setCep] = useState({})
    const [endereco, setEndereco] = useState({})
    
    const validarCep = () => {
        // lógica de validar o CEP
        // alert("Cep no formato inválido")
    }

    return (
        <>
        <Cabecalho/>
            <div className="m-5">
                <div class="form-outline p-5 w-25">
                    <input type="text" 
                        id="form3Example3" 
                        class="form-control form-control-lg"
                        placeholder="CEP" 
                    onKeyUp={(event) => {
                        setCep(event.target.value)
                    }}
                    />   
                    <button 
                        type="button" 
                        class="btn bg-success btn-lg text-white"
                        onClick={() => obterEndereco(cep, setEndereco)}

                        >Consultar
                    </button>                
                </div>
                
            </div>
            {
                !!endereco && (
                    <>
                        <div className="espacoCep">
                            <p className="paragrafo">
                                <b>Logradouro: </b>
                                    {endereco.logradouro}
                                </p>
                            <p className="paragrafo">
                                <b>Complemento: </b>
                                {endereco.complemento}
                            </p>
                            <p className="paragrafo">
                                <b>Bairro: </b>
                                {endereco.bairro}
                            </p>
                            <p className="paragrafo">
                                <b>Localidade: </b>
                                {endereco.localidade}
                            </p>
                        </div>
                    </>
                )
            }
        <Rodape/>
        </>

    )
}

export default Consultoria;