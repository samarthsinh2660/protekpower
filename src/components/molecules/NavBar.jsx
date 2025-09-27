import React from 'react';
import NavLink from '../atoms/NavLink';
import NavDropdown from '../atoms/NavDropDown';
import { productCategories } from '../../app/data/productCategories';

export default function NavBar() {
    return (
        <nav style={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavDropdown title="Products" items={productCategories} />
            <NavLink to="/blog">Blog</NavLink>
            {/* <NavLink to="/contact">Contact</NavLink> */}
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