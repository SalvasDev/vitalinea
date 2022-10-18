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
                                var { contenido, cantidad } = item;
                                return (
                                    <div className="table__group">
                                        <p className="table__contenido">{contenido}</p>
                                        <p className="table__cantidad">{cantidad}</p>
                                    </div>
                                )

                            })}

                        </div>
                    </div>

                </div>
            </section>
        </Fragment>


    )
}

export default Nutri


// {
//     buttons.map((btnInd) => {

//         i = i + 1;

//         var { idd, name } = countries[listRandom[i - 1]] || {}


//         return <Btnsolut
//             key={i.toString()}
//             nameCountry={name?.common}
//             idd={(idd?.root + idd?.suffixes).toString()}
//             btnLetter={btnInd}
//             iddRight={iddRight}
//             newButton={'normal'}
//         />


//     })

// } 