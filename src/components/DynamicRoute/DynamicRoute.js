import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const DynamicRoute = () => {
    const {t} = useTranslation();
    return (
        <div>
            <Navbar/>
            <h2>{t('Thanks.1')}</h2>
            <h3>{t('Why.1')}</h3>
            <Link to="/navigate">{t('Navigation.1')}</Link>
            {/* <p>This is paragraph</p> */}
        </div>
    );
};

export default DynamicRoute;