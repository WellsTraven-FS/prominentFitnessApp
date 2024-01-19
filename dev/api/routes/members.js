const express = require("express");
const router = express.Router();

const passport = require("passport");
const passportService = require("../services/passport");
const protectedRouter = passport.authenticate("jwt", { session: false });

const Member = require("../models/member");

// RESTFUL Endpoints
// GET, POST, PATCH, DELETE

// Middleware
const getMember = async (req, res, next) => {
    let member;
    try {
        member = await Member.findById(req.params.id);
        if (member === null) {
            return res.status(404).json({ message: error.message });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.member = member;
    next();
};

// ------ GET ONE ROUTER ------ //
router.get("/:id", getMember, async (req, res) => {
    res.json(res.member);
});

// ------ POST ROUTER ------ //
router.post("/", async (req, res) => {
    const member = new Member({
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        location: req.body.location,
        goal: req.body.goal,
    });
    try {
        const newMember = await member.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ------ PATCH ROUTER ------ //
router.patch("/:id", getMember, async (req, res) => {
    if (req.body.name != null) {
        res.member.name = req.body.name;
    }
    if (req.body.age != null) {
        res.member.age = req.body.age;
    }
    if (req.body.weight != null) {
        res.member.weight = req.body.weight;
    }
    if (req.body.location != null) {
        res.member.location = req.bodylocation;
    }
    if (req.body.goal != null) {
        res.member.goal = req.body.goal;
    }
    try {
        const updatedMember = await res.student.save();
        res.json(updatedMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
