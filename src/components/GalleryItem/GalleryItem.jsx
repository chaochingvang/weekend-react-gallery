import './GalleryItem.css';

function GalleryItem({ updateImgStatus, updateLikeCount, galleryItem, deleteCreature }) {

    //when image clicked, updateImgStatus to toggle between img and description
    const handleImgClick = () => {
        updateImgStatus(galleryItem);
    }

    
    const handleDelete = () => {
        //confirmation pops up on delete btn clicked
        let confirmation = confirm(`Are you sure you want to delete ${galleryItem.title}?`)

        //if user clicks yes, deleteCreature
        if (confirmation === true) {
            deleteCreature(galleryItem);
        }
        //otherwise, do nothing
        else {
            return;
        }
    }

    // put img HTML/jsx into variable for easy use
    const showImage = (
        <img
            className="galleryImg"
            src={galleryItem.path}
        />);

    // put description HTML/jsx into variable for easy use
    const showDescription = (
        <p className="descriptionBorder">
            {galleryItem.description}
        </p>
    );


    return (<>
        <div className="data">
        <div className="galleryItemContainer">
            <div
                className="galleryImgContainer"
                    onClick={handleImgClick}>
                {/* IF imgStatus is true -> show the image, 
                ELSE imgStatus is false -> show description */}
                {galleryItem.imgStatus
                    ? showImage
                    : showDescription}
            </div>
            <div className="imgFooter">
                    <button onClick={() => updateLikeCount(galleryItem)}>LIKE</button>
                    <button onClick={() => handleDelete()}>DELETE</button>
                <p>{galleryItem.likes} love this!</p>
            </div>
        </div>
        <span className="spacer"></span>
        </div>
    </>);
}
export default GalleryItem;