const Router = require('express');
const userController = require('../controllers/userController');
const usersRouter = Router();

usersRouter.get('/', userController.getUsers);

usersRouter.get('/new', userController.newUserForm);

usersRouter.post('/new', userController.newUserCreate);

usersRouter.get('/delete', userController.deleteAllusers);

module.exports = usersRouter;