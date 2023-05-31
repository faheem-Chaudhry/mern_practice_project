const Joi = require('joi');
const bcrypt = require('bcryptjs');
const User = require("../models/user");

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const authController = {

    async register(req, res, next) {
        const userRegisterSchema = Joi.object({
            username: Joi.string().max(30).required(),
            name: Joi.string().max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(passwordPattern).required(),
            confirmPassword: Joi.ref('password')
        });
        //1 validate user
        const { error } = userRegisterSchema.validate(req.body);
        //agr yaha error hua to hme error mile ga vrna null mille ga

        //2 if error return error via middleware
        if (error) {
            return next(error);
        }
        // 3. if email or username is already registered -> return an error
        const { username, name, email, password } = req.body;

        try {
            const emailInUse = await User.exists({ email });

            const usernameInUse = await User.exists({ username });

            if (emailInUse) {
                const error = {
                    status: 409,
                    message: "Email already registered, use another email!",
                };

                return next(error);
            }
            if (usernameInUse) {
                const error = {
                    status: 409,
                    message: "Username already registered, use another email!",
                };

                return next(error);
            }
        }
      catch (error) {
        return next(error);

            }

            //4 password hash
            const hashedPassword = await bcrypt.hash(password, 10);
            //5 store user to db
            const userToRegister = new User({
                name :name,
                username:username,
                email:email,
                password: hashedPassword,
              });
        
              const user = await userToRegister.save();

              //6 response send
              return res.status(201).json({user});
        },
    async login(req,res) { 
        res.json({msg : 'Hello World 123456'})
      }
    }

module.exports = authController;