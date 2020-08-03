import React from "react";
import Layout from "../../components/empresa/layout/Layout";
import withAuth from "../../middlewares/withAuth";
import MenuHeaderAdmin from "../../components/empresa/menu/MenuHeaderAdmin";
import RegisterEmpresa from '../../components/register/RegisterEmpresa'

const registrarEmpresa = () => {
    return (
        <Layout title1="REGISTRAR" title2="EMPRESA" link="/admin/" menuHeader={<MenuHeaderAdmin />} >
            <RegisterEmpresa />
        </Layout>
    );
};

export default withAuth(registrarEmpresa, process.env.ADMIN_TOKEN);
