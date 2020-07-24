import React from 'react'
import Menu from '../menu/Menu'
import Header from '../header/Header'
import FindUser from '../find-users/FindUser';

const Layout = ({ menuHeader, children, title1, title2, link }) => {
    return (
        <div className="container">

            <Menu link={link} menuHeader={menuHeader}/>
            <Header title1={title1} title2={title2} />
            {
                link === '/admin/'
                    ? <FindUser />
                    : null
            }
            <div className="wrapper">
                {children}
            </div>

            <style jsx>{`

                .wrapper {
                    margin: 15px 50px 0 90px;
                }
                .container {
                    width: 100%;
                    height: 100vh;
                }
            `}</style>
        </div>
    );
};

export default Layout