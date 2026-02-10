import React from 'react';
import Header from './organisms/Header';
import Footer from './organisms/Footer';

export default function Layout({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
        </div>
    );
}