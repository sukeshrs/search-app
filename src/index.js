import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD2ulV9KPblWPH5zP2l3SBGLMsXvPDamXc';




//Create a new component. this should produce some HTML
class App extends Component {

    constructor (props) {
        super(props);

        this.state = {videos : []};

        YTSearch({ key: API_KEY, term: 'dogs' },  (data) => {
            this.setState({videos : data});
            console.log(this.state.videos);
        });
    }


    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
//Take these component`s generated HTML and put in on
// the page(in the DOM)