import express from 'express';
import studentService from '../service/studentService.js';

const studentController = express.Router();

studentController.post('/', studentService.createStudent);
studentController.post('/assign', studentService.assignStudentsToMentor);
studentController.post('/change-mentor', studentService.changeMentorForStudent);
studentController.get('/mentor/:mentorId', studentService.getStudentsByMentor);
studentController.get('/previous-mentor/:studentId', studentService.getPreviousMentorForStudent);

export default studentController;