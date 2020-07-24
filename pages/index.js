import LoginIndex from "../components/index/LoginIndex";

const Home = () => {
    return (
        <div className="login-background">
            <div className="wrapper-background">
                <img
                    className="background"
                    src="/img/wallpaper/principal.png"
                    alt="city wallpapaer"
                />
            </div>
            <div className="login-background__transparente">
                <img
                    className="logo"
                    src="/img/logo/logo-name.svg"
                    alt="Logo Marpa"
                />
                <LoginIndex />
            </div>

            <style jsx>{`
                .login-background {
                    height: 100vh;
                    min-height: 500px;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }

                .wrapper-background {
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    width: 100%;
                    height: 100%;
                    min-height: 500px;
                    position: absolute;
                    object-fit: cover;
                    overflow: hidden;
                }

                .background {
                    height: 105%;
                    width: 105%;
                    object-fit: cover;
                    filter: brightness(70%) blur(2px);
                }

                .login-background__transparente {
                    width: 80%;
                    height: 90%;
                    background: #000000aa;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    position: relative;
                }

                .logo {
                    position: absolute;
                    width: 11rem;
                    top: 1rem;
                    right: -2rem;
                }
            `}</style>
        </div>
    );
}

export default Home;
