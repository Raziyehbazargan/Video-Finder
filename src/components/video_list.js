import React from 'react';
import VideoListItem from './video_list_item';

// child Component has access to property of child use "props" :props.videos
const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    //when we have multiple child using map or array we need to specify a unique key for each child element
    return (
        <VideoListItem
          onVideoSelect={props.onVideoSelect}
          key={video.etag}
          video={video} />
      );
  });

  return (
    <ul className="col-md-4 list-group">
        {videoItems}
    </ul>
  );
}

export default VideoList;
