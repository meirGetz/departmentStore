import {Button} from "react-bootstrap";
import {Link, Outlet} from 'react-router-dom';
import React from 'react';


function HeadButton() {

    return (
        <>
            <ul>
                <li>
                    <Button>
                        <Link to="/products/addproduct" color="primary" style={{ color: 'white', textDecoration: 'none' }}> Add product</Link>
                    </Button>
                    <Button>
                        <Link to="/products/homepage" color="primary" style={{ color: 'white', textDecoration: 'none' }}> Home</Link>
                    </Button>
                </li>
            </ul>

            <Outlet/>
        </>
    )
}

export default HeadButton