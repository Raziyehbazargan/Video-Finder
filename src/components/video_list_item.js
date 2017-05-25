import React from 'react';

// const VideoListItem = (props) => {
//   const video = props.video;
//   return <li>Video</li>
// }

//Es6 synatx
const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video; using ({video}) is equal this line
  //const onVideoSelect = props.onVideoSelect;

  console.log(video); // check data in console
  const imageURL = video.snippet.thumbnails.default.url;
  // this is response come from youtube-api call

  return (
    <li onClick={() => onVideoSelect(video)} className="listgroup-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}
export default VideoListItem;
