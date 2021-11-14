const express = require("express");
const router = express.Router();

const Job = require("../models/job.model");

router.get("", async (req, res) => {
  try {
    let title = req.query.title || { $exists: true };
    let location = req.query.location || { $exists: true };
    let page = +req.query.page || 1;
    let limit = +req.query.limit || 10;
    let skip = (page - 1) * limit;

    const jobs = await Job.find({
      title: title,
      location: location,
    })
      .skip(skip)
      .limit(limit)
      .lean()
      .exec();

    res.status(200).send(jobs);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.get("/:id", async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).send(job);
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;