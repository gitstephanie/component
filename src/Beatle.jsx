import React, { PureComponent } from 'react';

const lastNames = {
    "Paul": "McCartney", 
    "John": "Lennon", 
    "George": "Harrison",
    "Ringo": "Starr"
}

export class Beatle extends PureComponent {
    state = {
      lastName: ""
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({lastName: lastNames[this.props.name]
        })
        }, 1000)
    }

    render (){
      return (
        <div>
            <p>{this.props.name}: {this.state.lastName}</p>
        </div>
      );
    }

}


