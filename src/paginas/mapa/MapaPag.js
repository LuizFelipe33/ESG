import React, { useEffect } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Mapa from "../../componentes/Mapa";
import NavBar from "../../componentes/NavBar";
import { LISTA_BARRAGENS } from "../../mocks/barragens";
import { filtrarBarragens } from "../../utils";
import { useState } from "react";
import { DEFAULT_CENTER, DEFAULT_ZOOM_IN, DEFAULT_ZOOM_OUT } from "../../states/mapa";


const Mapap = () =>{

    const [barragens, setBarragens] = useState(LISTA_BARRAGENS);
  const [busca, setBusca] = useState("");
  const [coordenadas, setCoordenadas] = useState(DEFAULT_CENTER);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM_OUT);
  const [risco, setRisco] = useState("");
  const [dpa, setDpa] = useState("");

  useEffect(() => {
    const barragensFiltradas = filtrarBarragens(
      LISTA_BARRAGENS,
      busca,
      risco,
      dpa
    );

    setBarragens(barragensFiltradas);

    if (barragensFiltradas?.length === 1) {
      const barragem = barragensFiltradas[0];

      setCoordenadas({
        lat: barragem.localizacao?.latitude,
        lng: barragem.localizacao?.longitude,
      });

      setZoom(DEFAULT_ZOOM_IN)
    } else {
      setCoordenadas(DEFAULT_CENTER);
      setZoom(DEFAULT_ZOOM_OUT)
    }
  }, [busca, dpa, risco]);

  return (
    <>
      <NavBar setBusca={setBusca} setRisco={setRisco} setDpa={setDpa} />
      <Mapa barragens={barragens} coordenadas={coordenadas} zoom={zoom} />
    </>
  );
};

export default Mapap