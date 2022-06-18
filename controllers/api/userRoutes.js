const router = require('express').Router();
const User = require('../../models/User');

router.get('/', async (req, res) => {
    const dataUser = await User.findAll().catch((err) => {
        res.json(err);
    });
    res.json(dataUser);
});

router.post('/', async (req, res) => {
    try {
        const dataUser = await User.create(req.body);
        res.status(200).json(dataUser);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;