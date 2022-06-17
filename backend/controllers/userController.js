// @desc  Register users
// @route  Get /api/users
// @access Public
const registerUser = (req, res) => {
    res.status(400).json({
        message: 'User Registered'
    })
}

// @desc  Authenticate a users
// @route  Get /api/login
// @access Public
const loginUser = (req, res) => {
    res.status(400).json({
        message: 'User Logged in'
    })
}

// @desc  Get user data
// @route  Get /api/user
// @access Public
const getUser = (req, res) => {
    res.status(400).json({
        message: 'User data displayed'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getUser
}