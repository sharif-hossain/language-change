import React from 'react';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const { t} = useTranslation();
    return (
        <div>
            <Navbar></Navbar>
            <h4>{t('Thanks.1')}</h4>
        </div>
    );
};

export default Navigation;