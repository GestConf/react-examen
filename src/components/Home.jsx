import React from 'react'
import ListaPropiedades from './ListaPropiedades'
import '../styles/home.css'
import Buscador from './Buscador'


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            valor: '',
            parametroBusqueda: ''
        }
    }

    render() {

        let cambiarBuscador = (e, y) => {


            this.setState({ valor: e, parametroBusqueda: y })

        }

        return (

            <div>
                <div className="container-buscador">
                    <Buscador data={cambiarBuscador} />
                </div>
                <div className="container-home">
                    <div className="container-title">
                        <span className="title-header">{this.props.title}</span>
                        <span className="count">{`${this.props.data.length}+ stays`}</span>
                    </div>
                    <ListaPropiedades data={this.props.data} buscar={this.state.valor} parametroBusqueda={this.state.parametroBusqueda} />
                </div>
            </div>

        )
    }

}

export default Home
