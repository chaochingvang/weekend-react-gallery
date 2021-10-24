import './GalleryItem.css';

function GalleryItem({ updateImgStatus, updateLikeCount, galleryItem }) {

    const handleImgClick = () => {
        galleryItem.imgStatus = !galleryItem.imgStatus;
        console.log(`CLICKED`, galleryItem.imgStatus);

        updateImgStatus(galleryItem);
    }


    const showImage = (
        <img
            className="galleryImg"
            src={galleryItem.path}
        />);

    const showDescription = (
        <p className="descriptionBorder">
            {galleryItem.description}
        </p>
    );

    console.log(galleryItem.imgStatus);

    return (<>
        <div className="data">
        <div className="galleryItemContainer">
            <div
                className="galleryImgContainer"
                onClick={handleImgClick}>
                {galleryItem.imgStatus
                    ? showImage
                    : showDescription}
            </div>
            <div className="imgFooter">
                <button onClick={() => updateLikeCount(galleryItem)}>LIKE</button>
                <p>{galleryItem.likes} love this!</p>
            </div>
        </div>
        <span className="spacer"></span>
        </div>
    </>);
}
export default GalleryItem;