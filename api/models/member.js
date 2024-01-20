const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
    },
    goal: {
        type: String,
    },
});

module.exports = mongoose.model("Member", memberSchema);
