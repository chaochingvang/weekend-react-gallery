import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import './GalleryList.css'

function GalleryList({galleryList, updateLikeCount, updateImgStatus}) {
    return (<>
        <span className="galleryList">
            {galleryList.map((galleryItem) => (
                <GalleryItem
                    key={galleryItem.id}
                    updateLikeCount={updateLikeCount}
                    updateImgStatus={updateImgStatus}
                    galleryItem={galleryItem}
                />
        ))}
        </span>
    </>);
}
export default GalleryList;