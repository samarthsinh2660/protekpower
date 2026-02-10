import React from 'react';
import NavLink from '../atoms/NavLink';
import NavDropdown from '../atoms/NavDropDown';

export default function NavBar({ mobile = false, onItemClick = () => {} }) {
    if (mobile) {
        return (
            <nav style={mobileStyles.nav}>
                <NavLink to="/" onClick={onItemClick} style={mobileStyles.navLink}>Home</NavLink>
                <NavLink to="/about" onClick={onItemClick} style={mobileStyles.navLink}>About Us</NavLink>
                <NavDropdown title="Products" items={[]} mobile={true} onItemClick={onItemClick} />
                <NavLink to="/blog" onClick={onItemClick} style={mobileStyles.navLink}>Blog</NavLink>
            </nav>
        );
    }

    return (
        <nav style={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavDropdown title="Products" items={[]} />
            <NavLink to="/blog">Blog</NavLink>
        </nav>
    );
}

const styles = {
    nav: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
    }
};

const mobileStyles = {
    nav: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        alignItems: 'stretch',
        padding: '1rem 0',
    },
    navLink: {
        padding: '1rem 1.5rem',
        borderBottom: '1px solid #eee',
        display: 'block',
        textAlign: 'left',
    }
};