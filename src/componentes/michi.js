import React from 'react'
import cachuImg from '../imagenes/caca.png'
import './Style/Michis.css'
class Michi extends React.Component{
    render(){
        return (
            <div>
                <h1 className='h1'> este es un componente cachuzo</h1>
                  <h2>{this.props.opcion}</h2>
                <br></br>
                <img src={cachuImg} />

            </div>          
            
        )
    }
}
export default Michi