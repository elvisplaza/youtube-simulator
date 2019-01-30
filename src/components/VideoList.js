import React from 'react';

//simple component
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect})=>{
  const renderedList = videos.map((video)=>{
    return (
      <VideoItem 
        video={video} 
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
      />
    )
  });

  return(
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
}


export default VideoList