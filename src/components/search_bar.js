import React, { Component } from 'react';
//The above line imports React from react and pulls out Component from it


class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state ={ term : ''};
    }

    render(){
        return (
        <div className="search-bar">
        <input
         value={this.state.term}
         onChange={(event) => this.onInputChange(event.target.value)}/>
        </div>   
        );
    }


    onInputChange(term){
        this.setState({term : term});
        this.props.onSearchTermChange(term);
    }

    handleInputChange (event){
        console.log(event);
    }

}

export default SearchBar;