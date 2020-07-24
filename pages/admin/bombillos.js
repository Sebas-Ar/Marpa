import React from 'react'
import Layout from '../../components/empresa/layout/Layout'
import withAuth from "../../middlewares/withAuth";
import MenuHeaderAdmin from '../../components/empresa/menu/MenuHeaderAdmin';
import Light from '../../components/light/Light';

const bombillos = () => {
    
    return (
        <Layout title1="FUNCIONAMIENTO DE" title2="LOS BOMBILLOS" link="/admin/" menuHeader={<MenuHeaderAdmin />} >
            <Light />
        </Layout>
    );
}

export default withAuth(bombillos, "b9860076-d8c9-48ab-b98d-628f560c7b85");
