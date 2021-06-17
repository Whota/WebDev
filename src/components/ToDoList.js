import React, { Component } from 'react';
import './ToDoList.css';
// import Input from './Input';
// import ItemList from './ItemList';

class ToDoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newItem: "",
            itemList: []
        }
    }

    addItem = (event) => {
        event.preventDefault()
        this.setState(state => {
            const itemList = state.itemList.concat(state.newItem)
            return {
                itemList,
                newItem: '' 
            }
        })
    }

    delItem = (i) => {
  
        this.setState(state=> {
            console.log('delItem() called, index: ', i)
            const itemList = state.itemList.filter((item,j) => i !== j)

            return {
                itemList,
                newItem: '',
            }
        })
    }

    handleInputChange = (event) => {
        this.setState({
            newItem: event.target.value,
        },
        () => {
            console.log('Input: ', this.state.newItem)
        })
    }

    render() {
        return (
            <div className="page">
                <h1>Welcome to my Todo List!</h1>
                <div className="notepad">
                    <div className="inputArea">
                        <h2>User Input</h2>
                            <input type="text" value={this.state.newItem} onChange={this.handleInputChange} placeholder="Task" />
                            <button onClick={(event) => this.addItem(event)}>Add</button>
                    </div>
                    <div className="listDisplay">
                        <h2>Item List</h2>
                        <ul>
                            {(this.state.itemList || []).map((item, index) => (
                                <li key={item}>
                                    {item} 
                                    <button 
                                        onClick={() => this.delItem(index)}
                                    >
                                        remove
                                    </button>
                                </li>))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;




















{/*<Input parentCallback = {this.getTodoItem} />*/}
{/*<ItemList newItem = {this.state.todoItem} />*/}

// getTodoItem = (item) => {
//     this.setState({
//         todoItem: item
//     })
// }