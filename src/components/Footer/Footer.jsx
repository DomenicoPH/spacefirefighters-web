import style from './Footer.module.css';
import { FaRegArrowAltCircleUp } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className={style.footer}>
            <p>NoCountry | S11-25-Equipo 10-GameDev</p>
            <a className={style.up} href="#"><FaRegArrowAltCircleUp /></a>
        </footer>
    )
};