import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import cookie from 'cookie'

//middleware
import middleware from "../../middlewares/withMiddleware";

const config = {
    httpOnly: false,
    secure: process.env.NODE_ENV == !"development",
    sameSite: "strict",
    maxAge: 31536000,
    path: "/",
};

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email, password, type } = req.body;

        const user = await req.db.collection("users").findOne({ email });

        const result = await bcrypt.compare(password, user.password);

        if (result) {

            const claims = { sub: user._id, userEmail: user.email };

            let jwt = ''

            if (type === 'admin' && user.type === 'admin') {
                jwt = sign(claims, "b9860076-d8c9-48ab-b98d-628f560c7b85", { expiresIn: "1y" });
            }

            if (type === "empresa" && user.type === 'empresa') {
                jwt = sign(claims, "b30aa0f2-5fa2-4222-a15f-9f8d19bbb634", { expiresIn: "1y" });
            }
            
            res.setHeader("Set-Cookie", [
                cookie.serialize("authorization", jwt, config),
                cookie.serialize("userId", user._id, config),
            ]);

            res.status(200).json({ message: user._id });
        } else {
            res.status(401).json({ message: "unauthorized" });
        }
    } else {
        res.status(405).json({ message: "We only support POST" });
    }
};

export default middleware(handler);
