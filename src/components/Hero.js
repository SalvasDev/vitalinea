import React, { useEffect } from 'react'
import bottle__top from '../img/products/img-bote-fresa.png'
import { gsap, Bounce } from 'gsap'

// import bottle__top2x from '../img/products/img-bote-fresa@2x.png'
// import bottle__top3x from '../img/products/img-bote-fresa@3x.png'

import sello__avalado from '../img/logos/img-sello-avalado.png'
import sello__avalado2x from '../img/logos/img-sello-avalado@2x.png'
import sello__avalado3x from '../img/logos/img-sello-avalado@3x.png'

import kcal from '../img/logos/img-100-kcal.png'
import kcal2x from '../img/logos/img-100-kcal@2x.png'
import kcal3x from '../img/logos/img-100-kcal@3x.png'
import flecha from '../img/flecha.svg'

import fresa__top from '../img/strawberries/img-fresas-2.png'
import fresahero__izq from '../img/strawberries/img-fresas-5.png'




const Hero = () => {

    const timeline = gsap.timeline({ defaults: { duration: 1 } });

    useEffect(() => {
        const Bottle = document.querySelectorAll('.hero__bottle');
        const Arrow = document.querySelector('.arrow__oval');

        timeline.from(Bottle, { opacity: 0, ease: Bounce.easeOut, x: -500, stagger: 0.1 }).from(Arrow, { opacity: 0, ease: Bounce.easeOut, y: -10, repeat: 1, stagger: 0.1 });
    }, []);




    return (
        <section className="hero__section">
            <img className="fresa__arriba" src={fresa__top} alt="fresa arriba" />
            <img className="fresahero__izq" src={fresahero__izq} alt="fresa arriba" />
            <div className="hero__bottle"></div>

            <div className="hero__container">
                <img className='hero__bottle' src={bottle__top} alt="Botella de fresa principal" />

                {/* Hero info */}
                <div className="hero__info">

                    {/* Flavor butttons */}
                    <div className="hero__flavors">
                        <p className="flavor__title">Sabor:</p>
                        <button className="flavor__btn">Fresa</button>
                        <button className="flavor__btn">Guayaba</button>
                        <button className="flavor__btn">Toronja</button>
                    </div>

                    <h1 className="hero__title">Vitalínea® Bebible Fresa 217 gr.</h1>

                    <p className="hero__text">¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de las personas que siempre están activas y quieren probar algo sano, rico y práctico.</p>

                    <a href="https://super.walmart.com.mx/search?q=vitalinea" >
                        <button className="comprar__btn">Comprar en Walmart</button>
                    </a>

                    <div className="hero__sellos">
                        <img src={sello__avalado} srcSet={sello__avalado2x || sello__avalado3x} className="img-sello-avalado" alt='Sello de avalado' />
                        <img src={kcal} srcSet={kcal2x || kcal3x} className="img-100-kcal" alt='Sello cantidad de kilocalorias' />
                    </div>
                </div> {/* End hero info */}
            </div>
            {/* Arrow */}
            <button className="arrow__oval">
                <img src={flecha} className="flecha" alt="arrow" />
            </button>
        </section>

    )
}


export default Hero
