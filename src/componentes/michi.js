import React from 'react'
import todos from '../imagenes/todos.jpg'
import './Style/Michis.css'
class Michi extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: props.gatito.nombre,
            age: props.gatito.edad,


        }
    }
    //----------esto cambia un estado al pasar 5 segundos----------------
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             age:10
    //         })
    //     },5000)

    // }
    handleChange(e) {

        let nombre = e.target.value;
        this.setState({ name: nombre })
        console.log(this.state.name)

    }

    handleClick() {
        this.setState(state => ({
            entrada: "",
            name: 'hola',
            age: 10
        }));

    }


    render() {
        return (

            <div className='card mx-auto'>

                <h1 className='h1 mx-auto h1'> este es un componente Michis</h1>
                <br></br>
                <h2 className='h2 mx-auto'>mi nombre es: {this.state.name} y tengo: {this.state.age} años </h2>
                <img src={todos} className='img' />
                <br></br>
                <div className='div mx-auto'>
                    <button onClick={this.handleClick} className='button'>confirmar</button>
                    <input id="ingreso" className='inputB' placeholder='ingreso' onChange={this.handleChange} />
                </div>

            </div>


        )
    }
}
export default Michi