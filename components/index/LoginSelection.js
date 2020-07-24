import React from 'react'
import LoginImg from './LoginImg'

const LoginSelection = () => {
    return (    
        <div className="container">
            <LoginImg title="admin" img="/img/icons/admin.svg" translate="5"/>
            <div className="linea"></div>
            <LoginImg title="empresa" img="/img/icons/empresa.svg" translate="-5"/>

            <style jsx>{`
            
                .container {
                    margin: auto;
                    width: 40rem;
                    display: grid;
                    grid-template-columns: auto 2px auto;
                    justify-items: center;
                    align-items: center;
                }

                .linea {
                    width: 100%;
                    height: 50%;
                    background: white;
                }
            
            `}</style>
        </div>
    );
}

export default LoginSelection
