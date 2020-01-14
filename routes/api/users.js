const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const {
    check,
    validationResult
} = require('express-validator/check');


const User = require('../../models/User');

// @route GET api/users
// @desc Test route
// @access Public
//router.get('/', (req, res) => res.send('User route'));

// @route POST api/users
// @desc Register user
// @access Public
router.post('/', [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({
            min: 6
        })
    ],
    async (req, res) => {
        //console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            name,
            email,
            password
        } = req.body;

        try {
            let user = await User.findOne({
                email
            });

            // See if user exists
            if (user) {
                res.status(400).json({
                    errors: [{
                        msg: 'User already exists'
                    }]
                });
            }

            // Get users gravatar
            const avatar = gravatar.url(email, {
                s: '200', // size
                r: 'pg', // reading
                d: 'mm', // has no avatar
            });

            user = new User({
                name,
                email,
                avatar,
                password
            });

            // Encrypt password
            const salt = await bcrypt.genSalt(10); // hash 10 (recomended in doc)

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            // Return jsonwebtoken

            res.send('User register');

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }

        //res.send('User route');
    }
);

module.exports = router;