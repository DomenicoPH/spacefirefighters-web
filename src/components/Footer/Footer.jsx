import style from './Footer.module.css';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Nav from "../../components/Nav/Nav"

export default function Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.topContainer}>
                <p className={style.team}>NoCountry | S11-25-Equipo 10-GameDev</p>
                <a 
                    href='https://github.com/LeonardoEC/SPACE-FIREFIGHTERS'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={style.enlace}
                ><FaGithub size={20} />Repositorio</a>
                <a className={style.up} href="#"><FaRegArrowAltCircleUp /></a>
            </div>
            <Nav />
            
        </footer>
    )
};