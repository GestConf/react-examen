import React from 'react'
import '../styles/buscador.css'
import img from '../assets/img-buscar.png'

class Buscador extends React.Component {
    constructor(props) {
        super(props)

        this.state = { buscar: '', parametroBusqueda: 'city' }
    }

    handleChange = (e) => {
        this.setState({ buscar: e.target.value })
    }
    handleChangeParametroBusqueda = (e) => {
        this.setState({ parametroBusqueda: e.target.value })
    }

    render() {
        const { data } = this.props
        const { buscar, parametroBusqueda } = this.state

        return (





            <div className="buscador" >

                <select className="opciones" name="select" onChange={this.handleChangeParametroBusqueda} value={parametroBusqueda}>
                    <option value="city" selected>City</option>
                    <option value="country" selected>Country</option>
                </select>
                <input className="texto-buscar" value={buscar} onChange={this.handleChange} onKeyUp={() => data(buscar, parametroBusqueda)} type="text" id="buscar" placeholder="Buscar..." />
                
                <button className="boton-buscar" onClick={() => data(buscar, parametroBusqueda)}><img src={img} width="20px"></img> </button>


            </div>
        )

    }

}



export default Buscador
