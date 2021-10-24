const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

router.put(`/status/:id`, (req, res) => {
    const galleryId = req.params.id;
    const imgStatus = req.body.imgStatus;
    for (const galleryItem of galleryItems) {
        if (galleryItem.id == galleryId) {
            galleryItem.imgStatus = imgStatus;
        }
    }
    res.sendStatus(200);
}); // END update status img PUT

// GET Route
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "galleryList";`;

    pool.query(queryText)
        .then((result) => {
            console.log(`Successfully sent data from db`);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`ERROR! Unable to GET query`, error);
            res.sendStatus(500);
        })


}); // END GET Route

module.exports = router;