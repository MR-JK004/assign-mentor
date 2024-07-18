import { dbName, client } from './index.js';
import { ObjectId } from 'mongodb';

const findAll = async () => {
    await client.connect();
    try {
        const db = client.db(dbName);
        return await db.collection('mentors').find().toArray();
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
};

const findByFilter = async (filter) => {
    await client.connect();
    try {
        const db = client.db(dbName);
        return await db.collection('mentors').findOne(filter);
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
        return await db.collection('mentors').updateOne(filter, { $set: data });
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
        return await db.collection('mentors').insertOne(data);
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
};

export default {
    findAll,
    findByFilter,
    insertOne,
    updateById
};
