import style from './Players.module.css';

export default function PlayerCard({pers}){

    const Icon = pers.icon;
    return(
        <div className={style.card}>
            <div className={style.imgContainer}>
                <img src={pers.img} alt={pers.name} />
            </div>
            <div className={style.dataContainer}>
                <h3 className={`titulo ${style.icon}`}><Icon />{pers.name}</h3>
                <p className='p'><span>Herramienta:</span>{pers.tool}</p>
                <p className='p'><span>Rol:</span>{pers.role}</p>
                <p className='p'><span>Habilidad:</span>{pers.ability}</p>
                <p className='p'><span>Fortalezas:</span>{pers.strength}</p>
                <p className='p'><span>Debilidades:</span>{pers.weakness}</p>
                <hr />
            </div>
        </div>
    )
};