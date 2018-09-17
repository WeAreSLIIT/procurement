"use strict";
const express = require("express");
const router = express.Router();
const Request = require("../../models/order");
const Item = require("../../models/item");
//GET ALL
router.get("/", (req, res, next) => {
    try {
        Item.find(function (err, requset) {
            if (err)
                return next(err);
            res.json(requset);
        });
    }
    catch (error) {
        console.log(error);
    }
});
router.post("/", (req, res, next) => {
    try {
        const item = new Item({
            id: req.body.id,
            name: req.body.name
        });
        item.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                });
            }
            res.status(201).json({
                message: "Item Added",
                result
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = router;
//# sourceMappingURL=items.js.map