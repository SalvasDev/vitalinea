import React, { Fragment } from 'react'

import griego from '../img/products/img-vitalinea-griego.png'
import griego2x from '../img/products/img-vitalinea-griego@2x.png'
import griego3x from '../img/products/img-vitalinea-griego@3x.png'

import sin__azucar from '../img/products/img-vitalinea-sin-azucar.png'
import sin__azucar2x from '../img/products/img-vitalinea-sin-azucar@2x.png'
import sin__azucar3x from '../img/products/img-vitalinea-sin-azucar@3x.png'

import bebible from '../img/products/img-vitalinea-bebible.png'
import bebible2x from '../img/products/img-vitalinea-bebible@2x.png'
import bebible3x from '../img/products/img-vitalinea-bebible@3x.png'



const Familia = () => {
    return (
        <Fragment>
            <section className="familia__section">
                <div className="familia__container">
                    <h2 className="familia__title">LA FAMILIA VITALÍNEA</h2>

                    <div className="familia__group">

                        <div className="familia__product">
                            <img src={griego} srcSet={griego2x || griego3x} alt="Yogurth griego" />
                            <p className="text__product">Vitalínea Griego</p>
                        </div>

                        <div className="familia__product">
                            <img src={sin__azucar} srcSet={sin__azucar2x || sin__azucar3x} alt="Yogurth vitalinea sin azucar" />
                            <p className="text__product">Vitalínea sin Azúcar</p>
                        </div>

                        <div className="familia__product">
                            <img src={bebible} srcSet={bebible2x || bebible3x} alt="Yogurth vitalinea bebible" />
                            <p className="text__product">Vitalínea Bebible</p>
                        </div>

                    </div>
                </div>

            </section>
        </Fragment>

    )
}

export default Familia
