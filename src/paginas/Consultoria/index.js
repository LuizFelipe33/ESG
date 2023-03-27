import { useState } from "react";
import { useLocation } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { obterEndereco} from "../../service/api.js"

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
                        <div className="form-floating my-3 w-25">
                            <p>
                                <b>Logradouro: </b>
                                {endereco.logradouro}
                            </p>
                            <p>
                                <b>Complemento: </b>
                                {endereco.complemento}
                            </p>
                            <p>
                                <b>Bairro: </b>
                                {endereco.bairro}
                            </p>
                            <p>
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