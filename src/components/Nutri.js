import React, { Fragment } from 'react'

const nutriArr = [
    {
        contenido: 'Contenido energético kJ/ kcal',
        cantidad: '413,2/97,9'
    },

    {
        contenido: 'Proteínas (g)',
        cantidad: '5,3'
    },

    {
        contenido: 'Grasas (lípidos) (g)',
        cantidad: '2.1'
    },

    {
        contenido: 'Grasas saturadas (g)',
        cantidad: '1.4'
    },

    {
        contenido: 'Carbohidratos (Hidratos de carbono) (g)',
        cantidad: '12.4'
    },

    {
        contenido: 'Azúcares (g)',
        cantidad: '7.7'
    },

    {
        contenido: 'Azúcares añadidos (g)',
        cantidad: '0.1'
    },

    {
        contenido: 'Fibra dietética (g)',
        cantidad: '0.0'
    },

    {
        contenido: 'Sodio (mg)',
        cantidad: '92.7'
    },

    {
        contenido: 'Calcio(mg)',
        cantidad: '199.6'
    },

    {
        contenido: '% VNR *',
        cantidad: '22'
    },




]
var i = 1;

const Nutri = () => {
    return (
        <Fragment>
            <section className="nutri__section">
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


