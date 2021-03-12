import React from "react"

const LightDescription = () => {
    return (
        <div className="container">
            <p>Bombillo en Funcionamiento</p>
            <p>Bombillo Dañado</p>

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
                    background-color: #650c0d;
                    height: 22px;
                    width: 22px;
                    position: absolute;
                    border-radius: 50%;
                    top: 50%;
                    left: -25px;
                    transform: translateY(-45%);
                }

                p:nth-child(1)::before {
                    background-color: #ff2023;
                }
            `}</style>
        </div>
    )
}

export default LightDescription
