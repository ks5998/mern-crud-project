//express-async-handler is a Simple middleware for handling exceptions inside of async express routes and passing them to our express error handlers, so that we do not have to write the try/catch function for the async/await codes
const asyncHandler = require('express-async-handler');


//@desc GET goal
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(
    async ( req, res ) => {
        res.status(200).json({ message: 'Get Goals' })
    }
) 

//@desc SET goal
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(
    async ( req, res ) => {

        if(!req.body.text){
            res.status(400)
            //Express Error handler
            throw new Error('please add a text field')
        }
        res.status(200).json({ message:  'Set Goals' })
    }
) 

//@desc UPDATE goal
//@route PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler(
    async ( req, res ) => {
        res.status(200).json({ message:  `Update goal ${req.params.id}` })
    }
) 

//@desc DELETE goal
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(
    async ( req, res ) => {
        res.status(200).json({ message:  `Delete goal ${req.params.id}` })
    }
) 

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}