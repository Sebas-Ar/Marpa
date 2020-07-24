import React from 'react'
import Link from 'next/link'
import LoginForm from './LoginForm'

const LoginSide = ({type}) => {
    return (
        <aside className="side-bar">
            <img className="logo" src="/img/logo/logo-name.svg" alt="logo" />
            <h3>INICIAR SESIÓN</h3>
            <LoginForm type={type}/>
            <Link href="#">
                <a>¿Perdiste tu contraseña?</a>
            </Link>

            <style jsx>{`
                .side-bar {
                    background: #000000aa;
                    display: grid;
                    grid-template-rows: 4fr 2fr 4fr 2fr;
                    align-items: center;
                    justify-items: center;
                }

                .logo {
                    width: 70%;
                    display: block;
                    margin: auto;
                }

                h3 {
                    color: var(--main-color);
                }

                a {
                    color: var(--main-color);
                    align-self: flex-start;
                    font-size: .8rem;
                }
            `}</style>
        </aside>
    );
}

export default LoginSide
