import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD2ulV9KPblWPH5zP2l3SBGLMsXvPDamXc';


YTSearch({key:API_KEY , term : 'dogs'}, function(data){
    console.log(data);
});

//Create a new component. this should produce some HTML
const App = () => {
    return(
        <div>
             <SearchBar/>
        </div>
        );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
//Take these component`s generated HTML and put in on
// the page(in the DOM)