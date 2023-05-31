const checkMillionDollarIdea = (req, res, next) => {
    if (!req.body.numWeeks || !req.body.weeklyRevenue || !Number(req.body.numWeeks) || !Number(req.body.weeklyRevenue)) {
        return res.status(400).send();
    }

    const multiply = Number(req.body.numWeeks) * Number(req.body.weeklyRevenue);
    if (multiply >= 1_000_000) {
        next();
    } else {
        res.status(400).send();
    };
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
