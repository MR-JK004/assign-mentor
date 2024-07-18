import {MongoClient} from 'mongodb'
const url = `mongodb+srv://jitenderkumar:cj69@cluster0.qfovhmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

export const dbName = 'assign-mentor';
export const client = new MongoClient(url);