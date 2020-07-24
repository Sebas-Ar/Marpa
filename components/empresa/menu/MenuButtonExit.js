import React from "react";
import cookie from 'js-cookie'
import { useRouter } from 'next/router'

export const MenuButtonExit = ({children, view, text, hover}) => {

    const router = useRouter();

    const exit = () => {
        cookie.remove('authorization', { path: '/' });
        router.push("/");
        /* console.log(cookie.get()); */
    }

    return (
        <li>
            <button onClick={() => exit()}>
                <svg className="icon" viewBox={view} fill="currentColor">
                    {children}
                </svg>
                <span className="text">{text}</span>
            </button>

            <style jsx>{`
                .icon {
                    width: 1rem;
                    margin: 0 auto;
                }

                button {
                    background: none;
                    color: white;
                    transition: color 0.5s;
                    display: grid;
                    grid-template-columns: 1.6rem auto;
                    align-items: center;
                }

                button:hover {
                    color: var(--main-color);
                }

                .text {
                    width: ${hover ? "14rem" : "0rem"};
                    margin: ${hover ? "0 1.5rem" : "0"};
                    overflow: hidden;
                    opacity: ${hover ? "1" : "0"};
                    text-align: left;
                    transition: width 0.5s, margin 0.5s,
                        opacity ${hover ? ".5s" : ".2s"} ${hover ? ".3s" : "0s"};
                }
            `}</style>
        </li>
    );
};
