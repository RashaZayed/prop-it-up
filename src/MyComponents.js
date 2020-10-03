import React, {Component} from 'react'

class PersonCard extends Component {
    render () {
        return (
        <div>
           <h1>
                {this.props.lastName}
               {this.props.firstName}
               
           </h1>
           <div>
               {this.props.age}
           </div>
           <div>
               {this.props.hairColor}
           </div>
        </div>

        )
    }
}
export default PersonCard ;