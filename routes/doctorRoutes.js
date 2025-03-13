const express = require('express');
const router = express.Router();
const { addDoctor, getAllDoctors, getDoctorById, updateDoctor, deleteDoctor } = require('../controllers/doctorController');

router.post('/newdoctor', addDoctor);
router.get('/getalldoctors', getAllDoctors);
router.get('/getdoctorbyid/:id', getDoctorById);
router.put('/updatedoctor/:id', updateDoctor);
router.delete('/deletedoctor/:id', deleteDoctor);

module.exports = router;
