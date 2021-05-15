import React from 'react'
import Propiedad from './Propiedad'
import '../styles/listaPropiedades.css'





class ListaPropiedades extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            casas: this.props.data,
            valor: ''
        }
    }


    render() {
        return (
            <div className="lista-propiedades">
                {
                    this.state.casas.map((element, key) => {
                        return (
                            this.props.buscar == '' ? <Propiedad data={element} key={key} /> :
                                element[this.props.parametroBusqueda] == this.props.buscar ? <Propiedad data={element} key={key} /> : ''
                        )
                    })
                }


            </div>
        )
    }


}


export default ListaPropiedades
