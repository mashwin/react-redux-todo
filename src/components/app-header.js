import React from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

const AppHeader = () => (
    <div>
        <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">Todo React Application</NavbarBrand>
        </Navbar>
    </div>
)

export default AppHeader;