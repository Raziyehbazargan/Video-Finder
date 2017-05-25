import React from 'react';

// child Component has access to property of child use "props" :props.videos
const VideoList = (props) => {
  const videoItems = props.video.map(video => {
    return <VideoListItem video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
        {videoItems}
    </ul>
  );
}

export default VideoList;
