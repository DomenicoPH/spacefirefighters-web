import style from './Players.module.css';
import bombero from '../../assets/avatar-b.png';
import medico from '../../assets/avatar-m.png';
import ingeniero from '../../assets/avatar-i.png';
import PlayerCard from './PlayerCard';

const personajes = [
    {
        img: bombero,
        name: 'Bombero',
        tool: 'Manguera de alta presión',
        strength: 'Único capaz de eliminar o contener el fuego activo y enfriar superficies calientes.',
        weakness: 'Movilidad reducida mientras dispara. Depende de recargas de agua constantes.',
        role: 'Contención y ataque',
        ability: 'Disparar agua desde la manguera para controlar el avance del fuego y Crio-Esferas de nitrato capaces de desintegrar cualquier fuego de menor tamaño.'
    },
    {
        img: ingeniero,
        name: 'Ingeniero',
        tool: 'Llave Inglesa Omni-tool y Soldador de Plasma.',
        strength: 'Puede desmontar puertas bloqueadas, reparar generadores de oxígeno y activar sistemas de rociadores de la estación.',
        weakness: 'Indefenso ante el fuego directo. Si su traje se daña con mayor facilidad a altas temperaturas.',
        role: 'Acceso y Mantenimiento.',
        ability: 'Activa temporalmente todas las ventilaciones de la nave para succionar el humo y dar visibilidad clara, abre y cerrar puertas, permitiendo el avance de sus compañeros de equipo y bloqueando el del fuego.'
    },
    {
        img: medico,
        name: 'Médico',
        tool: 'Pistola de Bio-Gel',
        strength: 'Puede curar a jugadores y NPCs. Es el único que puede cargar NPCs heridos a velocidad normal.',
        weakness: 'La salud más baja del equipo, su visor se nubla con mayor facilidad por el humo, impidiendo su visión',
        role: 'Supervivencia y Extracción.',
        ability: 'Crea una cúpula donde nadie puede perder el oxígeno por 15 segundos.'
    },
]

export default function Players(){
    return(
        <div className={style.container}>
            <h2 className='titulo'>Personajes</h2>

            {personajes.map(pers => (
                <PlayerCard 
                    pers={pers}
                />
            ))}
        </div>
    )
}