const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workout", (req, res) => {
    Workout.find({})
      .sort({ day: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.post("/api/workout", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => { 
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workout/:id", ({ body, params}, res) => {
  Workout.findByIdAndUpdate(
      params.id,
      {$push: {exercises: body}},
      {new: true, runValidators: true}
      )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;