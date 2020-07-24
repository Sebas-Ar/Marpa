import cookies from "next-cookies";
import { verify } from "jsonwebtoken";
import cookie from "js-cookie";

const verifyAuth = (ctx, GUID) => {
    try {
        const { authorization } = cookies(ctx);
        
        if (authorization) {
            const result = verify(authorization, GUID);
            if (result) {
                console.log("estas authenticado");
                return true
            } else {
                cookie.remove("authorization", { path: "/" });
                cookie.remove("userId", { path: "/" });
                return false
            }
        } else {
            console.log("authenticated error");
            return false
        }
    } catch (error) {
        console.log("jwt no verificado");
        cookie.remove("authorization", { path: "/" });
        cookie.remove("userId", { path: "/" });
        return false
    }
};

export default verifyAuth