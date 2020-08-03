import React, { useEffect } from 'react'

import { mapStateToProps, mapDispatchToProps } from '../../../redux/mapToProps/hoverMapToProps'

import { connect, useSelector } from 'react-redux'
import FindListUser from './FindListUser'


const FindUser = ({desativateFind}) => {

    const { popup } = useSelector(state => state.hover)

    return (
        <div className="wrapper">
            
            <div className="container">
                <div className="hidden-list">
                    <button onClick={() => desativateFind()} >
                        <svg viewBox="0 0 352 512">
                            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
                        </svg>
                    </button>
                    <FindListUser />
                </div>
            </div>

            <style jsx>{`
            
                .wrapper {
                    visibility: ${popup ? 'visibe' : 'hidden'}; 
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #33333377;
                    z-index: 1000;
                }

                .container {
                    position: relative;
                    background: white;
                    padding: 35px 30px;
                    border-radius: 30px;
                    
                }

                .hidden-list {
                    max-height: 300px;
                    overflow-y: auto; 
                }

                .hidden-list::-webkit-scrollbar {
                    width: 7px;
                }

                .hidden-list::-webkit-scrollbar-thumb {
                    background-color: #3b3b3bcc;
                    border-radius: 5px;
                }

                .hidden-list::-webkit-scrollbar-track {
                    background-color: #3b3b3b22;
                    border-radius: 5px;
                }

                button {
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    border-radius: 50%;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    background: none;
                }

                svg {
                    height: inherit;
                }
                
                
            `}</style>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUser)
