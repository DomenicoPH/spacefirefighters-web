import { Link } from 'react-router-dom';
import style from './Nav.module.css';

export default function Nav(){
    return(
        <nav className={style.nav}>
            <Link className={style.enlace} to='/juego'>Juego</Link>
            <Link className={style.enlace} to='/personajes'>Personajes</Link>
            <Link className={style.enlace} to='/desarrollo'>Desarrollo</Link>
            <Link className={style.enlace} to='/equipo'>Equipo</Link>
        </nav>
    )
}