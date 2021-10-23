import React from 'react';
const useState = React.useState;
const useEffect = React.useEffect;
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {
  useEffect(() => {
    getGalleryList();
  }, []);

  const [galleryList, setGalleryList] = useState([]);

  const getGalleryList = () => {
    axios({
      method: `GET`,
      url: `/gallery`
    }).then((response) => {
      console.log(`app.jsx GET /gallery successful`, response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(`Error! app.jsx GET /gallery fail!`, error);
    });
  }

  const updateLikeCount = (itemToUpdate) => {
    axios({
      method: `PUT`,
      url: `/gallery/like/${itemToUpdate.id}`
    }).then((response) => {
      console.log(`app.jsx PUT /gallery/like/${itemToUpdate.id} successful`);
      getGalleryList();
    }).catch((error) => {
      console.log(`Error! app.jsx PUT /gallery/like/${itemToUpdate.id} fail!`);
    });
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList
          galleryList={galleryList}
          updateLikeCount={updateLikeCount}  
        />
      </div>
    );
}

export default App;
