import { Link } from "react-router-dom";
import style from './Header.module.css';
import logoImg from '../../assets/avatar-b.png';
import Nav from "../Nav/Nav"

export default function Header(){
    return(
        <header className={style.header}>
            <Link to='/' className={style.logoContainer}>
                <div className={style.logoImg}>
                    <img src={logoImg} alt="logo avatar bombero" />
                </div>
                <h2 className={style.logo}>Space Firefighters</h2>
            </Link>
            <Nav />
        </header>
    )
}