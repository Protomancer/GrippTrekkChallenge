const router = require('express').Router();
const Boulder = require('../../models/Boulder');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try{
    const newBoulder = await Boulder.create({
        ...req.body,
        user_id: req.session.user_id,
    });
    res.status(200).json(newBoulder);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const dataBoulder = await Boulder.create(req.body);
        res.status(200).json(dataBoulder);
    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;