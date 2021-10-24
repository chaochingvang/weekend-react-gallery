import './GalleryItem.css';

function GalleryItem({ updateImgStatus, updateLikeCount, galleryItem, deleteCreature }) {

    const handleImgClick = () => {
        updateImgStatus(galleryItem);
    }

    const handleDelete = () => {
        let confirmation = confirm(`Are you sure you want to delete ${galleryItem.title}?`)

        if (confirmation === true) {
            deleteCreature(galleryItem);
        }
        else {
            return;
        }
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
                    <button onClick={() => handleDelete()}>DELETE</button>
                <p>{galleryItem.likes} love this!</p>
            </div>
        </div>
        <span className="spacer"></span>
        </div>
    </>);
}
export default GalleryItem;