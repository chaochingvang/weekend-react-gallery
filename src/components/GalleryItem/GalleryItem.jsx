import './GalleryItem.css';

function GalleryItem({ updateImgStatus, updateLikeCount, galleryItem }) {

    const handleImgClick = () => {
        galleryItem.imgStatus = !galleryItem.imgStatus;
        console.log(`CLICKED`, galleryItem.imgStatus);

        updateImgStatus(galleryItem);
    }


    const showImage = (
        <img
            onClick={handleImgClick}
            className="galleryItem"
            src={galleryItem.path}
        />);
    
    const showDescription = (
        <p onClick={handleImgClick}>
            {galleryItem.description}
        </p>
    );
    
    console.log(galleryItem.imgStatus);

    return (<>
        <div className="galleryItemContainer">
            {galleryItem.imgStatus
                ? showImage
                : showDescription}
        </div>
            <div><button onClick={() => updateLikeCount(galleryItem)}>LIKE</button></div>
            <p>{galleryItem.likes} love this!</p>

    </>);
}
export default GalleryItem;