import React from 'react'
import cachuImg from '../imagenes/caca.png'
import './Style/Michis.css'
class Michi extends React.Component{    
    
    constructor(props){
        super(props);
        //como usar atributo---------------????
        var gto=this.props.gatito;
        alert("la edad heredada es: " +gto.edad)

    }
  
   
   
    eventoLoco(){
        const loro=document.getElementById('input')
       console.log(loro.value) 
       
    }
    

    render(){
        return (
            
            <div>
                
                <h1 className='h1'> este es un componente cachuzo</h1>
                <br></br> 
                <h2>el nombre es: {this.props.gatito.nombre} </h2>                             
                <img src={cachuImg} className='img'/>
                <br></br>
                
                <button onClick={this.eventoLoco} className='button'>loco</button> 
                <input id='input' className='input' placeholder='ingreso'></input>
            </div>   
             
            
        )
    }
}
export default Michi