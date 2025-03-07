import Student from "../models/Student.js";

class StudentController {
    // Create a new student
    static createStudent = async (req, res) => {
        try {
            console.log(req.body);
            const newStudent = await Student.createStudent(req.body);
            res.status(201).json(newStudent);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };

    // Get all students
    static getStudents = async (req, res) => {
        try {
            const students = await Student.find();
            res.status(200).json(students);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    // Get a student by ID
    static getStudentById = async (req, res) => {
        try {
            const student = await Student.findById(req.params.id);
            if (!student) {
                return res.status(404).json({ message: "Student not found" });
            }
            res.status(200).json(student);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    // Update a student by ID
    static updateStudentById = async (req, res) => {
        try {
            const updatedStudent = await Student.updateStudentById(req.params.id, req.body);
            res.status(200).json(updatedStudent);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };

    // Delete a student by ID
    static deleteStudentById = async (req, res) => {
        try {
            const result = await Student.deleteStudentById(req.params.id);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };
}

export default StudentController;
