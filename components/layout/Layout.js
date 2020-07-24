import React from 'react'
import Head from "next/head";
import css from "../../public/styles/styles.js";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Marpa</title>
            </Head>
            {props.children}
            <style jsx global>{css}</style>
        </div>
    );
}

export default Layout
