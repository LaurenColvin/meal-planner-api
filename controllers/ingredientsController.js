// ingredients controller

const express = require("express");
const router = express.Router();

const Ingredients = require("./../models/Ingredients");

//returns single ingredient by id
router.get("/:id", (req, res) => {
  Ingredients.findById(req.params.id).then((ingredients) => {
      res.json({
          status: 200,
          ingredients: ingredients,
      });
  });
});

//creates a new ingredient
router.post("/", (req, res) => {
  Ingredients.create(req.body).then((ingredients) =>
    res.json({
      status: 200,
      ingredients: ingredients,
    })
  );
});

//updates an ingredient
router.put("/:id", (req, res) => {
  Ingredients.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (ingredients) => {
      res.json({
        status: 200,
        ingredients: ingredients,
      });
    }
  );
});

//deletes an ingredient
router.delete("/:id", (req, res) => {
  Ingredients.findByIdAndDelete(req.params.id).then(() =>
    res.json(`deleted`)
  );
});

//returns all ingredients
router.get("/", (req, res) => {
  Ingredients.find({}).then((ingredients) => {
      res.json({
          status: 200,
          ingredients: ingredients,
      });
  });
});

module.exports = router;