import { useContext } from "react";
import { Context } from "../Context";
import "./VistaPrevia.css";
export function VistaPrevia() {
  const { image, setImage } = useContext(Context);
  const handleClick = (e: Event) => {
    if (!e.target.classList.contains("vistaPrevia")) return;

    setImage(undefined);
  };
  return (
    <>
      {image !== undefined && (
        <div className="vistaPrevia" onClick={handleClick}>
          <img src={image} />
        </div>
      )}
    </>
  );
}
