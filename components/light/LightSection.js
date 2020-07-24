import React from 'react'

const LightSection = () => {
    return (
        <section>
            <h2>Lorem ipsum</h2>
            <div className="line"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laudantium in iure non</p>
            <ul>
                <li>
                    <h4>Lorem:</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                </li>
                <li>
                    <h4>Ipsum:</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </li>
            </ul>

            <style jsx>{`
            
                section {
                    width: 70%;
                }

                h2 {
                    font-weight: 900;
                    font-size: 1.7rem;
                    text-transform: uppercase;
                }

                .line {
                    width: 40%;
                    height: 10px;
                    background-color: var(--main-color);
                    margin: 1rem 0;
                }

                h4:before {
                    content: '';
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    background-color: var(--main-color);
                    border-radius: 50%;
                    left: -1.5rem;
                    top: 50%;
                    transform: translateY(-50%)
                }

                h4 {
                    font-weight: 700;
                    position: relative;
                }

                p {
                    margin: 1rem 0;
                }
            
            `}</style>

        </section>
    );
}

export default LightSection
