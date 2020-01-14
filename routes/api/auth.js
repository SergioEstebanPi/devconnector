const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route GET api/auths
// @desc Test route
// @access Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Server error'
        });
    }
});

module.exports = router;