
import './App.css';
import Gallery from './components/Gallery';


const App = () => {
  

  return (
        <>
          <h1 style={{ textAlign: 'center', margin: '30px'}}>Image Gallery</h1>
            <p style={{ textAlign: 'center', margin: '30px', color: "grey", fontSize: "23px"}}>The internet’s source of freely-usable images.
                Powered by creators everywhere.
            </p>
          <Gallery />
        </>

  )
        
};

export default App;
