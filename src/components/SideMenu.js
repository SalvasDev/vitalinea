import React, { Fragment } from 'react'



const SideMenu = ({ setActiveMenu }) => {

    const handleClick = e => {
        e.preventDefault()
        setActiveMenu(false)
    }

    return (
        <Fragment>
            <div className='menu__container'>
                <button
                    className="close__button"
                    onClick={e => handleClick(e)}
                >
                    <span className="material-symbols-rounded">close</span></button>
                <nav className="burger__menu">
                    <a href="#products">Nuestros productos</a>
                    <a href="#nutrimental">Disfruta cuidarte</a>
                    <a href="index.html">Blog</a>
                </nav>

            </div>
        </Fragment>
    )
}

export default SideMenu
