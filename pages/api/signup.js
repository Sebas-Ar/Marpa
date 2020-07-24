import bcrypt from "bcryptjs";
import middleware from "../../middlewares/withMiddleware";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { name, NIT, email, password, lights, type } = req.body;
        try {
            
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            const user = await req.db.collection("users").insertOne({ name, email, NIT, password: hashedPassword, lights, type });
            console.log(user.ops[0])
            lights.forEach(async light => {
                const { location, lightName } = light
                await req.db.collection('lights').insertOne({ 
                    userId: user.ops[0]._id,
                    location,
                    lightName,
                    stateLight1: false,
                    stateLight2: false,
                    values: []
                })
            })
            
            res.status(200).json({ data: user.ops[0] });

        } catch (error) {
            res.status(200).json({ data: null })
        }
    } else {
        res.status(405).json({ message: "We only support POST" });
    }
};

export default middleware(handler);
