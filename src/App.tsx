import { Mascota } from "./Mascota/index.tsx";
import { VistaPrevia } from "./VistaPrevia/index.tsx";

import animales from "./animales.json";
export default function App() {
  return (
    <>
      <h1>Galeria de mascotas</h1>

      {animales.animales.map(({ urls, portada, nombre, mensaje }) => (
        <Mascota
          urls={urls}
          portada={portada}
          key={nombre}
          nombre={nombre}
          mensaje={mensaje}
        />
      ))}
      <VistaPrevia />
    </>
  );
}
