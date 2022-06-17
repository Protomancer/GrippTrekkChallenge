const router = require('express').Router();
const Hike = require('../../models/Hike');


router.get('/', async (req, res) => {
    const dataHike = await Hike.findAll().catch((err) => {
        res.json(err);
    });
    res.json(dataHike);
});

router.post('/', async (req, res) => {
    try {
        const dataHike = await Hike.create(req.body);
        res.status(200).json(dataHike);
    } catch (err) {
        res.status(400).json(err);
    }
});