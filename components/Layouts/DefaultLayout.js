import React from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DefaultLayout = ({children}) => {
    return (
        <div className="wrapper" id="main">
            <Header />
                { children }
            <Footer />
        </div>
    )
}

export default DefaultLayout;