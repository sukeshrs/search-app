import React, { Component } from 'react';
//The above line imports React from react and pulls out Component from it


class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state ={ term : ''};
    }

    render(){
        return (
        <div>
        <input
         value={this.state.term}
         onChange={(event) => {this.setState({term : event.target.value})}}/>
        inpt value: {this.state.term}
        </div>
       
        );
    }

    handleInputChange (event){
        console.log(event);
    }

}

export default SearchBar;