import DevelopInfo from "../../components/DevelopInfo/DevelopInfo";
import Hero from "../../components/Hero/Hero"
import Presentation from "../../components/Presentation/Presentation"
import style from './Landing.module.css';

export default function Landing(){
    return(
        <main>
            <Hero />
            <Presentation />
            <DevelopInfo />
        </main>
    )
}