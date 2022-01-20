import React from 'react';

const UnsplashImage = ({ url, key, getImg, image }) => {
  return ( 
    <img src={url} key={key} alt="" style={{width: '100%'}} onClick={() => getImg(image.urls.thumb)}/>
  )
  
  
};

export default UnsplashImage;
