import express from 'express';
import mentorController from './mentorController.js';
import studentController from './studentController.js';

const controller = express.Router();

controller.use('/mentor', mentorController);
controller.use('/student', studentController);

export default controller;