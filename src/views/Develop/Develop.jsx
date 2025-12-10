import style from './Develop.module.css';
import { FaTools } from "react-icons/fa";
import { GoTools } from "react-icons/go";

export default function Develop(){
    return(
        <div className={style.container}>
            <div className={style.header}>
                <h2 className={`titulo ${style.title}`}><FaTools size={40} />Desarrollo</h2>
                <p className='p'>
                    La chispa detrás de Space Firefighters nació como un reto: crear un MVP en solo 5 semanas dentro de la propuesta de No Country. Desde el primer día, el equipo se sumergió en la idea de un juego cooperativo en primera persona, ambientado en un universo espacial y futurista, donde la misión es apagar incendios en escenarios imposibles.
                </p>
                <p className='p'>
                    El proceso fue un viaje intenso: diseñar personajes y entornos en Blender, darles vida en Unity, y construir mecánicas que transmitieran tanto urgencia como trabajo en equipo. Cada semana trajo consigo decisiones rápidas, ajustes creativos y la emoción de ver cómo un concepto se transformaba en una experiencia jugable.
                </p>
                <p className='p'>
                    Más que un proyecto técnico, Space Firefighters refleja la pasión por crear mundos nuevos y la fuerza de la colaboración bajo presión.
                </p>

                <hr />
                
                <h2 className={`titulo ${style.title}`}><FaTools size={40} />Pilares de Diseño</h2>

                <div className={style.li}>
                    <div className={style.icon}><GoTools size={35} /></div>
                    <p className={style.liText}>
                        Fortalecer la comunicación: Los roles son interdependientes. Un bombero no puede rescatar o curar a un civil o escoltar a un área segura; el    médico no puede apagar el fuego o contener su avance. La coordinación y cooperación es la clave del éxito en cada misión.    
                    </p>
                </div>
                <div className={style.li}>
                    <div className={style.icon}><GoTools size={35} /></div>
                    <p className={style.liText}>
                        Heroísmo Colaborativo: Nadie es un héroe en solitario; el equipo es el héroe.    
                    </p>
                </div>
                <div className={style.li}>
                    <div className={style.icon}><GoTools size={35} /></div>
                    <p className={style.liText}>
                        Comunicación como Herramienta: El silencio mata. La información y la comunicación es vital.    
                    </p>
                </div>
                <div className={style.li}>
                    <div className={style.icon}><GoTools size={35} /></div>
                    <p className={style.liText}>
                        Caos Controlado: El fuego tiene comportamiento Físicos(Avance lineal,  consumo de oxígeno).    
                    </p>
                </div>

                <hr />

                <div className={style.sectionFooter}>
                    <p className='p'>Para información más detallada, consulta el GDD:</p>
                    <a className='button' target='_blank' rel='noopener noreferrer' href="https://docs.google.com/document/d/150uiAsqVpKYt_yf6Z0nLbGdzChrDJywCCyPpQF-aMq8/edit?usp=drive_link">GDD</a>
                </div>
                
            </div>
        </div>
    )
}