import React from 'react'

const LightDescription = () => {
    return (
        <div className="container">
            <p>Bombillo Dañado</p>
            <p>Bombillo en Funcionamiento</p>

            <style jsx>{`
            
                .container {
                    display: grid;
                    grid-template-columns: auto auto;
                    align-items: center;
                    justify-items: center;
                }

                p {
                    position: relative;
                }

                p::before {
                    content: "";
                    height: 22px;
                    width: 22px;
                    position: absolute;
                    background-color: #048511;
                    border-radius: 50%;
                    top: 50%;
                    left: -25px;
                    transform: translateY(-45%);
                }

                p:nth-child(1)::before {
                    background-color: #BC181A;
                }
            
            `}</style>
        </div>
    )
}

export default LightDescription
