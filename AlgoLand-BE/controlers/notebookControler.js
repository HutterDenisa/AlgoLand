const express     = require('express');
const router      = express.Router();
const db          = require('../database/database')
const bodyParser  = require('body-parser')
const notebookMdl = require('../database/models/notebooks')

async function getNotebook(username){
    let retrievedNotebooks;
    retrievedNotebooks = notebookMdl.find({owner: username})
        .then((dataRes)=>{
            if(dataRes != null)
                {return dataRes}
        })
    return retrievedNotebooks
}

async function updateEntry(entryData){
    const {username, notebookEntryTitle, newTitle, newBody} = entryData;

    getNotebookEntry(username, notebookEntryTitle).then(entry =>{
        if(!entry)
            return 404;
        if(newTitle)
            entry.title = newTitle;
        if(newBody)
            entry.body = newBody;

        entry.save();
        return 200;
    })

}

async function deleteEntry(username,notebookEntryTitle){
    notebookMdl.deleteOne({owner : username, title: notebookEntryTitle}).then(deletedDocument =>{
        return deletedDocument;
    });

}

async function getNotebookEntry(username, notebookEntryTitle){
    let retrievedNotebookEntry;
    retrievedNotebookEntry = notebookMdl.findOne({owner: username, title: notebookEntryTitle})
        .then((dataRes)=>{
            if(dataRes != null)
                {return dataRes}
        })
    return retrievedNotebookEntry
}

async function updateNotebookEntry(username, notebookEntryTitle, updateQuerry){
    const newTitle = updateQuerry.title;
    const newBody  = updateQuerry.body;

    getNotebookEntry(username, notebookEntryTitle).then(notebookEntry =>{
        if(newTitle.length > 0)
            notebookEntry.title = newTitle;
        if(newBody.length > 0)
            notebookEntry.body = newBody;
        notebookEntry.save()
        return 200;
    })
}

function checkFor404(valueToCheck){
    if(!valueToCheck)
        return 404;
    return valueToCheck
    
}

function createNotebookEntryMdl(entryData){
    return new notebookMdl({
        owner : entryData.username,
        title : entryData.title,
        body  : entryData.body

    });

}

function createNotebookEntry(req, res){
    const requestData = req.body;
    console.log(req.body)
    getNotebookEntry(requestData.username, requestData.title)
        .then( entry => {
            if(!entry){
                const newEntry = createNotebookEntryMdl(requestData);
                newEntry.save();
                res.sendStatus(200);
            }else
                res.sendStatus(400);

        })
}

function retrieveNotebook(req, res){
    let { username,title, singular} = req.query;
    singular = eval(singular);

    if(!singular)
        getNotebook(username).then(notebook =>{
            res.send(checkFor404(notebook));
       })
    else
        getNotebookEntry(username, title).then(notebookEntry =>{
            res.send(checkFor404(notebookEntry));
        })

}

function deleteNotebookEntry(req, res){
    const {username, title} = req.body;
    deleteEntry(username, title).then(result =>{
        res.send(result);
    });

}

function updateNotebookEntry(req, res){
    res.send(updateEntry(req.body));
}


module.exports = {
    retrieveNotebook: retrieveNotebook,
    createNotebookEntry: createNotebookEntry,
    updateNotebookEntry: updateNotebookEntry,
    deleteNotebookEntry: deleteNotebookEntry,
}
