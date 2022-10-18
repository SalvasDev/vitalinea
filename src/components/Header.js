import React, { Fragment } from 'react'
import logo__vitalinea from '../img/logos/img-logo-vitalinea.png'
import logo__vit2x from '../img/logos/img-logo-vitalinea@2x.png'
import logo__vit3x from '../img/logos/img-logo-vitalinea@3x.png'
import facebook from '../img/logos/img-social-facebook.svg'
import instagram from '../img/logos/img-social-instagram.svg'
import youtube from '../img/logos/img-social-youtube.svg'
import Hero from './Hero'

const Header = () => {
    return (
        <Fragment>
            <section className="header__section">
                <header className="header__bar">
                    <img className="logo__vitalinea" src={logo__vitalinea} srcset={logo__vit2x || logo__vit3x} alt="principal logo" />
                    <nav>
                        <a href="#products">Nuestros productos</a>
                        <a href="#nutrimental">Disfruta cuidarte</a>
                        <a href="index.html">Blog</a>
                    </nav>
                    <div className="networks">
                        <a href="https://www.facebook.com/VitalineaMX">
                            <img src={facebook} className="img-social-facebook" alt='Logo de facebook' />
                        </a>
                        <a href="https://www.instagram.com/vitalineamx/">
                            <img src={instagram} className="img-social-facebook" alt='Logo de instagram' />
                        </a>
                        <a href="https://www.youtube.com/c/VitalineaM%C3%A9xico">
                            <img src={youtube} className="img-social-facebook" alt='Logo de youtube' />
                        </a>
                    </div>

                    <button className="btn__burg" id="btn-burg">
                        <div className="btn__line"></div>
                        <div className="btn__line"></div>
                        <div className="btn__line"></div>
                    </button>

                </header>
                <Hero />

            </section>

        </Fragment>

    )
}

export default Header
