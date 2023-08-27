import React from "react";

function Share({info}) {

    const share = () => {
        if (navigator.share) {
          navigator.share({
            title: info.title,
            text: info.content,
            url: info.url
          })
          .then(() => console.log('Shared successfully'))
          .catch((error) => console.error('Error sharing:', error));
        }
      };
    return(
        <div>
          <img src="share.png" alt="" onClick={share} />
        </div>
    )
}

export default Share