import heroImg from '../../assets/sff-h.png';
import style from './Hero.module.css';

export default function Hero(){
    return(
        <div className={style.container}>
            <h1 className={style.title}>Space Firefighters</h1>
            <div className={style.overlay}></div> 
            <img src={heroImg} alt="hero image" />
        </div>
    )
}