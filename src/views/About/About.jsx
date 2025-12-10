import avatar from '../../assets/avatar-npc.png';
import style from './About.module.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const equipo = [
    {
        id: 1,
        name: 'Daniel Jimenez',
        role: ['Game Developer', 'Game Designer'],
        linkedin: 'https://www.linkedin.com/in/dannizj/',
        github: 'https://github.com/dannizj',
        img: avatar
    },
    {
        id: 2,
        name: 'Leonardo Vivas',
        role: ['Game Developer', 'Game Designer'],
        linkedin: 'https://www.linkedin.com/in/leonardo-d-vivas/',
        github: 'https://github.com/LeonardoEC',
        img: avatar
    },
    {
        id: 3,
        name: 'Domenico Pagano',
        role: ['Game Artist', 'Game Designer'],
        linkedin: 'https://www.linkedin.com/in/domenico-pagano-hildebrandt/',
        github: 'https://github.com/DomenicoPH',
        img: avatar
    },
]

export default function About(){
    return(
        <div className={style.container}>
            <div className={style.header}>
                <h2 className={`titulo ${style.title}`}><FaUsers size={40} />Equipo de desarrolladores</h2>
            </div>
            <div className={style.cards}>
                {equipo.map(dev => (
                    <div className={style.card} key={dev.id}>
                        <img className={style.image} src={dev.img} alt={dev.name} />
                        <h2 className={`titulo ${style.name}`}>{dev.name}</h2>
                        <div className={style.roles}>
                            <p className={style.rol}>{dev.role[0]}</p>
                            <p className={style.rol}>{dev.role[1]}</p>
                        </div>
                        <div className={style.enlaces}>
                            <a 
                                href={dev.linkedin}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={style.enlace}
                            ><FaLinkedin size={30} /></a>
                            <a 
                                href={dev.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={style.enlace}
                            ><FaGithub size={30} /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}