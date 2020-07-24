import React from 'react'
import Layout from '../../components/empresa/layout/Layout'
import MenuHeaderEmpresa from "../../components/empresa/menu/MenuHeaderEmpresa";
import Voltajes from '../../components/voltajes/Voltajes'
import withAuth from "../../middlewares/withAuth";

const voltajes = () => {
    
    return (
        <Layout title1="VOLTAJE BATERÍA &" title2="PANEL" link="/empresa/" menuHeader={<MenuHeaderEmpresa />}>
            <Voltajes />
        </Layout>
    );
}

export default withAuth(voltajes, "b30aa0f2-5fa2-4222-a15f-9f8d19bbb634")
