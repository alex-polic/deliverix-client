import React from 'react';
import {Layout} from "../../components/Layout";

const Verification = () => {
    return (
        <Layout title={"Verification status"}>
            <h1>
                Your verification is not approved yet.
            </h1>
            <h2>
                Once our admin team verifies your profile, you will be able
                to access Sellers platform!
            </h2>
        </Layout>
    );
};

export default Verification;