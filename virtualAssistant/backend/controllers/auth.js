import { genToken } from "../config/token.js"
import { User } from "../models/useModel.js"
import bcrypt from "bcryptjs"

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "email does not exists!" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "incorrect password" })
        }
        const token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "strict",
            secure: false
        })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: `Login error ${error}` })
    }
}
export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields (name, email, password) are required!" })
        }
        
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters!" })
        }
        
        const existEmail = await User.findOne({ email })
        if (existEmail) {
            return res.status(400).json({ message: "Email already exists!" })
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name, password: hashedPassword, email
        })
        const token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "strict",
            secure: false
        })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ message: `Sign up error: ${error.message}` })
    }
}

export const Logout = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ message: "log out successfully" })
    }
    catch (error) {
        return res.status(500).json({ message: `logout error ${error}` })
    }
}
