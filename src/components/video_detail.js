import React from 'react';

const VideoDetail =(props) => {

    const video = props.video;

    if(!video){
        return <div>Loading..</div>
    }
    const video_id = video.id.videoId;

    const url = 'https://www.youtube.com/embed/' + video_id;

    return (
        <div className ="video-detail col-md-6">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className="embed-reponsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;