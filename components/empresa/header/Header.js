import React from 'react'
import Link from 'next/link'

const Header = ({title1, title2}) => {
    return (
        <header>
            <h1>{title1} <strong>{title2}</strong> </h1>
            <Link href="/">
                <a>
                    <img src="/img/logo/logo.svg" alt="Logo de marpa" />
                </a>
            </Link>

            <style jsx>{`
                header {
                    border-bottom: 3px solid var(--main-color);
                    display: grid;
                    grid-template-columns: auto 100px;
                    padding: 10px;
                    margin: 0 50px 0 90px;
                }

                h1 {
                    font-size: 1.3rem;
                    align-self: flex-end;
                    margin-bottom: 10px;
                }

                img {
                    background: white;
                    width: 100px;
                }

                strong {
                    font-weight: 700;
                }

            `}</style>
        </header>
    );
}

export default Header
