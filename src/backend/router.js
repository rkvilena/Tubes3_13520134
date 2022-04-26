const { get_penyakit, get_tanggal } = require('./algorithm/search_result.js');
const express = require('express');

function createRouter(db) {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send('Hello World!');
    });

    router.post('/add-disease', (req, res, next) => {
        // console.log("router post disease");
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
            [req.body.date, req.body.user, req.body.disease, req.body.percentage, req.body.result],
            (error) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'Internal Server Error at ./add-result' });
                } else {
                    res.status(200).json({ status: 'OK' });
                }
            });
    });

    router.get('/get-disease/:name', (req, res) => {
        // console.log("get disease '" + req.params.name + "'");
        db.query(`SELECT dna_sequence FROM diseases WHERE name = ?`, [req.params['name']], (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({ status: 'Internal Server Error at ./get-diseases' });
            } else {
                res.status(200).json(results);
            }
        });
    });

    router.get('/get-results/:search', (req, res) => {
        let date = get_tanggal(req.params.search);
        let disease = get_penyakit(req.params.search);
        // console.log("get results '" + date + "' '" + disease + "'");
        if (date == null) {
            db.query(`SELECT * FROM test_results WHERE disease = ?`, [disease], (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'Internal Server Error at ./get-results' });
                } else {
                    res.status(200).json(results);
                }
            });
        } else if (disease == null) {
            db.query(`SELECT * FROM test_results WHERE date = ?`, [date], (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'Internal Server Error at ./get-results' });
                } else {
                    res.status(200).json(results);
                }
            });
        } else {
            db.query(`SELECT * FROM test_results WHERE date = ? AND disease = ?`, [date, disease], (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'Internal Server Error at ./get-results' });
                } else {
                    res.status(200).json(results);
                }
            });
        }

    });

    return router;
}

module.exports = createRouter;