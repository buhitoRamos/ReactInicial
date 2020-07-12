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
import Wellcome from './componentes/Wellcome'
import PrimaryPage from './pages/PrimaryPage'

const cachu= {
  nombre: 'Cachuza',
  edad: 6
}
const peri={
  nombre: 'Perico',
  edad: 4
}


//aca agrego mis webs components
const contenido = (
  <div>
   <Michi gatito={cachu} />
   <Michi gatito={peri} />
   <PrimaryPage gatito={peri}/>

  </div>
)

const contenedor = document.getElementById('root')
ReactDom.render(contenido, contenedor)



