import React from 'react'
import Link from 'next/link'

const LoginImg = (props) => {
    return (
        <div className="container">
            <img src={props.img} alt={`icono de login ${props.title}`} />
            <Link href={`/login/${props.title}`}>
                <a>
                    <button>{props.title}</button>
                </a>
            </Link>

            <style jsx>{`
                .container {
                    width: 9rem;
                }

                img {
                    width: 80%;
                    display: block;
                    margin: auto;
                    margin-bottom: 1.5rem;
                    transform: translateX(${props.translate}%);
                }

                button {
                    display: block;
                    margin: auto;
                    border: none;
                    background-color: var(--main-color);
                    border-radius: 10rem;
                    width: 100%;
                    padding: 5px 0;
                    cursor: pointer;
                    outline: none;
                    transition: background-color 0.5s, transform 0.5s;
                    text-transform: uppercase;
                }

                button:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
}

export default LoginImg
