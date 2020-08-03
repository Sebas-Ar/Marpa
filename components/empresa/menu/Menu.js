import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import MenuLinks from "./MenuLinks";

//redux
import { connect, useSelector } from 'react-redux'
import { activateHover, desativateHover } from '../../../redux/actions/hoverActions'

const mapStateToProps = state => ({
    hover: state.hover.value
})

const mapDispatchToProps = {
    activateHover: activateHover,
    desativateHover: desativateHover,
};

const Menu = ({ link, menuHeader, activateHover, desativateHover }) => {

    const [pathname, setPathname] = useState("");

    const hover = useSelector((state) => state.hover.value)

    const router = useRouter();

    useEffect(() => {
        setPathname(router.pathname.split("/")[2]);
    }, []);

    return (
        <aside
            onMouseEnter={() => activateHover()}
            onMouseLeave={() => desativateHover()}
        >
            {menuHeader}

            <MenuLinks hover={hover} pathname={pathname} link={link} />

            <style jsx>{`
                aside {
                    z-index: 100;
                    box-sizing: border-box;
                    display: grid;
                    grid-template-rows: 1fr 2fr;
                    background-color: #3b3b3b;
                    position: fixed;
                    height: 90%;
                    min-height: 415px;
                    max-height: 650px;
                    top: 50%;
                    transform: translateY(-50%);
                    padding: 10px;
                    border-radius: 0 30px 30px 0;
                    box-shadow: 5px 7px 10px 0px #33333377;
                }
            `}</style>
        </aside>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
