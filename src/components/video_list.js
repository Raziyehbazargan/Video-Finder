import React from 'react';

// child Component has access to property of child use "props"
const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
}

export default VideoList;
