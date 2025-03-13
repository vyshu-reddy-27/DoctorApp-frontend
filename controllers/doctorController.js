const Doctor = require('../models/Doctor');

const addDoctor = async (req, res) => {
  const { firstName, lastName, department, experience, email, address, dob, age } = req.body;

  try {
    const newDoctor = new Doctor({
      firstName,
      lastName,
      department,
      experience,
      email,
      address,
      dob,
      age
    });

    await newDoctor.save();
    res.send("Doctor Added Successfully");
  } catch (error) {
    console.error(error);
    res.send("Error while adding Doctor");
  }
};

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.send(doctors);
  } catch (error) {
    console.error(error);
  }
};

const getDoctorById = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.send("Doctor Not Found");
    }
    res.send(doctor);
  } catch (error) {
    console.error(error);
  }
};

const updateDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
    res.send(updatedDoctor);
  } catch (error) {
    console.error(error);
  }
};

const deleteDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    await Doctor.findByIdAndDelete(id);
    res.send("Doctor Deleted Successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { addDoctor, getAllDoctors, getDoctorById, updateDoctor, deleteDoctor };
