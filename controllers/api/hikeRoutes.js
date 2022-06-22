const router = require('express').Router();
const Hike = require('../../models/Hike');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try{
    const newHike = await Hike.create({
        ...req.body,
        user_id: req.session.user_id,
    });
    res.status(200).json(newHike);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const dataHike = await Hike.create(req.body);
        res.status(200).json(dataHike);
    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;