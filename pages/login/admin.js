import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import verifyAuth from '../../utils/verifyAuth'
import LoginSide from '../../components/login/LoginSide';
import LoginText from '../../components/login/LoginText';

import cookies from "next-cookies";

const admin = (ctx) => {

    const router = useRouter()
    
    useEffect(() => {
        const result = verifyAuth(ctx, "b9860076-d8c9-48ab-b98d-628f560c7b85");
        if (result) {
            router.push("/admin/bombillos");
        } else {
            console.log("you are not authenticated");
        }
    }, [])

    return (
        <div className="login">
            <div className="wrapper-background">
                <img
                    className="background"
                    src="/img/wallpaper/principal.png"
                    alt="city wallpapaer"
                />
            </div>
            <LoginText type="admin" />
            <LoginSide type="admin"/>

            <style jsx>{`
                .login {
                    height: 100vh;
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                }

                .wrapper-background {
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    object-fit: cover;
                    z-index: -1;
                }

                .background {
                    width: 105%;
                    height: 105%;
                    filter: brightness(70%) blur(2px);
                }
            `}</style>
        </div>
    );
};

export default admin
