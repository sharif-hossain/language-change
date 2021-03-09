import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t} = useTranslation();
    return (
        <div>
            {/* <h1>This is : </h1> */}
            <h1>{t('Welcome.1')}</h1>
        </div>
    );
};

export default Home;