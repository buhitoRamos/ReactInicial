// ----------------------------metodo tradicional de introducir un h1---------------
// const texto= document.createElement('h1')
// texto.innerText= 'Hola buho'
// const contenedor=document.getElementById('root')
// contenedor.appendChild(texto)
//----------------------------ahora con react---------------------------------------

//importar react
import React from 'react'
import ReactDom from 'react-dom'
import Michi from './componentes/michi'
import 'bootstrap/dist/css/bootstrap.css'


//creo un objeto
const michi = {
  name: 'Cachuza',
  tipo: 'Gato'
}
var opcion = 1;

function cargarObjeto(nombre, opcion) {
  if (opcion == 1) {
    return `${michi.name}`
  } if (opcion == 2) {
    return `${michi.tipo}`
  }

}
const contenido = (
  <div>
    <div>
      <br></br>
      <input type='text' placeholder='ingreso'></input>
      <button onClick={cargarObjeto(michi, 2)} >confirmar</button>

    </div>
    <h1>Hola {cargarObjeto(michi, 1)}</h1>
    <h1> Es un {cargarObjeto(michi, 2)}</h1>
    <Michi
    opcion={opcion} />


  </div>
)
const contenedor = document.getElementById('root')
ReactDom.render(contenido, contenedor)


