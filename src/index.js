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

var gatito= {
  nombre: 'Cachuza',
  edad: 6
}


//aca agrego mis webs components
const contenido = (
  <div>
   <Michi gatito={gatito} />

  </div>
)

const contenedor = document.getElementById('root')
ReactDom.render(contenido, contenedor)



