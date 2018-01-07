import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD2ulV9KPblWPH5zP2l3SBGLMsXvPDamXc';




//Create a new component. this should produce some HTML
class App extends Component {

    constructor (props) {
        super(props);

        this.state = { 
                        videos : [],
                        selectedVideo : null 
                     };

        YTSearch({ key: API_KEY, term: 'dogs' },  (data) => {
            this.setState({videos : data,
                           selectedVideo : data[0] });
            console.log(this.state.videos);
        });
    }


    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList                 
                 onVideoSelect = {(selectedVideo) => {
                     this.setState({selectedVideo : selectedVideo})
                 } }
                 videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
//Take these component`s generated HTML and put in on
// the page(in the DOM)