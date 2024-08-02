const db = require("../db/queries");

async function getUsers(req, res, next) {
    let usernames = [];

    if (req.query.search) {
        usernames = await db.getUserNameWithSearch(req.query.search);
    } else {
        usernames = await db.getAllUsernames();
    }

    res.render('index', {
        users: usernames
    });
};

async function newUserForm(req, res, next) {
    res.render('newUser');
};

async function newUserCreate(req, res, next) {
    const {
        username
    } = req.body;

    await db.insertUsername(username);

    res.redirect("/");
};

async function deleteAllusers(req, res, next) {
    await db.deleteAllUsers();

    res.redirect("/");

    return;
}

module.exports = {
    getUsers,
    newUserCreate,
    newUserForm,
    deleteAllusers
};