// ----------------------------metodo tradicional de introducir un h1---------------
// const texto= document.createElement('h1')
// texto.innerText= 'Hola buho'
// const contenedor=document.getElementById('root')
// contenedor.appendChild(texto)
//----------------------------ahora con react---------------------------------------
import React from 'react'
import ReactDom from 'react-dom'

const michi = {
  name: 'Cachuza',
  tipo: 'Gato',
  imagen: 'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75'
}
const opcion = 1;

function cargarObjeto(nombre, opcion) {
  if (opcion == 1) {
    return `${michi.name}`
  } if (opcion == "") {
    return `${michi.tipo}`
  }

}
const contenido = (
  <div>
    <h1>Hola {cargarObjeto(michi, 1)}</h1>
    <img src={michi.imagen} />
  </div>
)
const contenedor = document.getElementById('root')
ReactDom.render(contenido, contenedor)
