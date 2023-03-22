import { useState } from "react";
import { useLocation } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";

const Consultoria = () => {

    const [cep, setCep] = useState({})
    const [endereco, setEndereco] = useState({})

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
                        onClick={() => {
                        }}
                        >Consultar
                    </button>                
                </div>
            </div>
        <Rodape/>
        </>
        

    )
}

export default Consultoria;