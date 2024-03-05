import {Component} from "react"

class Test extends Component {
    state =  {
        count : 0
    }

    add = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        const {count} = this.state
        return(
            <div>
                <h1>Hi</h1>
                <p>{count}</p>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default Test