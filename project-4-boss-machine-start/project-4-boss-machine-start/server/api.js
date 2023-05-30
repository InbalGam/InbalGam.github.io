const express = require('express');
const apiRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById, createMinion, addToDatabase, deleteFromDatabasebyId, createIdea, createMeeting, deleteAllFromDatabase } = require('./db');


function getInstanceById(type, req) {
    return getFromDatabaseById(type, req.params.id);
};

function removeInstanceById(type, req) {
    return deleteFromDatabasebyId(type, req.params.id);
};

// apiRouter.param('type', (req, res, next, type) => {

// });


// const getAll = (type) => {
//     apiRouter.get(`/${type}`, (req, res, next) => {
//         const data = getAllFromDatabase(type);
//         res.send(data);
//     });
// };


// Minions
// get an array of all minions
//getAll('minions');
apiRouter.get('/minions', (req, res, next) => {
    const data = getAllFromDatabase('minions');
    res.send(data);
});

// get a single minion by id
apiRouter.get('/minions/:minionId', (req, res, next) => {
    const data = getInstanceById('minions', req);
    res.send(data);
});

// create a new minion and save to db
apiRouter.post('/minions', (req, res, next) => {
    const newMinion = createMinion();
    const newData = addToDatabase('minions', newMinion);
    res.send(newData);
});

// update a single minion by id
apiRouter.put('/minions/:minionId', (req, res, next) => {
    const minionInstance = getInstanceById('minions', req);
    const updatedInstance = updateInstanceInDatabase('minions', minionInstance);
    res.send(updatedInstance);
});

// delete a single minion by id
apiRouter.delete('/minions/:minionId', (req, res, next) => {
    const state = removeInstanceById('minions', req);
    if (state) {
        res.send('Delete succeed');
    } else {
        res.send('Delete did not succeed');
    };
});


// Ideas
// get an array of all ideas
apiRouter.get('/ideas', (req, res, next) => {
    const data = getAllFromDatabase('ideas');
    res.send(data);
});

// get a single idea by id
apiRouter.get('/ideas/:ideaId', (req, res, next) => {
    const data = getInstanceById('ideas', req);
    res.send(data);
});

// create a new idea and save to db
apiRouter.post('/ideas', (req, res, next) => {
    const newIdea = createIdea();
    const newData = addToDatabase('ideas', newIdea);
    res.send(newData);
});

// update a single idea by id
apiRouter.put('/ideas/:ideaId', (req, res, next) => {
    const ideaInstance = getInstanceById('ideas', req);
    const updatedInstance = updateInstanceInDatabase('ideas', ideaInstance);
    res.send(updatedInstance);
});

// delete a single idea by id
apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
    const state = removeInstanceById('ideas', req);
    if (state) {
        res.send('Delete succeed');
    } else {
        res.send('Delete did not succeed');
    };
});


// Meetings
// get an array of all meetings
apiRouter.get('/meetings', (req, res, next) => {
    const data = getAllFromDatabase('meetings');
    res.send(data);
});

// create a new meeting and save to db
apiRouter.post('/meetings', (req, res, next) => {
    const newMeeting = createMeeting();
    const newData = addToDatabase('meetings', newMeeting);
    res.send(newData);
});

// delete all meetings from the db
apiRouter.delete('/meetings', (req, res, next) => {
    const emptyArray = deleteAllFromDatabase('meetings');
    if (emptyArray === []) {
        res.send('Deleting meetings succeed');
    } else {
        res.send('Deleting meetings did not succeed');
    };
});



module.exports = apiRouter;
