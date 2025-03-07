import express from 'express';
const studentRouter = express.Router();

import StudentController from './student.controller.js';

studentRouter.get('/', StudentController.getStudents);
studentRouter.get('/:id', StudentController.getStudentById);
studentRouter.post('/', StudentController.createStudent);
studentRouter.put('/:id', StudentController.updateStudentById);
studentRouter.delete('/:id', StudentController.deleteStudentById);


export default studentRouter;