const auth = require('../middleware/auth');  
const { Task, validate} = require('../models/tasks');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


// http get request 
router.get('/' , async (req, res) => {
    // throw new Error('Could not get the task.');

    const tasks = await Task.find().sort('taskTitle');
    res.send(tasks);
});

router.get('/:id' , async (req , res) => {
    let task = await Task.findById(req.params.id);

    if (!task) return res.status(404).send('Task not found!')

    res.send(task)
})

// http request to post task
router.post('/' , auth, async (req , res) => {

    const { error } =  validate(req.body);
    console.log(validate(req.body));
    if (error) return res.status(400).send(error.details[0].message);

    let task = new Task({
        taskTitle: req.body.taskTitle,
        taskDescription: req.body.taskDescription,
        taskCompleted: req.body.taskCompleted
    });

    task = await task.save();
    res.send(task);
});

//  http request to update a task
router.put('/' , async (req , res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})

    if (!task) return res.status(404).send('Task not found!')

    res.send(task)
});

// Delete task
router.delete('/:id' , async (req , res) => {
    let task = await Task.findByIdAndRemove(req.params.id);

    if (!genre) return res.status(404).send('Task not found!')

    res.send(task)
});

module.exports = router;