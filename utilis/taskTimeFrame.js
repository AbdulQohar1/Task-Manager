// const mongoose = require('mongoose');
// const express = require('express');
const moment = require('moment');


//Write a function that allow you select  the time frame for a task
// A function that indicate if a task is overdue
// A function that charges you a certain token if you couldn't complete you task within the scheduled time frame.


function selectTimeFrame(task, chosenTimeFrame) {
    // Validate input
    if (!chosenTimeFrame || typeof chosenTimeFrame !== 'string') {
      throw new Error('Invalid time frame selected');
    }
  
    // Update task object based on chosen time frame
    switch (chosenTimeFrame) {
      case 'today':
        task.dueDate = moment().endOf('day').toDate();
        break;
      case 'tomorrow':
        task.dueDate = moment().add(1, 'days').endOf('day').toDate();
        break;
      case 'nextWeek':
        task.dueDate = moment().add(7, 'days').endOf('week').toDate();
        break;
      case 'custom': // Handle custom time frame selection separately
        // ... (implementation for custom time frame selection)
        break;
      default:
        console.warn('Invalid time frame chosen');
        return;
    }
  
    return task;
}

const updatedTask = selectTimeFrame(task, 'tomorrow'); 

module.exports = { updatedTask };

  