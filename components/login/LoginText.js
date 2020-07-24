import React from "react";
import Link from "next/link";
const LoginText = ({ type }) => {
    return (
        <div className="login-text">
            <Link href="/">
                <a className="go-back"></a>
            </Link>

            <div className="login-text-down">
                <div className="white-block"></div>
                <h1>
                    <span className="first-line-h1">HOLA</span>
                    <span className="second-line-h1">{type}</span>
                </h1>
                <div className="line"></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero iure repudiandae sunt facere sint modi!
                </p>
            </div>

            <style jsx>{`
                .login-text {
                    position: relative;
                    display: grid;
                    align-items: flex-end;
                }

                .go-back {
                    display: block;
                    position: absolute;
                    top: 1.5rem;
                    left: 1.5rem;
                    color: var(--main-color);
                    background: url("/img/icons/flechas.svg") no-repeat center
                        center;
                    background-size: 100% auto;
                    width: 20px;
                    height: 20px;
                }

                .login-text-down {
                    display: grid;
                    grid-template-rows: auto 22px auto;
                    grid-template-columns: 50px auto;
                    width: 20rem;
                    margin-bottom: 6rem;
                }

                .white-block {
                    background-color: white;
                    transform: translateY(10%);
                    height: 5.5rem;
                    margin-right: 25px;
                    grid-column: 1/2;
                    grid-row: 1/4;
                }

                h1 {
                    color: var(--main-color);
                    display: grid;
                    transform: translateX(-1.5%);
                    text-transform: uppercase;
                }

                .first-line-h1 {
                    font-size: 3rem;
                    font-weight: 100;
                }
                .second-line-h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                }

                .line {
                    background: white;
                    margin: 10px 0;
                    width: 30%;
                }

                p {
                    color: white;
                }
            `}</style>
        </div>
    );
};

export default LoginText;
