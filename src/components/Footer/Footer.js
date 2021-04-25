import style from "./Footer.module.css"
import { Social } from "../../UI/Social/Social";
import { FaHeart } from "react-icons/fa"


export const Footer = () => {
  return (
    <footer className={style.footer}>
        <div
          className="logo"
        >
          LOGO
        </div>
        <p className={`body1 ${style.footerText}`}>
          <span>
            Hecho con <FaHeart style={{marginBottom:-2}}/> de Elisa.
          </span>
          Copyright 2021 - Todos los derechos reservados.
        </p>
        <Social/>
      </footer>
  )
}
