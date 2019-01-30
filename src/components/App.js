import React from 'react';
import SearchBar from './SearchBar';

//simple components
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


//functions 
import youtube from './../apis/youtube';

class App extends React.Component {
  constructor(){
    super();
    this.state={videos:[], selectedVideo: null,};
  }
  componentDidMount(){
    this.onTermSubmit('buildings')
  }
  //this is the call back function from searchbar component
  //this also calls the google api with error handling
  onTermSubmit=(term)=>{
    youtube.get('/search',{
      params:{
        q:term
      }
    })
    .then((res)=>this.setState({videos:res.data.items,selectedVideo:res.data.items[0]}))
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

  onVideoSelect = (video)=>{
    this.setState({selectedVideo:video})
  };

  render(){
    return(
      <div className="ui container">
        <SearchBar 
          onFormSubmit={this.onTermSubmit}
        />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail 
                video={this.state.selectedVideo} 
              />  
            </div>
            <div className="five wide column">
              <VideoList 
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;