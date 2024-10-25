import React from 'react'
import tv from "./images/icons/apple-tv-logo.png"
import airpod from "./images/icons/servant-logo.png"
 function Tv_airpod() {
  return (
    <div>
      
      <section className="fifth-heghlight-wrapper">
    <div className="left-side-wrapper">
        <div className="top-logo-wrapper">
            <div className="logo-wrapper">
                <img src={tv} />
            </div>
        </div>

        <div className="tvshow-logo-wraper">
            <img src={airpod} />
        </div>

        <div className="watch-more-wrapper">
            <a href="#">Watch the trailer</a>
        </div>
    </div>
    <div className="right-side-wrapper">
        <div className="top-logo-wrapper">
            <div className="logo-wrapper">
                AirPods Pro
            </div>
        </div>

        <div className="description-wraper">
            Magic like you’ve never heard.
        </div>

        <div className="link-wrapper">
            <ul>
                <li><a href="">Learn more</a></li>
                <li><a href="">Buy</a></li>
            </ul>
        </div>
    </div>
</section>
    </div>
  )
}
export default Tv_airpod;