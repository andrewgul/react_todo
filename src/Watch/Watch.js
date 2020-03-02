import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

class Watch extends Component {
    constructor(props){
        super()
        this.state = {date: new Date()}
    }

    // Вызывается сразу при создании компонента
    componentDidMount(){
        this.timerId = setInterval(() => this.tick(),
        1000)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return(
            <div>
                    <h2>Current date: {this.state.date.toLocaleDateString()}</h2> 
                    <h2>Current time: {this.state.date.toLocaleTimeString()}</h2> 
            </div>
        )
    }
}

export default Watch