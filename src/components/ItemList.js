import React, { Component } from 'react';

class ItemList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newItem: '',
            items: []
        }
    }

    addItem = () => {
        this.setState(state => {
            const items = state.list.concat(state.newItem)
            return {
                items,
                newItem: ''
            }
        })
    }

    delItem = () => {
        console.log('delItem() called')
    }

    render() {
        return (
            <div>
                <h2>Item List</h2>
                <p>{this.props.newItem}</p>
                <ul>
                    {(this.state.items || []).map(item => (<li key={item}>{item}</li>))}
                </ul>
            </div>
        );
    }
}

export default ItemList;