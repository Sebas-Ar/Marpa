import React from 'react'
import { connect, useSelector } from "react-redux";

const MenuHeaderEmpresa = () => {

    const hover = useSelector((state) => state.hover.value)

    return (
        <h2>
            <span className="first-line-h2">HOLA</span>
            <span className="second-line-h2">EMPRESA</span>

            <style jsx>{`
                h2 {
                    color: var(--main-color);
                    width: ${hover ? '14rem' : '0'};
                    display: grid;
                    height: min-content;
                    align-self: center;
                    justify-self: center;
                    transition: width 0.5s;
                    overflow: hidden;
                }

                .first-line-h2 {
                    font-size: 2.5rem;
                    font-weight: 100;
                }

                .second-line-h2 {
                    font-size: 3rem;
                    font-weight: 700;
                }
            `}</style>
        </h2>
    );
}

const mapStateToProps = (state) => ({
    hover: state.hover.value,
});

export default connect(mapStateToProps, {})(MenuHeaderEmpresa);
