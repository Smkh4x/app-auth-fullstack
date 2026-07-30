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
            next(err);
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
                message: "Email ou mot de passe incorrect",
            });
            const hasAccess = await bcrypt.compare(password, user.password)
            if(!hasAccess) return res.status(400).json({
                message: "Email ou mot de passe incorrect",
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
            next(err)
        }
        
    };
    getMe = async (req, res) => {

        try {
            const user = await Users.findByPk(req.authUser.id, {
                attributes: {
                    exclude: ["password"]
                }
            });
            if(!user) return res.status(404).json({
                message: "User not found"
            });

            return res.status(200).json(user)
            
        } catch (err) {
            next(err)
        }
        
    };
}

export default new LoginRegister();