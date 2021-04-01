const express = require("express");
const router = express.Router();
const { getPrediction , redirectToRoute} = require("../controllers/predict");
router.route("/:text").get(getPrediction);
router.route("/").get(redirectToRoute);

module.exports = router;
