//variável global, só colocar ela 
import { createContext, useEffect, useState } from "react";
import imagem1 from '../assets/arvore.png'
import imagem2 from '../assets/arvore3.png'

export const TemaContext = createContext();

const TemaProvider = ({ children }) => {

    const [checked, setChecked] = useState(true)
    const [tema, setTema] = useState("dark")
    const [lista, setLista] = useState("lista1")
    const [logo, setLogo] = useState("logo")
    const [imagem, setImagem] = useState(imagem1)
    const [bg, setBg] = useState("contmain")
    const [esg, setNomeESG] = useState("nomeesg")
    const [textesg, setTextESG] = useState("contparag")
    const [nome, setNome] = useState("nome")
    
    useEffect(()=>{
        setTema(checked ? "dark" : "light")
        setLista(checked ? "lista1" : "lista2")
        setLogo(checked ? "logo" : "logo2")
        setImagem(checked ? imagem1 : imagem2)
        setBg(checked ? "contmain" : "contsec")
        setNomeESG(checked ? "nomeesg" : "nomeesg2")
        setTextESG(checked ? "contparag" : "contparag2")
        setNome(checked? "nome" : "nome2")
    }, [checked])

    return(
        <TemaContext.Provider value={{checked, setChecked, tema, setTema, lista, setLista, logo, setLogo,
        imagem, setImagem, bg, setBg, esg, setNomeESG, textesg, setTextESG, nome, setNome}}>
            {children}
        </TemaContext.Provider>
    )
}

export default TemaProvider