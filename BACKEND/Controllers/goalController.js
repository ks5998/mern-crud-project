//express-async-handler is a Simple middleware for handling exceptions inside of async express routes and passing them to our express error handlers, so that we do not have to write the try/catch function for the async/await codes
const asyncHandler = require('express-async-handler');

const Goal = require('../Models/goalModel')


//@desc GET goal
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(
    async ( req, res ) => {
        const goals = await Goal.find()

        res.status(200).json(goals)
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
        const goals = await Goal.create({
            text: req.body.text
        })
        res.status(200).json(goals)
    }
) 

//@desc UPDATE goal
//@route PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler(
    async ( req, res ) => {

        const goals = await Goal.findById(req.params.id)
        if(!goals){
            res.status(400)
            throw new Error('Goal not found')
        }
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.status(200).json(updatedGoal)
    }
) 

//@desc DELETE goal 
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(
    async ( req, res ) => {

        const goals = await Goal.findById(req.params.id)
        if(!goals){
            res.status(400)
            throw new Error('Goal not found')
        }
        await goals.remove()
        res.status(200).json({ id: req.params.id })
    }
) 

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}