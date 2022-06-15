const router = require('express').Router();
const Boulder = require('../../models/Boulder');

router.get('/', async (req, res) => {
    const dataBoulder = await Boulder.findAll().catch((err) => {
        res.json(err);
    });
    res.json(dataBoulder);
});

router.post('/', async (req, res) => {
    try {
        const dataBoulder = await Boulder.create(req.body);
        res.status(200).json(dataBoulder);
    } catch (err) {
        res.status(400).json(err);
    }
});