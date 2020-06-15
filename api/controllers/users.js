'use strict';
const userModel = require('../model/users');

// get all
module.exports.getAll = function (req, res, next) {
    console.log('all User');
    userModel.find({}, function (err, result) {
        if (err) next(err);
        else res.json(result);
    });
};

// create
exports.create_data = function (req, res, next) {
    var new_data = new userModel(req.body);
    new_data.save(function (err, result) {
        if (err) {
            next(err);
        } else {
            res.json(result);
        }
    });
};

// update
exports.update_data = function (req, res, next) {
    userModel.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true },
        function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json(result);
            }
        }
    );
};

// delete
exports.delete_data = function (req, res, next) {
    userModel.remove(
        {
            _id: req.params._id,
        },
        function (err, data) {
            if (err) {
                next(err);
            } else {
                res.json({ message: 'successfully deleted', data: data });
            }
        }
    );
};

// read data by id
exports.read_data = function (req, res, next) {
    // console.log('user1');
    userModel.find({ _id: req.params._id }, function (err, data) {
        if (err) {
            next(err);
        } else {
            res.json(data);
        }
    });
};
