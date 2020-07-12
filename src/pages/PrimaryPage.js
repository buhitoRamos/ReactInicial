import React from 'react'
import Michi from '../componentes/michi'
import Wellcome from '../componentes/Wellcome'

class PrimaryPage extends React.Component {


    render() {
        return (

            <div>
               <Michi gatito={this.props.gatito} />
            </div>
        )
    }


}
export default PrimaryPage