import React from "react";
import Youtube from 'react-youtube';



function Video(props) {
  const videos = props.videos
  const options = {
    // Here you would create an options object where you can
    //.   put the options desired by the youtube component
    height: '400',
    width: '650',
    playerVars: {
      autoplay: 1,
    }
  }

  return (
    // <Youtube videoId={videos[0].embedId} opts={options} />

    <div>
      {videos.map((vid) => (
        <div key={vid.embedId}>
          <h3>{vid.title}</h3>
          <Youtube videoId={vid.embedId} opts={options} />


        </div>
      ))}


    </div>
  )
}





// const Video = (props) => {
//   const videos = props.videos

// return (
//   <div className="video-list">

//     {videos.map((vid) => (
//       <div key={vid.embedId}>
//         <h2>{vid.title}</h2>
//         <iframe
//           width="560"
//           height="316"
//           src='https://www.youtube.com/embed/{vid.embedId}'
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         // title="Embedded youtube"
//         />

//       </div>
//     ))}

//   </div>
// );
// }



export default Video;