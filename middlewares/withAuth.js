import { Component } from "react"
import redirect from "../utils/redirect";
import verifyAuth from "../utils/verifyAuth";

export const withAuth = (ComponentWrap, GUID) => {
    class AuthComponent extends Component {
        static getInitialProps(ctx) {
            const verify = verifyAuth(ctx,GUID)
            if (verify) {
                return {me: 'hola'};
            } else {
                redirect(ctx, '/')
                return {me: 'hola'};
            }
        }

        render() {
            return <ComponentWrap {...this.props} />;
        }
    }

    return AuthComponent;
};

export default withAuth
