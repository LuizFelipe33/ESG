import React from "react";
import { Icon } from "@iconify/react";
import DamIcon from "@iconify/icons-flat-color-icons/dam"
import { useState } from "react";
import "../assets/css/mapa.css"
import InfoWindow from "./infoWindow";

const Marker = ({barragem}) => {
    const [width, setWidth] = useState("20%")
    const [showInfo, setShowInfo] = useState(false)
    const [infoPosition, setInfoPosition] = useState({lat: 0, lng: 0})

    const handleMarkerClick = ({ lat, lng }) => {
        setInfoPosition({ lat, lng });
        setShowInfo(true);
      };
    const invible = ( {}) => {
        setShowInfo(false);
    };

    return(
        <div className="marker">
            <Icon
            icon={DamIcon}
            width={width}
            onMouseEnter={() => handleMarkerClick({
                lat: barragem.localizacao?.latitude,
                lng: barragem.localizacao?.longitude,
              })}
            onMouseLeave={() => invible({       
            })}                       
            />
            <p className="marker-text">{barragem.nome}</p>
            {
            <InfoWindow
                barragem={barragem}
                showInfo={showInfo}
                setShowInfo={setShowInfo}
                infoPosition={infoPosition}
            />
            }
        </div>
    )
}

export default Marker