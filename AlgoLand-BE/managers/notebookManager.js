const express     = require('express');
const router      = express.Router();
const bodyParser  = require('body-parser')
const jsonParser  = bodyParser.json() 

const {retrieveNotebook, createNotebookEntry, updateNotebookEntry, deleteNotebookEntry} = require('../controlers/notebookControler')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.route("/", urlencodedParser)
        .get(retrieveNotebook)
        .post(createNotebookEntry)
        .delete(deleteNotebookEntry)
        .put(updateNotebookEntry)

module.exports = router
