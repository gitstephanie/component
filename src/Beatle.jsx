import React, {Component} from 'react';
import App from './App';

class Beatle extends Component {
    state = {
      lastNames: []
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({lastNames: {
                "Paul" : "McCartney", 
                "John": "Lennon", 
                "George": "Harrison", 
                "Ringo": "Starr"
            }
        })
        }, 1000)
    }

    render (){
      return this.props.lastNames;
    }

}

export default Beatle