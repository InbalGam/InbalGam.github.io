// Original starting code-
// const checkMillionDollarIdea = () => {

// };

// My code-
const checkMillionDollarIdea = (req, res, next, idea) => {
    const multiply = idea.numWeeks * idea.weeklyRevenue;
    if (multiply >= 1000000) {
        return true;
    } else {
        return false;
    };
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
