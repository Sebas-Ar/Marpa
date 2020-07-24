import { verify } from 'jsonwebtoken'

const withAuthenticated = handler => async (req, res) => {

    try {

        const result = verify(req.headers.authorization, "b9860076-d8c9-48ab-b98d-628f560c7b85")
        if (result) {
            return handler(req, res);
        } else {
            res.status(500).json({
                message: "You are not authenticated",
                result,
            });
        }
        
    } catch (error) {
        /* res.status(500).json({ message: "You are not authenticated" }); */
        return handler(req, res);
    }

}

export default withAuthenticated

