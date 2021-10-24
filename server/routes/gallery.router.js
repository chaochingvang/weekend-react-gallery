const { response } = require('express');
const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');


// PUT update like count Route
router.put('/like/:id', (req, res) => {

    let id = req.params.id;

    let queryText = `
        UPDATE "galleryList"
        SET "likes" = "likes" + 1
        WHERE "id" = $1;
    `;

    let values = [id];

    pool.query(queryText, values)
        .then((result) => {
            console.log(`Updated like count of ID #`, id);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error! Unable to update like count on db`, error);
            res.sendStatus(500);
        })

}); // END PUT update like count Route

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

router.post(`/`, (req, res) => {
    let newCreatureInput = req.body;

    let queryText = `
        INSERT INTO "galleryList" ("title", "description", "path")
        VALUES ($1, $2, $3);
    `;

    let values = [newCreatureInput.title, newCreatureInput.description, newCreatureInput.path];



    pool.query(queryText, values)
        .then((result) => {
            console.log(`Successfully added new creature to db`);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`ERROR! Unable to add new creature`, error);
            res.sendStatus(500);
        });
})

router.delete(`/:id`, (req, res) => {
    let id = req.params.id;

    let queryText = `
        DELETE FROM "galleryList"
        WHERE "id" = $1;
    `;

    let values = [id];

    pool.query(queryText, values)
        .then((result) => {
            console.log(`Deleted ID #`, id);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`ERROR! Unable to delete item`, error);
            res.sendStatus(500);
        });
})


module.exports = router;