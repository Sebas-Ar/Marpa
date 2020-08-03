import React from 'react'
import Layout from '../../components/empresa/layout/Layout'
import MenuHeaderEmpresa from "../../components/empresa/menu/MenuHeaderEmpresa";
import withAuth from "../../middlewares/withAuth";
import Corriente from '../../components/corriente/Corriente';

const corriente = () => {
    return (
        <Layout title1="CORRIENTE DEL" title2="CIRCUITO" link="/empresa/" menuHeader={<MenuHeaderEmpresa />} >
            <Corriente />
        </Layout>
    );
}

export default withAuth(corriente, process.env.USER_TOKEN);
