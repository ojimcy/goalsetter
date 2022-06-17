// @desc  Get goals
// @route  Get /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({message: "Get Goals"})
}

// @desc  Set goal
// @route  post /api/goals
// @access Private
const setGoal = (req, res) => {
    res.status(200).json({message: "Set goal"})
}

// @desc  Update goals
// @route  Put /api/goals
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc  Delet goals
// @route  Delete /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}