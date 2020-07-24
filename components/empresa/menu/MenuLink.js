import React from 'react'
import Link from "next/link";

const MenuLink = ({children, view, text, hover, link, type, pathname}) => {
    return (
        <li>
            <Link href={`${link}${type}`}>
                <a>
                    <svg className="icon" viewBox={view} fill="currentColor">
                        {children}
                    </svg>
                    <span className="text">{text}</span>
                </a>
            </Link>

            <style jsx>{`
                .icon {
                    width: 1rem;
                    margin: 0 auto;
                }

                a {
                    color: ${type === pathname ? "var(--main-color)" : "white"};
                    transition: color 0.5s;
                    display: grid;
                    grid-template-columns: 2rem auto;
                    align-items: center;
                }

                a:hover {
                    color: var(--main-color);
                }

                .text {
                    width: ${hover ? "14rem" : "0rem"};
                    margin: ${hover ? "0 1.5rem" : "0"};
                    overflow: hidden;
                    opacity: ${hover ? "1" : "0"};
                    transition: 
                        width 0.5s, 
                        margin 0.5s,
                        opacity ${hover ? ".5s" : ".2s"} ${hover ? ".3s" : "0s"};
                }
            `}</style>
        </li>
    );
}

export default MenuLink
