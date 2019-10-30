"use strict";

/**
 * Project middleware
 */
module.exports = (req, res, next) => {
    try {
        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        let buff = new Buffer(token.split(' ')[1], 'base64');
        let date = buff.toString('ascii');

        if (!date || date !== new Date().toDateString()) throw new Error('I dont like hackers, please go away!');

        return next()
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};
