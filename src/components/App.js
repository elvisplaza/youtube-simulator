import React from 'react';
import SearchBar from './SearchBar';

//simple components
import VideoList from './VideoList';


//functions 
import youtube from './../apis/youtube';

class App extends React.Component {
  constructor(){
    super();
    this.state={videos:[]};
  }

  //this is the call back function from searchbar component
  //this also calls the google api with error handling
  onTermSubmit=(term)=>{
    youtube.get('/search',{
      params:{
        q:term
      }
    })
    .then((res)=>this.setState({videos:res.data.items}))
    .catch((error)=>{
      if(error.response){
        alert(`Error:${error.response.status}`)
      } else if (error.request){
        alert( `${error.request}`)
      } else {
        alert( `Error ${error.message}`)
      }
    })
  };

  render(){
    return(
      <div className="ui container">
        <SearchBar 
          onFormSubmit={this.onTermSubmit}
        />
        <VideoList 
        videos={this.state.videos}
        
        />
      </div>
    )
  }
}

export default App;