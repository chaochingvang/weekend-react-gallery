import React from 'react';
const useState = React.useState;
const useEffect = React.useEffect;
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryForm from '../GalleryForm/GalleryForm.jsx';

function App() {
  //initial render
  useEffect(() => {
    getGalleryList();
  }, []);

  const [galleryList, setGalleryList] = useState([]);

  //GET method
  const getGalleryList = () => {
    axios({
      method: `GET`,
      url: `/gallery`
    }).then((response) => {
      console.log(`app.jsx GET /gallery successful`);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(`Error! app.jsx GET /gallery fail!`, error);
    });
  }//end GET method

  //PUT update like count method
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
  }//end PUT update like count

  //PUT show image or description
  const updateImgStatus = (itemToUpdate) => {
    axios({
      method: `PUT`,
      url: `gallery/status/${itemToUpdate.id}`,
      data: {
        imgStatus: itemToUpdate.imgStatus
      }
    }).then((response) => {
      console.log(`able to update imgStatus! Success!`);
      getGalleryList();
    }).catch((error) => {
      console.log(`ERROR! unable to update imgStatus.`, error);
    })
  }//end PUT show image or description

  //POST add creature
  const addNewCreature = (newCreature) => {
    //user input validation
    if (newCreature.title === ``) {
      alert(`Please enter in a name for your creature.`);
      return;
    }
    else if (newCreature.description === ``) {
      alert(`Please enter in a description for your creature.`);
      return;
    }
    else if (newCreature.path === ``) {
      alert(`Please enter in a url path for your creature image.`)
      return;
    }

    axios({
      method: `POST`,
      url: `/gallery`,
      data: newCreature
    }).then((response) => {
      console.log(`successfully added!`);
      getGalleryList();
    }).catch((error) => {
      console.log(`ERROR! unable to add.`, error);
    });
  }// end POST add creature

  //DELETE delete creature
  const deleteCreature = (creature) => {
    axios({
      method: `DELETE`,
      url: `/gallery/${creature.id}`
    }).then((response) => {
      console.log(`successfully deleted!`);
      getGalleryList();
    }).catch((error) => {
      console.log(`ERROR! Unable to delete.`, error);
    });
  }// end DELETE delete creature

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Mythical Creatures</h1>
        </header>
        <GalleryForm addNewCreature={addNewCreature}/>
        <GalleryList
          galleryList={galleryList}
          updateLikeCount={updateLikeCount}
          updateImgStatus={updateImgStatus}
          deleteCreature={deleteCreature}
        />
      </div>
    );
}

export default App;
