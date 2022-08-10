const express = require('express');
const router = express.Router();
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../Controllers/goalController')

//setting up the CRUD operation
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)


//crud
/*
router.get('/', getGoals)
router.post('/', setGoals)
router.put('/:id', updateGoals)
router.delete('/:id', deleteGoals)
*/

module.exports = router;