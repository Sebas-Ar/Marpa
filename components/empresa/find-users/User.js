import React, { useState } from 'react'
import BtnsActive from './BtnsActive';

const User = ({user, getId, desativateFind}) => {


    const [activeOptions, setActiveOptions] = useState(false);

    const seeUser = (id) => {
        getId(id)
    }

    const seeButton = (id) => {
        seeUser(id)
        desativateFind()
    }

    const changeWords = (word = '') => {

        return word.split('').map(letter => letter === ' ' ? '-' : letter ).join('')
    }

    return (
         <section>

            <div className="description-user">
                <h3 className="user-name">{user.name}</h3>
                <p>NIT: {user.NIT ? user.NIT : 'no tiene'}</p>
                <p>Emial: {user.email ? user.email : 'no tiene'}</p>
                <button className="btn-see-user" onClick={() => seeButton(user._id)}>Ver</button>
            </div>

            <ul className={"option-list"}>
                {
                    user.lightsUser.map(light => (
                        <li key={light.lightName} className="option">
                            <h3 >{light.lightName}</h3>
                            <BtnsActive light={light} user={user}/> 
                            <div className="connection">Topic: {changeWords(user.name)}/{changeWords(light.lightName)}</div>
                        </li>
                    ))
                }
            </ul>

            <button className="btn-options" onClick={() => setActiveOptions(!activeOptions)}>
                <span>
                    &#9660;
                </span>
            </button>

            <style jsx>{`

                section {
                    margin: 10px 10px;
                    border: 1px solid #222222;
                    padding: 10px;
                    padding-bottom: 0;
                    border-radius: 10px;
                }

                .description-user {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 20px 5px;

                }

                .option {
                    display: grid;
                    margin: ${ activeOptions ? '10px' : '0'} 0;
                    grid-template-columns: auto 35%;
                    grid-gap: 10px;
                }

                .connection {
                    text-transform: lowercase;
                    grid-column: 1/3;
                }


                .user-name {
                    font-weight: 600;
                    text-transform: uppercase;
                    grid-column: 1/3;
                }
    
                section:hover {
                    background-color: #33333311;
                }

                .btn-see-user {
                    grid-column: 1/3;
                    background-color: var(--main-color);
                    border-radius: 15px;
                    font-weight: 700;
                    width: 30%;
                    justify-self: center;
                    padding: 5px 0;
                }

                .option-list {
                    width: 100%;
                    margin: 5px 0;
                }

                .option {
                    width: 100%;
                    transition: .5s;
                    overflow: hidden;
                    height: ${activeOptions ? '50px' : '0'};
                }

                .btn-options {
                    padding: 3px 0;
                    width: 100%;
                    border-top: 1px solid #3b3b3b77;
                    border-radius: 0;
                    background: none;
                }

                span {
                    display: inline-block;
                    transition: .5s;
                    font-size: 10px;
                    color: #3b3b3b;
                    transform: rotate(${ activeOptions ? '180deg' : '0deg'});
                }

                .btn-options:hover span {
                    transform: scale(1.5) rotate(${ activeOptions ? '180deg' : '0deg'});
                }
            
            `}</style>
        </section>
    )
}

export default User
