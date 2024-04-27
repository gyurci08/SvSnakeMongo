// Create a new database and switch to it
db = db.getSiblingDB('SvSnakeMongo');

// Create a new collection and insert documents
db.scores.insert([
    {
        name: 'gyurci08',
        score: 1
    }
]);

// Create a user with read and write privileges for the database
db.createUser({
    user: 'SvSnakeMongo',
    pwd: 'SvSnakeMongo',
    roles: [
        { role: 'readWrite', db: 'SvSnakeMongo' }
    ]
});