import React from 'react'
import Layout from '../../components/empresa/layout/Layout'
import MenuHeaderEmpresa from "../../components/empresa/menu/MenuHeaderEmpresa";
import withAuth from "../../middlewares/withAuth";
import Light from '../../components/light/Light';

const bombillos = () => {
    return (
        <Layout title1="FUNCIONAMIENTO DE" title2="LOS BOMBILLOS" link="/empresa/" menuHeader={<MenuHeaderEmpresa />} >
            <Light />
        </Layout>
    );
}

export default withAuth(bombillos, "b30aa0f2-5fa2-4222-a15f-9f8d19bbb634");
