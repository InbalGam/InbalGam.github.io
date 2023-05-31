const express = require('express');
const apiRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, deleteFromDatabasebyId, createMeeting, deleteAllFromDatabase, updateInstanceInDatabase, getWorkFromDatabaseById, createWork } = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

// Minions
// get an array of all minions
apiRouter.get('/minions', (req, res, next) => {
    const data = getAllFromDatabase('minions');
    res.send(data);
});

// get a single minion by id
apiRouter.get('/minions/:minionId', (req, res, next) => {
    const data = getFromDatabaseById('minions', req.params.minionId);
    if (data === undefined) {
        res.status(404).send();
    } else {
        res.send(data);
    }
});

// create a new minion and save to db
apiRouter.post('/minions', (req, res, next) => {
    const newData = addToDatabase('minions', req.body);

    if (newData) {
        res.status(201).send(newData);
    } else {
        res.status(404).send();
    }
});

// update a single minion by id
apiRouter.put('/minions/:minionId', (req, res, next) => {
    if (!Number(req.params.minionId)) {
        return res.status(404).send();
    } 
    const updatedInstance = updateInstanceInDatabase('minions', req.body);
    
    if (!updatedInstance) {
        res.status(404).send();
    } else {
        res.send(updatedInstance);
    }
});

// delete a single minion by id
apiRouter.delete('/minions/:minionId', (req, res, next) => {
    const state = deleteFromDatabasebyId('minions', req.params.minionId);
    if (state) {
        res.status(204).send();
    } else {
        res.status(404).send();
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
    const data = getFromDatabaseById('ideas', req.params.ideaId);
    if (data === undefined) {
        res.status(404).send();
    } else {
        res.send(data);
    }
});

// create a new idea and save to db
apiRouter.post('/ideas', checkMillionDollarIdea);
apiRouter.post('/ideas', (req, res, next) => {
    const newData = addToDatabase('ideas', req.body);

    if (newData) {
        res.status(201).send(newData);
    } else {
        res.status(404).send();
    }
});

// update a single idea by id
apiRouter.put('/ideas/:ideaId', (req, res, next) => {
    if (!Number(req.params.ideaId)) {
        return res.status(404).send();
    } 
    const updatedInstance = updateInstanceInDatabase('ideas', req.body);
    
    if (!updatedInstance) {
        res.status(404).send();
    } else {
        res.send(updatedInstance);
    }
});

// delete a single idea by id
apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
    const state = deleteFromDatabasebyId('ideas', req.params.ideaId);
    if (state) {
        res.status(204).send();
    } else {
        res.status(404).send();
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

    if (newData) {
        res.status(201).send(newData);
    } else {
        res.status(404).send();
    }
});

// delete all meetings from the db
apiRouter.delete('/meetings', (req, res, next) => {
    const emptyArray = deleteAllFromDatabase('meetings');
    if (emptyArray) {
        res.status(204).send();
    } else {
        res.status(404).send();
    };
});


// Work
// get an array of all work for the specified minion
apiRouter.get('/minions/:minionId/work', (req, res, next) => {
    if (!Number(req.params.minionId)) {
        return res.status(404).send();
    }

    const minion = getFromDatabaseById('minions', req.params.minionId);
    if (minion !== undefined) {
        const data = getWorkFromDatabaseById('work', req.params.minionId);
        if (data) {
            res.send(data);
        }
    } else {
        res.status(404).send();
    }
});

// create a new work object and save it to the database
apiRouter.post('/minions/:minionId/work', (req, res, next) => {
    if (!Number(req.params.minionId)) {
        return res.status(404).send();
    }

    //const newWork = createWork(req.params.minionId);
    const newData = addToDatabase('work', req.body);

    if (newData) {
        res.status(201).send(newData);
    } else {
        res.status(404).send();
    }
});

// update a single work by id
apiRouter.put('/minions/:minionId/work/:workId', (req, res, next) => {
    if (!Number(req.params.minionId) || !Number(req.params.workId)) {
        return res.status(404).send();
    }

    const minion = getFromDatabaseById('minions', req.params.minionId);
    if (minion === undefined) {
        return res.status(404).send();
    }
    
    if (req.params.minionId !== req.body.minionId) {
        return res.status(400).send();
    }

    const updatedInstance = updateInstanceInDatabase('work', req.body);
    if (!updatedInstance) {
        return res.status(404).send();
    } 
    
    res.send(updatedInstance);
});

// delete a single work by id
apiRouter.delete('/minions/:minionId/work/:workId', (req, res, next) => {
    const state = deleteFromDatabasebyId('work', req.params.workId);
    if (state) {
        res.status(204).send();
    } else {
        res.status(404).send();
    };
});



module.exports = apiRouter;
