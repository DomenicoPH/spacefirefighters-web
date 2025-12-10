import Hero from "../../components/Hero/Hero"
import Presentation from "../../components/Presentation/Presentation"
import style from './Landing.module.css';

export default function Landing(){
    return(
        <main className={style.mainContainer}>
            <Hero />
            <Presentation />
        </main>
    )
}