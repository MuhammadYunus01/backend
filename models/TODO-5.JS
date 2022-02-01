// TODO 5: SETUP MODEL
const db = require("../config/TODO-3");

class Patients {
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO patients SET ?";
      db.query(sql, data, (err, results) => {
        resolve(data);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        const [student] = results;
        resolve(student);
      });
    });
  }

  static update(id, data) {
    new Promise((resolve, reject) => {
      const sql = "UPDATE patients SET ? WHERE ID = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    return this.find(id);
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  static search(data) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE name LIKE ?";
      db.query(sql, `%${data}%`, (err, results) => {
        resolve(results);
      });
    });
  }

  static findByStatus(data) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status = ?";
      db.query(sql, data, (err, results) => {
        resolve(results);
      });
    });
  }
}

module.exports = Patients;