import mentorModel from '../model/mentorModel.js';

const createMentor = async (req, res) => {
    try {
        const mentor = await mentorModel.insertOne(req.body);
        res.status(201).send({
            message: `Mentor ${req.body.name} Created Successfully`,
            data: mentor
        });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

const getAllMentorsWithStudents = async (req, res) => {
    try {
        const { mentorId } = req.params;
        const mentorWithStudents = await mentorModel.findByIdWithStudents(mentorId);

        if (mentorWithStudents.length === 0) {
            return res.status(404).send({
                message: 'Mentor not found'
            });
        }

        res.status(200).send({
            message: 'Mentor with students fetched successfully',
            data: mentorWithStudents[0]
        });
        
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

const getAllMentors = async (req, res) => {
    try {
        const mentors = await mentorModel.findAll();
        res.status(200).send({
            message: 'Mentors Details Fetched Successfully',
            data: mentors
        });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

export default {
    createMentor,
    getAllMentors,
    getAllMentorsWithStudents
};
