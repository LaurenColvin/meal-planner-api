//person controller
const express = require('express');
const router = express.Router();

//import model
const Recipe = require("./../models/Recipe")

//returns all recipes
router.get("/", (req, res) => {
    Recipe.find({}).populate('ingredients').then((recipe) => {
        res.json({
            status: 200,
            recipe: recipe,
        });
    });
});

//returns a single recipe
router.get("/:id", (req, res) => {
    Recipe.findById(req.params.id).populate('ingredients').then((recipe) => {
        res.json({
            status: 200,
            recipe: recipe,
        })
    })
})

//create recipe
router.post("/", (req, res) => {
    const recipeData = req.body;
    Recipe.create(recipeData).then((recipe) => {
        res.json({
            status: 200,
            recipe: recipe,
        })
    })
})

//update recipe
router.put("/:id", (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((recipe) => {
        res.json({
            status: 200,
            recipe: recipe,
        })
    })
})

//delete recipe
router.delete("/:id", (req, res) => {
    Recipe.findByIdAndDelete(req.params.id).then((recipe) => {
        res.json({
            status: 200,
            recipe: recipe,
        })
    })
})


module.exports = router;