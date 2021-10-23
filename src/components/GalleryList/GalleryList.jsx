import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({galleryList, updateLikeCount}) {
    return (<>
        <span className="galleryList">
            {galleryList.map((galleryItem) => (
                <GalleryItem
                    updateLikeCount={updateLikeCount}
                    galleryItem={galleryItem}
                />
        ))}
        </span>
    </>);
}
export default GalleryList;