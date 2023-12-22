const express = require('express')
const router = express.Router();
const { getalltasks,
        createtask,
        gettask,
        updatetask,
        Deletetask } = require('../controllers/tasks');

router.route('/')
.get(getalltasks)
.post(createtask)

router.route('/:id')
.get(gettask)
.patch(updatetask)
.delete(Deletetask)


module.exports = router;