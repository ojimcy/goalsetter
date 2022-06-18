const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// @desc  Register users
// @route  Get /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password} = req.body
    
    if(!name || !email || !password) {
        res.status(400)
        throw new Error ('Please add all fields')
    }

    // check if user exist 
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error ('User already exist')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        name, 
        email, 
        password: hashedpassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc  Authenticate a users
// @route  Get /api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    // check for user email 
    const user = await User.findOne({email})

   if (user ) {
    res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)   
    })
   } else {
    res.status(400)
    throw new Error('Invalid Credentials')
   }

})

// @desc  Get user data
// @route  Get /api/user
// @access Public
const getUser = asyncHandler(async (req, res) => {
    res.status(400).json({
        message: 'User data displayed'
    })
})

// Generate JWT 
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser,
    loginUser,
    getUser
}