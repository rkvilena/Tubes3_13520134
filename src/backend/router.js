const express = require('express');

function createRouter(db) {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send('Hello World!');
    });

    router.post('/add-disease', (req, res, next) => {
        console.log("router post disease");
        db.query(`INSERT INTO diseases (name, dna_sequence) VALUES (?, ?)`,
            [req.body.name, req.body.dna],
            (error) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'Internal Server Error at ./add-disease' });
                } else {
                    res.status(200).json({ status: 'OK' });
                }
            });
    });

    router.post('/add-result', (req, res) => {
        db.query(`INSERT INTO test_results (date, user, disease, percentage, result) VALUES (?, ?, ?, ?, ?)`,
            [new Date(req.body.date), req.body.user, req.body.disease, req.body.percentage, req.body.result],
            (error) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'Internal Server Error at ./add-result' });
                } else {
                    res.status(200).json({ status: 'OK' });
                }
            });
    });

    router.get('/get-diseases', (req, res) => {
        db.query(`SELECT * FROM diseases`, (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({ status: 'Internal Server Error at ./get-diseases' });
            } else {
                res.status(200).json(results);
            }
        });
    });

    return router;
}

module.exports = createRouter;