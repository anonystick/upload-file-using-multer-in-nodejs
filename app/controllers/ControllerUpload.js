'use strict';
var self = module.exports = {
    uploadSingleFile: async(req, res) => {
        res.json(req.file)
    },
    uploadMultipleFiles: async(req, res) => {
        res.json(req.files)
    },

}