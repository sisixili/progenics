const express = require("express");
const router = express.Router();
const { Forms } = require("../models"); // get defined table from models
const { validateToken } = require("../middlewares/AuthMiddleware");

// Get all forms in the table (implement pagination when upscaling)
router.get("/", validateToken, async (req, res) => {
  const listOfForms = await Forms.findAll();
  res.json(listOfForms);
});

// Add new form submission (frontend will send req as JSON)
router.post("/", async (req, res) => {
  const form = req.body; // access JSON from req
  await Forms.create(form); // create db entry
  res.json(form);
});

// Delete form by id
router.delete("/:formId", validateToken, async (req, res) => { 
  const formId = req.params.formId;
  await Forms.destroy({
    where: {
      id: formId,
    },
  });
  res.json(`Deleted ${formId} successfully`);
});

module.exports = router;
