import style from './Players.module.css';
import bombero from '../../assets/avatar-b.png';
import medico from '../../assets/avatar-m.png';
import ingeniero from '../../assets/avatar-i.png';
import PlayerCard from './PlayerCard';

import { FaFireExtinguisher } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
import { BiPlusMedical } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";

const personajes = [
    {
        icon: FaFireExtinguisher,
        id: 1,
        img: bombero,
        name: 'Bombero',
        tool: 'Manguera de alta presión',
        strength: 'Único capaz de eliminar o contener el fuego activo y enfriar superficies calientes.',
        weakness: 'Movilidad reducida mientras dispara. Depende de recargas de agua constantes.',
        role: 'Contención y ataque',
        ability: 'Disparar agua desde la manguera para controlar el avance del fuego y Crio-Esferas de nitrato capaces de desintegrar cualquier fuego de menor tamaño.'
    },
    {
        icon: BiPlusMedical,
        id: 2,
        img: medico,
        name: 'Médico',
        tool: 'Pistola de Bio-Gel',
        strength: 'Puede curar a jugadores y NPCs. Es el único que puede cargar NPCs heridos a velocidad normal.',
        weakness: 'La salud más baja del equipo, su visor se nubla con mayor facilidad por el humo, impidiendo su visión.',
        role: 'Supervivencia y Extracción.',
        ability: 'Crea una cúpula donde nadie puede perder el oxígeno por 15 segundos.'
    },
    {
        icon: AiFillTool,
        id: 3,
        img: ingeniero,
        name: 'Ingeniero',
        tool: 'Llave Inglesa Omni-tool y Soldador de Plasma.',
        strength: 'Puede desmontar puertas bloqueadas, reparar generadores de oxígeno y activar sistemas de rociadores de la estación.',
        weakness: 'Indefenso ante el fuego directo. Si su traje se daña con mayor facilidad a altas temperaturas.',
        role: 'Acceso y Mantenimiento.',
        ability: 'Activa temporalmente todas las ventilaciones de la nave para succionar el humo y dar visibilidad clara, abre y cerrar puertas, permitiendo el avance de sus compañeros de equipo y bloqueando el del fuego.'
    },
]

export default function Players(){
    return(
        <div className={style.container}>
            <div className={style.header}>
                <h2 className={`titulo ${style.title}`}><FaGamepad size={40} />Personajes</h2>
                <p className='p'>
                    Space Firefighters ofrece 3 personajes jugables equipados con trajes y herramientas de alta tecnología, diseñados para operar en crisis extremas. Debido a su costo y complejidad, solo profesionales altamente capacitados pueden usarlos: sin comunicación y coordinación, incluso el mejor equipo se vuelve inútil… o mortal.
                </p>
            </div>

            <div className={style.cards}>
                {personajes.map(pers => (
                    <PlayerCard 
                        key={pers.id}
                        pers={pers}
                    />
                ))}
            </div>
            
            <div className={style.sectionFooter}>
                <p className='p'>Para información más detallada, consulta el GDD:</p>
                <a className='button' target='_blank' rel='noopener noreferrer' href="https://docs.google.com/document/d/150uiAsqVpKYt_yf6Z0nLbGdzChrDJywCCyPpQF-aMq8/edit?usp=drive_link">GDD</a>
            </div>
            
        </div>
    )
}