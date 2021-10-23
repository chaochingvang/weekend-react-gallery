### Base Mode ###

## Files setup
[x] Add images to public/images
    [x] edit `server/modules/data.js` to include:
        [x] `id`
        [x] `title`
        [x] `description`
        [x] `path`
        [x] `likes`
    

## Components
[x] `App`
    [x] useEffect initial render
    [x] axios GET `/gallery` data
    [x] axios PUT `/gallery/like/:id` : update like count 
        [x] takes param of (idToUpdate)
    [x] store {list} in useState
    [x] RETURN:
        [x] pass {list} as prop to `GalleryList`
        [x] pass {putFx} as prop to `GalleryList`

    [] `GalleryList`
        [] fx takes in {list, putFx} prop
        [] RETURN:
            [] render list with list.map({item} => ())
            [] send {item} as prop to `GalleryItem`
            [] pass {putFx} as prop to `GalleryItem`


        [] `GalleryItem`
            [] fx takes in {item, putFx} prop
            [] 100px x 100px pic
            [] like btn
                [] run {putFx}
            [] conditional rendering on click
                [] shows description in 100x100px div instead of image


### STRETCH MODE ### 
Create separate branches for each objective

[] Move gallery.data.js into db
    [] db name: `react_gallery`
        [] title
        [] description
        [] path
        [] like
    [] include `database.sql` file in project folder
[] Add `GalleryForm` component
    [] create POST `/` in `gallery.router.js`
    [] axios POST `/gallery` in `App.jsx`
        [] takes a param of (itemToAdd)
    [] takes in `postFx` from `App.js`
    [] useState for each input
    [] `handleSubmitFx`
        [] const `newItem` = state values
        [] run `postFx` with `newItem` as param
        [] clear inputs by setting inputs value as state value
            []setState(``) for all input
    [] RETURN: 
        [] create html form
            [] name input
            [] description input
            [] path input
            [] submit button
        [] onSubmit runs `postFx`
[] Delete option in `GalleryItem`
    [] create DELETE `/:id` in `gallery.router.js`
    [] axios DELETE `/gallery/:id` in `App.jsx`
        [] takes param of (itemToDelete)
    [] takes in `deleteFx` from `GalleryList` which takes from `App.jsx`
[] Material-UI styling
[] implement uppy for image upload
