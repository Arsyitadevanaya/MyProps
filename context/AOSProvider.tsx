'use client';
import AOS from 'aos';

import 'aos/dist/aos.css';
import { Fragment, useEffect } from 'react';

interface AosProviderProps {
    children: React.ReactNode;
}

const AOSProvider: React.FC<AosProviderProps> = ({ children }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return <Fragment>{children}</Fragment>;
};

export default AOSProvider;