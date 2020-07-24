import LoginSelection from "./LoginSelection";

const LoginIndex = () => {
    return (
        <div className="wrapper">
            <h1>
                <span>Inicia</span> <strong>Sesión</strong>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                eaquae?
            </p>
            <LoginSelection />

            <style jsx>{`
                p {
                    text-align: center;
                    color: #dddddd;
                    font-size: 1rem;
                    width: 50%;
                    line-height: 1.5rem;
                    margin: 2rem auto 3rem;
                }

                h1 {
                    text-align: center;
                    color: var(--main-color);
                    font-size: 2.5rem;
                }

                strong {
                    font-weight: 700;
                }

                span {
                    font-weight: 100;
                }
            `}</style>
        </div>
    );
};

export default LoginIndex;
