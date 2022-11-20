import React, { Fragment, useEffect } from 'react'
import fresanutri__der from '../img/strawberries/img-fresas-6.png'
import fresanutri__izq from '../img/strawberries/img-fresas-7.png'
import fnutrigde__izq from '../img/strawberries/img-fresas-4.png'
import { nutriArr } from '../utilies/constant'
import { gsap, Power4 } from 'gsap'
import { ScrollTrigger } from '../animate/ScrollTrigger'


const Nutri = () => {

    //Register de plugin for animation scroll
    gsap.registerPlugin(ScrollTrigger);

    /// Get viewport with for movil animation
    function getViewPortWidth() {
        var viewportwidth;
        // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
        if (typeof window.innerWidth != 'undefined') {
            viewportwidth = window.innerWidth;
            // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
        } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
            viewportwidth = document.documentElement.clientWidth;
            // older versions of IE
        } else {
            viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
        }
        return viewportwidth;
    }



    // Animations
    useEffect(() => {
        const titleNutri = document.querySelector('.nutri__title')
        const nutriPortions = document.querySelector('.nutri__portions')
        const nutriIngredientes = document.querySelector('.nutri__ingredientes')
        const tableGroup = document.querySelectorAll('.table__group')

        const timeLineNutri = gsap.timeline({
            scrollTrigger: {
                pin: true,
                trigger: getViewPortWidth() < 768 ? '.header__bar' : '.hero__flavors',
                // markers: true,
                start: 'top top',
                end: '1% 1%',
                duration: 1
            },
            defaults: {
                opacity: 0,
                ease: Power4.easeOut,
                stagger: 0.05
            },
        });


        timeLineNutri.from(titleNutri, { x: -500 })
            .from(nutriPortions, { x: -500 })
            .from(nutriIngredientes, { x: -500 })
            .from(tableGroup, { x: -200 });
    }, [])


    var i = 1;
    return (
        <Fragment>
            <section className="nutri__section" id='nutrimental'>
                <img className="fresanutri__der" src={fresanutri__der} alt="fresa arriba" />
                <img className="fresanutri__izq" src={fresanutri__izq} alt="fresa en nutrimental arriba" />
                <img className="fnutrigde__izq" src={fnutrigde__izq} alt="fresa arriba" />

                <div className="nutri__container">
                    <h2 className="nutri__title">Información nutrimental</h2>

                    <div className="nutri__group">
                        <div className="nutri__gral">
                            <p className="nutri__portions">Vitalínea® Bebible Guayaba 217gr <br />            Valor promedio por porción de 217gr <br />
                                Porciones por envase: 1</p>
                            <p className="nutri__ingredientes"><span>Ingredientes:</span> <br />
                                Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos lácticos.
                            </p>
                        </div>

                        <div className="nutri__table">
                            {nutriArr.map(item => {
                                i = i + 1
                                var { contenido, cantidad } = item;
                                return (
                                    <div className="table__group" key={i.toString()}>
                                        <p className="table__contenido">{contenido}</p>
                                        <p className="table__cantidad">{cantidad}</p>
                                    </div>
                                )

                            })}
                        </div> {/* End nutri table */}
                    </div>

                </div>  {/* End nutri container */}
            </section>
        </Fragment>


    )
}

export default Nutri


