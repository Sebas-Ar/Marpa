import { MongoClient } from 'mongodb'

const MONGODB_URI = "mongodb://localhost/marpa-database"

const client = new MongoClient(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const withDatabase = handler => async (req, res) => {
    try {

        if (!client.isConnected()) {

            await client.connect();
            req.db = client.db('marpa-database');
            return handler(req, res);

        } else {

            req.db = client.db('marpa-database')
            return handler(req, res)

        }

    } catch (error) {

        console.error(error)

    }
}

export default withDatabase