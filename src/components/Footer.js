import React, { Fragment } from 'react'

import danone__logo from '../img/logos/img-logo-danone.png'
import danone__logo2x from '../img/logos/img-logo-danone@2x.png'
import danone__logo3x from '../img/logos/img-logo-danone@3x.png'

import vitalinea__footer from '../img/logos/img-logo-footer.png'
import vitalinea__footer2x from '../img/logos/img-logo-footer@2x.png'
import vitalinea__footer3x from '../img/logos/img-logo-footer@3x.png'

const Footer = () => {
    return (
        <Fragment>
            <section className="footer__section">
                <div className="footer__container">
                    <div className="footer__logos">
                        <img className='footer__danone' src={danone__logo} srcSet={danone__logo2x || danone__logo3x} alt="" />

                        <div className="footer__group__desk">
                            <p className="footer__politicas">Términos y condiciones    |    Políticas de privacidad    |     Aviso de privacidad</p>
                            <p className="footer__copyright">Danone de México 2017 ©. Todos los derechos reservados 2017</p>
                        </div>
                        <img className='footer__vitalinea' src={vitalinea__footer} srcSet={vitalinea__footer2x || vitalinea__footer3x} alt="" />
                    </div>

                    <div className="footer__group">
                        <p className="footer__politicas">Términos y condiciones    |    Políticas de privacidad    |     Aviso de privacidad</p>
                        <p className="footer__copyright">Danone de México 2017 ©. Todos los derechos reservados 2017</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Footer
