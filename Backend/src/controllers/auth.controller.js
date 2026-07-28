import Users from "../models/user.model.js";
import bcrypt, { compare } from "bcrypt";
import jwt from "jsonwebtoken"

class LoginRegister {
    postRegister = async (req, res) => {
        try {
        const {
            userName,
            email,
            password
        } = req.body;

        const exist = await Users.findOne({
            where: { email },
        });

        if(exist) return res.status(400).json({
            message: "This email already exits",
        });

        const hash = await bcrypt.hash(password, 10);

        const register = await Users.create({
            userName,
            email,
            password: hash
        });

        return res.status(201).json({
            message: "created succesfully.",
        });

        } catch (err) {
            console.log({
                error: err.message,
            });
            return res.status(500).json({
                message: err.message,
            });
        };
    };
    postLogin = async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body
            const user = await Users.findOne({
                where: {email}
            });
            if(!user) return res.status(400).json({
                message: "The login information you entered is incorrect",
            });
            const hasAccess = await bcrypt.compare(password, user.password)
            if(!hasAccess) return res.status(400).json({
                message: "Invalid password",
            });
            const token = jwt.sign(
                {
                    id: user.id
                },
                process.env.JWT_SECRET,
                {
                expiresIn: process.env.JWT_EXPIRES_IN,
                },
            );

            const decode = jwt.verify(
                    token,
                    process.env.JWT_SECRET
            )
            console.log("=> DECODE TOKEN : ",decode);

            const refreshToken = jwt.sign(
                {
                    id: user.id
                },
                process.env.JWT_SECRET_REFRESH_TOKEN,
                {
                expiresIn: process.env.JWT_EXPIRES_REFRESH_TOKEN_IN,
                },
            );

            return res.status(200).json({
                message: "login succesfully",
                "acces Token": token,
                "refresh Token": refreshToken
            });
            await user.save();

        } catch (err) {
            console.log({
                error: err.message,
            });
            return res.status(500).json({
                message: err.message,
            });
        }
        
    };
    getMe = async (req, res) => {

        try {
            const user = await Users.findByPk(req.user.id);
            return res.status(200).json(user)
            console.log(user)
            
        } catch (err) {

            console.log({
                error: err.message
            })
            
        }
        
    };
}

export default new LoginRegister();