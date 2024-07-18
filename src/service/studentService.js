import { ObjectId } from 'mongodb';
import studentModel from '../model/studentModel.js';

const createStudent = async (req, res) => {
    try {
        const student = await studentModel.insertOne(req.body);
        res.status(201).send({
            message: `Student ${req.body.name} created successfully`,
            data: student
        });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

const assignStudentsToMentor = async (req, res) => {
    try {
        const { mentorId, studentIds } = req.body;
        const result = await studentModel.updateByManyId(studentIds, { mentorId: ObjectId.createFromHexString(mentorId) });
        res.status(200).send({
            message: 'Students assigned to Mentor successfully',
            matchedCount: result.matchedCount,
            modifiedCount: result.modifiedCount
        });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

const changeMentorForStudent = async (req, res) => {
    try {
        const { studentId, mentorId } = req.body;
        const student = await studentModel.findByFilter({ _id: ObjectId.createFromHexString(studentId) });
        const updatedData = {
            mentorId: ObjectId.createFromHexString(mentorId),
            previousMentorId: student.mentorId
        };
        const updatedStudent = await studentModel.updateById({ _id: ObjectId.createFromHexString(studentId) }, updatedData);
        res.status(200).send({
            message: 'Mentor changed for student successfully',
            data: updatedStudent
        });
    } catch (error) {
        res.status(500).send({  
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

const getStudentsByMentor = async (req, res) => {
    try {
        const { mentorId } = req.params;
        const students = await studentModel.findAllByFilter({ mentorId:mentorId });
        res.status(200).send({
            message: 'Students fetched successfully',
            data: students
        });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            error: error.message
        });
    }
};


const getPreviousMentorForStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await studentModel.findByFilter({ _id: ObjectId.createFromHexString(studentId) });
        res.status(200).send({
            message: 'Previous mentor fetched successfully',
            data: `Previous MentorId is ${student.previousMentorId}`
        });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

export default {
    createStudent,
    assignStudentsToMentor,
    changeMentorForStudent,
    getStudentsByMentor,
    getPreviousMentorForStudent
};
