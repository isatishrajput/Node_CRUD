const express = require('express')
const {
    getAllUser, 
    allGetUser, 
    allPatchUser, 
    allDeleteUser, 
    allPostUser
} = require('../controllers/user')

const router = express.Router()


//Rest Api 
router.route('/')
.get(getAllUser)
.post(allPostUser)

router.route('/:id').get(allGetUser)
.patch(allPatchUser)
.delete(allDeleteUser)


module.exports = router;
