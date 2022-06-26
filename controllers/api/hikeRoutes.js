const router = require('express').Router();
const Hike = require('../../models/Hike');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
      const newHike = await Hike.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newHike);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    // sends the updated info to the model so the hike can be updated.
    try {
      const hike = await Hike.update(
        {
          hikeName: req.body.hikeName,
          time: req.body.time,
          hikeLength: req.body.hikeLength,
          elevationChange: req.body.elevationChange,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      // The updated hike data is sent back to the handler
      res.status(200).json(hike);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const hikeData = await Hike.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!hikeData) {
        res.status(404).json({ message: 'No hike exists with this id!' });
        return;
      }
  
      res.status(200).json(hikeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;