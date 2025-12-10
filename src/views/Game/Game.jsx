import { useState } from 'react';
import mainImage from '../../assets/sff-h.png';
import style from './Game.module.css';

import img1 from '../../assets/map.png';
import img2 from '../../assets/map-angle.png';
import img3 from '../../assets/map-top.png';

export default function Game(){
    const [selectedImg, setSelectedImg] = useState(null);

    const handleClick = (img) => setSelectedImg(img);
    const closeModal = () => setSelectedImg(null);

    return(
        <div className={style.container}>

            <div className={style.grid}>
                
                <div className={style.imageContainer}>
                    <img src={mainImage} alt="main image" />
                </div>

                <div className={style.rightBlock}>
                    <h2 className='titulo'>Especificaciones</h2>
                    <h3 className={style.dataH3}><span className={style.span}>Plataforma:</span> PC</h3>
                    <h3 className={style.dataH3}><span className={style.span}>Género:</span> Multijugador cooperativo - Primera persona - Ciencia Ficción.</h3>
                    <h3 className={style.dataH3}><span className={style.span}>Temática:</span> Espacial - Futurista.</h3>
                    <h3 className={style.dataH3}><span className={style.span}>Objetivo:</span> Fortalecer la comunicación y el trabajo en equipo.</h3>

                    <h2 className='titulo'>Concepto</h2>
                    <p className='p'>
                        Space Firefighters es un caótico juego cooperativo en el que un escuadrón de bomberos de élite debe salvar estaciones espaciales en crisis por incendios, fallos de sistemas y falta de oxígeno. Más que apagar fuego, la clave es comunicarse, coordinar roles y evacuar a los supervivientes. Con un estilo cartoon 3D, combina entretenimiento con aprendizaje conductual, fomentando la colaboración y la toma de decisiones en equipo.
                    </p>
                </div>

            </div>

            <div className={style.infoContainer}>

                <h2 className='titulo'>Historia</h2>

                <p className='p'>
                    Tras el colapso climático y económico, la humanidad abandonó la Tierra y se dispersó en estaciones espaciales construidas con bajo presupuesto, llenas de fallos y peligros constantes. Para enfrentar estas crisis, nació SPACE FIREFIGHTERS, un escuadrón multidisciplinario de élite dedicado al rescate, la contención y la reparación. Con médicos capaces de estabilizar heridos, bomberos entrenados para enfrentar emergencias extremas e ingenieros que mantienen las instalaciones en pie, cada misión exige coordinación total. Pocos en número pero equipados con tecnología avanzada, estos especialistas luchan por salvar vidas, preservar estructuras y mantener viva la esperanza humana en el espacio.
                </p>

                <hr />

                <h2 className='titulo'>Gameplay</h2>

                <p className='p'>
                    En una estación científica lunar al borde del desastre por el sobrecalentamiento de un reactor, los jugadores deben contener el incendio bloqueando zonas críticas, rescatar y curar a los científicos atrapados y escoltarlos hasta el hangar para su evacuación. Mientras el fuego avanza y el oxígeno de la estación se agota o contamina, solo los trajes de los SPACE FIREFIGHTERS permiten operar sin riesgo. Para completar la misión, el equipo deberá coordinar roles, controlar la propagación del fuego y escapar antes de que toda la instalación colapse.
                </p>

                <hr />

                <h2 className='titulo'>Escenario</h2>

                <div className={style.imgGal}>
                    <img src={img1} alt="imagen 1" onClick={() => handleClick(img1)} />
                    <img src={img2} alt="imagen 2" onClick={() => handleClick(img2)} />
                    <img src={img3} alt="imagen 3" onClick={() => handleClick(img3)} />
                </div>

                {selectedImg && (
                    <div className={style.modal} onClick={closeModal}>
                      <div className={style.modalContent}>
                        <img src={selectedImg} alt="vista ampliada" />
                      </div>
                    </div>
                )}

                <h3 className={style.dataH3}>Yurta Lab</h3>
                <p className='p'>
                    Una estación científica en la luna. Pasillos estrechos, materiales inflamables. Ideal para aprender a usar todas las mecánicas y que las derrotas solo son parte del aprendizaje.
                </p>

                <hr />

                <div className={style.sectionFooter}>
                    <p className='p'>Para información más detallada, consulta el GDD:</p>
                    <a className='button' target='_blank' rel='noopener noreferrer' href="https://docs.google.com/document/d/150uiAsqVpKYt_yf6Z0nLbGdzChrDJywCCyPpQF-aMq8/edit?usp=drive_link">GDD</a>
                </div>

            </div>

        </div>
    )
}