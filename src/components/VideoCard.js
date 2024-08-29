import React from "react";

const VideoCard = ({ info }) => {

  if(!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border-fuchsia-100" style={{position: 'relative', zIndex: -10}}>
      <VideoCard info={info} />
      <div className="px-4" style={{position: 'absolute', top: 10, backgroundColor: '#000', left: 15}}>
        <p className="text-white">Ad</p>
      </div>
    </div>
  );
};

export default VideoCard;