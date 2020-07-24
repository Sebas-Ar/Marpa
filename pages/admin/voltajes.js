import React from 'react'
import Layout from '../../components/empresa/layout/Layout'
import withAuth from '../../middlewares/withAuth';
import Voltajes from '../../components/voltajes/Voltajes'
import MenuHeaderAdmin from '../../components/empresa/menu/MenuHeaderAdmin';

const voltajes = () => {
    return (
        <Layout title1="VOLTAJE BATERÍA &" title2="PANEL" link="/admin/" menuHeader={<MenuHeaderAdmin />} > 
        
            <Voltajes />

        </Layout>
    );
}

export default withAuth(voltajes, "b9860076-d8c9-48ab-b98d-628f560c7b85");
