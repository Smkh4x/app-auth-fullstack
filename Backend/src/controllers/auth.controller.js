import Users from "../models/user.model";
import bcrypt from "bcrypt";

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
    postLogin = async () => {
        
    };
    getMe = async () => {
        
    };
}