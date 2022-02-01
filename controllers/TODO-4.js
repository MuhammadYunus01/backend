// TODO 4: SETUP CONTROLLER
const Patients = require("../models/TODO-5");

class PatientControllers {
  async index(req, res) {
    const patient = await Patients.all();

    if (patient.length) {
      const data = {
        message: "Get All Resource",
        data: patient,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Data is Empty",
      data: patient,
    };

    return res.status(200).json(data);
  }

  async store(req, res) {
    const { name, phone, address, status } = req.body;

    if (!name || !phone || !address || !status) {
      const data = {
        message: "All fields must be filled correctly",
      };

      return res.status(422).json(data);
    }

    else if (
      status != "Positive" &&
      status != "Dead" &&
      status != "Recovered"
    ) {
      const data = {
        message: "Status must be Positive or Recovered or Dead",
      };

      return res.status(422).json(data);
    }

    const patient = await Patients.create(req.body);

    const data = {
      message: "Resource is added successfully",
      data: patient,
    };

    return res.status(201).json(data);
  }

  async find(req, res) {
    const { id } = req.params;

    const patient = await Patients.find(id);

    if (patient) {
      const data = {
        message: "Get Detail Resource",
        data: patient,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  async update(req, res) {
    const { id } = req.params;

    const patient = await Patients.find(id);

    if (patient) {
      const patientUpdated = await Patients.update(id, req.body);

      const data = {
        message: "Resource is update successfully",
        data: patientUpdated,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const patient = await Patients.find(id);

    if (patient) {
      await Patients.delete(id);

      const data = {
        message: "Resource is delete successfully",
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  async search(req, res) {
    const { name } = req.params;

    const patient = await Patients.search(name);

    if (patient.length) {
      const data = {
        message: "Get searched resource",
        data: patient,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  async positive(req, res) {
    const patient = await Patients.findByStatus("Positive");

    if (patient.length) {
      const data = {
        message: "Get positive resource",
        total: patient.length,
        data: patient,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  async recovered(req, res) {
    const patient = await Patients.findByStatus("Recovered");

    if (patient.length) {
      const data = {
        message: "Get recovered resource",
        total: patient.length,
        data: patient,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  async dead(req, res) {
    const patient = await Patients.findByStatus("Dead");

    if (patient.length) {
      const data = {
        message: "Get dead resource",
        total: patient.length,
        data: patient,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }
}

const object = new PatientControllers();

module.exports = object;