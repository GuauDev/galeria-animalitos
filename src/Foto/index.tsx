import { Context } from "../Context.tsx";
import "./Foto.css";
import { useContext } from "react";

export function Foto({ url }: { url: string }) {
  const { setImage } = useContext(Context);
  return <img src={url} className="img" onClick={() => setImage(url)} />;
}
