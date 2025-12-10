import { SiBlender } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import style from './DevelopInfo.module.css';

export default function DevelopInfo(){
    return(
        <div className={style.container}>
            <h2 className={style.text}><span className="heavy">Space Firefighters</span> ha sido desarrollado con <FaUnity size={35} />Unity y <SiBlender size={35} />Blender</h2>
        </div>
    )
};