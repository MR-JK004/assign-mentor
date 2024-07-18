import express from 'express';
import mentorService from '../service/mentorService.js';

const mentorController = express.Router();

mentorController.post('/', mentorService.createMentor);
mentorController.get('/', mentorService.getAllMentors);
mentorController.get('/:mentorId/students', mentorService.getAllMentorsWithStudents);

export default mentorController;