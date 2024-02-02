import { Foto } from "../Foto/index.tsx";
import "./Mascota.css";
export function Mascota({
  urls,
  nombre,
  portada,
  mensaje,
}: {
  urls: string[];
  nombre: string;
  portada: string;
  mensaje: string;
}) {
  return (
    <section>
      <img src={portada} alt={nombre} className="portada" />
      <p className="nombre">{nombre}</p>
      <p className="subtitulo">{mensaje}</p>
      <div className="contenedor-img">
        {urls.map((url) => {
          return <Foto url={url} key={url} />;
        })}
      </div>
    </section>
  );
}
