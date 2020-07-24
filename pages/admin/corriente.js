import React from 'react'
import Layout from '../../components/empresa/layout/Layout'
import withAuth from "../../middlewares/withAuth";
import MenuHeaderAdmin from '../../components/empresa/menu/MenuHeaderAdmin';
import Corriente from '../../components/corriente/Corriente'
const corriente = () => {
    return (
        <Layout title1="CORRIENTE DEL" title2="CIRCUITO" link="/admin/" menuHeader={<MenuHeaderAdmin />} >
            <Corriente />
        </Layout>
    );
}

export default withAuth(corriente, "b9860076-d8c9-48ab-b98d-628f560c7b85");
