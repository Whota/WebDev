import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: ''
        }
    }

    passToList = (event) => {
        event.preventDefault();
        this.props.parentCallback(this.state.task)
    }

    handleInputChange = (event) => {
        this.setState({
            task: event.target.value
        },
        () => {
            console.log('Input: ', this.state.task)
        })
    }

    render() {
        return (
            <div>
                <h2>User Input Space</h2>
                <form>
                    <input type="text" value={this.state.task} onChange={this.handleInputChange} placeholder="Task" />
                    <button onClick={(event) => this.passToList(event)}>Add</button>
                </form>                            
            </div>
        );
    }
}
export default Input;