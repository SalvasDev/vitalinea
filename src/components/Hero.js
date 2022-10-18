import React from 'react'
import bottle__top from '../img/products/img-bote-fresa.png'
import bottle__top2x from '../img/products/img-bote-fresa@2x.png'
import bottle__top3x from '../img/products/img-bote-fresa@3x.png'

import sello__avalado from '../img/logos/img-sello-avalado.png'
import sello__avalado2x from '../img/logos/img-sello-avalado@2x.png'
import sello__avalado3x from '../img/logos/img-sello-avalado@3x.png'

import kcal from '../img/logos/img-100-kcal.png'
import kcal2x from '../img/logos/img-100-kcal@2x.png'
import kcal3x from '../img/logos/img-100-kcal@3x.png'

import flecha from '../img/flecha.svg'







const Hero = () => {
    return (
        <section className="hero__section">
            <div className="hero__container">
                <img className='hero__bottle' src={bottle__top} srcset={bottle__top2x || bottle__top3x} alt="Botella de fresa principal" />

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

                    <button className="comprar__btn">Comprar en Walmart</button>

                    <div className="hero__sellos">
                        <img src={sello__avalado} srcset={sello__avalado2x || sello__avalado3x} className="img-sello-avalado" alt='Sello de avalado' />
                        <img src={kcal} srcset={kcal2x || kcal3x} className="img-100-kcal" alt='Sello cantidad de kilocalorias' />
                    </div>
                </div> {/* End hero info */}

                {/* Arrow */}
                <button className="arrow__oval">
                    <img src={flecha} className="flecha" alt="arrow" />
                </button>
            </div>
        </section>

    )
}

export default Hero