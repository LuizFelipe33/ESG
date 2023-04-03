import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

const InfoWindow = ({ barragem, showInfo, setShowInfo, infoPosition }) => {
  const handleCloseClick = () => {
    setShowInfo(false);
  };
  if (!showInfo) {
    return null;
  }

  const style = {
    position: "absolute",
    backgroundColor: "white",
    padding: "1rem",
    border: "1px solid black",
    borderRadius: "5px",
    width: "250px",
    height: "300px"
  };

  return (
    <div className="card-body" style={style}>
      <div className="d-flex justify-content-between mb-3">
        <h5 className="card-title">
          <b>{barragem.nome}</b>
        </h5>
        <button className="no-style-button" onClick={handleCloseClick}>
        </button>
      </div>
    </div>
  );
};

export default InfoWindow;