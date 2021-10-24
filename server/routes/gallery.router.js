const { response } = require('express');
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

    let id = req.params.id;

    let queryText = `
        UPDATE "galleryList"
        SET "imgStatus" = NOT "imgStatus"
        WHERE "id" = $1;
    `;

    let values = [id];

    pool.query(queryText, values)
        .then((result) => {
            console.log(`flipped imgStatus for ID # `, id);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Unable to update imgStatus!`, error);
            res.sendStatus(500);
        });

}); // END update status img PUT

// GET Route
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "galleryList"
        ORDER BY "id";`;

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