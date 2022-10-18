import React, { Fragment } from 'react'
import logo__vitalinea from "../img/logos/img-logo-vitalinea.png"
import logo__vit2x from "../img/logos/img-logo-vitalinea@2x.png"
import logo__vit3x from "../img/logos/img-logo-vitalinea@3x.png"

const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <img className="logo__vitalinea" src={logo__vitalinea} srcset={logo__vit2x || logo__vit3x} alt="principal logo" />
            </header>
        </Fragment>

    )
}

export default Header
