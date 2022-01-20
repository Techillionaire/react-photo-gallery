import { useState, useEffect } from 'react';
import axios from 'axios';
import UnsplashImage from './UnsplashImage';
import Spinner from './Spinner';

const Gallery = () => {

  const [imgSrc, setImgSrc] = useState([])

  useEffect(() => {
    const url = "https://api.unsplash.com";

    setTimeout(() => {
      axios.get(`${url}/photos/random?client_id=E3iqD4knQXz3seiitgeVCrsnAS24tsJjrx4LDJBnx3w&count=50`)
      .then(res => 
      setImgSrc([...imgSrc, ...res.data]),
      setLoading(false))

    }, 1500)
  }, [])


    

      const [model, setModel] = useState(false);
      const [tempImgSrc, setTempImgSrc] = useState('');
      const [loading, setLoading] = useState(true)

      const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);


      }
     

  return (
    
      <>
        <div className={model ? "model open" : "model"}>
          <img src={tempImgSrc} alt="tempImg" />
          <i class="fas fa-times" onClick={() => setModel(false)}/>
        </div>

        
        
        <div className="gallery">
            { loading && <Spinner /> }
            {imgSrc.map(image => {
                return (
                    <div className="pics" >
                      <UnsplashImage url={image.urls.thumb} key={image.id} getImg={getImg} imgSrc={imgSrc} image={image}/>
                    </div>
                )
                

            })}
          </div>
      
      </>
    
        
  );
};

export default Gallery;