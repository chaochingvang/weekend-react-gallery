import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import './GalleryList.css'

function GalleryList({galleryList, updateLikeCount, updateImgStatus, deleteCreature}) {
    return (<>
        <span className="galleryList">
            {/* loop through array and render each item */}
            {galleryList.map((galleryItem) => (
                <GalleryItem
                    key={galleryItem.id}
                    updateLikeCount={updateLikeCount}
                    updateImgStatus={updateImgStatus}
                    galleryItem={galleryItem}
                    deleteCreature={deleteCreature}
                />
        ))}
        </span>
    </>);
}
export default GalleryList;