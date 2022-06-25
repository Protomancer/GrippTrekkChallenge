const router = require('express').Router();
const Hike = require('../../models/Hike');

router.post('/', async (req, res) => {
    try {
      const hikeData = await Hike.create({
        hikeName: req.body.hikeName,
        time: req.body.time,
        hikeLength: req.body.hikeLength,
        elevationChange: req.body.elevationChange,
      });
      res.status(200).json(hikeData);
    } catch (err) {
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

module.exports = router;