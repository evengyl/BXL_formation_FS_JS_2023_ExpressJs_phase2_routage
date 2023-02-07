const routerEmployees = require("express").Router()
// same que dans base router but en plus court
//on oublie pas le chainage d'appel de fonctions...

routerEmployees
    .route("/")
        .get((req, res) => {
            res.json({ route : "get all"})
        })
        .post((req, res) => {
            res.json({ route : "create one"})
        })


routerEmployees
    .route("/:id")
        .get((req, res) => {
            res.json({ route : "get one"})
        })
        .put((req, res) => {
            res.json({ route : "update one"})
        })
        .delete((req, res) => {
            res.json({ route : "delete one"})
        })




/*
routerEmployees.get("/", (req, res, next) => {
    res.json({ route : "get all"})
})

routerEmployees.get("/:id", (req, res, next) => {
    res.json({ route : "get one"})
})

routerEmployees.post("/", (req, res, next) => {
    res.json({ route : "create one"})
})

routerEmployees.put("/:id", (req, res, next) => {
    res.json({ route : "update one"})
})

routerEmployees.delete("/:id", (req, res, next) => {
    res.json({ route : "delete one"})
})
*/


module.exports = routerEmployees
