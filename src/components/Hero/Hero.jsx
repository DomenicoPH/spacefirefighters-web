import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroImg from '../../assets/sff-h.png';
import style from './Hero.module.css';

export default function Hero(){
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        // Estado inicial
        gsap.set(titleRef.current, { opacity: 0, y: -100 });
        gsap.set(subtitleRef.current, { opacity: 0, y: 50 });

        const tl = gsap.timeline();

        tl.to(titleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
        });

        tl.to(subtitleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
        }, "-=0.5");
    }, []);


    return(
        <div className={style.container}>
            <h1 ref={titleRef} className={style.title}>
                <span ref={subtitleRef} className={style.subtitle}>Heroes Beyond Gravity</span>
                Space Firefighters
            </h1>
            <div className={style.overlay}></div> 
            <img src={heroImg} alt="hero image" />
        </div>
    )
}