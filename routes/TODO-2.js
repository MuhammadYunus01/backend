// TODO 2: SETUP ROUTING (ROUTER)
const PatientControllers = require("../controllers/TODO-4");

const express = require("express");
const router = express.Router();

router.get("/patients", PatientControllers.index);
router.post("/patients", PatientControllers.store);
router.get("/patients/:id", PatientControllers.find);
router.put("/patients/:id", PatientControllers.update);
router.delete("/patients/:id", PatientControllers.destroy);
router.get("/patients/search/:name", PatientControllers.search);
router.get("/patients/status/positive", PatientControllers.positive);
router.get("/patients/status/recovered", PatientControllers.recovered);
router.get("/patients/status/dead", PatientControllers.dead);

module.exports = router;