import bcrypt from "bcryptjs";
import middleware from "../../middlewares/withMiddleware";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { name, NIT, email, password, lights, type } = req.body;
        try {
            
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            const lightsUser = lights.map(light => ({
                lightName: light.lightName,
                state: light.state
            }))

            const user = await req.db.collection("users").insertOne({ name, email, NIT, password: hashedPassword, lightsUser, type });
            console.log(user.ops[0])
            lights.forEach(async light => {
                const { lat, lng, lightName } = light
                await req.db.collection('lights').insertOne({ 
                    userId: user.ops[0]._id,
                    location: {
                        lat,
                        lng
                    },
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
