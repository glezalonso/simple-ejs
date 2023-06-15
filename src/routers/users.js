const express= require("express")
const usersController = require("../controllers/users")
const router = express.Router()
router.get('/users', usersController.getUsers)
router.get('/create',usersController.getcreateUsers)
router.get('/update/:id', usersController.getupdateUsers)
router.get('/delete/:id', usersController.getdeleteUsers)
router.post('/create',usersController.createUser)
router.post('/update/:id', usersController.updateUser)
router.post('/delete/:id', usersController.deleteUser)

module.exports = router