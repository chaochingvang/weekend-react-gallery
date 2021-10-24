import './GalleryItem.css';

function GalleryItem({ updateImgStatus, updateLikeCount, galleryItem }) {

    const handleImgClick = () => {
        galleryItem.imgStatus = !galleryItem.imgStatus;
        console.log(`CLICKED`, galleryItem.imgStatus);

        updateImgStatus(galleryItem);
    }


    const showImage = (
        <img
            className="galleryItem"
            src={galleryItem.path}
        />);

    const showDescription = (
        <p className="descriptionBorder">
            {galleryItem.description}
        </p>
    );

    console.log(galleryItem.imgStatus);

    return (<>
        <div className="galleryItemContainer">
        <div
            className="galleryImgContainer"
            onClick={handleImgClick}>
            {galleryItem.imgStatus
                ? showImage
                : showDescription}
        </div>
        <div><button onClick={() => updateLikeCount(galleryItem)}>LIKE</button></div>
        <p>{galleryItem.likes} love this!</p>
    </div>

    </>);
}
export default GalleryItem;