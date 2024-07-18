import { dbName, client } from './index.js';
import { ObjectId } from 'mongodb';

const findByFilter = async (filter) => {
    await client.connect();
    try {
        const db = client.db(dbName);
        return await db.collection('students').findOne(filter);
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
};


const findAllByFilter = async (filter) => {
    await client.connect();
    try {
        const db = client.db(dbName);
        return await db.collection('students').find(filter, {
            projection: { _id: 0, dob: 0, mentorId: 0,previousMentorId:0 }}).toArray();
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
};

const insertOne = async (data) => {
    await client.connect();
    try {
        const db = client.db(dbName);
        return await db.collection('students').insertOne(data);
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
};

const updateById = async (filter, data) => {
    await client.connect();
    try {
        const db = client.db(dbName);
        return await db.collection('students').updateMany(filter, { $set: data });
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
};

const updateByManyId = async(ids,data)=>{
    await client.connect();
    try {
        const db = client.db(dbName);
        return db.collection('students').updateMany(
            { _id: { $in: ids.map(id => ObjectId.createFromHexString(id)) } },
            { $set: data }
        );
    } catch (error) {
        throw error
    }
}

export default {
    findByFilter,
    insertOne,
    updateById,
    findAllByFilter,
    updateByManyId
};
