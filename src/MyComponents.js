import React, {Component} from 'react'

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state= {
           age: this.props.age
        }

    }
    ageInc =()=> {
        this.setState({ age: this.state.age + 1 });
    
     }
    render () {
        return (
        <div>
           <h1>
                {this.props.lastName},
                {this.props.firstName}
               
           </h1>
           <div>
               Age: {this.state.age}
           </div>
           <div>
               {this.props.hairColor}
           </div>
           {this.props.children}
           <button onClick={this.ageInc}>Birthday Button for {this.props.firstName}{this.props.lastName}</button>
        </div>

        )
  
  }
}

export default PersonCard ;