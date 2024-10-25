import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';

 function AppleYoutube() {
    const [Youtubevideo, setYoutubevideo]=useState([]);


    useEffect(()=>{
   fetch(
  "https://www.googleapis.com/youtube/v3/search?key=AIzaSyA3jNIT2n8Stm_zpv2OLa1jPRPjwf6vvyU&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxREsult=6"
   )
   .then((res)=>res.json())
   .then((data)=>{
     setYoutubevideo(data.items);
   });
    }, []);
    console.log(Youtubevideo);
  return (
    <section>
    <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {Youtubevideo?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="blank">
                        <img src={singleVideo.snippet.thumbnails.high.url}/>
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
      </section>
    );
  }

export default AppleYoutube;