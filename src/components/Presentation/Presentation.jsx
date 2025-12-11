import gameCover from '../../assets/sff-v.png';
import style from './Presentation.module.css';

export default function Presentation(){
    return(
        <div className={style.container}>
            <div className={style.grid}>
                
                <img className={style.image} src={gameCover} alt="game cover" />

                <div className={style.info}>
                    <h2 className={style.title}>Space Firefighters</h2>
                    <p className={style.description}>
                        En un futuro donde la humanidad ha huido al espacio tras el colapso climático y económico, los SPACE FIREFIGHTERS son la última línea de defensa. Un escuadrón élite de rescate, contención y reparación, equipado con tecnología avanzada pero limitado en número. En cada misión deberán salvar vidas, estabilizar instalaciones defectuosas y enfrentar emergencias en estaciones espaciales baratas y llenas de fallos. El éxito depende de su coordinación, habilidad y decisiones bajo presión. Cada operación es un reto… y una oportunidad para sobrevivir un día más.
                    </p>
                    <div className={style.buttonContainer}>
                        <a className='button' target='_blank' rel='noopener noreferrer' href="https://docs.google.com/document/d/150uiAsqVpKYt_yf6Z0nLbGdzChrDJywCCyPpQF-aMq8/edit?usp=drive_link">GDD</a>
                        <a className='button' target='_blank' rel='noopener noreferrer' href="https://www.youtube.com/watch?v=rlQwvc1SaZA">VIDEO</a>
                        <a className='button' target='_blank' rel='noopener noreferrer' href='https://drive.google.com/file/d/1D_-P5wF3prVrw8kRUJglwltKibEswdbu/view?usp=drive_link'>DEMO</a>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}