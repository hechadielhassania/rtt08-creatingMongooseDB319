
//In Mongoose, models are like templates for your data. They define the structure of your data and provide methods for interacting with it. Think of them as blueprints for creating and manipulating documents in your database.

// A schema in Mongoose is like a rulebook for your data. It defines what fields your documents can have, what type each field should be, and any other constraints or settings for those fields. Basically, it outlines the structure and requirements for your data.

const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: String,
    body: String
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;